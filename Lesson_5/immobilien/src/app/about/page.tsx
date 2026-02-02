import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Immobilien is copy of real Immobilien, but in fact it is application to learn next js",
};

export default function About() {
  return (
    <section>
      <h2>About</h2>

      <Link href="/about/me">Learn more about developer</Link>
    </section>
  );
}
