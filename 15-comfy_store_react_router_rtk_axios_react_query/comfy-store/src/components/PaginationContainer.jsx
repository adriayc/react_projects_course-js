import { useLoaderData } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          type="button"
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => handlePageChange('prev')}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              type="button"
              className={`btn btn-xm sm:btn-md border-noe join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          type="button"
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => handlePageChange('next')}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
