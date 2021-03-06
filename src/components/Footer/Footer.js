import React from 'react';
// import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
import { ReactComponent as LinkedInIcon } from '../../icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../icons/github.svg';
import { ReactComponent as EmailIcon } from '../../icons/email.svg';
import Container from '../Container';
import Logo from '../Logo';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <Logo classes={styles.footerLogo} />
      <div className={styles.developerContacts}>
        <p className={styles.text}>
          Developed by
          <span className={styles.developerName}> Nataliia Lazorenko</span>
        </p>
        <a
          href="mailto:natalystruk@gmail.com"
          target="blank"
          aria-label="Link to email"
          className={styles.developerLink}
        >
          {/* <EmailOutlinedIcon htmlColor="green" fontSize="meddium" /> */}
          <EmailIcon className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/nataliia-lazorenko-6a5b22152/"
          target="_blank"
          aria-label="Link to LinkedIn"
          rel="noreferrer"
          className={styles.developerLink}
        >
          {/* <LinkedInIcon htmlColor="green" fontSize="meddium" /> */}
          <LinkedInIcon className={styles.icon} />
        </a>
        <a
          href="https://github.com/NataliiaLazorenko"
          target="_blank"
          aria-label="Link to GitHub"
          rel="noreferrer"
          className={styles.developerLink}
        >
          {/* <GitHubIcon htmlColor="green" fontSize="meddium" /> */}
          <GitHubIcon className={styles.icon} />
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
