// components/common/Pagination.jsx
import { Button } from "../ui/Button";
import { Select } from "../ui/Select";

export const Pagination = ({
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange
}) => {
  const pageSizeOptions = [10, 20, 50, 100];

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">
          Page {currentPage} sur {totalPages}
        </span>

        <select
          className="p-2 border rounded"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          {pageSizeOptions.map(size => (
            <option key={size} value={size}>
              {size} par page
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
        >
          Précédent
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            variant={currentPage === page ? "default" : "outline"}
          >
            {page}
          </Button>
        ))}

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Suivant
        </Button>
      </div>
    </div>
  );
};