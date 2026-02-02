import { Category } from "@/common/types/Category";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { title } from "process";

async function fetchCategories(id: string): Promise<Category> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
    cache: "force-cache", // default
  });
  if (res.status === 404) notFound();
  return res.json();
}

//* Прописуємо metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Category ${id}`,
    description: `Reading ${id} page`,
  };
}

const CategoriePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const category = await fetchCategories(id);

  return (
    <div>
      <h2>{category.name}</h2>
      <Image
        src={category.image}
        alt={title}
        width={300}
        height={400}
        unoptimized
      />
    </div>
  );
};

export default CategoriePage;
