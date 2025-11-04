import styles from './Countries.module.css';
import france from '../../iconsFlag/france.png';
import uk from '../../iconsFlag/gb.png';
import russia from '../../iconsFlag/russia.png';
import spain from '../../iconsFlag/spain.png';
import usa from '../../iconsFlag/usa.png';
import germany from '../../iconsFlag/germany.png';
import japon from '../../iconsFlag/japon.png';
import { Link, useParams } from "react-router-dom";

function Countries() {

  const {id} = useParams
  return (
    <div className={styles.countriesContainer}>
      <h1>Liste des pays</h1>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={france} alt="France" className={styles.flag} />
          <h2>France</h2>
          <Link to="/pays/1/auteurs">
            <button>Voir les auteurs</button>
          </Link>
        </div>

        <div className={styles.card}>
          <img src={uk} alt="Royaume-Uni" className={styles.flag} />
          <h2>Royaume-Uni</h2>
          <Link to="/pays/3/auteurs">
            <button>Voir les auteurs</button>
          </Link>
        </div>

        <div className={styles.card}>
          <img src={russia} alt="Russie" className={styles.flag} />
          <h2>Russie</h2>
          <Link to="/pays/2/auteurs">
            <button>Voir les auteurs</button>
          </Link>
        </div>

        <div className={styles.card}>
          <img src={spain} alt="Espagne" className={styles.flag} />
          <h2>Espagne</h2>
          <Link to="/pays/7/auteurs">
            <button>Voir les auteurs</button>
          </Link>
        </div>

        <div className={styles.card}>
          <img src={usa} alt="USA" className={styles.flag} />
          <h2>États-Unis</h2>
          <Link to="/pays/4/auteurs">
            <button>Voir les auteurs</button>
          </Link>
        </div>

        <div className={styles.card}>
          <img src={germany} alt="Allemagne" className={styles.flag} />
          <h2>Allemagne</h2>
          <Link to="/pays/5/auteurs">
            <button>Voir les auteurs</button>
          </Link>
        </div>

        <div className={styles.card}>
          <img src={japon} alt="Japon" className={styles.flag} />
          <h2>Japon</h2>
          <Link to="/pays/6/auteurs">
            <button>Voir les auteurs</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Countries;
