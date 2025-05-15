import Router from 'express';
import auth from '../middleware/auth.js'
import {
    getUserbyEmail,
    updateProfile,
    deleteUser,
    createUser,
    getUserByME,
    getUserbyId
} from "../controllers/userController.js";

import multer from "multer";
import { parseSyllabus as parseClassSyllabus } from "../controllers/classController.js";

//Container to handle syllabus submission from client
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

const router = Router();
router.get("/me", auth, getUserByME); //Get userid by deciphered local storage web token
router.get("/userLookUp/:id", getUserbyId); //Get friends by id, can be used to lookup as any user as well
router.get("/email/:email", getUserbyEmail); //Get user by email
router.post("/", createUser); //POST user, for signup only
router.patch("/update/:userid", updateProfile); //UPDATE user details
router.delete("/delete/:userid", deleteUser); //DELETE user by id

router.post( //POST Syllabus pdf and generate class details
  "/aisyllabus/:userId/api/upload",
  upload.single("file"),
  async (req, res, next) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    req.body.syllabusFilePath = req.file.path;
    req.body.userId = req.params.userId;
    next();
  }, parseClassSyllabus, (req, res) => {
    return res.status(200).json({message: "Syllabus processes successfully"});
  }
);

export default router;