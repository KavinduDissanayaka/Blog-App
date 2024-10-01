import mongoose from "mongoose";

 export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Madhuranga:madu123@cluster0.91cnr.mongodb.net/blog-app');
    console.log("DB Connected");
}