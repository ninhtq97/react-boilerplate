import { INIT_FILTER } from 'constants/state';
import { useCallback, useState } from 'react';
import { TFilter } from 'types';
import { excludeEmptyValue } from 'utils';

const useFilter = <T extends Object>(state: Partial<T> = {}) => {
  const [filter, setFilter] = useState<TFilter>(
    excludeEmptyValue({ ...INIT_FILTER, ...state }),
  );

  const onChangeFilter = useCallback((data: Partial<typeof filter>) => {
    setFilter((prev) => excludeEmptyValue({ ...prev, ...data }));
  }, []);

  return { filter, onChangeFilter };
};

export default useFilter;
