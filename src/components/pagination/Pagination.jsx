// components/pagination/Pagination.jsx
import { Button } from "@/components/ui/button";

export const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Précédent
      </Button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}
      
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Suivant
      </Button>
    </div>
  );
};