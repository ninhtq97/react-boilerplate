import { DATE_FORMAT } from 'constants/date';
import Datepicker from 'react-tailwindcss-datepicker';

type Props = {
  error?: boolean;
  helperText?: string;
} & React.ComponentProps<typeof Datepicker>;

const CustomDatePicker: React.FC<Props> = ({ error, helperText, ...props }) => {
  return (
    <div
      className={`form-picker${props.value?.startDate ? ' has-value' : ''}${
        props.disabled ? ' disabled' : ''
      }`}
    >
      <label className={`picker-field ${error ? 'text-rose-500' : ''}`}>
        <Datepicker
          inputClassName={`${
            error ? 'placeholder:text-rose-500' : ''
          } placeholder:text-[.9375rem] placeholder:leading-[1.375rem] !pl-3 focus:ring-0 ${
            props.placeholder && props.value?.startDate
              ? '!pb-[.625rem] pt-6'
              : 'py-[1.063rem]'
          }${
            props.disabled
              ? ' !bg-gray-100 disabled:!opacity-100 font-normal text-stone-800'
              : ''
          }`}
          displayFormat={DATE_FORMAT.PICKER}
          {...props}
        />
        <span className="label-picker">{props.placeholder}</span>
      </label>
      {error && <p className="text-xs text-rose-500 ml-2">{helperText}</p>}
    </div>
  );
};

export default CustomDatePicker;
