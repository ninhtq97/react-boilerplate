import { Icon, Spinner } from 'components/Icon';
import { useCallback, useEffect, useRef } from 'react';

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
  const $container = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (inverse && $container.current) {
      $container.current.scrollIntoView({ block: 'end', inline: 'nearest' });
    }
  }, [inverse, hasMore]);

  return (
    <>
      <div
        className={`infinite-scroll ${
          inverse ? 'flex-col-reverse' : 'flex-col'
        }${className ? ` ${className}` : ''}`}
        ref={$container}
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
