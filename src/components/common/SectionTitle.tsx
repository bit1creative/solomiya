interface Props {
  title: string;
}

export const SectionTitle = ({ title }: Props) => (
  <div className="text-center font-yuni-hair text-title md:text-title-md lg:text-title-lg xl:text-title-xl">
    {title}
  </div>
);
