import { useEffect, useState } from 'react';
import { toasts } from '@/utils';
import { PagePaths } from '@/constants/index';
import { deleteContact } from '@/app/lib/actions';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const useDeleteContact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contactId, setContactId] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const redirectPath = `/${PagePaths.contactsPath}?${searchParams}`;

  useEffect(() => {
    if (contactId) {
      setIsLoading(true);
      deleteContact(contactId)
        .then(() => {
          if (pathname.includes(contactId)) {
            redirect(redirectPath);
          }
          revalidatePath(PagePaths.contactsPath);
          toasts.successToast('Contact successfully removed');
        })
        .catch(() => {
          toasts.errorToast('Deleting a contact failed');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [contactId, pathname, redirectPath]);

  return { setContactId, isLoading };
};

export default useDeleteContact;
