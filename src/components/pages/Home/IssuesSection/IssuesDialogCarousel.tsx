import { useState } from 'react';

interface Props {
  images: string[];
}

const FilledCircle = () => (
  <svg height="20" width="20">
    <circle cx="10" cy="10" r="7" fill="black" />
    Sorry, inline SVG isnt supported by your browser.
  </svg>
);

const EmptyCircle = () => (
  <svg height="20" width="20">
    <circle cx="10" cy="10" r="7" fill="white" stroke="black" strokeWidth="1" />
    Sorry, inline SVG isnt supported by your browser.
  </svg>
);

export const IssuesDialogCarousel = ({ images }: Props) => {
  const [renderedImageIndex, setRenderedImageIndex] = useState(0);

  return (
    <div className="min-h-[150px] overflow-hidden">
      <div className="no-scrollbar flex snap-x gap-x-4 overflow-x-scroll lg:hidden lg:snap-none">
        {images.map((image) => (
          <img
            key={image}
            className={`mx-auto max-h-[50vh] max-w-[75%] select-none snap-center object-scale-down lg:max-w-full ${
              images.length > 1 && 'first:ml-8 last:mr-8'
            }`}
            src={`/images/${image}`}
          />
        ))}
      </div>
      <div className="hidden lg:block">
        <img
          className="mx-auto max-h-[70vh] select-none object-scale-down"
          src={`/images/${images[renderedImageIndex]}`}
        />

        {images.length > 1 && (
          <div className="mt-2 flex justify-center">
            {images.map((image, index) => (
              <button key={image} onClick={() => setRenderedImageIndex(index)}>
                {index === renderedImageIndex ? <FilledCircle /> : <EmptyCircle />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
