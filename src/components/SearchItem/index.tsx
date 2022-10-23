import './style.scss'

import search from '../../assets/images/icon_search.svg'

interface ISearchItemProps{
  onChange: (inputValue:string)=>void;
}

function SearchItem({ onChange }:ISearchItemProps){
  return(
  <div className="serachContainer">
    <input 
      type="text" 
      onChange={(inputValue) => onChange(inputValue.target.value)}
    />
    <button className="buttonSearch">
    <img src={search} alt="Serch" />
    </button>
  </div>
  )
}

export default SearchItem