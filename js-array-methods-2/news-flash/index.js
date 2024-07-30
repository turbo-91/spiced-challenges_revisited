import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((news) => {
  return news.categories.includes("politics");
});

// Part 2 - start here
const sortedNews = filteredNews;

sortedNews.sort((a, b) => {
  if (a.body.length < b.body.length) {
    return -1;
  }
  if (a.body.length > b.body.length) {
    return 1;
  }
  return 0;
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
