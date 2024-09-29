"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const SignInOutButton = () => {
  const session = useSession();
  const isSignIn = session.status === "authenticated";

  return isSignIn ? (
    <>
      <button onClick={() => signOut()}>로그아웃</button>
    </>
  ) : (
    <>
      <button onClick={() => signIn()}>로그인</button>
    </>
  );
};

export default SignInOutButton;
