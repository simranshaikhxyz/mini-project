import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log("ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  // Modern Card-Grid Loading Skeleton 
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50/50 py-12 px-6 animate-pulse">
        <div className="max-w-7xl mx-auto">
          <div className="h-10 w-64 bg-slate-200 rounded-lg mx-auto mb-3" />
          <div className="h-4 w-36 bg-slate-150 rounded mx-auto mb-12" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl h-[460px] p-4 flex flex-col justify-between">
                <div className="w-full h-48 bg-slate-100 rounded-xl mb-4" />
                <div className="space-y-3 flex-1">
                  <div className="h-6 w-3/4 bg-slate-200 rounded" />
                  <div className="h-4 w-full bg-slate-100 rounded" />
                  <div className="h-4 w-5/6 bg-slate-100 rounded" />
                </div>
                <div className="h-10 w-full bg-slate-100 rounded-xl mt-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 antialiased font-sans py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our Products
          </h1>
          <p className="text-slate-500 text-sm mt-3 font-medium bg-slate-100 inline-block px-3 py-1 rounded-full">
            Total Available catalog: {products.length} Products
          </p>
        </div>

        {/* Product Layout Grid */}
        {products.length === 0 ? (
          <div className="bg-white border border-slate-150 rounded-2xl p-12 text-center max-w-md mx-auto mt-8 shadow-sm">
            <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900">No Catalog Materials Active</h2>
            <p className="text-slate-500 text-sm mt-1">Please check back later or contact administrators.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="group flex flex-col bg-white border border-slate-150/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                {/* Product Thumbnail Wrapper */}
                <Link to={`/products/${product._id}`} className="block relative overflow-hidden bg-slate-100">
                  <img
                    src={
                      product.image && product.image !== ""
                        ? product.image
                        : "https://via.placeholder.com/400x250?text=Metal+Product"
                    }
                    alt={product.productName}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>

                {/* Details Container */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title & Description */}
                  <div className="flex-1">
                    <Link to={`/products/${product._id}`} className="block hover:underline decoration-slate-300">
                      <h2 className="text-xl font-bold text-slate-900 leading-snug mb-1.5">
                        {product.productName}
                      </h2>
                    </Link>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Metadata specification chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                        {product.materialType}
                      </span>
                      <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                        {product.thickness}
                      </span>
                      <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                        {product.color}
                      </span>
                    </div>
                  </div>

                  {/* Price and Action Section */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Price Per Unit</span>
                      <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                    
                    <Link
                      to={`/products/${product._id}`}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition duration-150 shadow-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;