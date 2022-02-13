import React, {useRef} from 'react'

function Search({onSearch}) {
  const searchElement = useRef(null);

  return (
    <div>
      <input 
        ref={searchElement}
        type="text" 
        placeholder='Search...' 
        onChange={() => onSearch(searchElement.current.value)}></input>
    </div>
  )
}

export default Search