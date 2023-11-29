import { render } from "@testing-library/react";
import React from "react";
import Example from "./Example";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = () => (
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

const server = setupServer(
  http.get("https://api.example.com/user", ({ request, params, cookies }) => {
    return HttpResponse.json([
      {
        id: "f8dd058f-9006-4174-8d49-e3086bc39c21",
        title: `Avoid Nesting When You're Testing`,
      },
      {
        id: "8ac96078-6434-4959-80ed-cc834e7fef61",
        title: `How I Built A Modern Website In 2021`,
      },
    ]);
  })
);

beforeEach(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("test", () => {
  render(wrapper());
});
