import { render } from "@testing-library/react";
import React from "react";
import Example from "./Example";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { act, create } from "react-test-renderer";

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
    return HttpResponse.json({
      name: "mocked-react-query",
    });
  })
);

beforeEach(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

let tree
test("test react-test-renderer", async () => {
  await act(async () => {
    await create(wrapper());
  });

  await act(async () => {});

  const h1 = await tree.root.findByType("h1");
  expect(h1.props.children[1]).toEqual("mocked-react-query");
});

test("test @testing-library/react", async () => {
  const result = render(wrapper());
  expect(await result.findByText(/mocked-react-query/i)).not.toBeNull();
});
