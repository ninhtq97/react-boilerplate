import { forwardRef } from 'react';
import { End, Start } from 'types';
import { Icon } from '../Icon';

type Props = {
  inputClassName?: string;
  tag?: React.ElementType;
  error?: boolean;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: Start | End;
  prefix?: string;
} & React.HTMLProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      inputClassName,
      tag: Wrapper = 'input',
      label,
      icon,
      iconPosition = 'start',
      prefix,
      disabled,
      error,
      helperText,
      placeholder,
      ...props
    },
    $ref,
  ) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <div
          className={`form-field ${className || ''}${
            error ? '!border-rose-500 text-rose-500' : 'text-black-2'
          }${
            placeholder || prefix || props.value?.toString().length
              ? ' has-value'
              : ''
          }${disabled ? ' disabled' : ''}${!label ? ' no-label' : ''}`}
        >
          {icon && iconPosition === 'start' && (
            <div className="icon-field">
              <Icon icon={icon} />
              <span className="border-r"></span>
            </div>
          )}

          <label className={`text-field`}>
            {prefix && <div className="text-field__prefix">{prefix}</div>}
            {disabled ? (
              <p className="ipt" ref={$ref}>
                {props.value}
              </p>
            ) : (
              <Wrapper
                type="text"
                className={`ipt ${inputClassName ? ` ${inputClassName}` : ''}`}
                ref={$ref}
                autoComplete="off"
                placeholder={placeholder}
                {...props}
              />
            )}

            {label && (
              <span className="label-field">
                {label}
                {props.required && <span className="text-red-15">*</span>}
              </span>
            )}
          </label>

          {icon && iconPosition === 'end' && (
            <div className="icon-field">
              <span className="border-l"></span>
              <Icon icon={icon} />
            </div>
          )}
        </div>
        {error && <p className="text-xs text-rose-500 ml-2">{helperText}</p>}
      </div>
    );
  },
);

export { default as Checkbox } from './Checkbox';
export { default as File } from './File';
export { default as Password } from './Password';
export { default as Range } from './Range';
export { default as Switch } from './Switch';
