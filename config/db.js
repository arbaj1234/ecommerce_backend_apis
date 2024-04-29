import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connectd to ${process.env.MONGO_URL} successfully`);
    } catch (error) {
        console.log(`Error while connecting to ${process.env.MONGO_URL}` , error.message);
    }
}


export default connectDB 