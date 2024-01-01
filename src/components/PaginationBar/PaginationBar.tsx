'use client';

import { FC, MouseEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { IProps } from './PaginationBar.types';
import { getPageNumbers, getPaginationBarSettings, makeBlur } from '@/utils';
import { SearchParamsKeys } from '@/constants';
import useSetQueryString from '@/hooks/useSetQueryString';
import css from './PaginationBar.module.css';

const { PAGE_SP_KEY } = SearchParamsKeys;

const PaginationBar: FC<IProps> = ({ itemsQuantity, quantity, step = 1 }) => {
  const searchParams = useSearchParams();
  const setQueryString = useSetQueryString();
  const pageQuantity = Math.ceil(itemsQuantity / quantity);
  const pageNumbers = getPageNumbers(pageQuantity);
  const currentPage = Number(searchParams.get(PAGE_SP_KEY) ?? 1);
  const {
    firstPage,
    lastPage,
    isBackNavBtnDisable,
    isNextNavBtnDisable,
    isShowNextTemplateBtn,
    isShowLastPageBtn,
    isShowFirstPageBtn,
    isShowPrevTemplateBtn,
    isValidPage,
  } = getPaginationBarSettings({
    pageNumbers,
    currentPage,
    step,
  });

  const onPageBtnClick = ({
    e,
    page,
  }: {
    e: MouseEvent<HTMLButtonElement>;
    page: number;
  }): void => {
    makeBlur(e.currentTarget);
    setQueryString(PAGE_SP_KEY, String(page));
  };

  return (
    <ul className={css.list}>
      <li>
        <button
          className={css.navBtn}
          disabled={isBackNavBtnDisable}
          onClick={(e) => {
            onPageBtnClick({ e, page: currentPage - 1 });
          }}
        >
          {'<< Previous'}
        </button>
      </li>
      {isShowFirstPageBtn && (
        <li>
          <button
            className={css.navBtn}
            onClick={(e) => {
              onPageBtnClick({ e, page: firstPage });
            }}
          >
            {firstPage}
          </button>
        </li>
      )}
      {isShowPrevTemplateBtn && (
        <li>
          <button className={css.templateBtn} disabled>
            ...
          </button>
        </li>
      )}
      {isValidPage &&
        pageNumbers.map((number) => {
          const isHidden =
            number - Number(step) > currentPage ||
            number + Number(step) < currentPage;
          const className =
            number === currentPage ? css.activeNavBtn : css.navBtn;
          return (
            <li key={number} className={isHidden ? css.hidden : ''}>
              <button
                className={className}
                onClick={(e) => {
                  onPageBtnClick({ e, page: number });
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
      {isShowNextTemplateBtn && (
        <li>
          <button className={css.templateBtn} disabled>
            ...
          </button>
        </li>
      )}
      {isShowLastPageBtn && (
        <li>
          <button
            className={css.navBtn}
            onClick={(e) => {
              onPageBtnClick({ e, page: lastPage });
            }}
          >
            {lastPage}
          </button>
        </li>
      )}
      <li>
        <button
          className={css.navBtn}
          disabled={isNextNavBtnDisable}
          onClick={(e) => {
            onPageBtnClick({ e, page: currentPage + 1 });
          }}
        >
          {'Next >>'}
        </button>
      </li>
    </ul>
  );
};

export default PaginationBar;
