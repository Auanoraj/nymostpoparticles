import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { articleMockData } from "./mockData";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(articleMockData),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("check initial render", () => {
  render(<App />);

  const linkElement = screen.getByText(/NY Times Most Popular Articles/i);
  expect(linkElement).toBeInTheDocument();
});

test("check the render list length with mock data", async () => {
  const { getAllByTestId } = render(<App />);

  const listOfArticles = await waitFor(() => getAllByTestId("articles-list"));

  expect(listOfArticles).toHaveLength(20);
});
