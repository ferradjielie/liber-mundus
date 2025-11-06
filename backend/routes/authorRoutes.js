import express from "express";
import { fetchAuthorsByCountry } from "../controllers/authorController.js";

const router = express.Router();


router.get("/countries/:id/authors", fetchAuthorsByCountry);

export default router;
