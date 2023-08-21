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
      <label className={`picker-field ${error ? '!border-rose-500' : ''}`}>
        <Datepicker
          inputClassName={`placeholder:text-[15px] placeholder:leading-[22px] !pl-2 focus:ring-0 ${
            props.placeholder && props.value?.startDate ? '!pb-1 pt-4' : ''
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
