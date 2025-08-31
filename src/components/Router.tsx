import { useState } from 'react';

interface RouterProps {
  children: (currentPage: string, setCurrentPage: (page: string) => void) => React.ReactNode;
  defaultPage?: string;
}

export function Router({ children, defaultPage = 'home' }: RouterProps) {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  return (
    <>
      {children(currentPage, setCurrentPage)}
    </>
  );
}