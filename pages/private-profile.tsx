import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Anchor from '../components/Anchor';
import { getImagesByUserId, ImageType } from '../database/images';
import { getUserBySessionToken, User } from '../database/users';

type Props = {
  user?: User;
  images?: ImageType[];
};

export default function PrivateProfile(props: Props) {
  const router = useRouter();
  if (!props.user) {
    return (
      <>
        <Head>
          <title>No access - please register or log in</title>
          <meta
            name="description"
            content="No access, register or login required"
          />
        </Head>
        <h1>No access - please register or log in</h1>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Personal Information</title>
        <meta name="description" content="Biography of the person" />
      </Head>
      <h1 className="text-2xl mt-8 mb-5 font-bold">
        {props.user.username}s Profile
      </h1>
      <h2 className="text-xl font-bold">Image Archive</h2>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {props.images?.map((image) => {
            return (
              <div key={image.image} className="lg:w-1/3 p-4 w-1/2">
                <Link href={`/profile/${props.user?.username}/${image.id}`}>
                  <Image
                    className="object-cover object-center w-full h-full block"
                    alt={`an image in the gallery of ${props.user?.username}'s profile`}
                    src={image.image}
                    width={250}
                    height={250}
                  />
                </Link>
                <p className="font-normal text-xs">
                  (Uploaded on {image.date.toString().slice(0, 10)} at{' '}
                  {image.time})
                </p>
                <button
                  onClick={async () => {
                    await fetch(`api/images/${image.id}`, {
                      method: 'DELETE',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ id: image.id }),
                    });
                    router.push('/private-profile').catch(() => {});
                  }}
                  className="bg-red-600 rounded-md text-white py px-2 my-3 text-center"
                >
                  Delete this image
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <hr />
      <Anchor
        className="bg-slate-700 rounded-md text-white py-1 px-3 my-3 text-center"
        href="/logout"
      >
        Logout
      </Anchor>
    </>
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

  const userId = user.id;

  const images = await getImagesByUserId(userId);

  return {
    props: { user, images: JSON.parse(JSON.stringify(images)) },
  };
}
