"use client";

import { useSession } from "next-auth/react";

const SessionEx = () => {
  // 세션 정보 확인
  const session = useSession();
  console.log("====================================");
  console.log("HomePage", session);
  console.log("====================================");
  return <div>SessionEx</div>;
};

export default SessionEx;
