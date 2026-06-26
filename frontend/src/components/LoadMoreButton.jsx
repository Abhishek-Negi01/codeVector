const LoadMoreButton = ({ onClick, loading, hasNextPage }) => {
  if (!hasNextPage) {
    return (
      <div className="my-8 text-center text-gray-500">
        🎉 You've reached the end.
      </div>
    );
  }

  return (
    <div className="my-8 flex justify-center">
      <button
        onClick={onClick}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default LoadMoreButton;
