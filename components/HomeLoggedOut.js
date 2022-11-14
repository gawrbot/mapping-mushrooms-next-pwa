import Link from 'next/link';

export default function HomeLoggedOut() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        className="bg-slate-500 rounded-md text-white py-1 px-3 my-3 text-center"
        href="/login"
      >
        Login
      </Link>
      <Link
        className="bg-slate-500 rounded-md text-white py-1 px-3 my-3 text-center"
        href="/register"
      >
        Register
      </Link>
      <Link
        className="bg-slate-500 rounded-md text-white py-1 px-3 my-3 text-center"
        href="/about"
      >
        About
      </Link>
    </div>
  );
}
