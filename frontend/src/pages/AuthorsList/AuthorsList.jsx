import styles from './AuthorsList.module.css';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// Mapping des exceptions : fichiers avec seulement le nom ou extension différente
const authorExtensions = {
 
  "Shakespeare": "jpg",
  "AldousHuxley": "png",
  "FiodorDostoevski": "jpg"
};

// Normalise le nom : retire accents et espaces
function normalizeName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '') // supprime accents
    .replace(/\s/g, '');             // supprime espaces
}

// Génère le chemin de l'image pour un auteur
function getAuthorImage(author) {
  let baseName = normalizeName(author.prenom + author.nom);

  // Vérifie si c'est une exception (nom seul)
  if (authorExtensions[author.nom]) {
    baseName = normalizeName(author.nom); // utilise seulement le nom
  }

  const ext = authorExtensions[baseName] || "jpg"; // extension par défaut ou exception
  return `/images/authors/${baseName}.${ext}`;
}

function AuthorsList() {
  const [listAuthors, setListAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/countries/${id}/authors`);
        if (!response.ok) throw new Error("Erreur réseau");

        const data = await response.json();
        setListAuthors(data);
      } catch (err) {
        console.error("Erreur lors du fetch :", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, [id]);

  if (loading) return <p>Chargement des auteurs...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className={styles.authorsContainer}>
      {listAuthors.length === 0 ? (
        <p>Aucun auteur trouvé pour ce pays.</p>
      ) : (
        <div className={styles.cardsContainer}>
          {listAuthors.map((author) => {
            const imagePath = getAuthorImage(author);
            const key = `${author.prenom} ${author.nom}`;

            return (
              <div className={styles.card} key={author.id_auteur}>
                <img 
                  src={imagePath} 
                  alt={key} 
                  className={styles.authorImage} 
                />
                <h3 className={styles.authorName}>{key}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AuthorsList;
