import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");

  const BASE_URL = process.env.EXPO_PUBLIC_NEWS_API_BASE_URL;
  const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;

  const fetchNews = async (
    pageNumber = 1,
    replace = false,
    category = selectedCategory
  ) => {
    try {
      const res = await axios.get(`${BASE_URL}/top-headlines`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          category: category,
          page: pageNumber,
          pageSize: 10,
        },
      });

      const articles = res.data.articles || [];

      setHasMore(articles.length > 0);

      setNews((prev) => (replace ? articles : [...prev, ...articles]));
      setPage(pageNumber);
    } catch (e) {
      setError(e.message);
    }
  };

  // Initial load
  useEffect(() => {
    setLoading(true);
    fetchNews(1, true).finally(() => setLoading(false));
  }, []);

  const refreshNews = async () => {
    setRefreshing(true);
    await fetchNews(1, true);
    setRefreshing(false);
  };

  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    await fetchNews(page + 1);
    setLoading(false);
  };

  const changeCategory = async (category) => {
    setSelectedCategory(category);
    setPage(1);
    setHasMore(true);
    setLoading(true);
    await fetchNews(1, true, category);
    setLoading(false);
  };

  const addToFavorites = (article) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.url === article.url)) {
        return prev; // Already in favorites
      }
      return [...prev, article];
    });
  };

  const removeFromFavorites = (articleUrl) => {
    setFavorites((prev) => prev.filter((fav) => fav.url !== articleUrl));
  };

  const isFavorite = (articleUrl) => {
    return favorites.some((fav) => fav.url === articleUrl);
  };

  return (
    <NewsContext.Provider
      value={{
        news,
        loading,
        error,
        refreshing,
        refreshNews,
        loadMore,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        selectedCategory,
        changeCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  return useContext(NewsContext);
}
