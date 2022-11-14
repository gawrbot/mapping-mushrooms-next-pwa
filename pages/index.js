import HomeLoggedIn from '../components/HomeLoggedIn';
import HomeLoggedOut from '../components/HomeLoggedOut';
import { getUserBySessionToken } from '../database/users';

export default function Home(props) {
  return (
    <div>
      <main className="my-20 mx-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Mapping Mushrooms and Crows
        </h1>
        <div className="flex justify-center">
          {props.user ? <HomeLoggedIn user={props.user} /> : <HomeLoggedOut />}
        </div>
      </main>
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
