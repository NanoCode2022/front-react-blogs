import { useData } from "../hooks/useData";
import { Head } from "./Head";
import { Blogs } from "./sub/Blogs";
import { Tags } from "./sub/Tags";

export function Home(){
  const {users, blogs, tags} = useData()
  return (
    <>
    <header>
      <Head/>
    </header> 
    <main className="flex justify-center flex-col">
      <Tags tags={tags}/>
      <Blogs blogs={blogs} users={users}/>
    </main>
    </>
  );
}
