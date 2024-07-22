import { useEffect, useState } from "react";
import "./App.css";
import Article from "./Article";

function App() {
  const [articlesData, setArticlesData] = useState([]);
  const [showArticleDetails, setShowArticleDetails] = useState("");

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=NmSJk3uGG4A0d4FwpcHlmTDArGSIP625`
    )
      .then((res) => res.json())
      .then(({ results }) => setArticlesData(results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>NY Times Most Popular Articles </h1>
      <ul
        style={{
          textAlign: "left",
          cursor: "pointer",
          display: "inline-block",
          width: "80%",
        }}
      >
        {articlesData.length > 0 &&
          articlesData?.map((el) => (
            <li
              key={el.id}
              style={{ maxWidth: "80%" }}
              data-testid="articles-list"
            >
              <Article
                {...el}
                showArticleDetails={showArticleDetails}
                handleArticleDetails={() => setShowArticleDetails(el.id)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
