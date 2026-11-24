const CATEGORIES = ["Laptops", "Monitors", "Keyboards", "Audio"];
const BRANDS = ["ASUS", "HP", "Dell", "Lenovo", "Logitech", "Sony"];

export function generateProducts(count = 5000) {
    const items = [];
    for (let i=0; i<=count; i++){
        const category = CATEGORIES[i % CATEGORIES.length];
        const brand = BRANDS[i % BRANDS.length];
        const price = 50 + ((i*37) % 1450);

        items.push({
            id: i,
            name: `${brand} ${category.slice(0, -1)} Model - ${i}`,
            category,
            price,
        });

    }
    return items;
}