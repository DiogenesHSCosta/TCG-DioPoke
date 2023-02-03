import Express from "express";
import middlewares from "./Middlewares/config.js";
import Cors from "cors";

const app = Express()

middlewares(app, Express, Cors)


export default app