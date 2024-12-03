export const fetchProducts = async (filters: string = '') => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    return response.json();
};

export const fetchProductById = async (id: string | number) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
};

export const fetchCategories = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/categories`);
    return response.json();
};
