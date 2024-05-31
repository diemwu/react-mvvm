import Image from "next/image";
import Link from "next/link";
import UserInformation from "./components/UserInformation/UserInformation";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="pages/auth/login">Login</Link>
      <UserInformation />
    </main>
  );
}
