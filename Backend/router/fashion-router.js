import express from "express"
import fashion from "../controller/fashion-controller.js";
const fashionrouter=express.Router();

fashionrouter.route("/fashion").get(fashion);

export default fashionrouter;