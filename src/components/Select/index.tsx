import { useDebounce } from 'hooks';
import { forwardRef, useEffect, useState } from 'react';
import { Option, Placement } from 'types';
import { cn, unique } from 'utils';
import { ChevronDown, Icon, Times } from '../Icon';
import Popover from '../Popover';
import Dropdown from './Dropdown';

type Props = {
  floating?: boolean;
  className?: string;
  popoverClassName?: string;
  multiple?: boolean;
  disabled?: boolean;
  filterSearch?: boolean;
  label?: string;
  value?: string | number | (string | number)[];
  placement?: Placement;
  options: Option[];
  loading?: boolean;
  required?: boolean;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  onChange: (selected: string | number | (string | number)[]) => void;
  keyword?: string;
  onSearch?: (keyword: string) => void;
};

const Select = forwardRef<HTMLDivElement, Props>(function Render(
  {
    floating,
    className,
    popoverClassName,
    multiple,
    disabled,
    loading = false,
    filterSearch = false,
    label,
    value,
    options: propsOptions,
    placeholder,
    placement = 'bottom-start',
    error,
    helperText,
    required,
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
      multiple
        ? unique([...selected.map((e) => e.value), option.value])
        : option.value,
    );
    setSelected((prev) => (multiple ? unique([...prev, option]) : [option]));
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
      className={cn(
        'select',
        floating && 'floating',
        multiple && 'multiple',
        disabled && 'disabled',
        (placeholder || selected.length) && 'has-value',
        error && 'has-error',
        !label && 'no-label',
      )}
      ref={$ref}
    >
      {label && (
        <div className="select-label">
          {label}
          {required && <span className="text-rose-500">*</span>}
        </div>
      )}

      <Popover
        className={cn('rounded-xl border-slate-400 !p-2', popoverClassName)}
        placement={placement}
        onClose={() => keyword && onChangeKeyword('')}
        renderLink={({ onClick, ref }) => (
          <>
            <div
              className={cn('select-container', className)}
              onClick={onClick}
              ref={ref as React.RefObject<HTMLDivElement>}
            >
              <div className="select-values">
                {selected.length > 0
                  ? selected.map((s) => (
                      <div className="select-value" key={s.value}>
                        <div className="select-value__content">
                          {s.icon}
                          <span className="">{s.label}</span>
                        </div>

                        {multiple && (
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
                      <span className="select-placeholder">{placeholder}</span>
                    )}
              </div>
              <div className="select-icon">
                <Icon
                  className="select-icon"
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
            loading={loading}
            filterSearch={filterSearch}
            searchValue={keyword}
            setSearchValue={onChangeKeyword}
          />
        )}
      />
    </div>
  );
});

export default Select;
