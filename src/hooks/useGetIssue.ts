import { useParams } from 'react-router-dom';

export const useGetIssue = () => {
  const { issue } = useParams();

  return Number(issue ?? 4);
};
