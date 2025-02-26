/* IMPORTS */
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
//**DATABASE IMPORTS */
import { connectDB } from "./controllers/connectDB.js";
//**LOGGER IMPORTS */
import { reqResLog } from "./middleware/requestResponseHandler.js";
import { errorLog } from "./middleware/errorHandler.js";

//** ROUTES IMPORTS */
import authRoutes from "./routes/auth.js";
import existRoutes from "./routes/exist.js";
import userRoutes from "./routes/user.js";

//** FILES CONFIG */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* CONFIG */
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

//** FILE */
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
/** CUSTOM LOGGER */
app.use(reqResLog);
app.use(errorLog);

/** ROUTES */
app.use("/auth",authRoutes);
app.use("/find", existRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT;

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} Did not Connect`));