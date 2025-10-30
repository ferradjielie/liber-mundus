import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2025 Liber Mundus. Tous droits réservés.</p>

      <ul className={styles.links}>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy">Politique de confidentialité</a></li>
      </ul>

      <p className={styles.credit}>
        <a href="https://lordicon.com/" target="_blank" rel="noopener noreferrer">
          Animated icons by Lordicon.com
        </a>
      </p>
    </footer>
  );
}

export default Footer;
