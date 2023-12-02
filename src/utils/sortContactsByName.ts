import { SortTypes } from '@/constants/sortTypes';
import { IContact } from '@/types/types';

const sortContactsByName = (
  contacts: IContact[],
  sortType: string
): IContact[] => {
  return contacts.toSorted(({ name: prevContact }, { name: nextContact }) =>
    sortType === SortTypes.DESC_SORT_TYPE
      ? nextContact.localeCompare(prevContact)
      : prevContact.localeCompare(nextContact)
  );
};

export default sortContactsByName;
