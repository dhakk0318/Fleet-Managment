import { NextResponse,NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token');  // Get the access token
  const refreshToken = req.cookies.get('refresh_token');  // Get the refresh token

  if (!token) {

    // If no access token, try to refresh with refresh token
    if (!refreshToken) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
      // Validate the refresh token
      const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET as string);

      // Generate a new access token
      const newAccessToken = jwt.sign(
        { id: decoded.id },
        process.env.JWT_SECRET as string,
        { expiresIn: '15m' }
      );

      // Set the new access token in the response cookies
      const headers = new Headers();
      headers.append('Set-Cookie', `access_token=${newAccessToken}; HttpOnly; Max-Age=900; Path=/; Secure; SameSite=Strict;`);

      return new NextResponse('Token refreshed', { status: 200, headers });
    } catch (error: any) {
      if (error instanceof Error) {
        console.error(error.message); // Log the error message
      }
      return new NextResponse('Unauthorized', { status: 401 });
    }
  }

  try {
    // Validate the access token
    jwt.verify(token, process.env.JWT_SECRET as string);
    return NextResponse.next();  // Continue to the next handler if valid
  } catch (error) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
}

export const config = {
  matcher: [
    '/api/protected',
  ],
};
