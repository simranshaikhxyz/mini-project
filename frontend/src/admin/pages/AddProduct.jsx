import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    materialType: "",
    thickness: "",
    color: "",
    image: "",
    customizable: false,
    dimensions: {
      length: "",
      width: "",
      unit: "ft",
    },
  });

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (["length", "width", "unit"].includes(name)) {
      setProduct((prev) => ({
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [name]: value,
        },
      }));
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, PNG and WEBP images are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5 MB.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);

      const { data } = await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(data);

      setProduct((prev) => ({
        ...prev,
        image: data.image, // ← FIXED
      }));

      alert("Image uploaded successfully.");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to upload image."
      );
    } finally {
      setUploading(false);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (product.productName.trim().length < 3) {
      return alert("Product name must contain at least 3 characters.");
    }

    if (product.description.trim().length < 20) {
      return alert("Description must contain at least 20 characters.");
    }

    if (Number(product.price) <= 0) {
      return alert("Enter a valid product price.");
    }

    if (Number(product.dimensions.length) <= 0) {
      return alert("Enter a valid length.");
    }

    if (Number(product.dimensions.width) <= 0) {
      return alert("Enter a valid width.");
    }

    if (!product.image) {
      return alert("Please upload a product image.");
    }

    try {
      setSaving(true);

      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      if (!userInfo || !userInfo.token) {
        alert("Please login again.");
        navigate("/login");
        return;
      }

      await API.post("/products", product, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      alert("Product added successfully.");

      navigate("/admin/products");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to add product."
      );
    } finally {
      setSaving(false);
    }
  };


  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Add New Product
          </h1>

          <p className="text-slate-500 mt-2">
            Fill in the product information to add it to your catalog.
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-10"
        >

          {/* General Information */}

          <section>

            <h2 className="text-xl font-semibold mb-6 border-b pb-2">
              General Information
            </h2>

            <div className="space-y-5">

              <div>
                <label className="block mb-2 font-medium">
                  Product Name
                </label>

                <input
                  type="text"
                  name="productName"
                  value={product.productName}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Description
                </label>

                <textarea
                  rows="5"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  placeholder="Enter detailed product description..."
                  className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                  required
                />
              </div>

            </div>

          </section>

          {/* Product Details */}

          <section>

            <h2 className="text-xl font-semibold mb-6 border-b pb-2">
              Product Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-medium">
                  Price (₹)
                </label>

                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Material Type
                </label>

                <input
                  type="text"
                  name="materialType"
                  value={product.materialType}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Thickness
                </label>

                <input
                  type="text"
                  name="thickness"
                  value={product.thickness}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Color
                </label>

                <input
                  type="text"
                  name="color"
                  value={product.color}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />
              </div>

            </div>

          </section>

          {/* Dimensions */}

          <section>

            <h2 className="text-xl font-semibold mb-6 border-b pb-2">
              Dimensions
            </h2>

            <div className="grid grid-cols-3 gap-6">

              <div>
                <label className="block mb-2 font-medium">
                  Length
                </label>

                <input
                  type="number"
                  name="length"
                  value={product.dimensions.length}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Width
                </label>

                <input
                  type="number"
                  name="width"
                  value={product.dimensions.width}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Unit
                </label>

                <select
                  name="unit"
                  value={product.dimensions.unit}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option value="ft">ft</option>
                  <option value="inch">inch</option>
                  <option value="cm">cm</option>
                  <option value="mm">mm</option>
                </select>
              </div>

            </div>

          </section>

          {/* Image Upload */}

          <section>

            <h2 className="text-xl font-semibold mb-6 border-b pb-2">
              Product Image
            </h2>

            <label className="block border-2 border-dashed border-gray-300 rounded-2xl p-10 cursor-pointer hover:border-indigo-500 transition text-center">

              <input
                type="file"
                accept="image/*"
                disabled={uploading}
                onChange={handleImageUpload}
                className="hidden"
              />

              {uploading ? (
                <div>

                  <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

                  <p className="mt-4 text-indigo-600 font-semibold">
                    Uploading image...
                  </p>

                </div>
              ) : (
                <>

                  <div className="text-5xl mb-3">
                    📷
                  </div>

                  <p className="text-lg font-semibold">
                    Click or Drag & Drop Product Image
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    PNG, JPG or WEBP (Maximum 5 MB)
                  </p>

                </>
              )}

            </label>
            {product.image && (
              <div className="mt-8 flex flex-col items-center">

                <img
                  src={product.image}
                  alt="Preview"
                  className="w-72 h-72 object-cover rounded-2xl shadow-lg border"
                />

                <p className="text-green-600 font-semibold mt-4">
                  ✓ Image uploaded successfully
                </p>

              </div>
            )}

          </section>

          {/* Customizable */}

          <section>

            <h2 className="text-xl font-semibold mb-6 border-b pb-2">
              Additional Options
            </h2>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                id="customizable"
                name="customizable"
                checked={product.customizable}
                onChange={handleChange}
                className="w-5 h-5 accent-indigo-600"
              />

              <span className="font-medium">
                This product can be customized.
              </span>

            </label>

          </section>

          {/* Buttons */}

          <div className="flex justify-end gap-4 border-t pt-8">

            <button
              type="button"
              onClick={() => navigate("/admin/products")}
              className="px-7 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving || uploading}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              {saving
                ? "Adding Product..."
                : "Add Product"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddProduct;