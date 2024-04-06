import { forwardRef, useState } from 'react';
import { cn } from 'utils';

type Props = {
  onChange?: (checked: boolean) => void;
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
        className={cn(
          'switch',
          checked && 'active',
          disabled && 'disabled',
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="switch__container">
          <input
            type="checkbox"
            className="switch__ipt"
            checked={checked}
            onChange={!disabled ? onChange : () => {}}
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
