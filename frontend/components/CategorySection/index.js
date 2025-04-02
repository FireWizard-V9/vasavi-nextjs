import Image from "next/image";
import Link from "next/link";

const CategorySection = ({ categoryData }) => {
  return (
    <>
      {categoryData.map((category, index) => (
        <div key={index} className="px-6 pb-12">
          <h1 className="text-7xl font-bold mb-12">{category.title}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.products.map((product) => (
              <div key={product.id} className="mb-12">
                <Link href={product.link || "#"} className="block">
                  <div className="relative aspect-[3/4] mb-2 bg-white">
                    <Image
                      src={product.imageSrc}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-xs uppercase text-gray-500 mb-1">
                    {product.badge}
                  </div>

                  <h3 className="text-sm font-medium uppercase mb-1">
                    {product.title}
                  </h3>

                  <p className="text-sm">{product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CategorySection;
