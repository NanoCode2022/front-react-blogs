import { TagsInput } from "./sub/TagsInput";

export function CreateBlog() {
  return (
    <div className="flex justify-center mx-4">
      <form action="" className="lg:w-1/2 w-full flex flex-col gap-4">
        <input type="title" placeholder="title" className="text-3xl p-2 font-bold" />
        <textarea name="contentBlog" cols="100" rows="20" className="p-2"></textarea>
        <TagsInput />
      </form>
    </div>
  )
}
