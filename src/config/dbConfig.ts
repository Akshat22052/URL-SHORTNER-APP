import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
        console.log(`MongoDB connected: ${connect.connection.host}`);
        console.log(`MongoDB connected: ${connect.connection.port}`);
        console.log(`MongoDB connected: ${connect.connection.name}`);

    }
catch (error) {
        console.error(error);
        process.exit(1);
}    
}


export default connectDB;


