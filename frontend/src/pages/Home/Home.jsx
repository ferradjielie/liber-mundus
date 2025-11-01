import styles from './Home.module.css';
import globe from '../../assets/globeiconeRed.svg';
import book from '../../assets/bookicone.svg';
import hearth from '../../assets/hearth.svg';
import Marquee from 'react-fast-marquee';
import BorderStrip from '../../components/BorderStrip/BorderStrip';

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
            <span>Trouvez vos livres coup de cœur, adoptez la littérature</span>
          </div>

          <div className={styles.card}>
            <img src={book} alt="Book" className={styles.icon} />
            <span>Chaque livre est unique, chaque page est une aventure</span>
          </div>
        </div>

       
        <section className={styles.flagSection}>
          <h2>Explorez le monde de la littérature à travers divers pays !</h2>

          <div className={styles.friseContainer}>
            <Marquee speed={70} gradient={false}>
              <BorderStrip />
            </Marquee>
          </div>
        </section>

        <hr />

       
        <section className={styles.explorerSection}>
          <h2>Découvrez le patrimoine littéraire des pays disponibles</h2>

          <blockquote className={styles.citation}>
            “Bien lire l’univers, c’est bien lire la vie.”
            <span> — Victor Hugo</span>
          </blockquote>

          <p className={styles.description}>
            Plongez dans les œuvres emblématiques de chaque culture, 
            et laissez les mots vous guider à travers le monde.
          </p>

          <button className={styles.exploreButton}>Voir tous les pays</button>
        </section>
      </main>
    </>
  );
}

export default Home;
