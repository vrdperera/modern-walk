import CategoryTile from "../CategoryTile";

export const Categories = () => (
  <section className="mt-12 w-full">
    <h2 className="text-2xl font-bold mb-4">Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
      <CategoryTile
        title="Men's Clothing"
        link="/category/mens-clothing"
        color="green"
      />
      <CategoryTile
        title="Women's Clothing"
        link="/category/womens-clothing"
        color="pink"
      />
    </div>
  </section>
);
