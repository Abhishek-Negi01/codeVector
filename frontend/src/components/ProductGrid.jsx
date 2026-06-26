import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  if (!products.length) {
    return (
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold text-gray-600">
          No Products Found
        </h2>

        <p className="mt-2 text-gray-500">Try changing the category.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
