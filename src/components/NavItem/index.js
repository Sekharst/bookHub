//  import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import HeaderContext from '../../context/HeaderContext'
import './index.css'

const NavItem = props => {
  const {navItemDetails, updateActiveNavId} = props
  const {id, displayText, pathText} = navItemDetails

  const onClickNavItem = () => {
    updateActiveNavId(id)
  }

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const navLinkDarkThemeText = isDarkTheme ? 'header-dark-theme-text' : ''

        // eslint-disable-next-line arrow-body-style
        /*
        const navLinkStyles = isActive => {
          return {
            color: isActive ? '#0284c7' : '#64748b',
          }
        }
        */

        return (
          <li className="nav-menu-item" onClick={onClickNavItem}>
            <NavLink
              exact
              to={`/${pathText}`}
              //    style={navLinkStyles}
              //    className={`nav-link ${navLinkDarkThemeText}`}
              className={`nav-link ${navLinkDarkThemeText}`}
            >
              {displayText}
            </NavLink>
          </li>
        )
      }}
    </HeaderContext.Consumer>
  )
}

export default NavItem
