import { useCallback } from 'react';
import { Option } from '.';
import { Icon, Search, Spinner } from '../Icon';
import { Input } from '../Input';

type Props = {
  isControlled: boolean;
  value: Option[];
  options: Option[];
  onChange: (selected: Option) => void;
  deactivateDropdown: () => void;
  isLoading: boolean;
  isFilterSearch: boolean;
  searchValue: string;
  setSearchValue: (keyword: string) => void;
};

const Dropdown: React.FC<Props> = ({
  isControlled,
  value,
  options,
  onChange,
  deactivateDropdown,
  isLoading,
  isFilterSearch,
  searchValue,
  setSearchValue,
}) => {
  const selectOptionValue = (optionValue: Option) => {
    onChange(optionValue);
    deactivateDropdown();
  };

  const removeSelectedOptions = (options: Option[]) => {
    return options.filter(
      (option) => !value.find((x) => x.value === option.value),
    );
  };

  const optionsFilteredBySearchValue = options.filter((option: Option) =>
    !isControlled
      ? option.label
          .toString()
          .toLowerCase()
          .includes((searchValue || '').toLowerCase())
      : options,
  );

  const filteredOptions = removeSelectedOptions(optionsFilteredBySearchValue);

  const onChangeKeyword = useCallback(
    (newValue: string) => {
      setSearchValue(newValue);
    },
    [setSearchValue],
  );

  return (
    <div className="select-dropdown">
      {isFilterSearch && (
        <Input
          placeholder="Tìm kiếm..."
          value={searchValue}
          icon={<Search className="text-neutral-500" />}
          onChange={(e) => {
            const newValue = e.currentTarget.value;
            onChangeKeyword(newValue);
          }}
        />
      )}

      <div className="options">
        {isLoading ? (
          <div className="flex items-center justify-center gap-2 py-2 text-neutral-500">
            <Icon icon={<Spinner className="animate-spin" />} />
            <span className="text-sm">Loading...</span>
          </div>
        ) : filteredOptions.length ? (
          filteredOptions.map((option) => (
            <div
              className="option"
              onClick={() => selectOptionValue(option)}
              key={option.value}
            >
              <div className="flex items-center gap-2">
                {option.icon}
                <span className="option-value">{option.label}</span>
              </div>
              {option.suffix && (
                <span className="text-xs text-zinc-400">{option.suffix}</span>
              )}
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center text-sm text-neutral-500">
            Không tìm thấy dữ liệu
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
