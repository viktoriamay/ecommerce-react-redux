import { Link } from 'react-router-dom';
import './Footer.scss';
import { ReactComponent as GitHub } from './img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div>
            Made by{' '}
            <Link
              className="footer__link"
              to={'https://github.com/viktoriamay'}
              target="_blank"
            >
              viktoriamay
            </Link>
          </div>
          <span>{new Date().getFullYear()}</span>
          <Link
            className="footer__link_svg"
            to={'https://github.com/viktoriamay'}
            target="_blank"
          >
            <GitHub />
          </Link>
        </div>
      </div>
    </footer>
  );
};
