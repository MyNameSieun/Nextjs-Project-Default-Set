"use client";

import { useSession } from "next-auth/react";

const HomePage = () => {
  const session = useSession();

  console.log("====================================");
  console.log("HomePage", session);
  console.log("====================================");
  return <div>HomePage</div>;
};

export default HomePage;
