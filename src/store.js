export function useStoreContext(context, key = "state") {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}
