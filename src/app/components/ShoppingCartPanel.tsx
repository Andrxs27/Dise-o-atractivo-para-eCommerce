import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface ShoppingCartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function ShoppingCartPanel({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: ShoppingCartPanelProps) {
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, ""));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#2d2d2d] z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-white text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" />
                Carrito de Compras
              </h2>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-white/20 mb-4" />
                  <p className="text-white/60 mb-2">Tu carrito está vacío</p>
                  <button
                    onClick={onClose}
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    Continuar comprando
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="bg-[#1a1a1a] rounded-lg p-4"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-white font-medium mb-1 line-clamp-2">{item.name}</h3>
                          <p className="text-orange-500 font-bold mb-2">{item.price}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center bg-[#2d2d2d] rounded-lg">
                              <button
                                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="px-2 py-1 text-white hover:text-orange-500 transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-3 py-1 text-white text-sm min-w-[40px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 text-white hover:text-orange-500 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-white/40 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/10 p-6 space-y-4">
                <div className="flex justify-between text-white text-lg">
                  <span>Subtotal:</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Envío:</span>
                  <span>{total >= 200 ? "Gratis" : "$15.00"}</span>
                </div>
                <div className="flex justify-between text-white text-xl border-t border-white/10 pt-4">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-orange-500">
                    ${(total + (total >= 200 ? 0 : 15)).toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                  Proceder al Pago
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
