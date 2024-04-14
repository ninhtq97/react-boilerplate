import { PAGE } from 'constants/common';
import { useEffect, useState } from 'react';
import { Option, TFilter } from 'types';
import { ArrowLeft, ArrowRight, Icon } from '../Icon';
import Select from '../Select';
import Item from './Item';

const SIZE_OPTIONS: Option[] = [10, 25, 50, 100].map((size) => ({
  label: size.toString(),
  value: size,
}));

type Props = {
  current: number;
  currentSize?: number;
  total: number;
  totalItem: number;
  onChange: (attrs: Partial<TFilter>) => void;
  withChangeSize?: boolean;
  sizeLable?: string;
};

const Pagination: React.FC<Props> = ({
  current,
  currentSize = PAGE.SIZE,
  total,
  totalItem,
  onChange,
  withChangeSize = true,
  sizeLable = `Hiển thị từ ${(current - 1) * currentSize + 1} đến ${
    totalItem > (current - 1) * currentSize + currentSize
      ? (current - 1) * currentSize + currentSize
      : totalItem
  } trên tổng số ${totalItem} bản ghi`,
}) => {
  const [nums, setNums] = useState<number[]>([]);

  useEffect(() => {
    const PAGINATIONS: number[] = [];

    for (let i = 1; i <= total; i++) {
      if (i >= current - 2 && i < current + 3) {
        PAGINATIONS.push(i);
      }
    }

    setNums(PAGINATIONS);
  }, [current, total]);

  const goToPage = (number: number) => {
    onChange({ page: number });
  };

  const onChangeSize = (number: number) => {
    onChange({ page: PAGE.NUMBER, take: number });
  };

  return (
    <div className="pagination">
      {withChangeSize && (
        <div className="pagination-size">
          <p className="pagination-size__label">{sizeLable}</p>
          <div className="pagination-size__select">
            <Select
              value={currentSize}
              onChange={(selected) =>
                onChangeSize(Array.isArray(selected) ? +selected[0] : +selected)
              }
              options={SIZE_OPTIONS}
            />
          </div>
        </div>
      )}
      <div
        className={`pagination-container ${
          !withChangeSize ? 'justify-center' : ''
        }`}
      >
        {current > 1 && (
          <Item current={current} number={1} onClick={() => goToPage(1)}>
            <Icon icon={<ArrowLeft />} />
          </Item>
        )}

        {nums.map((number) => (
          <Item
            key={number}
            current={current}
            number={number}
            onClick={() => goToPage(number)}
          />
        ))}

        {total > 0 && current !== total && (
          <Item
            current={current}
            number={total}
            onClick={() => goToPage(total)}
          >
            <Icon icon={<ArrowRight />} />
          </Item>
        )}
      </div>
    </div>
  );
};

export default Pagination;
