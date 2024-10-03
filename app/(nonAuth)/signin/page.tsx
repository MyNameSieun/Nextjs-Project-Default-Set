// src/app/(non-auth)/signin/page.tsx

"use client";

import { signIn, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignInPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/");
    } else {
      setShouldRender(true);
    }
  }, [router, session, pathname]);

  return (
    <div>
      {shouldRender && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const response = await signIn("id-password-credential", {
              id,
              password,
              redirect: false,
            });

            return false;
          }}
        >
          <div>
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              id="id"
              name="id"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
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
