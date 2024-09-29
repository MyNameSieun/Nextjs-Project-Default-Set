import Link from "next/link";
import SignInOutButton from "../common/SignInOutButton";

const Header = () => {
  return (
    <header className="flex justify-between p-4 border">
      <section>
        <Link href="/home">Logo</Link>
      </section>
      <nav className="flex gap-8">
        <Link href="/home">Home</Link>
        <Link href="/todo/my">My Todo</Link>
        <Link href="/todo/new">New Todo</Link>
      </nav>
      <section>
        <SignInOutButton />
      </section>
    </header>
  );
};

export default Header;
