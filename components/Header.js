import { Navbar } from 'flowbite-react';

export default function Header(props) {
  return (
    <Navbar
      className="bg-[#324b50] fixed top-0 left-0 w-full mb-2"
      fluid={true}
      rounded={false}
    >
      <Navbar.Brand href="/">
        <span className="self-center lg:text-4xl text-3xl text-center text-white font-rubik lg:pl-3 hidden lg:flex lg:ml-6">
          Mapping Mushrooms ... and Crows
        </span>
      </Navbar.Brand>
      <Navbar.Brand href="/">
        <span className="text-xl text-white font-rubik lg:hidden flex flex-col">
          Mushrooms & Crows
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="font-amiko lg:text-lg text-white font-extrabold pr-5">
        <Navbar.Link href="/">
          <span className="text-white text-lg">Home</span>
        </Navbar.Link>
        {props.user ? (
          <div className="flex lg:space-x-8 lg:flex-row md:space-x-3 md:flex-row flex-col text-white">
            <Navbar.Link href="/map">
              <span className="text-white text-lg">Map</span>
            </Navbar.Link>
            <Navbar.Link href="/lexicon">
              <span className="text-white text-lg">Lexicon</span>
            </Navbar.Link>
            <Navbar.Link href="/private-profile">
              <span className="text-white text-lg">Profile</span>
            </Navbar.Link>
            <Navbar.Link href="/logout">
              <span className="text-white text-lg">Logout</span>
            </Navbar.Link>
          </div>
        ) : (
          <div className="flex lg:space-x-8 lg:flex-row md:flex-row flex-col text-white">
            <Navbar.Link href="/register">
              <span className="text-white text-lg">Register</span>
            </Navbar.Link>
            <Navbar.Link href="/login">
              <span className="text-white text-lg">Login</span>
            </Navbar.Link>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
