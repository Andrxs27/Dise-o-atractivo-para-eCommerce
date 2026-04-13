import { motion } from "motion/react";
import { ShoppingCart, Star, ChevronRight, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { products } from "../data/products";

const categories = ["Todos", "Computadores", "Periféricos", "Combos", "Monitores", "Audio"];

interface HomeProps {
  onAddToCart: (product: { id: number; name: string; price: string; image: string }) => void;
}

export default function Home({ onAddToCart }: HomeProps) {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "Todos");
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = products.filter(p => {
    // Filter by category
    const categoryMatch = selectedCategory === "Todos" || p.category === selectedCategory;

    // Filter by search
    const searchMatch = !searchParam ||
      p.name.toLowerCase().includes(searchParam.toLowerCase()) ||
      p.category.toLowerCase().includes(searchParam.toLowerCase()) ||
      p.description.toLowerCase().includes(searchParam.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1775410633801-5d7997f795c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Gaming Setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm mb-4"
            >
              NUEVOS PRODUCTOS
            </motion.span>
            <h2 className="text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-tight mb-4">
              Equipa Tu<br />Setup Gaming
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-md">
              Descubre nuestra colección de equipos gaming de última generación. Calidad premium, precios competitivos.
            </p>
            <motion.button
              onClick={scrollToProducts}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
            >
              Ver Productos
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Search Results Banner */}
      {searchParam && (
        <section className="bg-[#2d2d2d] border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-4 py-4">
            <p className="text-white">
              Resultados de búsqueda para: <span className="text-orange-500 font-medium">"{searchParam}"</span>
              {filteredProducts.length === 0 && <span className="text-white/60 ml-2">- No se encontraron productos</span>}
            </p>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="bg-[#1a1a1a] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  navigate(category === "Todos" ? "/" : `/?category=${category}`);
                }}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-[#2d2d2d] text-white/70 hover:bg-[#3d3d3d] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="max-w-[1400px] mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <h3 className="text-white text-3xl mb-2">
            {searchParam ? "Resultados de Búsqueda" : "Productos Destacados"}
          </h3>
          <p className="text-white/60">
            {filteredProducts.length} {filteredProducts.length === 1 ? "producto encontrado" : "productos encontrados"}
          </p>
        </motion.div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#2d2d2d] rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all group"
              >
                <div
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="relative aspect-square overflow-hidden bg-[#1a1a1a] cursor-pointer"
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    OFERTA
                  </div>
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {product.stock}
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-orange-500 text-xs mb-1 uppercase tracking-wider">{product.category}</p>
                  <h4
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="text-white font-medium mb-2 line-clamp-2 cursor-pointer hover:text-orange-500 transition-colors"
                  >
                    {product.name}
                  </h4>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                      <span className="text-white text-sm">{product.rating}</span>
                    </div>
                    <span className="text-white/40 text-xs">(128 reviews)</span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-white text-xl font-bold">{product.price}</span>
                    <span className="text-white/40 text-sm line-through">{product.originalPrice}</span>
                  </div>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image
                      });
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-orange-500 text-white py-2.5 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Agregar al Carrito
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-white/60 text-lg mb-4">No se encontraron productos</p>
            <button
              onClick={() => {
                setSelectedCategory("Todos");
                navigate("/");
              }}
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </section>

      {/* CTA Banner */}
      <section className="relative h-[400px] overflow-hidden my-12">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1682335008739-eddc8bd8f57b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Gaming Peripherals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto px-4 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
              ¿Necesitas Asesoría?
            </h3>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a encontrar el equipo perfecto
            </p>
            <motion.a
              href="https://wa.me/573233965246?text=Hola,%20necesito%20asesoría%20sobre%20productos"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
