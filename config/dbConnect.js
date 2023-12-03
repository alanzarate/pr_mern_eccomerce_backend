const { default: mongoose } = require("mongoose")

const dbConnect = () =>{
    try {
        const conn = mongoose.connect(process.env.MONGODB_URI);
        console.log('db connected succesfully');
    } catch (error) {
        console.log('db error');
        throw new Error(`Failed to connect DB ${error}`);
    }
};
module.exports=dbConnect;