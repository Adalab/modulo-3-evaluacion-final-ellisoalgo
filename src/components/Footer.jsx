import '../styles/Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="https://github.com/Adalab/modulo-3-evaluacion-final-ellisoalgo" target='_blank' className='footer_link'>Check out my code</Link>
      <Link to="https://www.linkedin.com/in/elliswhitney/" target='_blank' className='footer_link'>Pay me to make stuff</Link>
      <Link to="mailto:ellisjwhitney@gmail.com" target='_blank' className='footer_link'>Slide into my DMs</Link>
    </footer>
  )
}

export default Footer