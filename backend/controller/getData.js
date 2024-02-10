const Data=require("../models/dataModel");

exports.getData=async(req,res)=>{
    try{
    const { value } = req.params;
        const data = await Data.find({value});

      //response 
      res.status(200).json(
        {
            success:true,
            data:data,
            message:"Entire data fetched successfully"
        }
       )

    }
    catch(err){
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:err.message
            }
        )
        console.log(err);
    }
}