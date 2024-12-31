import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '../../../lib/db';
import Employee from '../../../models/Employee';

const connectToDatabase = async () => {
  await connectDB();
};  

export async function POST(req: Request) {
  const { email, password } = await req.json();

  await connectToDatabase();

  try {

    const employee = await Employee.findOne({ email });
    if (!employee) {
      return new Response('Invalid email or password', { status: 401 });
    }


    const isPasswordValid = await bcrypt.compare(password, employee.password);
    if (!isPasswordValid) {
      return new Response('Invalid email or password', { status: 401 });
    }


    const accessToken = jwt.sign(
      { id: employee._id,fullname: employee.fullName, email: employee.email, role: employee.role },
      process.env.JWT_SECRET as string,
      { expiresIn: '15m' }
    );


    const refreshToken = jwt.sign(
      { id: employee._id },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    );

    // Set tokens and user details in HttpOnly cookies
    const headers = new Headers();
    const isProduction = process.env.NODE_ENV === 'production';
    headers.append('Set-Cookie', `access_token=${accessToken}; HttpOnly; Max-Age=900; Path=/; ${isProduction ? 'Secure;' : ''} SameSite=Strict;`);
    headers.append('Set-Cookie', `refresh_token=${refreshToken}; HttpOnly; Max-Age=604800; Path=/; ${isProduction ? 'Secure;' : ''} SameSite=Strict;`);
    headers.append('Set-Cookie', `user_details=${JSON.stringify({ id: employee._id, fullname: employee.fullName, email: employee.email, role: employee.role })}; HttpOnly; Max-Age=604800; Path=/; ${isProduction ? 'Secure;' : ''} SameSite=Strict;`);

    return new Response('Login successful', { status: 200, headers });
  } catch (error) {
    console.error('Error logging in:', error);
    return new Response('Error logging in', { status: 500 });
  }
}
