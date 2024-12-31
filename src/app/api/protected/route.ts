import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value; token

  if (!token) {
    return NextResponse.json({ message: 'Token missing' }, { status: 401 });
  }

  // console.log('Token:', token);

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    // console.log('Decoded Token:', decoded);

    return NextResponse.json({ token: decoded }, { status: 200 });
  } catch (error) {
    console.error('JWT Verification Error:', error);
    return NextResponse.json({ message: 'Invalid token', error: error.message }, { status: 401 });
  }
}
