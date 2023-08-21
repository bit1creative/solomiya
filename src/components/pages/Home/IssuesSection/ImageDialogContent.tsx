import { IssueImageData } from './issuesImagesData';

interface Props {
  imageData: IssueImageData;
}

export const ImageDialogContent = ({ imageData }: Props) => {
  const { title, author, descriptionHtml, images, comments = null } = imageData;
  return (
    <div className="mx-4 h-full overflow-scroll">
      <div className="mt-24 min-h-[150px]">
        <img className="mx-auto w-3/4" src={`/public/images/issues/${images[0]}`} />
      </div>
      <div className="my-10 text-center font-nice-regular">
        <p className="text-3xl">{title}</p>
        <p className="italic">{author}</p>
        {!!comments && <p className="italic">{comments}</p>}
        {descriptionHtml}
      </div>
    </div>
  );
};
