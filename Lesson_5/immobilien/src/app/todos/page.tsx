import ChangeTodoToggle from "@/components/change-todo-toggle";
import { db } from "@/db";
import { todos } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-options";
import { asc, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

//* створюємо функцію getTodosByUserId де будемо фільтрувати ці тудушки по юзеру
async function getTodosByUserId(userId: number) {
  return db.query.todos.findMany({
    where: eq(todos.userId, userId),
    orderBy: asc(todos.createdAt),
  });
}

export default async function TodosPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.id) {
    // throw new Error("Unauthorized");
    redirect("/");
  }

  const todos = await getTodosByUserId(session.user.id);

  return (
    <div>
      <ul className="flex flex-col gap-2 p-4">
        {todos.map((todo) => (
          <li key={todo.id} className="border border-gray-500 rounded-2xl p-2">
            <h3 className="font-bold">{todo.title}</h3>
            <p>{todo.description}</p>
            {/* {todo.status ? "done" : "not done"} */}
            <ChangeTodoToggle todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
