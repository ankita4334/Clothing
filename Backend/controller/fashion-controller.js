import Fashion from "../models/fashion-model.js";

const fashion=async(req,res)=>{
    try 
    {

        const response=await Fashion.find({});
        return res.status(200).json(response)
        
        if(!response)
        {
            res.status(400).json({message:"No service found"});
        }

    } catch (error) {
        res.status(400).json({message:"error"});
        console.log(error)
    }
}

export default fashion;