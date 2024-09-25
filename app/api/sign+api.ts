import User from "@/database/models/User";
import { connectToDatabase } from "@/database/db";
import { MongooseError } from "mongoose";
import jwt from 'jsonwebtoken'
export async function POST(request: Request) {

  try{
    await connectToDatabase();
  }catch(error){
    if(error instanceof MongooseError) {
      console.log(error);
    }
  }


  const data = await request.json();

  const newUser = new User({
    email: data.email,
    username: data.username,
    name: data.name,
    password: data.password,
    role : data.role
  });

  await newUser.save().catch((error : any) => console.log(error));


  const newdata = {
    id: newUser._id,
    email: newUser.email,
    username: newUser.username,
    role : newUser.role
  }
  const token = jwt.sign(newdata, process.env.JWT_SECRETKEY!, { expiresIn: '24h' });


  return new Response(token, {
    status: 200,
  });
}
  