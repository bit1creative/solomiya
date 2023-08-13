import { matchPath, useLocation } from 'react-router-dom';

export const useIssueMatch = (issue: string) => {
  const { pathname } = useLocation();

  const matchingPath = `/issue/${issue}`;
  const match = matchPath(pathname, matchingPath);
  return match;
};
