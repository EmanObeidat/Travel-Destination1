/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css';

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <i className="fa-solid fa-location-dot"></i>
          <p>Irbid</p>
        </li>
      </ul>
      <ul>
        <li>
          <a href=""><i className="fa-brands fa-facebook"></i></a>
          <p>Facebook</p>
        </li>
        <li>
          <a href=""><i className="fa-brands fa-instagram"></i></a>
          <p>Instagram</p>
        </li>
      </ul>
      <ul>
        <li><p>&copy; Copy Right Eman Obeidat</p></li>
      </ul>
    </footer>
  );
}

export default Footer;