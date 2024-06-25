import { useEffect, useState } from 'react'
import db from '../assets/db.json'
export const useData = () => {
  const [users, setUsers] = useState([])
  const [blogs, setBlogs] = useState([])
  const [tags, setTags] = useState([])

  const get_blogs = async () => {
    try {
      const response = await fetch('http://localhost:8080/api');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error;
    }
  };



  useEffect(() => {
    setUsers(db.users)
    get_blogs().then(data => setBlogs(data))
    // setBlogs(db.blogPosts)
    const tagsSet = new Set();
    db.blogPosts.forEach(post => {
      post.tags.forEach(tag => {
        tagsSet.add(tag);
      });
    });
    const uniqueTags = Array.from(tagsSet);
    setTags(uniqueTags)
  }, [])

  return { users, blogs, tags }
}
