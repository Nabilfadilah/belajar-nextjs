import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/">
            <Image alt="logo" src="vercel.svg" width={30} height={30} />
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
