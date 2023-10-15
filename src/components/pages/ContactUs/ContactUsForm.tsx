import { useState } from 'react';

import { SectionTitle } from 'Components/common/SectionTitle';

export const ContactUsForm = () => {
  const email = 'hrytsenko.svan@gmail.com';
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <section className="flex min-h-[calc(100dvh-60px)] flex-col items-center justify-center gap-2 p-4 md:mx-auto md:max-w-[60vw] lg:gap-8 xl:min-h-[calc(100dvh-120px)]">
      <SectionTitle title={'Contact'} />
      <div className="flex w-full flex-col gap-2 xl:gap-4">
        <div className="relative flex h-6">
          <hr className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 border border-dashed border-gray-500" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 font-nice-regular md:text-xl xl:text-2xl">
            Subject
          </div>
        </div>
        <input
          className="w-full rounded-md border border-solid border-gray-500 px-4 py-2 xl:py-4"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-col gap-2 xl:gap-4">
        <div className="relative flex h-6">
          <hr className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 border border-dashed border-gray-500" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 font-nice-regular md:text-xl xl:text-2xl">
            Message
          </div>
        </div>
        <input
          className="w-full rounded-md border border-solid border-gray-500 px-4 py-2 xl:py-4"
          type="text"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <a
        className="mt-4 w-full rounded-md border border-solid px-4 py-2 text-center font-nice-regular transition-all hover:bg-neutral-900 hover:text-neutral-50 md:text-xl xl:py-4 xl:text-2xl"
        href={`mailto:${email}?subject=${subject}&body=${body}`}
      >
        Click to Send an Email
      </a>
    </section>
  );
};
