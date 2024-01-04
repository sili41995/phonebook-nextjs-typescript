import { FC } from 'react';
import { Metadata } from 'next';
import EditContactForm from '@/components/EditContactForm';
import { IMetadataProps, IParams } from '@/types/types';
import { getContactById } from '@/app/lib/actions';
import ModalForm from '@/components/ModalForm';

export async function generateMetadata({
  params,
}: IMetadataProps): Promise<Metadata> {
  let title = 'Edit';

  try {
    const contact = await getContactById(params.id);
    title = contact.name;
  } catch (error) {
    console.log(error);
  }

  return {
    title,
    description: 'Contact editing page',
  };
}

const EditPage: FC<IParams> = async ({ params }) => {
  const contact = await getContactById(params.id);

  return (
    <ModalForm>
      <EditContactForm contact={contact} />
    </ModalForm>
  );
};

export default EditPage;
