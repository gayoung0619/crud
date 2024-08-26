import { headers } from "next/headers";

const token = "0epfdlj1df90";

export async function GET(request: Request) {
  const headersList = headers();
  const requestToken = headersList.get("Authorization");

  if (requestToken === token) {
    return Response.json({
      token,
      id: process.env.ID_ADMIN,
      password: process.env.PASSWORD_ADMIN,
    });
  }
  return new Response("유효하지 않은 토큰입니다.", {
    status: 401,
  });
}

export async function POST(request: Request) {
  const res = await request.json();
  const { password, id } = res;

  if (process.env.PASSWORD_ADMIN === password && process.env.ID_ADMIN === id) {
    return Response.json({
      token,
      id: process.env.ID_ADMIN,
      password: process.env.PASSWORD_ADMIN,
    });
  }

  return new Response("아이디 또는 비밀번호를 확인해세요.", {
    status: 400,
  });
}
