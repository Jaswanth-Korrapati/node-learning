// all routes related to notes are stored here

const express= require("express");
const { getNote, createNote, deleteNote, updateNote, getoneNote } = require("../controllers/noteController");
const note = require("../models/note");
const auth = require("../middlewares/auth");

const noteRouter=express.Router();

noteRouter.get("/",auth, getNote);

noteRouter.get("/:id",auth, getoneNote);

noteRouter.post("/",auth, createNote);

noteRouter.delete("/:id",auth, deleteNote);

noteRouter.put("/:id",auth, updateNote);

module.exports= noteRouter;

