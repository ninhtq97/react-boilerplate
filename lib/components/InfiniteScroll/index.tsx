import { Icon, Spinner } from 'components/Icon';
import { PropsWithChildren, useCallback, useRef } from 'react';

type Props = {
  isLoading: boolean;
  hasMore: boolean;
  onNext: () => void;
  loader?: React.ReactNode;
} & PropsWithChildren;

const InfiniteScroll = ({ isLoading, hasMore, onNext, loader, children }) => {
  const observer = useRef<IntersectionObserver>();
  const $ref = useCallback(
    (node: HTMLAnchorElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onNext?.();
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, isLoading],
  );

  return (
    <>
      {children}
      {hasMore && (
        <Icon
          ref={$ref}
          className="infinite-loading justify-center"
          icon={hasMore && (loader || <Spinner className="animate-spin" />)}
        />
      )}
    </>
  );
};

export default InfiniteScroll;
