import { motion, AnimatePresence } from "motion/react";
import { X, Home, Monitor, Headphones, Package, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const categories = [
    { name: "Inicio", icon: Home, href: "/" },
    { name: "Computadores", icon: Monitor, href: "/?category=Computadores" },
    { name: "Periféricos", icon: Headphones, href: "/?category=Periféricos" },
    { name: "Combos", icon: Package, href: "/?category=Combos" }
  ];

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
            className="fixed inset-0 bg-black/60 z-50 md:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 w-[280px] bg-[#2d2d2d] z-50 shadow-2xl flex flex-col md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-white font-bold">Digital Technology</h2>
                <p className="text-white/60 text-xs">J&Y.COM</p>
              </div>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6">
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a
                      href={category.href}
                      onClick={onClose}
                      className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all"
                    >
                      <category.icon className="w-5 h-5" />
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-white/60 text-xs uppercase tracking-wider mb-4">Síguenos</h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-orange-500 p-3 rounded-lg transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-orange-500 p-3 rounded-lg transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-orange-500 p-3 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="mailto:info@jydigitaltech.com"
                    className="bg-white/10 hover:bg-orange-500 p-3 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-white/10">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
