import './style.scss'

import search from '../../assets/images/icon_search.svg'


function SearchItem(){
  return(
  <div className="serachContainer">
    <input type="text" />
    <button className="buttonSearch">
    <img src={search} alt="Serch" />
    </button>
  </div>
  )
}

export default SearchItem