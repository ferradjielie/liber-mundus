import db from "../config/db.js";

export const getAuthorDetailById = async (authorId) => {
    try {
        const [rows] = await db.query(
            "SELECT prenom,  nom, biographie from auteur WHERE id_auteur = ? ",
            [authorId]);
            return rows[0];
    }
     catch (err) {
        throw err; 
  }
        
    }

     

