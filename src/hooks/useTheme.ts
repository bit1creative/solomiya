import { useParams } from 'react-router-dom';

export const useMainColor = () => {
  const { issue } = useParams();

  return `main-issue-${issue}`;
};
