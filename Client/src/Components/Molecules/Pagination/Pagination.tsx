import "./Pagination.scss";
import { Button } from "@Components/Atoms/Button";

interface PaginationProps {
  onPrev: () => void;
  onNext: () => void;
  onSeeMore?: () => void;
  currentPage?: number;
  totalPages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  onPrev,
  onNext,
  onSeeMore,
  currentPage,
  totalPages,
}) => {
  return (
    <div className="pagination">
      {onSeeMore && (
        <Button
          label="Más"
          onClick={onSeeMore}
          className="pagination__button"
        />
      )}

      <Button
        label="<"
        rounded
        onClick={onPrev}
        className="pagination__button"
        disabled={currentPage !== undefined ? currentPage <= 1 : false}
      />

      <Button
        label=">"
        rounded
        onClick={onNext}
        className="pagination__button"
        disabled={
          currentPage !== undefined && totalPages !== undefined
            ? currentPage >= totalPages
            : false
        }
      />
    </div>
  );
};

export default Pagination;