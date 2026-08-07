import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/referencer")({
  beforeLoad: () => {
    throw redirect({ to: "/projekter" });
  },
});
