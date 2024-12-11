import { useEffect, useState } from "react";

export function useFetchWithCache<T>(url: string, token: string, cacheKey: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Check localStorage for cached data
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        // Fetch from API
        const response = await fetch(url, {
          method: "GET",
          headers: {
            token,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        // Cache the data in localStorage
        localStorage.setItem(cacheKey, JSON.stringify(result));
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, token, cacheKey]);

  return { data, loading, error };
}
