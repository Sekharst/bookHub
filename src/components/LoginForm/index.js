import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    showPassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleCheckbox = event => {
    this.setState({
      showPassword: event.target.checked,
    })
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.loginSuccess(data.jwt_token)
      this.setState({username: '', password: ''})
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input_label" htmlFor="username">
          Username*
        </label>
        <input
          type="text"
          id="username"
          className="username_input_field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const fieldType = showPassword ? 'text' : 'password'
    return (
      <>
        <label className="input_label" htmlFor="password">
          Password*
        </label>
        <input
          className="password_input_field"
          value={password}
          id="password"
          type={fieldType}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderCheckbox = () => (
    <div className="checkbox_input_container">
      <input
        id="checkboxInput"
        type="checkbox"
        className="checkbox_input_field"
        onChange={this.onToggleCheckbox}
      />
      <label className="input_label checkbox_label" htmlFor="checkboxInput">
        Show Password
      </label>
    </div>
  )

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <>
        <div className="login_form_container">
          <div className="login_desktop_img_container">
            <img
              className="login_desktop_img"
              src="https://res.cloudinary.com/dqg2t6li6/image/upload/v1665834972/Rectangle_1467_fi3qve.jpg"
              alt=""
            />
          </div>
          <div className="form_container">
            <img
              className="login_mobile_img"
              src="https://res.cloudinary.com/dqg2t6li6/image/upload/v1665838568/Ellipse_99_uycat6.png"
              alt=""
            />
            <img
              className="login_website_logo"
              src="https://res.cloudinary.com/dqg2t6li6/image/upload/v1665838846/Group_7731_ki7mmd.png"
              alt="login_website_logo"
            />
            <form className="form_container" onSubmit={this.submitForm}>
              <div className="input_container">
                {this.renderUsernameField()}
              </div>
              <div className="input_container">
                {this.renderPasswordField()}
              </div>
              {showSubmitError && <p className="error_message">*{errorMsg}</p>}
              <div className="input_container">{this.renderCheckbox()}</div>
              <button type="submit" className="login_button">
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default LoginForm
