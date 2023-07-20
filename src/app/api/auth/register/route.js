import { NextResponse } from "next/server";
import User from "../../../../models/User";
import connect from "../../../../utils/db";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new NextResponse("User has been created", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse(error.message, { status: 500 });
  }
};
