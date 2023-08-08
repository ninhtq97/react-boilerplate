import { ROUTE_PATHS } from 'constants/route';
import { STORE_KEYS } from 'constants/storage';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getErrorMessage, removeStored } from 'utils';
import useToast from './useToast';

const useApi = () => {
  const navigate = useNavigate();
  const { onFire } = useToast();

  const [loading, setLoading] = useState(false);

  const onCallWithCatchError = useCallback(
    async <T extends Function>(callFn: T): Promise<T | null> => {
      try {
        setLoading(true);
        return await callFn();
      } catch (error: any) {
        console.log('Catch error:', error);
        let message = getErrorMessage(error);
        console.log('Catch message:', message);
        onFire('error', message);

        if (error.statusCode === 401 || error.message === 'Unauthorized') {
          navigate(ROUTE_PATHS.AUTH.SIGN_IN);
          removeStored(STORE_KEYS.AUTH);
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
