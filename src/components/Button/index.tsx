import { forwardRef } from 'react';
import { cn } from 'utils';
import { Icon, Spinner } from '../Icon';

type ButtonVariant = 'filled' | 'outlined';

type Props = {
  asChild?: boolean;
  loading?: boolean;
  loadingIndicator?: string;
  variant?: ButtonVariant;
} & React.ComponentProps<'button'>;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      loading = false,
      loadingIndicator,
      asChild,
      children,
      variant = 'filled',
      onClick,
      ...props
    },
    $ref,
  ) => {
    return (
      <button
        className={cn('btn px-4 py-2', variant, className)}
        disabled={loading}
        onClick={loading ? undefined : onClick}
        {...props}
        ref={$ref}
      >
        {loading ? (
          <div className={cn('flex items-center gap-2')}>
            <Icon icon={<Spinner className="animate-spin" />} />
            {loadingIndicator}
          </div>
        ) : asChild ? (
          children
        ) : (
          <span
            className={cn('btn__content', variant === 'filled' && 'text-white')}
          >
            {children}
          </span>
        )}
      </button>
    );
  },
);

export default Button;
