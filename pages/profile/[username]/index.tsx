import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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
    <>
      <Head>
        <title>{props.user.username}s Public Profile</title>
        <meta
          name="description"
          content={`${props.user.username} Public profile`}
        />
      </Head>
      <h1 className="text-2xl mt-5 ml-6 font-bold">
        {props.user.username}s Public Profile
      </h1>
      <p>Id: {props.user.id}</p>
      <p>Username: {props.user.username}</p>
      <h2>{props.user.username}s Image Uploads</h2>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {props.images?.map((image) => {
            return (
              <div key={image.image} className="lg:w-1/5 p-4 w-1/2">
                <Link href={`${props.user?.username}/${image.id}`}>
                  <Image
                    className="object-cover object-center block"
                    alt={`an image in the gallery of ${props.user?.username}s public profile`}
                    src={image.image}
                    width={100}
                    height={100}
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
      </div>
    </>
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
