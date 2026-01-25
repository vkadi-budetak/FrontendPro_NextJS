import { Category } from "@/common/types/Category";
import Link from "next/link";
import { FC } from "react";

const CategoriesCard: FC<Category> = (category) => {
  const { id, name } = category;
  return (
    <div>
      <h3>
        <Link href={`/categories/${id}`}>{name}</Link>
      </h3>
    </div>
  );
};

export default CategoriesCard;
