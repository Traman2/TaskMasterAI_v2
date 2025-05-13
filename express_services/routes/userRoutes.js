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

const router = Router();
router.get("/me", auth, getUserByME); //Get userid by deciphered local storage web token
router.get("/userLookUp/:id", getUserbyId); //Get friends by id, can be used to lookup as any user as well
router.get("/email/:email", getUserbyEmail); //Get user by email
router.post("/", createUser); //POST user, for signup only
router.patch("/update/:userid", updateProfile); //UPDATE user details
router.delete("/delete/:userid", deleteUser); //DELETE user by id

export default router;