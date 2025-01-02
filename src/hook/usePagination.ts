import { useSearchParams } from 'react-router-dom';

interface UsePaginationProps {
  total: number;
  take: number;
}

function usePagination({ total, take }: UsePaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = total === 0 ? 1 : Math.ceil(total / take);

  const page = Number(searchParams.get('page') ?? 1);
  let currentPage = page < 1 ? 1 : page;

  const disablePrev = currentPage === 1;
  const disableNext = totalPages === currentPage;

  const handlePrev = () => {
    if (currentPage > 1) {
      setSearchParams({ page: String(currentPage - 1) });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: String(currentPage + 1) });
    }
  };

  return {
    totalPages,
    currentPage,
    disablePrev,
    disableNext,
    handlePrev,
    handleNext,
  };
}

export default usePagination;
