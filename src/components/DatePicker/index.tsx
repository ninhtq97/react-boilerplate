import { DATE_FORMAT } from 'constants/date';
import Datepicker from 'react-tailwindcss-datepicker';
import { cn } from 'utils';

type Props = {
  floating?: boolean;
  label?: string;
  error?: boolean;
  helperText?: string;
} & React.ComponentProps<typeof Datepicker>;

const CustomDatePicker: React.FC<Props> = ({
  floating,
  label,
  error,
  helperText,
  ...props
}) => {
  return (
    <div
      className={cn(
        'form-picker',
        floating && 'floating',
        props.value?.startDate && 'has-value',
        props.disabled && 'disabled',
      )}
    >
      {label && <div className="label-picker">{label}</div>}

      <label className={cn('picker-field', error && 'text-rose-500')}>
        <Datepicker
          inputClassName={cn(
            'relative transition-all duration-300 pr-14 w-full rounded-lg font-light text-sm placeholder-gray-400 placeholder:text-[.9375rem] placeholder:leading-[1.375rem] pl-3 focus:ring-0',
            error && 'placeholder:text-rose-500',
            floating
              ? label && props.value?.startDate
                ? 'pb-[.625rem] pt-6'
                : 'py-[1.063rem]'
              : 'py-4',
            props.disabled &&
              'disabled:!opacity-100 font-normal text-stone-800',
          )}
          displayFormat={DATE_FORMAT.PICKER}
          {...props}
        />
      </label>
      {error && <p className="ml-2 text-xs text-rose-500">{helperText}</p>}
    </div>
  );
};

export default CustomDatePicker;
