const noteModel = require("../models/note");

const createNote=async (req,res)=>{
   const {title,description}= req.body;

   const newNote=new noteModel({
    title: title,
    description: description,
    userId: req.userId
   });
   try {
    await newNote.save();
    res.status(201).json(newNote);
   } catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went Wrong"});
   }

}

const updateNote=async (req,res)=>{
    const id=req.params.id;
    const {title,description}= req.body;

    const newNote={
        title:title,
        description:description,
        userId: req.userId
    }
    try {
        await noteModel.findByIdAndUpdate(id,newNote,{new:true});
        res.status(200).json(newNote);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went Wrong"});
       }
        
 }



const deleteNote=async (req,res)=>{
    const id=req.params.id;
    try {
        const note=await noteModel.findByIdAndDelete(id);
        res.status(202).json(id+"  "+"Deleted Successfully");

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went Wrong"});
    }



    
}

const getNote=async (req,res)=>{
    try {
        const user = await noteModel.find({userId : req.userId});
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({message: "Some thing went Wrong"});
    };
    
}

const getoneNote=async (req,res)=>{
    const id=req.params.id;
    try {
                const note = await noteModel.findById(id);
                res.status(200).json(note);
            } catch(error) {
                res.status(500).json({ message: "Something Went Wrong"});
            }
    
}

module.exports={
    createNote,
    updateNote,
    deleteNote,
    getNote,
    getoneNote
}