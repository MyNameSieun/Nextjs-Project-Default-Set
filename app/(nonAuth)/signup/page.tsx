"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:8080/members/new", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          nickname,
          email,
          password1,
          password2,
        }), // API가 요구하는 필드 형식으로 전송
      });

      // 응답이 400번대일 경우 텍스트로 처리
      if (!res.ok) {
        const errorText = await res.text(); // 응답을 텍스트로 처리
        setError(errorText || "회원가입에 실패했습니다.");
        return;
      }
    } catch (error) {
      console.error("네트워크 오류 발생:", error);
      setError("서버와의 연결에 문제가 발생했습니다.");
    }

    // 회원가입 성공 시 로그인 페이지로 리디렉션
    router.push("/signin");
    alert("회원가입이 완료되었습니다!");
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password1">비밀번호</label>
        <input
          id="password1"
          type="password"
          name="password1"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />

        <label htmlFor="password2">비밀번호 확인</label>
        <input
          id="password2"
          type="password"
          name="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <label htmlFor="nickname">닉네임</label>
        <input
          id="nickname"
          type="text"
          name="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
