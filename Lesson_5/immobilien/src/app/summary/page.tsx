import Link from "next/link";

export default function Summary() {
  return (
    <section>
      <h2>Summary</h2>

      <Link href="/summary/me">Detailed summary about...</Link>
    </section>
  );
}
