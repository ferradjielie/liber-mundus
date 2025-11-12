import { getAuthorDetailById} from "../models/authorDetailModel"

export const fetchAuthorDetailById = async(req, res) => {
  try {
    const {id} = req.params;
    const authorDetail = await  getAuthorDetailById(id);

    if(!authorDetail) {
        return res.status(404).json({ message: "le detail de cet auteur n'a pas été trouvé" });
    } return res.status(200).json(authorDetail)
 } catch (err){
    res.status(500).json({ message: "Erreur serveur", details: err.message })

 }
}