import Link from 'next/link';
import Anchor from './Anchor';

export default function HomeLoggedIn(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>
        Logged in as <Link href="/private-profile">{props.user.username}</Link>
      </p>
      <Link
        className="bg-slate-500 rounded-md text-white py-1 px-3 my-5"
        href="/private-profile"
      >
        My Profile
      </Link>
      <Anchor
        className="bg-slate-500 rounded-md text-white py-1 px-3 my-5"
        href="/logout"
      >
        Logout
      </Anchor>
    </div>
  );
}
