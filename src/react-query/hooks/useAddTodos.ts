import { useMutation, useQueryClient } from "@tanstack/react-query";

import APIClient from "../services/apiClient";
import { CACHE_KEY } from "../constants";
import { Todo } from "./useTodos";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodos = (onAddTodo: () => void) => {
  const apiClient = new APIClient<Todo>("/todos");
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) => apiClient.postData(todo),

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY, (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      onAddTodo();

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
      // Two ways to update data
      //Approach One: Invalidating the Cache
      // queryClient.invalidateQueries({
      //   queryKey: ['todos']
      // })

      //Approach Two: Update Query data
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY, context.previousTodos);
    },
  });
};

export default useAddTodos;
