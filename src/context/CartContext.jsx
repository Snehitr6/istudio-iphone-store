
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("istudio-cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("istudio-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, color, storage) => {
    const key = `${product.id}-${color}-${storage}`;

    setCart((previous) => {
      const existing = previous.find((item) => item.key === key);

      if (existing) {
        return previous.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previous,
        {
          ...product,
          key,
          selectedColor: color,
          selectedStorage: storage,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (key) => {
    setCart((previous) => previous.filter((item) => item.key !== key));
  };

  const updateQuantity = (key, quantity) => {
    if (quantity < 1) return removeFromCart(key);

    setCart((previous) =>
      previous.map((item) =>
        item.key === key ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
