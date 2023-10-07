import { IssuesDialogCarousel } from './IssuesDialogCarousel';
import { IssueImageData } from './issuesImages.data';

interface Props {
  imageData: IssueImageData;
}

export const ImageDialogContent = ({ imageData }: Props) => {
  const { title, author, descriptionHtml, images, comments = null } = imageData;
  return (
    <div className="h-full lg:grid lg:grid-cols-2 lg:place-items-center lg:gap-8 lg:overflow-hidden lg:p-10 lg:py-20 xl:p-20">
      <div className="mt-24 h-full lg:mt-0">
        <IssuesDialogCarousel images={images} />
      </div>
      <div className="no-scrollbar mx-4 my-10 text-center font-nice-regular lg:mb-12 lg:mt-8 lg:max-h-[70vh] lg:overflow-hidden lg:overflow-y-scroll">
        <p className="text-3xl lg:text-5xl">{title}</p>
        <p className="italic lg:text-2xl">{author}</p>
        {!!comments && <p className="italic lg:text-2xl">{comments}</p>}
        <div className="mt-8 text-left lg:text-xl">{descriptionHtml}</div>
      </div>
    </div>
  );
};
