import PropTypes from 'prop-types'
import { ButtonTags } from './ButtonTags'
export function Tags({tags}){
  return(
    <div className=' flex flex-row flex-wrap gap-2 lg:gap-4 ml-8 mb-10'>{tags.map((tag)=>(
      <ButtonTags value={tag} key={tag} label={tag}/>
    ))}</div>
  )
}

Tags.propTypes = {
  tags: PropTypes.array
}