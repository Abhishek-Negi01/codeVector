const ProductCard = ({ product }) => {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(product.price);

  const updatedDate = new Date(product.updatedAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Name */}
      <h2 className="mb-3 line-clamp-2 text-lg font-bold text-gray-800">
        {product.name}
      </h2>

      {/* Category */}
      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
        {product.category}
      </span>

      {/* Price */}
      <p className="mt-4 text-2xl font-bold text-green-600">{formattedPrice}</p>

      {/* Divider */}
      <hr className="my-4" />

      {/* Dates */}
      <div className="space-y-1 text-sm text-gray-500">
        <p>
          <span className="font-medium">Updated:</span> {updatedDate}
        </p>

        <p className="truncate text-xs text-gray-400">ID: {product._id}</p>
      </div>
    </div>
  );
};

export default ProductCard;
