import PropTypes from 'prop-types'
export function ButtonTags({value,label}){
  function handleClick(event){
    console.log(event.target.value)
  }
  return(
    <button value={value} onClick={handleClick} className="className=' bg-white-950 text-white-50 p-2 px-4 rounded-3xl cursor-pointer focus:bg-white-100 focus:text-white-950">{label}</button>
  )
}

ButtonTags.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};