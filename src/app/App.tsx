import { motion } from "motion/react";
import { ShoppingCart, Search, Menu, Monitor, Mail, Facebook, Instagram, MessageCircle, Truck, Shield, CreditCard, X } from "lucide-react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useSearchParams } from "react-router";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCartPanel from "./components/ShoppingCartPanel";
import MobileMenu from "./components/MobileMenu";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: { id: number; name: string; price: string; image: string }) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Shopping Cart Panel */}
      <ShoppingCartPanel
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Top Bar */}
      <div className="bg-[#2d2d2d] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 py-2 flex justify-between items-center text-sm text-white/70">
          <span className="hidden sm:block">Envío gratis en compras superiores a $200</span>
          <span className="sm:hidden">Envío gratis +$200</span>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/573233965246"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href="mailto:info@jydigitaltech.com"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-[#2d2d2d] border-b border-white/10 sticky top-0 z-40 backdrop-blur-lg bg-[#2d2d2d]/95"
      >
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <button onClick={() => navigate("/")} className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2">
                <Monitor className="w-6 h-6 text-[#2d2d2d]" />
              </div>
              <div className="text-left">
                <h1 className="text-white text-xl font-bold tracking-tight">Digital Technology</h1>
                <p className="text-white/60 text-xs tracking-wider">J&Y.COM</p>
                <p className="text-white/50 text-[10px] uppercase hidden sm:block">Venta de Equipos y Accesorios</p>
              </div>
            </button>

            {/* Search Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  className="w-full bg-[#1a1a1a] text-white pl-11 pr-4 py-2.5 rounded-lg border border-white/10 focus:border-orange-500 focus:outline-none transition-colors"
                />
              </form>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Search Mobile Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden text-white/70 hover:text-white transition-colors"
              >
                <Search className="w-6 h-6" />
              </button>

              {/* Social Links Desktop */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href="https://www.facebook.com/people/Digital-technology-jy-com/61557029266525/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/tecnologjy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/573233965246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@jydigitaltech.com"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Cart Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative text-white hover:text-orange-500 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Search Expanded */}
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  className="w-full bg-[#1a1a1a] text-white pl-11 pr-10 py-2.5 rounded-lg border border-white/10 focus:border-orange-500 focus:outline-none transition-colors"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Features */}
      <section className="bg-[#2d2d2d] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <Truck className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-medium">Envío Gratis</h4>
                <p className="text-sm text-white/60">En compras sobre $200</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-medium">Garantía Oficial</h4>
                <p className="text-sm text-white/60">12 meses de cobertura</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <CreditCard className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-medium">Pago Seguro</h4>
                <p className="text-sm text-white/60">Múltiples métodos de pago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] border-t border-white/10 mt-16">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white rounded-full p-2">
                  <Monitor className="w-5 h-5 text-[#2d2d2d]" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Digital Technology</h4>
                  <p className="text-white/60 text-xs">J&Y.COM</p>
                </div>
              </div>
              <p className="text-white/60 text-sm">
                Tu tienda de confianza para equipos gaming y tecnología de última generación.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Productos</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><button onClick={() => navigate("/?category=Computadores")} className="hover:text-white transition-colors">Computadores</button></li>
                <li><button onClick={() => navigate("/?category=Periféricos")} className="hover:text-white transition-colors">Periféricos</button></li>
                <li><button onClick={() => navigate("/?category=Combos")} className="hover:text-white transition-colors">Combos</button></li>
                <li><button onClick={() => navigate("/?category=Audio")} className="hover:text-white transition-colors">Audio</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Ayuda</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#envios" className="hover:text-white transition-colors">Envíos</a></li>
                <li><a href="#devoluciones" className="hover:text-white transition-colors">Devoluciones</a></li>
                <li><a href="#garantia" className="hover:text-white transition-colors">Garantía</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Síguenos</h4>
              <div className="flex gap-3 mb-4">
                <a
                  href="https://www.facebook.com/people/Digital-technology-jy-com/61557029266525/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-orange-500 p-2 rounded-lg transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/tecnologjy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-orange-500 p-2 rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://wa.me/573233965246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-orange-500 p-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
                <a
                  href="mailto:info@jydigitaltech.com"
                  className="bg-white/10 hover:bg-orange-500 p-2 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
              <p className="text-white/60 text-sm mb-3">Recibe nuestras ofertas</p>
              <a
                href="https://wa.me/573233965246"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm"
              >
                Suscribirse
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 Digital Technology J&Y.COM. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#privacidad" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#terminos" className="hover:text-white transition-colors">Términos</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div />
      </Layout>
    </BrowserRouter>
  );
}
