import { useLocation } from "react-router-dom";

export function useHighlightQuery() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  return params.get("highlight") || "";
}

export function Highlight({ text, query }) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "ig");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? <mark className="marker-highlight" key={i}>{part}</mark> : part
  );
} 