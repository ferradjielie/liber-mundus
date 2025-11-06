import db from "../config/db.js";

export const getAuthorsByCountry = async (countryId) => {
  try {
    const [rows] = await db.query(
      "SELECT id_auteur, nom, prenom, biographie FROM Auteur WHERE id_pays = ?",
      [countryId]
    );

    return rows;
  } catch (err) {
    throw err; 
  }
};
