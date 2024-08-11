import { Router } from "express";
import { addQuestion, deleteAll, deleteQuestion, fetchAll, fetchByID } from "../controllers/cards.controllers.js";

const router = Router();

router.route("/create").post(addQuestion);
router.route("/fetch/all").get(fetchAll);
router.route("/fetch/id").post(fetchByID);
router.route("/delete/all").get(deleteAll);
router.route("/delete/id").post(deleteQuestion);

export default router;