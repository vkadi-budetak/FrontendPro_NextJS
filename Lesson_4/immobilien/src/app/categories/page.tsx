import { Category } from "@/common/types/Category";
import CategoriesCard from "@/components/categories-card";

async function fetchCategories(): Promise<Category[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    cache: "force-cache", // default
  });
  return res.json();
}

export default async function CategoriesPage() {
  const categories = await fetchCategories();
  return (
    <section>
      <h2>CategoriesPage</h2>
      <ul>
        {categories.map((categorie) => (
          <li key={categorie.id}>
            <CategoriesCard {...categorie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

//! наш API - https://api.escuelajs.co/api/v1/categories
