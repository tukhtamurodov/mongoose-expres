import { Router } from "express";
import countryController from "../controller/country.controller";

const CountryRouter: Router = Router();

export default CountryRouter.get("/", countryController.GET)
  .post("/", countryController.POST)
  .put("/:id", countryController.PUT)
  .delete("/:id", countryController.DELETE);
