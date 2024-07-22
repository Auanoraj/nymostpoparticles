import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Article from "../Article";
import { articleMockData } from "./mockData";

const mockArticleData = articleMockData.results[0];

test("check renders of first article component", () => {
  render(<Article {...mockArticleData} />);

  const title = screen.getByText(mockArticleData.title);

  expect(title).toBeInTheDocument();
});

test("check renders of first article component", async () => {
  const { getByTestId } = render(
    <Article
      showArticleDetails={100000009583267}
      {...mockArticleData}
      handleArticleDetails={() => jest.fn()}
    />
  );

  fireEvent.click(getByTestId("article-id"));

  waitFor(() => {
    expect(getByTestId("article-detail")).toBeInTheDocument();
  });
});

test("check renders of article component", async () => {
  const { queryByTestId } = render(<Article />);

  expect(queryByTestId("article-id")).toBeInTheDocument();
});
