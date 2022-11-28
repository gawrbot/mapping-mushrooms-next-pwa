import { FileInput, Label, Select, Textarea } from 'flowbite-react';
import { GetServerSidePropsContext } from 'next';
import { CldImage } from 'next-cloudinary';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Article, getAllArticles } from '../database/articles';
import { getUserBySessionToken } from '../database/users';
import { getParsedCookie } from '../utils/cookies';

type Props = {
  user: { id: number; username: string };
  articles: Article[];
};

export default function Upload(props: Props) {
  const [image, setImage] = useState();
  const [note, setNote] = useState('');
  const [articlesId, setArticlesId] = useState(Number);
  const router = useRouter();

  const locationCookie = getParsedCookie('currentLocation');

  const uploadImage = async (event: any) => {
    const file = event.target.files;

    const formData = new FormData();
    formData.append('file', file[0]);
    formData.append('upload_preset', 'mushrooms-crows');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dvobwyzci/image/upload',
      {
        method: 'POST',
        body: formData,
      },
    );
    const responseFile = await res.json();
    setImage(responseFile.secure_url);
  };

  // Save image & Location to images table

  async function uploadToDatabaseHandler() {
    const databaseResponse = await fetch('/api/images', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        image: image,
        longitude: locationCookie?.[0]?.longitude,
        latitude: locationCookie?.[0]?.latitude,
        userId: props.user.id,
        userName: props.user.username,
        note: note,
        articlesId: articlesId,
      }),
    });
    const databaseResponseBody = await databaseResponse.json();
    console.log(databaseResponseBody);
    await router.push('/private-profile');
  }

  return (
    <div className="pt-20 bg-[#95b0b6]">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await uploadToDatabaseHandler();
        }}
        className="lg:w-1/3 mx-auto"
      >
        <Label htmlFor="file" value="Upload file" />
        <FileInput id="file" required={true} onChange={uploadImage} />
        {typeof image !== 'undefined' ? (
          <CldImage
            width="100"
            height="100"
            src={image}
            sizes="100vw"
            alt="current image upload"
          />
        ) : null}
        <Label htmlFor="articles" value="Select an article" />
        <Select
          id="articles"
          // defaultValue=""
          value={articlesId}
          onChange={(event) => {
            setArticlesId(Number(event.currentTarget.value));
          }}
        >
          <option value="" hidden>
            Select an article
          </option>

          {props.articles.map((article) => (
            <option key={article.id} value={article.id}>
              {article.title}
            </option>
          ))}
        </Select>

        <Label htmlFor="note" value="Comment" />

        <Textarea
          id="note"
          placeholder="Leave a comment..."
          rows={4}
          value={note}
          onChange={(event) => {
            setNote(event.currentTarget.value);
          }}
        />

        <button
          className="bg-[#7d4d2b] rounded-md text-lg text-white px-2 py-2 my-2 text-center"
          // onClick={uploadToDatabaseHandler}
        >
          Confirm upload
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = context.req.cookies.sessionToken;

  const user = token && (await getUserBySessionToken(token));

  if (!user) {
    return {
      redirect: {
        destination: '/login?returnTo=/upload',
        permanent: false,
      },
    };
  }

  const articles = await getAllArticles();

  return {
    props: { user, articles },
  };
}
