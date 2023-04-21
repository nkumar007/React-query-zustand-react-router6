import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY } from "../constants";
import APIClient from "../services/apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const apiClient = new APIClient<Todo>("/todos");
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, // 10s
  });
};

export default useTodos;
