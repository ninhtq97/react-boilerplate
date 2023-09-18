import { Eye, EyeOff } from 'components/Icon';
import { forwardRef, useState } from 'react';
import { End, Start } from 'types';

type Props = {
  floating?: boolean;
  containerClassName?: string;
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
      containerClassName,
      inputClassName,
      floating,
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
      <div
        className={`form-field ${error ? ' has-error' : ''}${
          placeholder || prefix || props.value?.toString().length
            ? ' has-value'
            : ''
        }${disabled ? ' disabled' : ''}${!label ? ' no-label' : ''}${
          floating ? ' floating' : ''
        }${Wrapper !== 'input' ? ' textarea' : ''}`}
      >
        {!floating && label && (
          <span className="label-field">
            {label}
            {props.required && <span className="text-rose-500">*</span>}
          </span>
        )}

        <div className={`text-field ${className || ''}`}>
          {icon && iconPosition === 'start' && (
            <div className="icon-field">{icon}</div>
          )}

          <label
            className={`ipt-field ${
              containerClassName ? ` ${containerClassName}` : ''
            }`}
          >
            {prefix && <div className="ipt-field__prefix">{prefix}</div>}
            {disabled ? (
              <p className="ipt" ref={$ref}>
                {props.value}
              </p>
            ) : (
              <Wrapper
                type="text"
                className={`ipt${inputClassName ? ` ${inputClassName}` : ''}`}
                ref={$ref}
                autoComplete="off"
                placeholder={placeholder}
                {...props}
              />
            )}

            {floating && label && (
              <span className="label-field">
                {label}
                {props.required && <span className="text-rose-500">*</span>}
              </span>
            )}
          </label>

          {icon && iconPosition === 'end' && (
            <div className="icon-field">{icon}</div>
          )}
        </div>
        {error && <p className="text-xs text-rose-500 ml-2">{helperText}</p>}
      </div>
    );
  },
);

export const InputPassword = forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>((props, $ref) => {
  const [hide, setHide] = useState(true);
  const onToggleHide = () => setHide(!hide);

  return (
    <Input
      type={hide ? 'password' : 'text'}
      {...props}
      ref={$ref}
      iconPosition={props.iconPosition || 'end'}
      icon={
        props.icon || hide ? (
          <Eye className="cursor-pointer fill-none" onClick={onToggleHide} />
        ) : (
          <EyeOff className="cursor-pointer fill-none" onClick={onToggleHide} />
        )
      }
    />
  );
});

export const ContentEditable = forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>(({ tag = 'span', ...props }, $ref) => {
  return (
    <Input
      ref={$ref}
      tag={tag}
      onBlur={props.onBlur || props.onChange}
      contentEditable={!props.disabled}
      dangerouslySetInnerHTML={{ __html: (props.value || '').toString() }}
      {...props}
    />
  );
});

export { default as Checkbox } from './Checkbox';
export { default as File } from './File';
export { default as Range } from './Range';
export { default as Switch } from './Switch';
