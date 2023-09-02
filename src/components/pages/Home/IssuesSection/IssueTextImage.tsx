import { useParams } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

import cross from 'Assets/icons/cross.svg';
import logo from 'Assets/logo.png';
import { useMainColor } from 'Hooks/useTheme';

import { ImageDialogContent } from './ImageDialogContent';
import { issuesImagesData } from './issuesImages.data';

interface Props {
  image: string;
}

export const IssueTextImage = ({ image }: Props) => {
  const mainColor = useMainColor();
  const { issue } = useParams();
  const imageData = issuesImagesData[`issue${issue}` as keyof typeof issuesImagesData][image];

  return (
    <Dialog.Root>
      <Dialog.Trigger className="mx-1 inline-block">
        <img className="w-8" src={`/public/images/${imageData.previewImage}`} alt={imageData.title} loading="lazy" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={`fixed inset-0 bg-${mainColor}`}></Dialog.Overlay>
        <Dialog.Content className="fixed inset-5 z-20 h-[calc(100vh-40px)] bg-white">
          <Dialog.Close className="fixed left-2 top-2 z-40">
            <img className="h-14 w-12" src={logo} alt="logo" />
          </Dialog.Close>
          <Dialog.Close className="absolute -right-6 -top-6 z-50">
            <img src={cross} alt="close-btn" className="h-12 w-12" />
          </Dialog.Close>
          <ImageDialogContent imageData={imageData} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
