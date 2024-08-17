import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="support__point">
      <img className="sp__image" />
      <foo></foo>
      <div className="sp__text">{children}</div>
    </div>
  );
}
