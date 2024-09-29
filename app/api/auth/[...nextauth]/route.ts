import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "id-password-credential",
      name: "Credentials",
      type: "credentials",
      credentials: {
        id: {
          label: "아이디",
          type: "text",
          placeholder: "아이디를 입력해주세요.",
        },
        password: {
          label: "비밀번호",
          type: "password",
          placeholder: "비밀번호를 입력해주세요.",
        },
      },
      async authorize(credentials, req) {
        // 로그인 요청을 처리하는 부분
        const res = await fetch("http://moneyfulpublicpolicy.co.kr/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const user = await res.json();

        if (res.ok && user) {
          return user; // 인증 성공 시 사용자 정보 반환
        }
        return null; // 인증 실패 시 null 반환
      },
    }),
  ],
  pages: {
    signIn: "/signin", // 사용자 정의 로그인 페이지 (커스터마이징)
  },
  secret: "secret",
});

export { handler as GET, handler as POST };
