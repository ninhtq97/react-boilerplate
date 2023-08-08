import { forwardRef, useState } from 'react';

type Props = {
  onChange?: (isChecked: boolean) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, 'onChange'>;

const Switch = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      checked: propsIsChecked,
      onChange: onChangeProps,
      disabled,
      ...props
    },
    $ref,
  ) => {
    const [isChecked, setIsChecked] = useState(false);

    const isControlled = typeof propsIsChecked === 'boolean';
    const checked = isControlled ? propsIsChecked : isChecked;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const el = e.currentTarget;

      if (!isControlled) {
        setIsChecked(!isChecked);
      } else {
        onChangeProps?.(el.checked);
      }
    };

    return (
      <label
        className={`switch${checked ? ' active' : ''}${
          disabled ? ' disabled' : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`switch__container ${className || ''}`}>
          <input
            type="checkbox"
            className="switch__ipt"
            checked={checked}
            onChange={!disabled ? onChange : undefined}
            ref={$ref}
            {...props}
          />
          <div className="switch__thumb"></div>
        </div>
      </label>
    );
  },
);

export default Switch;
