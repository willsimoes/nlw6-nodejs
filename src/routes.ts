import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AutheticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsContoller = new ListUserSendComplimentsController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticate, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticate, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticate, listUserSendComplimentsContoller.handle);
router.get("/users/compliments/receive", ensureAuthenticate, listUserReceiveComplimentsController.handle);

export { router }