import { useState } from "react"

export function TagsInput(){
  const [addTags, setAddTags ] = useState([])
  const [inputValue, setInputValue] = useState('')



  const handleChange = (e)=>{
    setInputValue(e.target.value)
  }
  const handleKeyDown = (e)=>{
    if(e.key === 'Enter' && inputValue !== ''){
      setAddTags([...addTags,inputValue])
      setInputValue('')
    }
  }

  const removeTag = (index)=>{
    const newtags = [...addTags]
    newtags.splice(index,1)
    setAddTags(newtags)
  }
  return(
    <>
      <input type="text" placeholder="press enter to add a new tag" onChange={handleChange} value={inputValue} onKeyDown={handleKeyDown}/>
      <div>
        <ul className="w-full flex flex-wrap gap-2 bg-white-50 rounded-2xl p-4">
          {addTags.map((tag,index)=>(
            <li key={index} className="flex gap-4 py-1 px-4 bg-white-900 text-white-50 rounded-3xl">
              {tag}
              <input type="button" value="X" onClick={()=> removeTag(index)} className="cursor-pointer"/>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}