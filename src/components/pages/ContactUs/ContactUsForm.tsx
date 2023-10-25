import { useState } from 'react';

import { SectionTitle } from 'Components/common/SectionTitle';

export const ContactUsForm = () => {
  const email = 'hello@solomiyamag.com';
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <section className="mx-auto flex min-h-[calc(100dvh-60px)] w-full max-w-[80%] flex-col items-center justify-center p-4 px-0 lg:max-w-[50%] xl:min-h-[calc(100dvh-120px)]">
      <SectionTitle title={'Contact'} />
      <div className="flex w-full flex-col font-nice-regular">
        <label className="md:text-2xl xl:text-3xl" htmlFor="subject">
          Subject
        </label>
        <input
          name="subject"
          className="block w-full rounded-lg border border-solid border-gray-700 bg-gray-200 p-2.5 text-sm text-gray-900 md:mt-4 md:py-4 lg:text-xl xl:py-6 xl:text-3xl"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="mt-4 flex w-full flex-col font-nice-regular lg:mt-8">
        <label className="md:text-2xl xl:text-3xl" htmlFor="message">
          Message
        </label>
        <input
          name="message"
          className="block w-full rounded-lg border border-solid border-gray-700 bg-gray-200 p-2.5 text-sm text-gray-900 md:mt-4 md:py-4 lg:text-xl xl:py-6 xl:text-3xl"
          type="text"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="mx-auto mt-4 w-full md:mt-8">
        <a
          className="block w-full rounded-lg border-2 border-solid border-gray-700 py-2 text-center font-nice-regular md:text-2xl xl:py-4 xl:text-3xl"
          href={`mailto:${email}?subject=${subject}&body=${body}`}
        >
          Click to Send an Email
        </a>
      </div>
    </section>
  );
};
