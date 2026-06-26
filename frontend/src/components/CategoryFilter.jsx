import categories from "../constants/categories";

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="my-6 flex items-center gap-4">
      <label htmlFor="category" className="text-lg font-semibold text-gray-700">
        Category
      </label>

      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
