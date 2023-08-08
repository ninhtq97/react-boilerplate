import { INIT_META } from 'constants/state';
import { useState } from 'react';

const useMeta = () => {
  const [meta, setMeta] = useState(INIT_META);

  return { meta, setMeta };
};

export default useMeta;
