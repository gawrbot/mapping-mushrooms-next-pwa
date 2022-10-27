import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Mapping Mushrooms</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <main className="my-20 mx-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Mapping Mushrooms and Crows
        </h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="flex flex-col mb-4">
            <label
              htmlFor="username"
              className="mb-2 font-bold text-lg text-grey-darkest"
            >
              Username
            </label>
            <input
              id="username"
              className="border py-2 px-3 text-grey-darkest"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="password"
              className="mb-2 font-bold text-lg text-grey-darkest"
            >
              Password
            </label>
            <input
              id="password"
              className="border py-2 px-3 text-grey-darkest"
            />
          </div>
          <button className="block bg-slate-400 hover:bg-slate-600 text-white text-lg mx-auto p-4 rounded">
            Login
          </button>
        </form>
      </main>
    </div>
  );
}
