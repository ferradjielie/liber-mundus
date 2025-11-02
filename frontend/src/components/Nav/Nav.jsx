import { Link } from "react-router-dom";
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav>
      <div className={styles.logo}>
        <Link to="/" className={styles.logo}>Liber Mundus</Link>
      </div>
      <ul className={styles.navLink}>
        <li><Link to="/connexion" className={styles.navLink}>Connexion</Link></li>
        <li><Link to="/" className={styles.navLink}>Accueil</Link></li>
        <li><Link to="/favori" className={styles.navLink}>Favori</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
