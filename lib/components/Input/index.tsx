import { Eye, EyeOff } from 'components/Icon';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { End, Start } from 'types';
import { Icon } from '../Icon';

type Props = {
  floating?: boolean;
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
      floating,
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
            <div className="icon-field">
              <Icon icon={icon} />
            </div>
          )}

          <label className="ipt-field">
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
            <div className="icon-field">
              <Icon icon={icon} />
            </div>
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
  HTMLElement,
  React.ComponentProps<typeof Input>
>((props, $ref) => {
  const $content = useRef<HTMLElement | null>(null);

  const replaceCaret = (el: HTMLElement) => {
    // Place the caret at the end of the element
    const target = document.createTextNode('');
    el.appendChild(target);
    // do not move caret if element was not focused
    const isTargetFocused = document.activeElement === el;
    if (target !== null && target.nodeValue !== null && isTargetFocused) {
      var sel = window.getSelection();
      if (sel !== null) {
        var range = document.createRange();
        range.setStart(target, target.nodeValue.length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      if (el instanceof HTMLElement) el.focus();
    }
  };

  useEffect(() => {
    if (!$content.current) return;
    replaceCaret($content.current);
  }, [props.value]);

  return (
    <Input
      ref={(current) => {
        typeof $ref === 'function'
          ? $ref(current)
          : $ref && ($ref.current = current);
        $content.current = current;
      }}
      onInput={props.onChange}
      onBlur={props.onBlur || props.onChange}
      onKeyUp={props.onKeyUp || props.onChange}
      onKeyDown={props.onKeyDown || props.onChange}
      dangerouslySetInnerHTML={{ __html: (props.value || '').toString() }}
      {...props}
    />
  );
});

export { default as Checkbox } from './Checkbox';
export { default as File } from './File';
export { default as Range } from './Range';
export { default as Switch } from './Switch';
