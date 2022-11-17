import { Button, FileInput, Label, Select, Textarea } from 'flowbite-react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Article, getAllArticles } from '../database/articles';
import { getUserBySessionToken } from '../database/users';
import { getParsedCookie } from '../utils/cookies';

// austauschen: https://flowbite-react.com/modal

type Props = {
  user: { id: number; username: string };
  articles: Article[];
};

export default function Upload(props: Props) {
  const [image, setImage] = useState();
  const [note, setNote] = useState('');
  const [articleId, setArticleId] = useState(Number);
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
        articleId: articleId,
      }),
    });
    const databaseResponseBody = await databaseResponse.json();
    console.log(databaseResponseBody);
    await router.push('/private-profile');
  }

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await uploadToDatabaseHandler();
        }}
      >
        <Label htmlFor="file" value="Upload file" />
        <FileInput id="file" required={true} onChange={uploadImage} />
        {typeof image !== 'undefined' ? (
          <Image
            alt="current image upload"
            src={image}
            width={100}
            height={100}
          />
        ) : null}
        <Label
          htmlFor="articles"
          value="Select a mushroom or a crow (optional)"
        />
        <Select
          id="articles"
          // defaultValue=""
          value={articleId}
          onChange={(event) => {
            setArticleId(Number(event.currentTarget.value));
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

        <Button onClick={uploadToDatabaseHandler}>Confirm upload</Button>
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
        destination: '/login?returnTo=/private-profile',
        permanent: false,
      },
    };
  }

  const articles = await getAllArticles();

  return {
    props: { user, articles },
  };
}
