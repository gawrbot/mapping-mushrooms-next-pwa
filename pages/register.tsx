import { Button, Card, Label, TextInput } from 'flowbite-react';
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
    <div className="pt-20 bg-[#95b0b6]">
      <Head>
        <title>Register</title>
        <meta name="description" content="Register new users" />
      </Head>
      <Card className="lg:w-1/3 mx-auto">
        <h1 className="text-2xl font-extrabold">Register</h1>
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
          <button className="bg-[#7d4d2b] rounded-md text-lg text-white px-2 py-2 my-2 text-center">
            Register
          </button>
          {/* <Button type="submit">Login</Button> */}
        </form>
      </Card>
    </div>
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
