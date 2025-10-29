import styles from './Home.module.css';
import globe from '../../assets/globeiconeRed.svg';
import book from '../../assets/bookicone.svg';
import hearth from '../../assets/hearth.svg';

function Home() {
  return (
    <>
      <header className={styles.headerContent}>
        <div className={styles.title}>
          <h1>LIBER MUNDUS</h1>
        </div>
        <span className={styles.slogan}>
          découvrez le monde, découvrez ses livres
        </span>
      </header>

      <hr />

      <main>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={globe} alt="Globe" className={styles.icon} />
            <span>Découvrez le monde à travers ses livres</span>
          </div>

          <div className={styles.card}>
            <img src={hearth} alt="Heart" className={styles.icon} />
            <span>Trouvez vos livres coup de coeur, adoptez la littérature </span>
          </div>

          <div className={styles.card}>
            <img src={book} alt="Book" className={styles.icon} />
            <span>Chaque livre est unique, chaque page est une aventure</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
