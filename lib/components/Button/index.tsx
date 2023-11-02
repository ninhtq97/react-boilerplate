import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Center, End, Start } from 'types';
import { Icon, Spinner } from '../Icon';

type ButtonLoadingPosition = Start | End | Center;
type ButtonVariant = 'filled' | 'outlined';
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

type Props = {
  loading?: boolean;
  loadingPosition?: ButtonLoadingPosition;
  loadingIndicator?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
} & React.ComponentProps<'button'>;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      loading = false,
      loadingPosition = 'start',
      loadingIndicator,
      children,
      variant = 'filled',
      color = 'primary',
      onClick,
      ...props
    },
    $ref,
  ) => {
    const mapClassname = {
      primary: 'text-blue-400 hover:text-opacity-80',
      secondary: 'text-gray-400 hover:text-opacity-80',
      success: 'text-emerald-400 hover:text-opacity-80',
      error: 'text-rose-500 hover:text-opacity-80',
      info: 'text-blue-500 hover:text-opacity-80',
      warning: 'text-orange-400 hover:text-opacity-80',
    };

    return (
      <button
        className={twMerge('btn', variant, className, mapClassname[color])}
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
