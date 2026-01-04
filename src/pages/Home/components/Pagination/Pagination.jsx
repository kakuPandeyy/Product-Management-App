import './Pagination.css';
// Pagination Component

const PaginationComponent = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const pageNumbers = [];
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <label htmlFor="items-per-page">Items per page:</label>
        <select
          id="items-per-page"
          value={itemsPerPage}
          onChange={(e) => {
            onItemsPerPageChange(Number(e.target.value));
            onPageChange(1);
          }}
          className="items-per-page-select"
        >
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
          <option value={12}>12</option>
        </select>
        <span className="page-info">
          Page {currentPage} of {totalPages} | Total: {totalItems} items
        </span>
      </div>

      <div className="pagination-buttons">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="pagination-btn pagination-btn-prev"
        >
          ← Previous
        </button>

        {startPage > 1 && (
          <>
            <button onClick={() => onPageChange(1)} className="pagination-btn">
              1
            </button>
            {startPage > 2 && <span className="pagination-dots">...</span>}
          </>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => {
              onPageChange(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="pagination-dots">...</span>
            )}
            <button
              onClick={() => onPageChange(totalPages)}
              className="pagination-btn"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="pagination-btn pagination-btn-next"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
