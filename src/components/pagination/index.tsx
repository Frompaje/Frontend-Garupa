import usePagination from "@/hook/usePagination";
import { Button } from "../ui/button";

interface PaginationProps {
  total: number;
  take: number;
  isLoading: boolean;
}

const Pagination = (props: PaginationProps) => {
  const pagination = usePagination(props);

  return (
    <div className="flex items-center justify-between space-x-2 text-foreground ml-3">
      <p className="text-xs font-semibold">
        Página {pagination.currentPage} de {pagination.totalPages}
      </p>

      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={pagination.handlePrev}
          disabled={props.isLoading || pagination.disablePrev}>
          Anterior
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={pagination.handleNext}
          disabled={props.isLoading || pagination.disableNext}>
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
