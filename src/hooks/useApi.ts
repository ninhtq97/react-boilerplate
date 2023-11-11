import { useCallback, useState } from 'react';
import { getErrorMessage, removeStored } from 'utils';
import useToast from './useToast';

const useApi = (redirectUrl: string, storeKey: string) => {
  // const navigate = useNavigate();
  const { onFire } = useToast();

  const [loading, setLoading] = useState(false);

  const onCallWithCatchError = useCallback(
    async <T extends Function>(callFn: T): Promise<T | null> => {
      try {
        setLoading(true);
        return await callFn();
      } catch (error: any) {
        let message = getErrorMessage(error);
        onFire('error', message);

        if (error.statusCode === 401 || error.message === 'Unauthorized') {
          // navigate(redirectUrl);
          removeStored(storeKey);
        }
      } finally {
        setLoading(false);
      }

      return null;
    },
    [],
  );

  return { onCallWithCatchError, loading };
};

export default useApi;
