import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {
    try {
        console.log("Request Body: ", req.body); // Log the incoming data
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }
        const hashPassword =await bcryptjs.hash(password,10)
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save();
        res.status(201).json({ message: "User created Successfully" });
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user  =await User.findOne({email});
        const isMatch =await bcryptjs.compare(password,user.password);
        if(!user || !isMatch){
            res.status(400).json({message:"Invalid username or password "})
        }else{
            res.status(200).json({message:"Login Succesfully",user:{
                fullname:user.fullname,
                email:user.email,
                _id:user._id
            }})
        }

    } catch (error) {
        console.log("Error",error.message);
        res.status(500).json({message:"Internal Server error"})
    }
}
