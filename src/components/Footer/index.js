import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'
import HeaderContext from '../../context/HeaderContext'

const Footer = () => (
  <HeaderContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const footerDarkText = isDarkTheme ? 'footer-dark-text' : ''

      return (
        <div className="footer-container">
          <div className="icons-container">
            <button type="button" className="footer-icon-button">
              <FaGoogle className={`footer-icon ${footerDarkText}`} />
            </button>
            <button type="button" className="footer-icon-button">
              <FaTwitter className={`footer-icon ${footerDarkText}`} />
            </button>
            <button type="button" className="footer-icon-button">
              <FaInstagram className={`footer-icon ${footerDarkText}`} />
            </button>
            <button type="button" className="footer-icon-button">
              <FaYoutube className={`footer-icon ${footerDarkText}`} />
            </button>
          </div>
          <p className={`contact-us-text ${footerDarkText}`}>Contact us</p>
        </div>
      )
    }}
  </HeaderContext.Consumer>
)

export default Footer
