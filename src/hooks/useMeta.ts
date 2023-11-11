import { INIT_META } from 'constants/state';
import { useCallback, useState } from 'react';
import { TMeta } from 'types';
import { excludeEmptyValue } from 'utils';

const useMeta = (state?: Partial<TMeta>) => {
  const [meta, setMeta] = useState<TMeta>(
    excludeEmptyValue({ ...INIT_META, ...state }),
  );

  const onChangeMeta = useCallback((data: Partial<TMeta>) => {
    setMeta((prev) => excludeEmptyValue({ ...prev, ...data }));
  }, []);

  return { meta, onChangeMeta };
};

export default useMeta;
