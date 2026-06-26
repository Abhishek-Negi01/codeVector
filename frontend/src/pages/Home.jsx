import { useEffect, useState } from "react";

import api from "../api/axios";

import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";
import LoadMoreButton from "../components/LoadMoreButton";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cursor, setCursor] = useState(null);

  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchProducts = async (reset = false) => {
    try {
      setLoading(true);

      let url = "/products?limit=20";

      if (selectedCategory !== "All") {
        url += `&category=${selectedCategory}`;
      }

      if (!reset && cursor) {
        url += `&cursor=${encodeURIComponent(cursor)}`;
      }

      const { data } = await api.get(url);

      if (reset) {
        setProducts(data.products);
      } else {
        setProducts((prev) => [...prev, ...data.products]);
      }

      setCursor(data.nextCursor);

      setHasNextPage(!!data.nextCursor);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCursor(null);
    setHasNextPage(true);

    fetchProducts(true);
  }, [selectedCategory]);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {loading && products.length === 0 ? (
          <Loader />
        ) : (
          <>
            <ProductGrid products={products} />

            <LoadMoreButton
              loading={loading}
              hasNextPage={hasNextPage}
              onClick={() => fetchProducts()}
            />
          </>
        )}
      </main>
    </>
  );
};

export default Home;
