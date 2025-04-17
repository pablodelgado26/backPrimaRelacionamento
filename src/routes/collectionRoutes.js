import express from "express";
import collectionController from "../controllers/collectionController.js";
const router = express.Router();
router.get("/", collectionController.getAll);
router.get("/:id", collectionController.getById);
router.post("/", collectionController.create);
router.put("/:id", collectionController.update);
router.delete("/:id", collectionController.delete);
export default router;
