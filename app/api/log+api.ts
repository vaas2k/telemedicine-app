import User from "@/database/models/User";
import { connectToDatabase } from "@/database/db";
import { MongooseError } from "mongoose";
import jwt from 'jsonwebtoken';
export async function POST(request: Request) {

  try {
    await connectToDatabase();
  } catch (error) {
    if (error instanceof MongooseError) {
      console.log(error);
    }
  }


  const { email, password } = await request.json();

  const getUser = await User.findOne({ email });
  if (!getUser) {
    return new Response('User not found', {
      status: 404,
    });
  }

  if (getUser.password !== password) {
    return new Response('Wrong password', {
      status: 401,
    });
  }

  const data = {
    id: getUser._id,
    email: getUser.email,
    username: getUser.username,
    role : getUser.role
  }
  const token = jwt.sign(data, process.env.JWT_SECRETKEY!, { expiresIn: '24hrs' });

  return new Response(token, {
    status: 200,
  });
}
