import { motion } from "motion/react";
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, CreditCard, ChevronLeft, Check, Plus, Minus, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { products } from "../data/products";

interface ProductDetailProps {
  onAddToCart: (product: { id: number; name: string; price: string; image: string }) => void;
}

export default function ProductDetail({ onAddToCart }: ProductDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = products.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl mb-4">Producto no encontrado</h2>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `${product.name} - ${product.price}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Back Button */}
      <div className="bg-[#2d2d2d] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Volver a la tienda
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Gallery */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#2d2d2d] rounded-xl overflow-hidden mb-4"
            >
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-[#2d2d2d] rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-orange-500"
                      : "border-transparent hover:border-white/20"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Category */}
              <p className="text-orange-500 text-sm uppercase tracking-wider mb-2">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="text-white text-4xl mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-orange-500 text-orange-500"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white">{product.rating}</span>
                <span className="text-white/40">(247 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-white/10">
                <span className="text-white text-5xl font-bold">{product.price}</span>
                <span className="text-white/40 text-2xl line-through">{product.originalPrice}</span>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  Ahorra {Math.round((1 - parseFloat(product.price.replace(/[$,]/g, "")) / parseFloat(product.originalPrice.replace(/[$,]/g, ""))) * 100)}%
                </span>
              </div>

              {/* Stock */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white font-medium">{product.stock} - Envío inmediato</span>
              </div>

              {/* Description */}
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="text-white block mb-3">Cantidad</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-[#2d2d2d] rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-white hover:text-orange-500 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="px-6 py-3 text-white font-medium min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-white hover:text-orange-500 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <span className="text-white/60">
                    Stock disponible: 50+ unidades
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8">
                <motion.button
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                    addedToCart
                      ? "bg-green-500 text-white"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Agregado al Carrito
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Agregar al Carrito
                    </>
                  )}
                </motion.button>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-4 rounded-lg transition-all ${
                    isFavorite
                      ? "bg-red-500 text-white"
                      : "bg-[#2d2d2d] text-white hover:bg-[#3d3d3d]"
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`} />
                </button>

                <button
                  onClick={handleShare}
                  className="bg-[#2d2d2d] text-white p-4 rounded-lg hover:bg-[#3d3d3d] transition-colors"
                >
                  <Share2 className="w-6 h-6" />
                </button>
              </div>

              {/* WhatsApp Contact */}
              <a
                href={`https://wa.me/1234567890?text=Hola,%20estoy%20interesado%20en%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2 mb-8"
              >
                <MessageCircle className="w-5 h-5" />
                Consultar por WhatsApp
              </a>

              {/* Benefits */}
              <div className="grid grid-cols-1 gap-4 bg-[#2d2d2d] rounded-xl p-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <Truck className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium">Envío Gratis</p>
                    <p className="text-sm text-white/60">En compras sobre $200</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium">Garantía Oficial</p>
                    <p className="text-sm text-white/60">2 años de cobertura total</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <CreditCard className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium">Pago Seguro</p>
                    <p className="text-sm text-white/60">Hasta 12 cuotas sin interés</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Specs Table */}
          <div className="bg-[#2d2d2d] rounded-xl p-8">
            <h3 className="text-white text-2xl mb-6">Especificaciones Técnicas</h3>
            <div className="space-y-4">
              {product.specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between py-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-white/60">{spec.label}</span>
                  <span className="text-white font-medium text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-[#2d2d2d] rounded-xl p-8">
            <h3 className="text-white text-2xl mb-6">Características Destacadas</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-white/80">
                  <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-white text-3xl mb-8">Productos Relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.article
                  key={relatedProduct.id}
                  whileHover={{ y: -5 }}
                  onClick={() => {
                    navigate(`/product/${relatedProduct.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-[#2d2d2d] rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-orange-500 text-xs mb-1">{relatedProduct.category}</p>
                    <h4 className="text-white font-medium mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-bold">{relatedProduct.price}</span>
                      <span className="text-white/40 text-sm line-through">
                        {relatedProduct.originalPrice}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
