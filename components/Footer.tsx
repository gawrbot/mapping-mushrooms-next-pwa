import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[#95b0b6] text-[#324b50] font-bold py-2">
      <p>
        <Link href="https://github.com/gawrbot">
          © <span className="decoration-solid underline">Gawr Ltd.</span>
        </Link>
      </p>
      <p className="font-light">
        This is a student project{' '}
        <Link href="https://upleveled.io/">
          @<span className="decoration-solid underline">upLeveled</span>
        </Link>
      </p>
    </footer>
  );
}
