import { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSistrix,
  FaTimes,
} from 'react-icons/fa';
import { makeBlur } from '@/utils';
import IconButton from '@/components/IconButton';
import Input from '@/components/Input';
import {
  FormTypes,
  IconBtnType,
  IconSizes,
  InputTypes,
  SearchParamsKeys,
  SortTypes,
} from '@/constants';
import useSetQueryString from '@/hooks/useSetQueryString';
import css from './Filter.module.css';

const { FILTER_SP_KEY, SORT_SP_KEY } = SearchParamsKeys;
const { DESC_SORT_TYPE, ASC_SORT_TYPE } = SortTypes;

const Filter: FC = () => {
  const setQueryString = useSetQueryString();
  const searchParams = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const deskSortType = searchParams.get(SORT_SP_KEY) === DESC_SORT_TYPE;
  const [showFilter, setShowFilter] = useState<boolean>(() => Boolean(filter));
  const clearFilterBtnIcon = Boolean(filter) && (
    <FaTimes size={IconSizes.primaryIconSize} />
  );
  const sortBtnIcon = deskSortType ? (
    <FaSortAlphaDown size={IconSizes.primaryIconSize} />
  ) : (
    <FaSortAlphaUp size={IconSizes.primaryIconSize} />
  );

  useEffect(() => {
    if (!showFilter) {
      setQueryString(FILTER_SP_KEY, '');
    }
  }, [setQueryString, showFilter]);

  const onSortBtnClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    makeBlur(currentTarget);
    const updateSortValue = deskSortType ? ASC_SORT_TYPE : DESC_SORT_TYPE;
    setQueryString(SORT_SP_KEY, updateSortValue);
  };

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQueryString(FILTER_SP_KEY, value);
  };

  const onFilterBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    setShowFilter((showFilter) => !showFilter);
  };

  const onClearFilterBtnClick = () => {
    setQueryString(FILTER_SP_KEY, '');
  };

  return (
    <div className={css.container}>
      {showFilter && (
        <Input
          type={InputTypes.text}
          value={filter}
          onChange={onFilterChange}
          formType={FormTypes.filter}
          autoFocus
          inputWrap
          onBtnClick={onClearFilterBtnClick}
          btnIcon={clearFilterBtnIcon}
          btnType={IconBtnType.clearFilter}
        />
      )}
      <IconButton
        btnType={IconBtnType.filter}
        onBtnClick={onFilterBtnClick}
        icon={<FaSistrix size={IconSizes.otherIconSize} />}
      />
      <IconButton
        btnType={IconBtnType.filter}
        onBtnClick={onSortBtnClick}
        icon={sortBtnIcon}
      />
    </div>
  );
};

export default Filter;
