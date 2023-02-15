import Express from "express";
import Cors from "cors";
import middlewares from "./Middlewares/config.js";
import db from "./Database/sqlite.js";
import CardsControllers from "./Controllers/CartasControllers.js";
import CompararController from "./Controllers/CompararController.js";
import ResultadosController from "./Controllers/ResultadosController.js";

const app = Express()

middlewares(app, Express, Cors)

CardsControllers(app, db)

CompararController(app, db)

ResultadosController(app, db)

export default app