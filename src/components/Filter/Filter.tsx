'use client';

import { IoMdClose } from 'react-icons/io';
import { BsSortAlphaDown } from 'react-icons/bs';
import { BsSortAlphaDownAlt } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import IconButton from '@/components/IconButton';
import Input from '@/components/Input';
import { useSearchParams } from 'next/navigation';
import useSetQueryString from '@/hooks/useSetQueryString';
import css from './Filter.module.css';
import { SortTypes } from '@/constants/sortTypes';
import { SearchParamsKeys } from '@/constants/searchParamsKeys';
import { IconSizes } from '@/constants/iconSizes';
import { IconBtnType } from '@/constants/iconBtnType';
import makeBlur from '@/utils/makeBlur';
import { InputType } from '@/constants/inputType';

const Filter = () => {
  const { FILTER_SP_KEY, SORT_SP_KEY } = SearchParamsKeys;
  const searchParams = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const [showFilter, setShowFilter] = useState(() => Boolean(filter));
  const { DESC_SORT_TYPE } = SortTypes;
  const deskSortType = searchParams.get(SORT_SP_KEY) === DESC_SORT_TYPE;
  const setQueryString = useSetQueryString();
  const sortBtnIcon = deskSortType ? (
    <BsSortAlphaDown size={IconSizes.otherIconSize} />
  ) : (
    <BsSortAlphaDownAlt size={IconSizes.otherIconSize} />
  );

  useEffect(() => {
    if (!showFilter) {
      setQueryString(FILTER_SP_KEY, '');
    }
  }, [FILTER_SP_KEY, filter, setQueryString, showFilter]);

  const onSortBtnClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    makeBlur(currentTarget);
    const updateSortValue = deskSortType
      ? SortTypes.ASC_SORT_TYPE
      : SortTypes.DESC_SORT_TYPE;
    setQueryString(SORT_SP_KEY, updateSortValue);
  };

  const onFilterChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setQueryString(FILTER_SP_KEY, value);
  };

  const onFilterBtnClick = ({
    currentTarget,
  }: MouseEvent<HTMLButtonElement>) => {
    makeBlur(currentTarget);
    setShowFilter((prevState) => !prevState);
  };

  const onClearFilterBtnClick = () => {
    setQueryString(FILTER_SP_KEY, '');
  };

  return (
    <div className={css.container}>
      {showFilter && (
        <Input
          type='text'
          value={filter}
          onChange={onFilterChange}
          inputType={InputType.filter}
          autoFocus
          inputWrap
          btnType={IconBtnType.clearFilter}
          action={onClearFilterBtnClick}
        >
          {filter && <IoMdClose />}
        </Input>
      )}
      <IconButton
        btnType={IconBtnType.filter}
        width={44}
        onBtnClick={onFilterBtnClick}
        icon={<FiFilter size={IconSizes.otherIconSize} />}
      />
      <IconButton
        btnType={IconBtnType.filter}
        width={44}
        onBtnClick={onSortBtnClick}
        icon={sortBtnIcon}
      />
    </div>
  );
};

export default Filter;
