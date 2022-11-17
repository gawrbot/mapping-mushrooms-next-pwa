import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
        <h1 className="text-2xl mt-5 mb-5 ml-6 font-extrabold">
          No access - please register or log in
        </h1>
      </>
    );
  }

  return (
    <div className="pt-16 bg-[#95b0b6]">
      <Head>
        <title>Personal Information</title>
        <meta name="description" content="Uploads and Profile Info" />
      </Head>
      <h1 className="text-2xl mt-5 mb-5 ml-6 font-extrabold">
        Private Profile
      </h1>
      <div className="flex lg:flex-row flex-col ">
        <div className="bg-[#7d4d2b] p-6 rounded-md lg:w-2/3 lg:mr-5 mb-5">
          <h2 className="text-xl text-white font-bold border-b-2 border-white">
            Uploads
          </h2>
          <div className="container py-10">
            <div className="flex flex-wrap -m-4">
              {props.images?.map((image) => {
                return (
                  <div
                    key={image.image}
                    className="lg:w-1/3 p-4 w-full flex flex-col items-center"
                  >
                    <Link href={`/profile/${props.user?.username}/${image.id}`}>
                      <Image
                        className="object-none block aspect-square rounded-lg"
                        alt={`an image in the gallery of ${props.user?.username}'s profile`}
                        src={image.image}
                        width={250}
                        height={250}
                      />
                    </Link>

                    <p className="font-normal text-white text-xs mt-2">
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
                      className="bg-[#95b0b6] rounded-md text-black text-xs px-2 py-1 my-2 text-center "
                    >
                      Delete this image
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-[#7d4d2b] text-white p-6 rounded-md lg:w-1/3 mb-5">
          <h2 className="text-xl font-bold border-b-2 border-white">About</h2>
          <div className="container py-10">
            <p>{props.user.username}</p>
          </div>
        </div>
      </div>
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

  const userId = user.id;

  const images = await getImagesByUserId(userId);

  return {
    props: { user, images: JSON.parse(JSON.stringify(images)) },
  };
}
