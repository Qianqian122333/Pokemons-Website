import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Color {
  name: string;
  url: string;
}
interface FetchColorsResponse {
  count: number;
  results: Color[];
}
const useColors = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchColorsResponse>("/pokemon-color", { signal: controller.signal })
      .then((response) => {
        setColors(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name === "CanceledError") return;
        setError(error.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { colors, error, isLoading };
};
export default useColors;
