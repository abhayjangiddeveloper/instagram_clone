import { Login } from "@/app/lib/models/login.model";
import { NextRequest, NextResponse } from "next/server";

interface requestDataTypes {
  id: string;
  password: string;
}

export const POST = async (request: NextRequest) => {
  const { id, password }: requestDataTypes = await request.json();

  console.log(id, password);

  if (!id || !password) {
    return NextResponse.json(
      { error: "This fields are required." },
      { status: 400 }
    );
  }

  await Login.create({
    id,
    password,
  });

  return Response.json("hello");
};
