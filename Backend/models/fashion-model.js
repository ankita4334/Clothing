import mongoose from "mongoose";

const fashionSchema=new mongoose.Schema({

  name:{
    type:String,
    require:true
  },

  image:{
    type:String,
    require:true
  },

  price:{
    type:String,
    require:true
  },
  
  category:{
    type:String,
    required:true,
    enum: ["men", "women", "kid", "sport"], 
    default: "other"
  
  },

  subcategory:{
    type:String,
    required:true,
    enum: ["top", "bottom", "tshirt", "outwear","innerwear","short"], 
    default: "other"
  
  },

  

});


const Fashion=new mongoose.model("fashions",fashionSchema);


export default Fashion;