import { Icon, Spinner } from 'components/Icon';
import { useCallback, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  inverse?: boolean;
  isLoading: boolean;
  hasMore: boolean;
  onNext: () => void;
  loader?: React.ReactNode;
} & React.HTMLProps<HTMLElement>;

const InfiniteScroll: React.FC<Props> = ({
  className,
  inverse,
  isLoading,
  hasMore,
  onNext,
  loader,
  children,
}) => {
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
      <div
        className={twMerge('infinite-scroll', inverse && ' inverse', className)}
      >
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
