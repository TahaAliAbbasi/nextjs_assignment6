import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      type: "Women's Shoes",
      price: "₹13,995",
      img: "/product1.png",
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      type: "Men's Shoes",
      price: "₹13,995",
      img: "/product2.png",
    },
    {
      id: 3,
      name: "Nike Air Max 97 SE",
      type: "Men's Shoes",
      price: "₹16,995",
      img: "/product3.png",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <h2 className="text-lg font-bold mb-4">Best of Air Max</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-sm font-semibold">{product.name}</p>
              <p className="text-xs text-gray-500">{product.type}</p>
              <p className="text-sm font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
