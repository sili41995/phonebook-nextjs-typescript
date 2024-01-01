import { useEffect, useState } from 'react';
import { toasts } from '@/utils';
import { PagePaths } from '@/constants/index';
import { deleteContact } from '@/app/lib/actions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useDeleteContact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contactId, setContactId] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const redirectPath = `/${PagePaths.contactsPath}?${searchParams}`;
  const { replace } = useRouter();

  useEffect(() => {
    contactId &&
      (async (contactId) => {
        try {
          setIsLoading(true);
          await deleteContact(contactId);
          if (pathname.includes(contactId)) {
            replace(redirectPath);
          }
          toasts.successToast('Contact successfully removed');
        } catch (error) {
          if (error instanceof Error) {
            toasts.errorToast(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      })(contactId);
  }, [contactId, pathname, redirectPath, replace]);

  return { setContactId, isLoading };
};

export default useDeleteContact;
