import { Icon, Spinner } from 'components/Icon';
import { useCallback, useRef } from 'react';

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
        className={`infinite-scroll${inverse ? ' inverse' : ''}${
          className ? ` ${className}` : ''
        }`}
      >
        {children}
        {hasMore && (
          <Icon
            ref={$ref}
            className="infinite-loading justify-center"
            icon={hasMore && (loader || <Spinner className="animate-spin" />)}
          />
        )}
      </div>
    </>
  );
};

export default InfiniteScroll;
