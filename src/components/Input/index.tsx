import { Eye, EyeOff } from 'components/Icon';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { End, Start } from 'types';
import { cn } from 'utils';

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
      required,
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
        className={cn(
          'form-field',
          error && 'has-error',
          (placeholder || prefix || props.value?.toString().length) &&
            'has-value',
          disabled && 'disabled',
          !label && 'no-label',
          floating && 'floating',
          Wrapper !== 'input' && 'textarea',
        )}
      >
        {!floating && label && (
          <span className="label-field">
            {label}
            {required && <span className="text-rose-500">*</span>}
          </span>
        )}

        <div className={cn('text-field', className)}>
          {icon && iconPosition === 'start' && (
            <div className="icon-field">{icon}</div>
          )}

          <label className={cn('ipt-field', containerClassName)}>
            {prefix && <div className="ipt-field__prefix">{prefix}</div>}
            {disabled ? (
              <p className="ipt" ref={$ref}>
                {props.value || (
                  <span className="ipt__placeholder">{placeholder}</span>
                )}
              </p>
            ) : (
              <Wrapper
                type="text"
                className={cn('ipt', inputClassName)}
                ref={$ref}
                autoComplete="off"
                placeholder={placeholder}
                {...props}
              />
            )}

            {floating && label && (
              <span className="label-field">
                {label}
                {required && <span className="text-rose-500">*</span>}
              </span>
            )}
          </label>

          {icon && iconPosition === 'end' && (
            <div className="icon-field">{icon}</div>
          )}
        </div>
        {error && <p className="ml-2 text-xs text-rose-500">{helperText}</p>}
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
  minRows?: number;
  maxRows?: number;
} & Omit<React.ComponentProps<typeof Input>, 'tag'>;

export const TextareaAutosize = forwardRef<
  HTMLTextAreaElement,
  TextareaAutosizeProps
>(function Render(
  { minRows = 1, maxRows = Infinity, container = 'body', ...props },
  $ref,
) {
  const $content = useRef<HTMLTextAreaElement | null>(null);
  const $hiddenTextarea = useRef<HTMLTextAreaElement | null>(null);
  const $heightRef = useRef(0);

  const getSizing = (node: HTMLElement) => {
    const style = window.getComputedStyle(node);
    if (!style) return;

    const widthSize =
      parseFloat(style.width!) +
      parseFloat(style.borderRightWidth!) +
      parseFloat(style.borderLeftWidth!) +
      parseFloat(style.paddingRight!) +
      parseFloat(style.paddingLeft!) +
      'px';

    const paddingSize =
      parseFloat(style.paddingBottom) + parseFloat(style.paddingTop);
    const borderSize =
      parseFloat(style.borderBottomWidth) + parseFloat(style.borderTopWidth);

    return { style, widthSize, paddingSize, borderSize };
  };

  useEffect(() => {
    const node = $content.current;
    if (!node) return;

    const hiddenNode = $hiddenTextarea.current;
    if (!hiddenNode) return;

    const nodeSizing = getSizing(node);
    if (!nodeSizing) return;

    const { widthSize, paddingSize, borderSize } = nodeSizing;

    const defaultValue = 'x';
    hiddenNode.style.setProperty('width', widthSize, 'important');
    hiddenNode.value = node.value || node.placeholder || defaultValue;
    let height = hiddenNode.scrollHeight;

    hiddenNode.value = defaultValue;
    const rowHeight = hiddenNode.scrollHeight - paddingSize;

    const minHeight = minRows * rowHeight + paddingSize + borderSize;
    height = Math.max(minHeight, height);
    const maxHeight = maxRows * rowHeight + paddingSize + borderSize;
    height = Math.min(maxHeight, height);

    if ($heightRef.current !== height) {
      $heightRef.current = height;
      node.style.setProperty('height', `${height}px`, 'important');
    }
  }, [maxRows, minRows, props.value]);

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

      {createPortal(
        <textarea
          className="!pointer-events-none !invisible !absolute !right-0 !top-0 !-z-[1000] !h-0 !max-h-none !min-h-0 !overflow-hidden !leading-snug"
          ref={$hiddenTextarea}
          defaultValue={props.value || props.placeholder || 'x'}
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
