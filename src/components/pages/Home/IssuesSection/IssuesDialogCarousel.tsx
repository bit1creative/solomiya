// import { useEffect, useRef, useState } from 'react';
import { useRef } from 'react';

interface Props {
  images: string[];
}

// const renderCircle = (isFilled = false) => (
//   <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="7.5" cy="7.5" r="6.25" fill={isFilled ? 'black' : 'none'} stroke="black" strokeWidth="1" />
//   </svg>
// );

export const IssuesDialogCarousel = ({ images }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  // const [currentImage, setCurrentImage] = useState(0);
  // const sliderWidth = sliderRef.current?.clientWidth || 0;

  // useEffect(() => {
  //   sliderRef.current?.scrollTo({
  //     left: 100,
  //     behavior: 'smooth'
  //   });
  // }, [currentImage, images.length, sliderWidth]);

  return (
    <div className="min-h-[150px] overflow-hidden">
      <div ref={sliderRef} className="no-scrollbar flex snap-x gap-x-4 overflow-x-scroll">
        {images.map((image) => (
          <img
            key={image}
            className="mx-auto w-3/4 snap-center first:ml-6 last:mr-6"
            src={`/public/images/issues/${image}`}
          />
        ))}
      </div>
      {/* <div className="mt-4 flex justify-center">
        {images.map((image, index) => (
          <div key={`${image}-btn`} className="mx-1" onClick={() => setCurrentImage(index)}>
            {renderCircle(index === currentImage)}
          </div>
        ))}
      </div> */}
    </div>
  );
};
