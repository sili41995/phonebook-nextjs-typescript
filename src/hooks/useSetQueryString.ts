import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type FuncRet = (key: string, value: string) => void;

const useSetQueryString = (): FuncRet => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );

  return (key: string, value: string) => {
    replace(`${pathname}?${createQueryString(key, value)}`, {
      scroll: false,
    });
  };
};

export default useSetQueryString;
