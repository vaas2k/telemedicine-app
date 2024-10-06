import mongoose, { Mongoose } from 'mongoose';

// In your connectToDatabase file:
const connectToDatabase = async () => {
  console.log('Connecting...')
  await mongoose.connect('mongodbstringrequired')
  .then((data : any)=> {console.log('Connected')})
  .catch((error : any) => console.log("Not Connected"));
};

export { connectToDatabase, mongoose };
