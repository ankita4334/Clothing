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

  

});


const Fashion=new mongoose.model("fashions",fashionSchema);


export default Fashion;