import { Button, Label, TextInput } from 'flowbite-react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getValidSessionByToken } from '../database/sessions';
import { RegisterResponseBody } from './api/register';

type Props = {
  refreshUserProfile: () => Promise<void>;
};

export default function Register(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function registerHandler() {
    const registerResponse = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: username.toLowerCase(),
        password,
      }),
    });
    const registerResponseBody =
      (await registerResponse.json()) as RegisterResponseBody;

    if ('errors' in registerResponseBody) {
      setErrors(registerResponseBody.errors);
      return console.log(registerResponseBody.errors);
    }

    const returnTo = router.query.returnTo;
    if (
      returnTo &&
      !Array.isArray(returnTo) && // Security: Validate returnTo parameter against valid path
      // (because this is untrusted user input)
      /^\/[a-zA-Z0-9-?=/]*$/.test(returnTo)
    ) {
      return await router.push(returnTo);
    }

    // refresh the user on state
    await props.refreshUserProfile();
    // redirect user to user profile
    await router.push(`/private-profile`);
  }

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register new users" />
      </Head>
      <h1 className="text-2xl mt-5 mb-5 ml-6 font-extrabold">Register</h1>
      {errors.map((error) => {
        return (
          <p className="bg-red text-white p-5" key={error.message}>
            ERROR: {error.message}
          </p>
        );
      })}
      <form
        className="flex flex-col gap-4"
        onSubmit={async (event) => {
          event.preventDefault();
          await registerHandler();
        }}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            required={true}
            value={name}
            onChange={(event) => {
              setName(event.currentTarget.value.toLowerCase());
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="username" />
          </div>
          <TextInput
            id="username"
            required={true}
            value={username}
            onChange={(event) => {
              setUsername(event.currentTarget.value);
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            type="password"
            required={true}
            value={password}
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
          />
        </div>

        <Button type="submit">Login</Button>
      </form>
      {/* <label>
        Name
        <input
          className="border-2 mx-5 rounded-md"
          value={name}
          onChange={(event) => {
            setName(event.currentTarget.value.toLowerCase());
          }}
        />
      </label>
      <br />
      <label>
        Username
        <input
          className="border-2 mx-5 rounded-md"
          value={username}
          onChange={(event) => {
            setUsername(event.currentTarget.value.toLowerCase());
          }}
        />
      </label>
      <br />
      <label>
        Password
        <input
          type="password"
          className="border-2 mx-5 rounded-md"
          value={password}
          onChange={(event) => {
            setPassword(event.currentTarget.value);
          }}
        />
      </label>
      <button
        className="bg-slate-700 rounded-md text-white py-1 px-3 mt-5 text-center"
        onClick={async () => {
          await registerHandler();
        }}
      >
        Register
      </button>
      <Link
        className="bg-slate-500 rounded-md text-white py-1 px-3 my-3 text-center"
        href="/"
      >
        Back to home
      </Link> */}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = context.req.cookies.sessionToken;

  if (token && (await getValidSessionByToken(token))) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}
