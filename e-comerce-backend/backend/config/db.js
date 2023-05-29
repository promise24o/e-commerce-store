require ('dotenv').config ()
const mongoose = require ('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect (process.env.MONGO_URI || 'mongodb+srv://promiseobe532:1qaz2wsx@fashionfusion.jcpzafv.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },)

        console.log ('MongoDB connection SUCCESS')
    } catch (error) {
        console.error ('MongoDB connection FAIL')
        process.exit (1)
    }
}

module.exports = {
    connectDB
}
