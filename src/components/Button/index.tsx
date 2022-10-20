import './style.scss'

interface LabeledValue {
  onClick: any;
  children: any;
}
function Button({onClick, children}: LabeledValue){
  return(
    <>
      <button className='btn' onClick={onClick}>
        {children}
      </button>
    </>
  )
}

export default Button