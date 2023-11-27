// import { IoMdClose } from 'react-icons/io';
// import { BsSortAlphaDown } from 'react-icons/bs';
// import { BsSortAlphaDownAlt } from 'react-icons/bs';
// import { FiFilter } from 'react-icons/fi';
// import { useEffect, useRef, useState } from 'react';
// import { makeBlur } from '@/utils';
// import IconButton from '@/components/IconButton';
// import Input from '@/components/Input';
// import {
//   sortTypes,
//   searchParamsKeys,
//   formType,
//   iconBtnType,
//   iconSizes,
// } from '@/constants';
// import { useSearchParams } from 'next/navigation';
// import useSetQueryString from '@/hooks/useSetQueryString';
import css from './Filter.module.css';

const Filter = () => {
  // const { FILTER_SP_KEY, SORT_SP_KEY } = searchParamsKeys;
  // const searchParams = useSearchParams();
  // const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  // const [showFilter, setShowFilter] = useState(() => Boolean(filter));
  // const { DESC_SORT_TYPE } = sortTypes;
  // const deskSortType = searchParams.get(SORT_SP_KEY) === DESC_SORT_TYPE;
  // const setQueryString = useSetQueryString();
  // const sortBtnIcon = deskSortType ? (
  //   <BsSortAlphaDown size={iconSizes.otherIconSize} />
  // ) : (
  //   <BsSortAlphaDownAlt size={iconSizes.otherIconSize} />
  // );
  // useEffect(() => {
  //   if (!showFilter) {
  //     setQueryString(FILTER_SP_KEY, '');
  //   }
  // }, [FILTER_SP_KEY, filter, setQueryString, showFilter]);

  // const onSortBtnClick = ({ currentTarget }) => {
  //   makeBlur(currentTarget);
  //   const updateSortValue = deskSortType
  //     ? sortTypes.ASC_SORT_TYPE
  //     : sortTypes.DESC_SORT_TYPE;
  //   setQueryString(SORT_SP_KEY, updateSortValue);
  // };

  // const onFilterChange = (e) => {
  //   const { value } = e.target;
  //   setQueryString(FILTER_SP_KEY, value);
  // };

  // const onFilterBtnClick = ({ currentTarget }) => {
  //   makeBlur(currentTarget);
  //   setShowFilter((prevState) => !prevState);
  // };

  // const onClearFilterBtnClick = () => {
  //   setQueryString(FILTER_SP_KEY, '');
  // };

  return (
    <></>
    // <div className={css.container}>
    //   {showFilter && (
    //     <Input
    //       type='text'
    //       value={filter}
    //       onChange={onFilterChange}
    //       inputType={formType.filter}
    //       autoFocus
    //       inputWrap
    //       btnType={filter && iconBtnType.clearFilter}
    //       action={onClearFilterBtnClick}
    //       btnIcon={<IoMdClose size={iconSizes.primaryIconSize} />}
    //     />
    //   )}
    //   <IconButton
    //     btnType={iconBtnType.filter}
    //     width={44}
    //     onBtnClick={onFilterBtnClick}
    //     icon={<FiFilter size={iconSizes.otherIconSize} />}
    //   />

    //   <IconButton
    //     btnType={iconBtnType.filter}
    //     width={44}
    //     onBtnClick={onSortBtnClick}
    //     icon={sortBtnIcon}
    //   />
    // </div>
  );
};

export default Filter;
