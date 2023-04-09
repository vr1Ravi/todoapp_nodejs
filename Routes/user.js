import express from 'express'
import { getMyProfile, loginUser, registerNewUser, logout} from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();


router.post("/new", registerNewUser)
router.post("/login", loginUser)



router.get("/logout", isAuthenticated,  logout)
router.get("/me", isAuthenticated,  getMyProfile)


export default router