const Modal = ({ isOpen, onClose, item = {} }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[90%] h-[80%] max-w-5xl flex p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Image */}
        <div className="w-1/2">
          <img
            src={item.image}
            alt={item.title || "No title"}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right: Details */}
        <div className="w-1/2 pl-8 flex flex-col">
          <h3 className="text-3xl font-bold mb-4">{item.title || "No title available"}</h3>
          <p className="text-gray-600 text-lg mb-6">
            {item.description || "No description available"}
          </p>
          <p className="text-xl font-semibold text-green-600 mb-8">
            {item.price ? `Price: $${item.price}` : "Price not available"}
          </p>
          <button
            className="bg-blue-500 text-white text-lg px-8 py-4 rounded-lg hover:bg-blue-600 transition"
            onClick={() => alert(`Added "${item.title}" to the cart!`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


export default Modal;
