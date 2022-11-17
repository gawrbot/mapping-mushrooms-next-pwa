import Head from 'next/head';
import { getUserBySessionToken } from '../database/users';

export default function Home() {
  return (
    <div className="pt-20 bg-[#95b0b6]">
      <Head>
        <title>Home</title>
        <meta name="description" content="Home including About" />
      </Head>
      <div className="flex h-[80vh] lg:flex-row flex-col items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 w-2/3 mx-auto">
        <img
          className=" object-cover max-h-[100%] rounded-lg w-1/2"
          src="/crow_mushroom_c_maxie_samson.jpg"
          alt="illustration of crows and mushrooms on a stone by maxie samson"
        />
        <div className="flex flex-col justify-between p-4 leading-normal vh-100 max-h-[100%] ">
          <h1 className="text-2xl font-bold tracking-tight text-black">
            Welcome
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
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
