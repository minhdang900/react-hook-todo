import { useEffect } from "react";

export function useStoreContext(context, key = "state") {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}

export function storeReducer([state, dispatch], key = "state") {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, dispatch];
}
