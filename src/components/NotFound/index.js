import './index.css'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <div>
    <div className="not_found_container">
      <img
        src="https://res.cloudinary.com/dqg2t6li6/image/upload/v1665846984/Group_7484_lt0yej.png"
        alt=""
        className="not_found_img"
      />
      <h1 className="not_found_heading">Page Not Found</h1>
      <p className="not_found_description">
        we are sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Link to="/" className="go_back_home-link">
        <button type="button" className="go_back_to_home_btn">
          Go Back to Home
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound
