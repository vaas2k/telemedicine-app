import mongoose, { Mongoose } from 'mongoose';

// In your connectToDatabase file:
const connectToDatabase = async () => {
  console.log('Connecting...')
  await mongoose.connect('mongodb+srv://salsuqe1:6AAEcIIA0mW6MyAK@hospital.hlc2kkw.mongodb.net/hospital?retryWrites=true&w=majority&appName=Cluster0')
  .then((data : any)=> {console.log('Connected')})
  .catch((error : any) => console.log("Not Connected"));
};

export { connectToDatabase, mongoose };
