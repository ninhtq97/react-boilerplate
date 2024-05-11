import { Icon, Spinner } from 'components/Icon';
import { useCallback, useRef } from 'react';
import { cn } from 'utils';

type Props = {
  inverse?: boolean;
  loading: boolean;
  hasMore: boolean;
  onNext: () => void;
  loader?: React.ReactNode;
} & React.HTMLProps<HTMLElement>;

const InfiniteScroll: React.FC<Props> = ({
  className,
  inverse,
  loading,
  hasMore,
  onNext,
  loader,
  children,
}) => {
  const observer = useRef<IntersectionObserver>();
  const $ref = useCallback(
    (node: HTMLAnchorElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore) onNext?.();
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loading],
  );

  return (
    <>
      <div className={cn('infinite-scroll', inverse && ' inverse', className)}>
        {children}
        {hasMore && (
          <Icon
            ref={$ref}
            className="infinite-loading"
            icon={loader || <Spinner className="animate-spin" />}
          />
        )}
      </div>
    </>
  );
};

export default InfiniteScroll;
