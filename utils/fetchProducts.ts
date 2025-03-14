import { Product } from "@/types/types";

export const fetchClothingProducts = async (): Promise<Product[]> => {
  try {
    const [mensResponse, womensResponse] = await Promise.all([
      fetch("https://fakestoreapi.com/products/category/men's clothing"),
      fetch("https://fakestoreapi.com/products/category/women's clothing"),
    ]);

    const [mensProducts, womensProducts]: [Product[], Product[]] =
      await Promise.all([mensResponse.json(), womensResponse.json()]);

    // Sort each category from latest to oldest
    const sortedMens = mensProducts.sort((a, b) => b.id - a.id);
    const sortedWomens = womensProducts.sort((a, b) => b.id - a.id);

    // Interleave Men's & Women's products
    const mixedProducts: Product[] = [];
    const maxLength = Math.max(sortedMens.length, sortedWomens.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < sortedMens.length) mixedProducts.push(sortedMens[i]);
      if (i < sortedWomens.length) mixedProducts.push(sortedWomens[i]);
    }

    return mixedProducts;
  } catch (error) {
    console.error("Error fetching clothing products:", error);
    return [];
  }
};
