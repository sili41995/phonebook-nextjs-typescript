interface IFuncProps {
  pageNumbers: number[];
  currentPage: number;
  step: number;
}

interface IFuncRet {
  isValidPage: boolean;
  firstPage: number;
  lastPage: number;
  isBackNavBtnDisable: boolean;
  isNextNavBtnDisable: boolean;
  isShowNextTemplateBtn: boolean;
  isShowLastPageBtn: boolean;
  isShowFirstPageBtn: boolean;
  isShowPrevTemplateBtn: boolean;
}

const getPaginationBarSettings = ({
  pageNumbers,
  currentPage,
  step,
}: IFuncProps): IFuncRet => {
  const firstPage = pageNumbers[0];
  const lastPage = pageNumbers[pageNumbers.length - 1];
  const isFirstPage = currentPage === firstPage;
  const isLastPage = currentPage === lastPage;
  const isValidPage = currentPage >= firstPage && currentPage <= lastPage;
  const isBackNavBtnDisable = !isValidPage || isFirstPage;
  const isNextNavBtnDisable = !isValidPage || isLastPage;
  const isShowPrevTemplateBtn =
    isValidPage && currentPage - step - 1 > firstPage;
  const isShowNextTemplateBtn =
    isValidPage && currentPage + step + 1 < lastPage;
  const isShowFirstPageBtn = isValidPage && currentPage - step > firstPage;
  const isShowLastPageBtn = isValidPage && currentPage + step < lastPage;

  return {
    isValidPage,
    firstPage,
    lastPage,
    isBackNavBtnDisable,
    isNextNavBtnDisable,
    isShowNextTemplateBtn,
    isShowLastPageBtn,
    isShowFirstPageBtn,
    isShowPrevTemplateBtn,
  };
};

export default getPaginationBarSettings;
