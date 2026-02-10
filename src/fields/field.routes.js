import { Router } from "express";
import { createField } from "./field.controller.js";
import { getFields } from "./field.controller.js";

const route = Router();

route.post(
    '/create',
    createField
)

route.get(
    '/get',
    getFields
)

export default route;