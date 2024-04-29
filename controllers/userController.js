import User from '../models/userModel.js';

export const registerController = async (req, res) => {
    try {
        const { name, email, password, address, country, phone } = req.body;

        // validation
        if (!name || !email || !password || !address || !country || !phone) {
            return res.status(500).send({
                success: false,
                massage: 'Please provide all fields'
            });
        }
         //check existing user
// const existingUser = await userModel.findOne({email})
         //validation
        //  if(existingUser){
        //     return res.status(501).send({
        //         success:false,
        //         message:"email already taken",
        //     })
        //  }
        const user = await User.create({
            name, email,password, address,country,phone
        });

        res.status(201).send({
            success: true,
            massage: 'Registration Success, please login',
            user
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            massage: "Error in Register API",
            error
        });
    }
};

// export default registerController;

// Login
export const loginController= async(req,res)=>{
try {
    const {email,password}=req.body
// validation
if(!email || !password){
    return res.status(500).send({
        success:false,
        massage:'please Add Email OR password'
    })
}
   //check user
   const user =await User.findOne({email})
   //user valdaition
   if(!user){
    return res.status(404).send({
        success:false,
        massage:'User Not found'
    })
   }
   //check password
const isMatch=await user.comparePassword(password);
//valdiation pass
if(!isMatch){
    return res.status(500).send({
        success:false,
        massage:"invalid credentiols",
    });
}else{
    return res.status(200).json({user:user,success:true})
}

} catch (error) {
    console.log(error);
    res.status(500).send({
        success:"false",
        massage:"Error in login Api",
        error
    })
}
}