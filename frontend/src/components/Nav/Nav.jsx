import styles from './Nav.module.css';
import star from '../../assets/star.svg';
import avatar from '../../assets/avatar.svg';
import home from '../../assets/home.svg';


function Nav() {

    return (
        <nav>
            <div className={styles.logo}>
                Liber Mundus
            </div>
            <ul className={styles.navLink}>
               <li> Connexion</li>
               <li>Accueil</li>
               <li>Favori</li>
            </ul>

        </nav>
    )

}

export default Nav;