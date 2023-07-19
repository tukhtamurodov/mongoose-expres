import express, { Application, NextFunction, Request, Response } from "express";
import countryRoute from "./routes/country.route";
import mongo from "./utils/mongo";

const app: Application = express();
app.use(express.json());

mongo()
  .then((ad) => console.log("connectted"))
  .catch((err) => console.log(err));

  
app.use(countryRoute);

app.listen(9090, () => console.log(9090));
