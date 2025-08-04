import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
  return (
    <>
      <header>공통 헤더</header>
      <main><Outlet /></main>
      <footer>공통 푸터</footer>
    </>
  );
}