import express from "express";
import {getUsers,addUser,getUserById,editUser,deleteUser,} from "../controller/user-controller.js";
import {userValidator,userValidationResult} from "../validators/userValidator.js";

const route = express.Router();

route.get("/", getUsers);
route.post("/add", userValidator, userValidationResult, addUser);
route.get("/:id", getUserById);
route.put("/:id", userValidator, userValidationResult, editUser);
route.delete("/:id", deleteUser);

export default route;
