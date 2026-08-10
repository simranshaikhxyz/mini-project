import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function MyOrders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const userInfo = JSON.parse(
        localStorage.getItem("userInfo")
      );

      if (!userInfo) {
        navigate("/login");
        return;
      }

      const { data } = await API.get("/orders/myorders", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setOrders(data);
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        localStorage.removeItem("userInfo");
        navigate("/login");
      } else {
        alert(
          error.response?.data?.message ||
            "Failed to load orders."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const cancelOrder = async (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmCancel) return;

    try {
      const userInfo = JSON.parse(
        localStorage.getItem("userInfo")
      );

      await API.put(
        `/orders/${id}/cancel`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      alert("Order cancelled successfully.");
      fetchOrders();
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          "Failed to cancel order."
      );
    }
  };

  // Modern Shimmer Skeleton Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50/50 py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="h-8 w-48 bg-slate-200 rounded animate-pulse mb-8" />
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 animate-pulse">
              <div className="flex justify-between items-center">
                <div className="h-6 w-1/3 bg-slate-200 rounded" />
                <div className="h-6 w-20 bg-slate-200 rounded-full" />
              </div>
              <div className="h-4 w-1/2 bg-slate-200 rounded" />
              <div className="h-10 w-full bg-slate-100 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 antialiased font-sans py-12">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              My Orders
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Track manufacturing progress, delivery statuses, and active orders.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 self-start sm:self-auto"
          >
            ← Back to Products
          </Link>
        </div>

        {/* Orders Feed */}
        {orders.length === 0 ? (
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-12 text-center max-w-xl mx-auto mt-8">
            <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              No Orders Found
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">
              You haven't placed any customization or structural material orders yet.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm transition text-sm"
            >
              Start Custom Order
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => {
              // Status Styling Configuration
              const statusConfig = {
                Completed: { bg: "bg-emerald-50 text-emerald-700 border-emerald-100", dot: "bg-emerald-500" },
                Processing: { bg: "bg-blue-50 text-blue-700 border-blue-100", dot: "bg-blue-500" },
                Cancelled: { bg: "bg-rose-50 text-rose-700 border-rose-100", dot: "bg-rose-500" },
                Pending: { bg: "bg-amber-50 text-amber-700 border-amber-100", dot: "bg-amber-500" }
              };

              const currentStatus = statusConfig[order.orderStatus] || statusConfig.Pending;

              return (
                <div
                  key={order._id}
                  className="bg-white border border-slate-150/80 shadow-sm rounded-2xl p-6 transition hover:border-slate-300"
                >
                  {/* Top Status Area */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-mono text-slate-400">Order Reference</span>
                      <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                        {order.product?.productName || "Product Reference Unavailable"}
                      </h2>
                    </div>

                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${currentStatus.bg}`}>
                      <span className={`w-2 h-2 rounded-full ${currentStatus.dot}`}></span>
                      {order.orderStatus}
                    </span>
                  </div>

                  {/* Metadata Specifications Grid */}
                  <div className="grid md:grid-cols-3 gap-6 py-5 text-sm">
                    {/* Column 1: Client details */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Delivery Logistics
                      </h4>
                      <div className="space-y-1">
                        <p className="font-semibold text-slate-800">{order.customerName}</p>
                        <p className="text-slate-500">{order.phone}</p>
                        <p className="text-slate-500 leading-relaxed max-w-xs">{order.address}</p>
                      </div>
                    </div>

                    {/* Column 2: Order Specifications */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Order Details
                      </h4>
                      <div className="space-y-1 text-slate-600">
                        <p>
                          Quantity: <span className="font-semibold text-slate-900">{order.quantity} units</span>
                        </p>
                        <p>
                          Order Date:{" "}
                          <span className="font-semibold text-slate-900">
                            {new Date(order.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric"
                            })}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Column 3: Total Price Breakdown */}
                    <div className="bg-slate-50/60 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Total Amount Paid
                      </div>
                      <div className="text-2xl font-extrabold text-slate-900 tabular-nums mt-1">
                        ₹{order.totalPrice.toLocaleString("en-IN")}
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Action Zone */}
                  {(order.orderStatus === "Pending" || order.orderStatus === "Processing") && (
                    <div className="pt-4 border-t border-slate-100 flex justify-end">
                      <button
                        onClick={() => cancelOrder(order._id)}
                        className="text-xs font-semibold text-rose-600 hover:text-rose-700 border border-rose-100 hover:bg-rose-50 px-4 py-2 rounded-xl transition duration-150"
                      >
                        Cancel Active Order
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}

export default MyOrders;