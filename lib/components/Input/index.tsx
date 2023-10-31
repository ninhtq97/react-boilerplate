import { Eye, EyeOff } from 'components/Icon';
import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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

type TextareaAutosizeProps = {
  container?: string;
  minRows: number;
  maxRows: number;
} & Omit<React.ComponentProps<typeof Input>, 'tag'>;

export const TextareaAutosize = forwardRef<
  HTMLTextAreaElement,
  TextareaAutosizeProps
>(({ minRows, maxRows, container = 'body', ...props }, $ref) => {
  const [isClient, setIsClient] = useState(false);

  const $content = useRef<HTMLTextAreaElement | null>(null);
  const $innerRef = useMemo(
    () => (typeof $ref === 'function' ? { current: null } : $content),
    [$ref],
  );
  const $hiddenTextarea = React.useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const node = $innerRef.current;
    if (!node) return;

    const hiddenNode = $hiddenTextarea.current;
    if (!hiddenNode) return;

    const rowHeight = hiddenNode.scrollHeight;
    const maxHeight = maxRows * rowHeight;
    const height =
      maxHeight > node.scrollHeight ? node.scrollHeight : maxHeight;

    node.style.setProperty('height', `${height}px`, 'important');
  }, [$innerRef, maxRows, props.value]);

  return (
    <>
      <Input
        ref={
          typeof $ref === 'function'
            ? (current) => {
                $ref(current as typeof $content.current);
                $content.current = current as typeof $content.current;
              }
            : (($ref || $content) as React.RefObject<HTMLInputElement>)
        }
        tag={'textarea'}
        rows={minRows}
        {...props}
      />

      {isClient &&
        createPortal(
          <textarea
            className="!absolute !top-0 !right-0 !min-h-0 !max-h-none !h-0 !invisible !overflow-hidden !-z-[1000]"
            ref={$hiddenTextarea}
          />,
          document.querySelector(container)!,
        )}
    </>
  );
});

export { default as Checkbox } from './Checkbox';
export { default as File } from './File';
export { default as Range } from './Range';
export { default as Switch } from './Switch';
