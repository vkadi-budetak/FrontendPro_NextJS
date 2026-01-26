import { Category } from "@/common/types/Category";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

async function fetchCategories(): Promise<Category[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    cache: "no-store",
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    const err = await res.json();
    const { message } = err;
    throw new Error(message);
  }

  return res.json();
}

export default async function CategoriesPage() {
  const categories = await fetchCategories();
  return (
    <section>
      <h2>CategoriesPage</h2>

      <ul className="grid grid-cols-1 md:grid-cols-3">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              {/* Вірний ШЛЯХ на іншу сотрінку */}
              <Link href={`/categories/${category.id}`}>
                <h2>{category.name}</h2>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={400}
                  unoptimized
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

//! наш API - https://api.escuelajs.co/api/v1/categories
