import { IssuesDialogCarousel } from './IssuesDialogCarousel';
import { IssueImageData } from './issuesImages.data';

interface Props {
  imageData: IssueImageData;
}

export const ImageDialogContent = ({ imageData }: Props) => {
  const { title, author, descriptionHtml, images, comments = null } = imageData;
  return (
    <div className="h-full max-w-limit overflow-y-scroll lg:grid lg:grid-cols-2 lg:place-items-center lg:gap-8 lg:overflow-hidden lg:p-10 lg:py-20 xl:mx-auto xl:p-20">
      <div className="mt-24 lg:mt-0">
        <IssuesDialogCarousel images={images} />
      </div>
      <div className="no-scrollbar mx-4 my-10 text-center font-nice-regular md:mt-0 md:px-10 lg:mb-12 lg:mt-8 lg:max-h-[70vh] lg:overflow-hidden lg:overflow-y-scroll lg:px-0">
        <p className="text-3xl md:text-4xl xl:text-5xl">{title}</p>
        <p className="italic md:text-xl lg:text-2xl xl:text-3xl">{author}</p>
        {!!comments && <p className="italic md:text-xl lg:text-2xl xl:text-3xl">{comments}</p>}
        <div className="mt-8 text-left md:text-xl lg:text-xl xl:text-2xl">{descriptionHtml}</div>
      </div>
    </div>
  );
};
