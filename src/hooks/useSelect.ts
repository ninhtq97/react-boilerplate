import { useState } from 'react';

const useSelect = () => {
  const [isLoading, setIsLoading] = useState(false);

  return { isLoading };
};

export default useSelect;
