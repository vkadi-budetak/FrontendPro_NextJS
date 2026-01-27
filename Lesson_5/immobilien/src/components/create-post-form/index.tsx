import { createPost } from "@/app/actions/create-post";
import { Button } from "../ui/button";

export default function CreatePostForm() {
  return (
    <div className="bg-gray-300 rounded-2xl p-8 max-w-100 my-8">
      <h2 className="font-bold text-3xl">Add post</h2>

      {/* щоб працювало через сервер ств папку actions і робимо серверну дію */}
      <form action={createPost} className="flex flex-col gap-4">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" className="border rounded" />

        <label htmlFor="text">Text</label>
        <input type="text" name="text" id="text" className="border rounded" />

        {/* Використаэмо кнопку із shadcn */}
        <Button variant="outline" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}
