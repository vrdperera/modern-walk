import { API_BASE_URL } from "@/config/api";
import { Product } from "@/types/types";

export const fetchCategoryProducts = async (
  category: string
): Promise<Product[] | null> => {
  try {
    const formattedCategory =
      category === "mens-clothing" ? "men's clothing" : "women's clothing";

    const response = await fetch(
      `${API_BASE_URL}/products/category/${formattedCategory}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch ${formattedCategory}`);
    }

    const data: Product[] = await response.json();
    return data.sort((a, b) => b.id - a.id); // Sort latest to oldest
  } catch (error) {
    console.error(`Error fetching ${category}:`, error);
    return null; // Return null instead of an empty array
  }
};
