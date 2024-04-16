import { useEffect, useState } from 'react'
import db from '../assets/db.json'
export const useData = () => {
  const [ users, setUsers ] = useState([])
  const [ blogs, setBlogs ] = useState([])
  const [tags, setTags] = useState([])

  useEffect(()=>{
    setUsers(db.users)
    setBlogs(db.blogPosts)
    const tagsSet = new Set();
    db.blogPosts.forEach(post => {
      post.tags.forEach(tag => {
        tagsSet.add(tag);
      });
    });
    const uniqueTags = Array.from(tagsSet);
    setTags(uniqueTags)
  },[])
   
  return {users, blogs, tags}
}