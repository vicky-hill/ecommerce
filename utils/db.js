import mongoose from 'mongoose';
const connection = {};

async function connectDB() {
    if (connection.isConnected) {
        console.log('connected')
        return;
    }

    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log('User previous connection to the db');
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("Connected to db...");
    connection.isConnected=db.connections[0].readyState; 
}

async function disconnectDB() {
    if(connection.isConnected) {
        if(process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log("Not disconnecting  ")
        }
    }
}


const db = { connectDB, disconnectDB }

export default db;