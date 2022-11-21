import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getUserBySessionToken } from '../database/users';

export default function Home() {
  return (
    <div className="pt-20 bg-[#95b0b6]">
      <Head>
        <title>Crows & Mushrooms</title>
        <meta name="description" content="Mapping the stars of two kingdoms" />
      </Head>
      <div className="flex h-[80vh] lg:flex-row flex-col items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 lg:w-2/3 w-full mx-auto">
        <img
          className="object-cover max-h-[100%] rounded-lg w-1/2"
          src="/crow_mushroom_c_maxie_samson.jpg"
          alt="illustration of crows and mushrooms on a tree stub by maxie samson"
        />
        <div className="flex flex-col justify-between p-4 leading-normal vh-100 max-h-[100vh] overflow-y-scroll lg:overflow-y-visible">
          <h1 className="text-4xl font-rubik tracking-tight text-black">
            True Aces of Survival
          </h1>
          <p className="mt-2">
            Crows and Mushrooms are two of the most fascinating groups of
            creatures there are. At first glance they don't share much, they are
            not even part of the same biological kingdoms (fungi vs. animals).
          </p>
          <p className="mt-2">
            But they do share the ability to adapt to new situations - like
            building their own tools (crows) or even profiting from climate
            change (mushrooms).{' '}
          </p>
          <p className="mt-2">
            That's what this application is all about: observing where they show
            up, what they do and who the form alliances with.
          </p>
          <p className="font-bold text-center mt-3">Getting started:</p>
          <div className="flex mt-3 space-x-5 justify-center">
            <Link href="/register">
              <span className="bg-[#7d4d2b] rounded-md text-md text-white px-2 py-2 my-2 text-center">
                Register
              </span>
            </Link>
            <Link href="/login">
              <span className="bg-[#7d4d2b] rounded-md text-md text-white px-2 py-2 my-2 text-center">
                Login
              </span>
            </Link>
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
      props: {},
    };
  }

  return {
    props: { user: user },
  };
}
