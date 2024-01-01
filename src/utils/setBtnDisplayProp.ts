interface IFuncProps {
  [key: string]: number | undefined;
}

type FuncRet = string | undefined;

const setBtnDisplayProp = ({
  currentPage,
  page,
  step,
}: IFuncProps): FuncRet => {
  if (currentPage && page) {
    return page - Number(step) > currentPage ||
      page + Number(step) < currentPage
      ? 'none'
      : 'block';
  }
};

export default setBtnDisplayProp;
