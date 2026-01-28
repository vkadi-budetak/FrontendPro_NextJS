"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateReviewLink() {
  const router = useRouter();
  function handleNavigate() {
    //?  поверне нас на минулу сторінку
    // router.back("/reviews");

    //? якщо потрібно раніше загрузити сторінку
    // router.prefetch("/reviews");

    //? push - повертає назад на одну сторінку
    router.push("/reviews/new");

    //? replace - викине на сторінку і не поврене на ту якій я був(якщо не хочемо повертатися на сторінку переходу)
    // router.replace("/reviews/new");
  }
  return (
    <div>
      {/*  */}
      <button type="button" onClick={handleNavigate}>
        Navigate to reviews
      </button>
      {/* declarative approach */}
      <Link href={"/reviews/new"}>Add review</Link>
    </div>
  );
}
