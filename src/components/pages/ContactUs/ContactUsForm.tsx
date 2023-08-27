import { useState } from 'react';

export const ContactUsForm = () => {
  const email = 'hrytsenko.svan@gmail.com';
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <section className="flex min-h-[calc(100dvh-40px)] flex-col items-center gap-2 p-4">
      <div className="text-center font-yuni-hair text-5xl">Contact</div>
      <div className="flex w-full flex-col gap-2">
        <div className="relative flex h-6">
          <hr className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 border border-dashed border-gray-500" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">Subject</div>
        </div>
        <input
          className="w-full rounded-md border border-solid border-gray-500 px-4 py-2"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="relative flex h-6">
          <hr className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 border border-dashed border-gray-500" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">Message</div>
        </div>
        <input
          className="w-full rounded-md border border-solid border-gray-500 px-4 py-2"
          type="text"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <a
        className="mt-4 w-full rounded-md border border-solid px-4 py-2 text-center"
        href={`mailto:${email}?subject=${subject}&body=${body}`}
      >
        Click to Send an Email
      </a>
    </section>
  );
};
