import styles from './Home.module.css';
function Home() {

    return(
        <header className={styles.headerContent}>
            <div className={styles.title}>
                <h1> LIBER MUNDUS</h1>
            </div>
            <span className={styles.slogan}>  
                découvrez le monde, découvrez ses livres

            </span>

        </header>
    )

}
export default Home