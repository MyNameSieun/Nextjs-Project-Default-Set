// src/app/(non-auth)/signin/page.tsx

"use client";

import { signIn, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignInPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [shouldRender, setShouldRender] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/"); // 인증된 경우 홈으로 리디렉션
    } else {
      setShouldRender(true);
    }
  }, [router, session, pathname]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 위에서(목차 3.1) 설정한 id와 연결
    const response = await signIn("email-password-credential", {
      email,
      password1,
      redirect: false,
    });

    if (response?.error) {
      setError("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div>
      {shouldRender && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              autoComplete="username"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password1}
              autoComplete="current-password"
              required
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            로그인하기
          </button>
        </form>
      )}
    </div>
  );
};

export default SignInPage;
