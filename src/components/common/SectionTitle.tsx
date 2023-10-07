interface Props {
  title: string;
}

export const SectionTitle = ({ title }: Props) => (
  <div className="text-center font-yuni-hair text-5xl lg:text-8xl xl:text-10xl">{title}</div>
);
