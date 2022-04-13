import PropType from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header= ({title,onAdd, showAdd}) => {
 const location = useLocation() 
  
  return (
    <header className='header'>

<h1 >{title}</h1>

     {location.pathname === '/' &&<Button 
     color={showAdd ? 'red':'green'}
     text={showAdd?'Close':'Add'}
      onClick={onAdd}/>}
    </header>
  )
}

//css in js
//const headingstyle ={
   // color:'blue',
   // backgroundColor:'black',
//}
Header.defaultProps ={
    title : 'Task Tracker',
}
Header.propTypes = {
  title : PropType.string.isRequired,
}

export default Header