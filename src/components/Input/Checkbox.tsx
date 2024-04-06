import { forwardRef, useState } from 'react';
import { cn } from 'utils';
import { Check, Icon } from '../Icon';

type Props = {
  onChange?: (isChecked: boolean) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, 'onChange'>;

const Checkbox = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      disabled,
      checked: propsIsChecked,
      onChange: onChangeProps,
      ...props
    },
    $ref,
  ) => {
    const [isChecked, setIsChecked] = useState(!!propsIsChecked);

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
      <label className="checkbox" onClick={(e) => e.stopPropagation()}>
        <div className="checkbox__container">
          <input
            type="checkbox"
            className="checkbox__ipt"
            checked={checked}
            onChange={!disabled ? onChange : undefined}
            ref={$ref}
            {...props}
          />
          <div className={cn('checkbox__box', checked && 'checked', className)}>
            <Icon
              className={`checkbox__icon ${checked ? '' : 'invisible'}`}
              icon={<Check />}
            />
          </div>
        </div>
        {label && <div className="checkbox__label">{label}</div>}
      </label>
    );
  },
);

export default Checkbox;
