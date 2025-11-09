import styles from './AuthorsList.module.css';
import { useState, useEffect } from 'react';
import { data, useParams } from "react-router-dom";

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
      <h1></h1>
      {listAuthors.length === 0 ? (
        <p>Aucun auteur trouvé pour ce pays.</p>
      ) : (
        <ul>
          {listAuthors.map((author) => (
            <li key={author.id_auteur}>
              {author.prenom} {author.nom}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AuthorsList;
