// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { CiEdit } from 'react-icons/ci';
// import ContactInfo from '@/components/ContactInfo';
// import EditForm from '@/components/EditForm';
// import ContactModalForm from '@/components/ContactModalForm';
// import IconButton from '@/components/IconButton';
// import { makeBlur } from '@/utils';
// import { iconBtnType, iconSizes, pagesPath } from '@/constants';
// import { useDeleteContact } from '@/hooks';
// import { selectIsLoading } from '@/redux/contacts/selectors';
// import { useParams } from 'next/navigation';
import css from './ContactDetails.module.css';

const ContactDetails = ({ children }) => {
  // const [editContact, setEditContact] = useState(false);
  // const isLoading = useSelector(selectIsLoading);
  // const id = useParams()[pagesPath.dynamicParam];
  // const deleteContact = useDeleteContact();

  // const setEditState = () => {
  //   setEditContact((editContact) => !editContact);
  // };

  // const handleEditBtnClick = (e) => {
  //   setEditState();
  //   makeBlur(e.currentTarget);
  // };

  return (
    <>
      <div className={css.container}></div>
    </>
    // <>
    //   <div className={css.container}>
    //     <div className={css.buttonsContainer}>
    //       {!editContact && (
    //         <IconButton
    //           disabled={isLoading}
    //           btnType={iconBtnType.delete}
    //           width={44}
    //           height={35}
    //           icon={<AiOutlineDelete size={iconSizes.primaryIconSize} />}
    //           onBtnClick={() => {
    //             deleteContact(id);
    //           }}
    //         />
    //       )}
    //       <IconButton
    //         btnType={iconBtnType.edit}
    //         width={44}
    //         height={35}
    //         onBtnClick={handleEditBtnClick}
    //         icon={<CiEdit size={iconSizes.primaryIconSize} />}
    //       />
    //     </div>
    //     {editContact ? (
    //       <ContactModalForm>
    //         <EditForm setEditContact={setEditState} />
    //       </ContactModalForm>
    //     ) : (
    //       <ContactInfo>{children}</ContactInfo>
    //     )}
    //   </div>
    // </>
  );
};

export default ContactDetails;
