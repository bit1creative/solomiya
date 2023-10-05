import { IssuesDialogCarousel } from './IssuesDialogCarousel';
import { IssueImageData } from './issuesImages.data';

interface Props {
  imageData: IssueImageData;
}

export const ImageDialogContent = ({ imageData }: Props) => {
  const { title, author, descriptionHtml, images, comments = null } = imageData;
  return (
    <div className="no-scrollbar h-full overflow-scroll">
      <div className="mt-24">
        <IssuesDialogCarousel images={images} />
      </div>
      <div className="mx-4 my-10 text-center font-nice-regular">
        <p className="text-3xl">{title}</p>
        <p className="italic">{author}</p>
        {!!comments && <p className="italic">{comments}</p>}
        <div className="mt-8 text-left">{descriptionHtml}</div>
      </div>
    </div>
  );
};
