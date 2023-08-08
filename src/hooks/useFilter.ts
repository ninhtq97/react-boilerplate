import { INIT_FILTER } from 'constants/state';
import { useCallback, useState } from 'react';
import { TFilter } from 'types';
import { excludeEmptyValue } from 'utils';

const useFilter = (state?: Partial<TFilter>) => {
  const [filter, setFilter] = useState<TFilter>(
    excludeEmptyValue({ ...INIT_FILTER, ...state }),
  );

  const onChangeFilter = useCallback((data: Partial<TFilter>) => {
    setFilter((prev) => excludeEmptyValue({ ...prev, ...data }));
  }, []);

  return { filter, onChangeFilter };
};

export default useFilter;
