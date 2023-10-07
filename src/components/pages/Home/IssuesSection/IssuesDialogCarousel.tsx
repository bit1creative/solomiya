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

  const handleImageChange = (action: 'next' | 'prev') => {
    switch (action) {
      case 'next':
        setRenderedImageIndex((renderedImageIndex + 1) % images.length);
        break;
      case 'prev':
        setRenderedImageIndex((renderedImageIndex + images.length - 1) % images.length);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-[150px] overflow-hidden lg:h-[75vh]">
      <div className="no-scrollbar flex snap-x gap-x-4 overflow-x-scroll lg:hidden lg:snap-none">
        {images.map((image) => (
          <img
            key={image}
            className={`mx-auto max-h-[50vh] max-w-[75%] select-none snap-center object-scale-down ${
              images.length > 1 && 'first:ml-8 last:mr-8'
            }`}
            src={`/images/${image}`}
          />
        ))}
      </div>
      <div className="hidden h-full lg:flex lg:flex-col lg:justify-center lg:gap-y-4">
        <div className="relative h-full max-h-[90%]">
          <div
            className="absolute left-0 top-0 h-full w-1/2 bg-transparent"
            onClick={() => handleImageChange('prev')}
          />
          <img className="mx-auto h-full select-none object-scale-down" src={`/images/${images[renderedImageIndex]}`} />
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-transparent"
            onClick={() => handleImageChange('next')}
          />
        </div>

        {images.length > 1 && (
          <div className="flex justify-center">
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
