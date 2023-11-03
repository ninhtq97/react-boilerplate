import { useCallback, useState } from 'react';

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onCallWithCatchError = useCallback(
    async <T extends Function>(callFn: T): Promise<T> => {
      try {
        setIsLoading(true);
        return await callFn();
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return { isLoading, onCallWithCatchError };
};

export default useApi;
