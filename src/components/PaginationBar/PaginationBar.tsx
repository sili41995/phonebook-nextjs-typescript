import { FC, MouseEvent } from 'react';
import { IProps } from './PaginationBar.types';
import { getPageNumbers, getPaginationBarSettings, makeBlur } from '@/utils';
import { SearchParamsKeys } from '@/constants';
import { useSearchParams } from 'next/navigation';
import css from './PaginationBar.module.css';
import useSetQueryString from '@/hooks/useSetQueryString';

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
          className={css.navButton}
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
            className={css.navButton}
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
          <button className={css.navButton} disabled>
            ...
          </button>
        </li>
      )}
      {isValidPage &&
        pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`${css.navButton}${
                number === currentPage ? ' active' : ''
              }`}
              onClick={(e) => {
                onPageBtnClick({ e, page: number });
              }}
            >
              {number}
            </button>
          </li>
        ))}
      {isShowNextTemplateBtn && (
        <li>
          <button className={css.navButton} disabled>
            ...
          </button>
        </li>
      )}
      {isShowLastPageBtn && (
        <li>
          <button
            className={css.navButton}
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
          className={css.navButton}
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
