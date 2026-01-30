"use client";

import changeTodoStatus from "@/app/actions/change-todo-status";
import { Badge, BadgeCheck, Loader } from "lucide-react";
import { useTransition } from "react";

interface Todo {
  id: number;
  title: string;
  createdAt: Date;
  description: string;
  status: boolean | null;
  userId: number;
}

export default function ChangeTodoToggle({ todo }: { todo: Todo }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      type="button"
      onClick={
        () =>
          startTransition(() => {
            changeTodoStatus(todo.id);
          })

        //*  await new Promise((res) => setTimeout(res, 300)); - прописали невелику затримку для обновлення
        //   onClick={() =>
        //     startTransition(async () => {
        //       await new Promise((res) => setTimeout(res, 300));
        //       changeTodoStatus(todo.id);
        //     })
      }
    >
      {isPending ? (
        //! використовуємо бібліотеку lucide (BadgeCheck і Badge)
        <Loader />
      ) : todo.status ? (
        <BadgeCheck color="#55aa7a" />
      ) : (
        <Badge color="#dd9292" />
      )}
    </button>
  );
}
