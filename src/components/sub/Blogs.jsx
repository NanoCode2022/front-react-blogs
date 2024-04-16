import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'
export function Blogs({blogs, users}){
  const navigate = useNavigate()

  function truncate(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  }

  const username = (blog)=>{
    return users.find(user => user.id === blog.authorId)?.username
  }

  const navigateBlog = (data)=>{
      const usernameValue = username(data);
      navigate(`/blog/${data.id}`, { state: { data, username: usernameValue } });
  }
  return(
    <div className='flex fler-row flex-wrap gap-16 justify-center lg:justify-normal lg:ml-14 mb-24'>{blogs.map( blog =>(
      <div key={blog.id} onClick={()=> navigateBlog(blog)} className=' w-full sm:w-96 h-44 flex flex-col justify-between shadow-lg px-2 rounded-md text-white-800 cursor-pointer hover:shadow-xl'>
        <p className='text-end mr-10 text-sm'>@{username(blog)}</p>
        <h3 className='font-semibold'>{blog.title}</h3>
        <p className='text-center'>{truncate(blog.content, 100)}</p>
            <p className='text-end'>{blog.date}</p>
      </div>
    ))}</div>
  )
}



Blogs.propTypes = {
  blogs: PropTypes.array,
  users: PropTypes.array, // Puedes definir el PropTypes para 'users' según tus necesidades
};