import { ReactComponent as Spinner } from 'assets/icons/spinner.svg';
import { ComponentProps, forwardRef } from 'react';
import Icon from '../Icon';

type Props = {
  icon?: React.ReactNode;
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
      icon,
      loading = false,
      loadingPosition = 'start',
      loadingIndicator,
      children,
      variant = 'contained',
      color = 'success',
      onClick,
      ...props
    },
    $ref,
  ) => {
    const mapClassname = {
      primary: 'text-blue-4',
      secondary: 'text-gray-15-2',
      success: 'text-green-0',
      error: 'text-red-15',
      info: 'text-blue-1',
      warning: 'text-orange-15',
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
                ? 'text-black-2'
                : 'text-white'
            }`}
          >
            <Icon icon={<Spinner className="animate-spin" />} />
            {loadingIndicator}
          </div>
        ) : (
          <span className="btn__content">
            {icon && <span className="btn__icon">{icon}</span>}
            <span className="btn__text">{children}</span>
          </span>
        )}
      </button>
    );
  },
);

export default Button;
