import { TagsInput } from "./sub/TagsInput";

export function CreateBlog(){
  return(
    <div className="flex justify-center">
      <form action="" className="flex flex-col gap-4">
        <input type="title" placeholder="title" />
        <textarea name="contentBlog" cols="100" rows="20"></textarea>
        <TagsInput/>
      </form>
    </div>
  )
}