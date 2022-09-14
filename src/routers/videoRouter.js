import express from "express";
import {
  watch,
  getUpload,
  postUpload,
  getEdit,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch); // (\\d+) is a kind of regular expression(정규식) and that regular expression means it will only take numbers
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
