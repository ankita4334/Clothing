import express from "express"
import {register,login} from "../controller/user-controller.js";
import validate from "../middleware/validate-middleware.js";
import { signupSchema } from "../validate/auth-validate.js";
import { loginSchema } from "../validate/auth-validate.js";

const router=express.Router()

router.route("/register").post(validate(signupSchema),register);
router.route("/login").post(validate(loginSchema),login);

export default router;

