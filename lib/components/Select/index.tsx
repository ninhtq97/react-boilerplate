import { useDebounce } from 'hooks';
import { forwardRef, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Option, Placement } from 'types';
import { unique } from 'utils';
import { ChevronDown, Icon, Times } from '../Icon';
import Popover from '../Popover';
import Dropdown from './Dropdown';

type Props = {
  className?: string;
  popoverClassName?: string;
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
    popoverClassName,
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
    keyword: propsKeyword = '',
    onSearch,
  },
  $ref,
) {
  const [selected, setSelected] = useState<Option[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const isControlled = !!onSearch;
  const keyword = isControlled ? propsKeyword : searchValue;
  const debounceValue = useDebounce(keyword, 300);
  const options = [...selected, ...propsOptions];

  useEffect(() => {
    let defaultSelected: Option[] = [];
    const isArray = Array.isArray(value);

    if (propsOptions.length) {
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

  const onChangeKeyword = isControlled ? onSearch : setSearchValue;

  return (
    <div
      className={twMerge(
        'select',
        isMultiple && 'multiple',
        isDisable && 'disabled',
        placeholder || (selected.length && 'has-value'),
        error && 'has-error',
        !label && 'no-label',
      )}
      ref={$ref}
    >
      <Popover
        className={twMerge(
          'rounded-xl border-slate-400 !p-2',
          popoverClassName,
        )}
        placement={placement}
        onClose={() => keyword && onChangeKeyword('')}
        renderLink={({ onClick, ref }) => (
          <>
            <div
              className={twMerge('select-container', className)}
              onClick={onClick}
              ref={ref as React.RefObject<HTMLDivElement>}
            >
              <div className="relative flex flex-1 flex-col justify-center">
                {label && <div className="select-label">{label}</div>}

                <div className="select-values">
                  {selected.length > 0
                    ? selected.map((s) => (
                        <div className="select-value" key={s.value}>
                          <div className="select-value__content">
                            {s.icon}
                            <span className="">{s.label}</span>
                          </div>

                          {isMultiple && (
                            <Icon
                              className="select-value__remove"
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
                {/* <span className="border-l"></span> */}
                <Icon
                  className="h-6 w-6 items-center justify-center text-base text-slate-400"
                  tag="div"
                  icon={<ChevronDown />}
                />
              </div>
            </div>
            {helperText && (
              <p className="ml-2 text-xs text-rose-500">{helperText}</p>
            )}
          </>
        )}
        renderContent={({ onClose }) => (
          <Dropdown
            isControlled={isControlled}
            value={selected}
            options={propsOptions}
            onChange={selectOption}
            deactivateDropdown={onClose}
            isLoading={isLoading}
            isFilterSearch={isFilterSearch}
            searchValue={keyword}
            setSearchValue={onChangeKeyword}
          />
        )}
      />
    </div>
  );
});

export default Select;
