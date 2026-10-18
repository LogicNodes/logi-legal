import { createFileRoute } from "@tanstack/react-router";

// The root only sends the visitor on to the English documents, as before.
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ httpEquiv: "refresh", content: "0;url=/en/" }] }),
  component: () => null,
});
