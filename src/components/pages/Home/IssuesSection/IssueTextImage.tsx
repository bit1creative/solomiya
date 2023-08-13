import * as Dialog from '@radix-ui/react-dialog';

import logo from 'Assets/logo.png';

import { ImageDialogContent } from './ImageDialogContent';
import { issuesImagesData } from './issuesImagesData';

interface Props {
  image: string;
}

// import sm1_andrii from 'Assets/images/issues/sm1_andrii.jpg';
// import sm1_bucha1 from 'Assets/images/issues/sm1_bucha1.jpg';
// import sm1_bucha2 from 'Assets/images/issues/sm1_bucha2.jpg';
// import sm1_bucha3 from 'Assets/images/issues/sm1_bucha3.jpg';
// import sm1_bucha4 from 'Assets/images/issues/sm1_bucha4.jpg';
// import sm1_christina1 from 'Assets/images/issues/sm1_christina1.png';
// import sm1_christina2 from 'Assets/images/issues/sm1_christina2.png';
// import sm1_christina3 from 'Assets/images/issues/sm1_christina3.png';
// import sm1_cover1 from 'Assets/images/issues/sm1_cover1.jpg';
// import sm1_cover2 from 'Assets/images/issues/sm1_cover2.jpg';
// import sm1_kurmaz1 from 'Assets/images/issues/sm1_kurmaz1.jpg';
// import sm1_kurmaz2 from 'Assets/images/issues/sm1_kurmaz2.jpg';
// import sm1_kurmaz3 from 'Assets/images/issues/sm1_kuzmaz3.jpg';
// import sm1_kurmaz4 from 'Assets/images/issues/sm1_kuzmaz4.jpg';
// import sm1_portraits1 from 'Assets/images/issues/sm1_portraits1.jpg';
// import sm1_portraits2 from 'Assets/images/issues/sm1_portraits2.jpg';
// import sm1_portraits3 from 'Assets/images/issues/sm1_portraits3.jpg';
// import sm1_portraits4 from 'Assets/images/issues/sm1_portraits4.jpg';
// import sm1_portraits5 from 'Assets/images/issues/sm1_portraits5.jpg';
// import sm1_ridnyi2 from 'Assets/images/issues/sm1_ridniy2.jpg';
// import sm1_ridnyi1 from 'Assets/images/issues/sm1_ridnyi1.jpg';
// import sm1_sonya from 'Assets/images/issues/sm1_sonya.jpg';
// import sm1_vsevolod1 from 'Assets/images/issues/sm1_vsevolod1.jpg';
// import sm1_vsevolod2 from 'Assets/images/issues/sm1_vsevolod2.jpg';

// const imageBindings = {
//   sm1_andrii: [sm1_andrii],
//   sm1_vsevolod: [sm1_vsevolod1, sm1_vsevolod2],
//   sm1_christina: [sm1_christina1, sm1_christina2, sm1_christina3],
//   sm1_sonya: [sm1_sonya],
//   sm1_portraits: [sm1_portraits1, sm1_portraits2, sm1_portraits3, sm1_portraits4, sm1_portraits5],
//   sm1_kurmaz: [sm1_kurmaz1, sm1_kurmaz2, sm1_kurmaz3, sm1_kurmaz4],
//   sm1_cover: [sm1_cover1, sm1_cover2],
//   sm1_ridnyi: [sm1_ridnyi1, sm1_ridnyi2],
//   sm1_bucha: [sm1_bucha1, sm1_bucha2, sm1_bucha3, sm1_bucha4]
// };

export const IssueTextImage = ({ image }: Props) => {
  const imageData = issuesImagesData[image as keyof typeof issuesImagesData];

  return (
    <Dialog.Root>
      <Dialog.Trigger className="mx-1 inline-block">
        <img
          className="w-8"
          src={`/public/images/issues/${imageData.previewImage}`}
          alt={imageData.title}
          loading="lazy"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-main-issue-1" />
        <Dialog.Content className="absolute left-5 top-5 z-0 overflow-y-auto bg-white">
          <Dialog.Close className="absolute left-2 top-2 z-20">
            <img className="h-14 w-12" src={logo} alt="logo" />
          </Dialog.Close>
          <ImageDialogContent imageData={imageData} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
