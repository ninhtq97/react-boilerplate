import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Icon, Spinner } from '../Icon';

type ButtonVariant = 'filled' | 'outlined';
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';
type ButtonSize = 'sm' | 'md' | 'lg';

type Props = {
  loading?: boolean;
  loadingIndicator?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
} & React.ComponentProps<'button'>;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      loading = false,
      loadingIndicator,
      children,
      variant = 'filled',
      color = 'primary',
      size = 'md',
      onClick,
      ...props
    },
    $ref,
  ) => {
    const mapColor = {
      primary: 'text-blue-500 hover:text-opacity-80',
      secondary: 'text-stone-300 hover:text-opacity-80',
      success: 'text-emerald-400 hover:text-opacity-80',
      error: 'text-red-500 hover:text-opacity-80',
      info: 'text-sky-500 hover:text-opacity-80',
      warning: 'text-amber-500 hover:text-opacity-80',
    };

    const mapSize = {
      sm: 'py-1 px-2 text-sm',
      md: 'py-2 px-4',
      lg: 'py-3 px-6 text-lg',
    };

    return (
      <button
        className={twMerge(
          'btn',
          variant,
          mapColor[color],
          mapSize[size],
          className,
        )}
        disabled={loading}
        onClick={loading ? undefined : onClick}
        {...props}
        ref={$ref}
      >
        {loading ? (
          <div
            className={twMerge(
              'flex items-center gap-2',
              variant === 'outlined'
                ? 'text-current'
                : [color === 'secondary' ? 'text-stone-800' : 'text-white'],
            )}
          >
            <Icon icon={<Spinner className="animate-spin" />} />
            {loadingIndicator}
          </div>
        ) : (
          <span
            className={twMerge(
              'btn__content',
              color === 'secondary'
                ? 'text-stone-800'
                : [variant === 'outlined' ? 'text-current' : 'text-white'],
            )}
          >
            {children}
          </span>
        )}
      </button>
    );
  },
);

export default Button;
