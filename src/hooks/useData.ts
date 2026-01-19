import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[] | any>([]); // 支持返回整个对象
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T> | any>(endpoint, { signal: controller.signal })
      .then((response) => {
        // 如果有 results 字段，提取它；否则返回整个 data
        const responseData = response.data.results || response.data;
        setData(responseData);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name === "CanceledError") return;
        setError(error.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, [endpoint]);
  return { data, error, isLoading };
};
export default useData;
