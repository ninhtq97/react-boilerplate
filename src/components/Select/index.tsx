import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';
import { ReactComponent as Times } from 'assets/icons/times.svg';
import Icon from 'components/Icon';
import { useDebounce } from 'hooks';
import { forwardRef, useEffect, useState } from 'react';
import { Placement } from 'types';
import { unique } from 'utils';
import Popover from '../Popover';
import Dropdown from './Dropdown';

export type Option = {
  icon?: React.ReactNode;
  label: string;
  value: string | number;
  suffix?: string;
};

type Props = {
  className?: string;
  isMultiple?: boolean;
  isDisable?: boolean;
  isFilterSearch?: boolean;
  label?: string;
  value?: string | number | (string | number)[];
  placement?: Placement;
  options: Option[];
  isLoading?: boolean;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  onChange: (selected: string | number | (string | number)[]) => void;
  keyword?: string;
  onSearch?: (keyword: string) => void;
};

const Select = forwardRef<HTMLDivElement, Props>(function Render(
  {
    className,
    isMultiple,
    isDisable,
    isLoading = false,
    isFilterSearch = true,
    label,
    value,
    options: propsOptions,
    placeholder,
    placement = 'bottom-start',
    error,
    helperText,
    onChange,
    keyword,
    onSearch,
  },
  $ref,
) {
  const [selected, setSelected] = useState<Option[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const isControlled = !!onSearch;
  const debounceValue = useDebounce(isControlled ? keyword : searchValue, 300);

  useEffect(() => {
    let defaultSelected: Option[] = [];
    const isArray = Array.isArray(value);

    if (propsOptions.length) {
      const options = [...selected, ...propsOptions];

      const opts = isArray
        ? value.map((e) => options.find((x) => x.value === e))
        : [options.find((x) => x.value === value)];

      defaultSelected = unique(opts.filter((x) => x));
      setSelected(defaultSelected);
    }
  }, [propsOptions, value]);

  const selectOption = (option: Option) => {
    onChange(
      isMultiple
        ? unique([...selected.map((e) => e.value), option.value])
        : option.value,
    );
    setSelected((prev) => (isMultiple ? unique([...prev, option]) : [option]));
    debounceValue && setSearchValue('');
  };

  const removeSelected = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    option: Option,
  ) => {
    e.stopPropagation();

    const restSelected = selected.filter((x) => x.value !== option.value);
    setSelected(restSelected);
    onChange(restSelected.map((e) => e.value));
  };

  return (
    <div
      className={`select${isMultiple ? ' multiple' : ''}${
        isDisable ? ` disabled` : ''
      }${placeholder || selected.length ? ' has-value' : ''}${
        !label ? ' no-label' : ''
      }`}
      ref={$ref}
    >
      <Popover
        className="!p-2 border rounded-lg"
        placement={placement}
        renderLink={({ onClick, ref }) => (
          <>
            <div
              className={`select-container ${
                error ? 'text-rose-500 border-rose-500' : 'text-black-2'
              }${className ? ` ${className}` : ''}`}
              onClick={onClick}
              ref={ref as React.RefObject<HTMLDivElement>}
            >
              <div className="relative flex flex-col justify-center flex-1">
                {label && <div className="select-label">{label}</div>}

                <div className="select-values">
                  {selected.length > 0
                    ? selected.map((s, i) => (
                        <div className="select-value" key={s.value}>
                          <div className="select-value__content">
                            {s.icon}
                            <span className="">{s.label}</span>
                          </div>

                          {isMultiple && (
                            <Icon
                              className="select-value__remove items-center justify-center w-3 h-3"
                              tag="div"
                              icon={<Times />}
                              onClick={(e) => removeSelected(e, s)}
                            />
                          )}
                        </div>
                      ))
                    : placeholder && (
                        <span className="select-placeholder">
                          {placeholder}
                        </span>
                      )}
                </div>
              </div>
              <div className="flex gap-1">
                <span className="border-l"></span>
                <Icon
                  className="text-gray-7 items-center justify-center text-base w-6 h-6"
                  tag="div"
                  icon={<ChevronDown />}
                />
              </div>
            </div>
            {helperText && (
              <p className="text-xs text-rose-500 ml-2">{helperText}</p>
            )}
          </>
        )}
        renderContent={({ onClose }) => (
          <Dropdown
            isControlled={isControlled}
            value={selected}
            options={propsOptions}
            onChange={selectOption}
            deactivateDropdown={() => {
              onClose();
              setSearchValue('');
            }}
            isLoading={isLoading}
            isFilterSearch={isFilterSearch}
            searchValue={debounceValue}
            setSearchValue={isControlled ? onSearch : setSearchValue}
          />
        )}
      />
    </div>
  );
});

export default Select;
