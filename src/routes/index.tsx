import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ETERNIS — Fine Timepieces" },
      { name: "description", content: "ETERNIS — a quiet pursuit of mechanical excellence. Discover our collection of fine Swiss timepieces." },
      { property: "og:title", content: "ETERNIS — Fine Timepieces" },
      { property: "og:description", content: "A quiet pursuit of mechanical excellence." },
    ],
  }),
  component: Index,
});

function Index() {
  // The site is built as pure HTML/CSS/JS in /public/site for Wix portability.
  // The preview here loads it full-screen via iframe so what you see is what you ship.
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <iframe
      src="/site/index.html"
      title="ETERNIS"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
      }}
    />
  );
}
