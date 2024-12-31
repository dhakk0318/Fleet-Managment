export async function POST() {
    const headers = new Headers();

    // Clear both access token and refresh token cookies
    headers.append('Set-Cookie', 'access_token=; Max-Age=0; Path=/; Secure; HttpOnly; SameSite=Strict;');
    headers.append('Set-Cookie', 'refresh_token=; Max-Age=0; Path=/; Secure; HttpOnly; SameSite=Strict;');
    headers.append('Set-Cookie', 'user_details=; Max-Age=0; Path=/; Secure; HttpOnly; SameSite=Strict;');

    return new Response('Logout successful', { status: 200, headers });
  }
