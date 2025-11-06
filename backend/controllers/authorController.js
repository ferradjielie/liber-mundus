import { getAuthorsByCountry } from "../models/authorModel.js";

export const fetchAuthorsByCountry = async (req, res) => {
  try {
    

    const { id } = req.params;
    const authors = await getAuthorsByCountry(id);

    

    if (!authors || authors.length === 0) {
      console.log("Aucun auteur trouvé pour ce pays");
      return res.status(404).json({ message: "Aucun auteur trouvé pour ce pays" });
    }

    return res.status(200).json(authors);
  } catch (err) {
    console.error(" Erreur dans fetchAuthorsByCountry :", err);
    return res.status(500).json({ message: "Erreur serveur", details: err.message });
  }
};
