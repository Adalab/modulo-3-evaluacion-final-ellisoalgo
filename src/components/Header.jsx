import Logo from '../images/Rick_and_Morty_logo.svg'
import '../styles/Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt="" className='header_logo'/>

    </header>
  )
}

export default Header