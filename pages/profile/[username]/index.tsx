import { GetServerSidePropsContext } from 'next';
import { CldImage } from 'next-cloudinary';
import Head from 'next/head';
import Link from 'next/link';
import { getImagesByUserId, ImageType } from '../../../database/images';
import { getUserByUsername, User } from '../../../database/users';

type Props = {
  user?: User;
  images?: ImageType[];
};

export default function UserProfile(props: Props) {
  if (!props.user) {
    return (
      <>
        <Head>
          <title>User not found</title>
          <meta name="description" content="User not found" />
        </Head>
        <h1 className="text-2xl mt-5 ml-6 font-bold">404 - User not found</h1>
      </>
    );
  }

  return (
    <div className="pt-16 bg-[#95b0b6]">
      <Head>
        <title>{props.user.username}s Public Profile</title>
        <meta
          name="description"
          content={`${props.user.username} Public profile`}
        />
      </Head>
      <h1 className="text-2xl mt-5 mb-5 ml-6 font-extrabold">
        {props.user.username}s Public Profile
      </h1>
      <div className="flex lg:flex-row flex-col">
        <div className="bg-[#7d4d2b] p-6 rounded-md lg:w-2/3 lg:mr-5 mb-5">
          <h2 className="text-xl text-white font-bold border-b-2 border-white">
            Uploads by {props.user.username}
          </h2>
          <div className="container py-10">
            <div className="flex flex-wrap -m-4">
              {props.images?.map((image) => {
                return (
                  <div
                    key={image.image}
                    className="lg:w-1/4 p-4 w-full flex flex-col items-center"
                  >
                    <Link href={`${props.user?.username}/${image.id}`}>
                      <CldImage
                        className="lg:object-contain object-none block aspect-square rounded-lg"
                        width="200"
                        height="200"
                        src={image.image.slice(50)}
                        sizes="100vw"
                        alt={`an image in the gallery of ${props.user?.username}s public profile`}
                      />
                    </Link>
                    <p className="font-normal text-white text-xs mt-2">
                      Uploaded on {image.date.toString().slice(0, 10)} at{' '}
                      {image.time}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-[#7d4d2b] text-white p-6 rounded-md lg:w-1/3 mb-5">
          <h2 className="text-xl font-bold border-b-2 border-white">About</h2>
          <div className="container py-10">
            <p>Id: {props.user.id}</p>
            <p>Username: {props.user.username}</p>
          </div>
        </div>
      </div>
      {/*
      <p>Id: {props.user.id}</p>
      <p>Username: {props.user.username}</p>
      <h2>{props.user.username}s Image Uploads</h2>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {props.images?.map((image) => {
            return (
              <div key={image.image} className="lg:w-1/5 p-4 w-1/2">
                <Link href={`${props.user?.username}/${image.id}`}>
                  <CldImage
                    className="object-contain max-h-[100%] rounded-lg lg:w-1/3 w-2/3"
                    width="200"
                    height="200"
                    src={image.image.slice(50)}
                    sizes="100vw"
                    alt={`an image in the gallery of ${props.user?.username}s public profile`}
                  />
                </Link>
                <p className="font-normal">
                  Uploaded on {image.date.toString().slice(0, 10)} at{' '}
                  {image.time}
                </p>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Retrieve the username from the URL
  const username = context.query.username as string;

  const user = await getUserByUsername(username.toLowerCase());

  if (!user) {
    context.res.statusCode = 404;
    return { props: {} };
  }

  const userId = user.id;

  const images = await getImagesByUserId(userId);

  return {
    props: { user, images: JSON.parse(JSON.stringify(images)) },
  };
}
