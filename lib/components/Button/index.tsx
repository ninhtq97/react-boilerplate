import { ComponentProps, forwardRef } from 'react';
import { Icon, Spinner } from '../Icon';

type Props = {
  loading?: boolean;
  loadingPosition?: 'start' | 'end' | 'center';
  loadingIndicator?: string;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
} & ComponentProps<'button'>;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      loading = false,
      loadingPosition = 'start',
      loadingIndicator,
      children,
      variant = 'contained',
      color = 'primary',
      onClick,
      ...props
    },
    $ref,
  ) => {
    const mapClassname = {
      primary: 'text-blue-500',
      secondary: 'text-gray-500',
      success: 'text-emerald-500',
      error: 'text-rose-600',
      info: 'text-blue-600',
      warning: 'text-orange-400',
    };

    return (
      <button
        className={`btn${variant === 'outlined' ? ` ${variant}` : ''}${
          className ? ` ${className}` : ''
        } ${mapClassname[color]}`}
        disabled={loading}
        onClick={loading ? undefined : onClick}
        {...props}
        ref={$ref}
      >
        {loading ? (
          <div
            className={`flex items-center gap-2 ${
              loading && variant === 'outlined'
                ? mapClassname[color]
                : color === 'secondary'
                ? 'text-stone-800'
                : 'text-white'
            }`}
          >
            <Icon icon={<Spinner className="animate-spin" />} />
            {loadingIndicator}
          </div>
        ) : (
          <span className="btn__content">{children}</span>
        )}
      </button>
    );
  },
);

export default Button;
