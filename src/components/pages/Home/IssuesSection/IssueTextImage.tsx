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
      <Dialog.Trigger className="mx-1 inline-block h-10 lg:h-14 xl:h-20">
        <img
          className="-mb-2 h-full xl:-mb-4"
          src={`/images/${imageData.previewImage}`}
          alt={imageData.title}
          loading="lazy"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={`fixed inset-0 bg-${mainColor}`}></Dialog.Overlay>
        <Dialog.Content className="fixed inset-5 z-20 h-[calc(100vh-40px)] bg-white lg:inset-10 lg:grid lg:h-[calc(100vh-80px)] lg:place-items-center">
          <Dialog.Close className="fixed left-2 top-2 z-40 lg:left-4 lg:top-5">
            <img className="h-18 w-16 lg:h-28 lg:w-24" src={logo} alt="logo" />
          </Dialog.Close>
          <Dialog.Close className="absolute -right-6 -top-6 z-50 lg:-right-12 lg:-top-12">
            <img src={cross} alt="close-btn" className="h-12 w-12 lg:h-24 lg:w-24" />
          </Dialog.Close>
          <ImageDialogContent imageData={imageData} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
