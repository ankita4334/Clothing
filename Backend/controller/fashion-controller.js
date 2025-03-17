import Fashion from "../models/fashion-model.js";

const fashion=async(req,res)=>{
    try 
    {

        const response=await Fashion.find();
        res.status(200).json({message:response});
        
        if(!response)
        {
            res.status(400).json({message:"No service found"});
        }

    } catch (error) {
        res.status(400).json({message:"error"});
    }
}

export default fashion;