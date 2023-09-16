interface Props {
  images: string[];
}

export const IssuesDialogCarousel = ({ images }: Props) => {
  return (
    <div className="min-h-[150px] overflow-hidden">
      <div className="no-scrollbar flex snap-x gap-x-4 overflow-x-scroll">
        {images.map((image) => (
          <img
            key={image}
            className={`mx-auto w-3/4 snap-center object-scale-down ${images.length > 1 && 'first:ml-8 last:mr-8'}`}
            src={`/public/images/${image}`}
          />
        ))}
      </div>
    </div>
  );
};
