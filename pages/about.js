import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>About</title>
        <meta name="description" content="About the app" />
      </Head>
      <h1 className="text-2xl mt-8 mb-10 font-bold text-center">About</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="flex justify-center">
        <Link
          className="bg-slate-500 rounded-md text-white py-1 px-3 my-3 text-center items-center"
          href="/"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
