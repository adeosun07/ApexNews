import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  const [hasMore, setHasMore] = useState(true);

  const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_NEWS_API_BASE_URL,
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_NEWS_API_KEY}`,
    },
  });

  const loadInitial = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/top-headlines", {
        params: {
          country: "us",
          sources: "bbc-news",
          pageSize: 3,
          page: 1,
        },
      });
      setNews(res.data.articles);
      setPage(1);
      setHasMore(res.data.articles.length === 3);
      setIsSearching(false);
      setSearchParams({});
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const searchNews = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/everything", {
        params: {
          ...params,
          pageSize: 10,
          page: 1,
        },
      });
      setNews(res.data.articles);
      setPage(1);
      setHasMore(res.data.articles.length === 10);
      setIsSearching(true);
      setSearchParams(params);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const endpoint = isSearching ? "/everything" : "/top-headlines";
      const params = isSearching
        ? {
            ...searchParams,
            page: page + 1,
            pageSize: 10,
          }
        : {
            country: "us",
            sources: "bbc-news",
            page: page + 1,
            pageSize: 3,
          };
      const res = await api.get(endpoint, { params });
      setNews((prev) => [...prev, ...res.data.articles]);
      setPage((prev) => prev + 1);
      setHasMore(res.data.articles.length === (isSearching ? 10 : 3));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitial();
  }, []);

  return (
    <NewsContext.Provider
      value={{ news, loading, error, searchNews, loadMore, hasMore }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  return useContext(NewsContext);
}
