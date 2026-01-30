import Link from "next/link";
import SignInSignOut from "../sign-in-sign-out";
import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import { authorizedLinks, links } from "./links";

const generalLinks = links.map(({ href, text }) => (
  <Link key={href} href={href} className="text-blue-700 hover:text-amber-600">
    {text}
  </Link>
));

const navigationLinksAuthirized = authorizedLinks.map(({ href, text }) => (
  <Link key={href} href={href} className="text-blue-700 hover:text-amber-600">
    {text}
  </Link>
));

export default async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="w-full flex justify-center gap-2 my-4">
      {generalLinks}

      {/* Показуватиме тільки для зареєстрованих користувачів */}
      {session && navigationLinksAuthirized}

      <SignInSignOut />
    </nav>
  );
}
