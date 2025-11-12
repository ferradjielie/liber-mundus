import express from "express";
import {fetchAuthorDetailById } from "../controllers/authorDetailController.js";

const router = express.Router()

router.get("/authors/:id", fetchAuthorDetailById);


export default router;