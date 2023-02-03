import Express from "express";
import Cors from "cors";
import middlewares from "./Middlewares/config.js";
import db from "./Database/sqlite.js";

const app = Express()

middlewares(app, Express, Cors)


export default app