import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="" target="_blank" rel="noopener">
          nabilahwahab
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:nabzwahab@gmail.com"
          target="_blank"
          rel="noopener"
        >
          nabz.wahab@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/Nabzcreates" target="_blank" rel="noopener">
          Nabzcreates
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/nabilah-wahab-302797141/"
          target="_blank"
          rel="noopener"
        >
          Nabilah Wahab
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://twitter.com/nabz_wahab"
          target="_blank"
          rel="noopener"
        >
          @nabz_wahab
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{' '}
        <a
          href="https://www.instagram.com/nabilah.wahab/"
          target="_blank"
          rel="noopener"
        >
          nabilah.wahab
        </a>
        ;
      </p>
      
      
      
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
