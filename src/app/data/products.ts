export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  images: string[];
  category: string;
  rating: number;
  stock: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "PC Gamer RGB Elite",
    price: "$1,299",
    originalPrice: "$1,499",
    image: "https://images.unsplash.com/photo-1640865993619-cb8f720bf908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1640865993619-cb8f720bf908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1660209034425-d22574bb176c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1719927604476-dc404b85358f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1667984461038-4c9fc09092c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    ],
    category: "Computadores",
    rating: 4.8,
    stock: "En Stock",
    description: "Computador Gaming de alto rendimiento con iluminación RGB personalizable. Diseñado para jugadores exigentes que buscan el máximo desempeño en sus partidas. Incluye sistema de refrigeración avanzado y componentes de última generación.",
    specs: [
      { label: "Procesador", value: "Intel Core i7-13700K" },
      { label: "Tarjeta Gráfica", value: "NVIDIA RTX 4070 Ti 12GB" },
      { label: "RAM", value: "32GB DDR5 5600MHz" },
      { label: "Almacenamiento", value: "1TB NVMe SSD" },
      { label: "Fuente", value: "850W 80+ Gold Modular" },
      { label: "Refrigeración", value: "Líquida RGB 240mm" }
    ],
    features: [
      "Iluminación RGB sincronizable",
      "Panel lateral de vidrio templado",
      "Sistema de refrigeración silencioso",
      "Cable management optimizado",
      "Garantía de 2 años",
      "Soporte técnico 24/7"
    ]
  },
  {
    id: 2,
    name: "Setup Gamer Completo",
    price: "$899",
    originalPrice: "$1,099",
    image: "https://images.unsplash.com/photo-1632064824547-e77c36851495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1632064824547-e77c36851495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1775410633801-5d7997f795c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1682335008739-eddc8bd8f57b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    ],
    category: "Combos",
    rating: 4.9,
    stock: "En Stock",
    description: "Combo completo para gaming que incluye todo lo necesario para empezar tu aventura gamer. Monitor de alta frecuencia, teclado mecánico, mouse gaming y auriculares premium.",
    specs: [
      { label: "Monitor", value: "27\" 144Hz QHD IPS" },
      { label: "Teclado", value: "Mecánico RGB Switch Blue" },
      { label: "Mouse", value: "Gaming 16000 DPI RGB" },
      { label: "Auriculares", value: "7.1 Surround RGB" },
      { label: "Mousepad", value: "Extended XXL RGB" }
    ],
    features: [
      "Todo sincronizado por software",
      "Cables reforzados",
      "Garantía extendida de 3 años",
      "Configuración plug & play",
      "Soporte multilenguaje"
    ]
  },
  {
    id: 3,
    name: "Teclado K400 Logitech",
    price: "$79",
    originalPrice: "$99",
    image: "https://exitocol.vtexassets.com/arquivos/ids/631646/teclado-inalambrico-touch-logitech-k400-plus-usb-negro.jpg?v=637022089704230000",
    images: [
      "https://exitocol.vtexassets.com/arquivos/ids/631646/teclado-inalambrico-touch-logitech-k400-plus-usb-negro.jpg?v=637022089704230000",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    ],
    category: "Periféricos",
    rating: 4.7,
    stock: "En Stock",
    description: "Teclado inalámbrico con touchpad integrado, perfecto para controlar tu PC desde el sofá. Diseño compacto y ergonómico con conectividad USB confiable.",
    specs: [
      { label: "Conectividad", value: "Inalámbrico 2.4GHz USB" },
      { label: "Alcance", value: "Hasta 10 metros" },
      { label: "Batería", value: "18 meses duración" },
      { label: "Touchpad", value: "Multi-touch integrado" },
      { label: "Compatibilidad", value: "Windows, Android, Chrome OS" }
    ],
    features: [
      "Teclas silenciosas",
      "Touchpad de precisión",
      "Receptor USB nano",
      "Diseño ultra delgado",
      "Teclas de acceso rápido multimedia"
    ]
  },
  {
    id: 4,
    name: "Teclado Mecánico RGB",
    price: "$129",
    originalPrice: "$179",
    image: "https://images.unsplash.com/photo-1588440241012-ffd0331a05a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1588440241012-ffd0331a05a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1558742569-fe6d39d05837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1581865418607-a97d952a655b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1658262548679-776e437f95e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    ],
    category: "Periféricos",
    rating: 4.7,
    stock: "En Stock",
    description: "Teclado mecánico gaming con switches de alta calidad y retroiluminación RGB personalizable por tecla. Construcción en aluminio para máxima durabilidad.",
    specs: [
      { label: "Switch", value: "Mecánico Hot-Swappable" },
      { label: "Iluminación", value: "RGB por tecla 16.8M colores" },
      { label: "Anti-Ghosting", value: "Full N-Key Rollover" },
      { label: "Material", value: "Aluminio reforzado" },
      { label: "Cable", value: "USB-C trenzado desmontable" },
      { label: "Polling Rate", value: "1000Hz" }
    ],
    features: [
      "Switches intercambiables en caliente",
      "Reposamuñecas magnético incluido",
      "Software de personalización",
      "Macros programables",
      "Perfiles de iluminación guardables",
      "Construcción premium resistente a derrames"
    ]
  },
  {
    id: 5,
    name: "Mouse Gaming RGB",
    price: "$79",
    originalPrice: "$99",
    image: "https://images.unsplash.com/photo-1667071581442-8d8ca6fc8661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1667071581442-8d8ca6fc8661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    ],
    category: "Periféricos",
    rating: 4.6,
    stock: "En Stock",
    description: "Mouse gaming de precisión con sensor óptico de última generación. Diseño ergonómico ambidiestro con iluminación RGB y botones programables.",
    specs: [
      { label: "DPI", value: "Hasta 16,000 ajustable" },
      { label: "Sensor", value: "Óptico PixArt PMW3389" },
      { label: "Botones", value: "8 programables" },
      { label: "Polling Rate", value: "1000Hz" },
      { label: "Aceleración", value: "50G" },
      { label: "Cable", value: "Trenzado 2m" }
    ],
    features: [
      "Pesos ajustables",
      "Pies de PTFE de alta calidad",
      "Perfiles DPI programables",
      "Iluminación RGB 16.8M colores",
      "Switches Omron 50M clicks",
      "Compatible con todos los grips"
    ]
  },
  {
    id: 6,
    name: "Setup Periféricos RGB",
    price: "$249",
    originalPrice: "$299",
    image: "https://images.unsplash.com/photo-1683362684712-3cb00ff5ccd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1683362684712-3cb00ff5ccd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1636036769389-343bb250f013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1636487658594-a65028b8da7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    ],
    category: "Combos",
    rating: 4.8,
    stock: "En Stock",
    description: "Kit completo de periféricos gaming sincronizados. Incluye teclado mecánico, mouse, auriculares y mousepad, todo con iluminación RGB coordinada.",
    specs: [
      { label: "Teclado", value: "Mecánico RGB 104 teclas" },
      { label: "Mouse", value: "16000 DPI RGB" },
      { label: "Auriculares", value: "7.1 Virtual Surround" },
      { label: "Mousepad", value: "Extended RGB 900x400mm" },
      { label: "Software", value: "Sincronización unificada" }
    ],
    features: [
      "RGB sincronizado por software",
      "Garantía de 3 años",
      "Configuración plug & play",
      "Múltiples perfiles guardables",
      "Cable management incluido"
    ]
  },
  {
    id: 7,
    name: "PC Tower RGB Gaming",
    price: "$1,599",
    originalPrice: "$1,799",
    image: "https://images.unsplash.com/photo-1719927604476-dc404b85358f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1719927604476-dc404b85358f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1667984461038-4c9fc09092c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1640865993619-cb8f720bf908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    ],
    category: "Computadores",
    rating: 4.9,
    stock: "En Stock",
    description: "Torre gaming premium con componentes de alto rendimiento y refrigeración líquida. Diseño moderno con panel de vidrio templado y RGB personalizable.",
    specs: [
      { label: "Procesador", value: "AMD Ryzen 9 7950X" },
      { label: "Tarjeta Gráfica", value: "NVIDIA RTX 4080 16GB" },
      { label: "RAM", value: "64GB DDR5 6000MHz" },
      { label: "Almacenamiento", value: "2TB NVMe Gen4 SSD" },
      { label: "Fuente", value: "1000W 80+ Platinum" },
      { label: "Refrigeración", value: "AIO 360mm RGB" }
    ],
    features: [
      "Overclocking optimizado",
      "Sistema de refrigeración premium",
      "Cable management profesional",
      "Vidrio templado tintado",
      "Garantía premium de 3 años",
      "Configuración personalizada disponible"
    ]
  },
  {
    id: 8,
    name: "Teclado + Mouse Combo",
    price: "$159",
    originalPrice: "$199",
    image: "https://images.unsplash.com/photo-1636487658594-a65028b8da7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1636487658594-a65028b8da7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1636487658599-41cbb316db12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1636487658596-daa25387d112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    ],
    category: "Combos",
    rating: 4.5,
    stock: "En Stock",
    description: "Combo esencial de teclado y mouse gaming con diseño coordinado. Perfecto para comenzar tu setup gaming con periféricos de calidad a excelente precio.",
    specs: [
      { label: "Teclado", value: "Membrana RGB Anti-ghosting" },
      { label: "Mouse", value: "8000 DPI Óptico RGB" },
      { label: "Iluminación", value: "RGB 7 modos predefinidos" },
      { label: "Cable", value: "Trenzados durables" },
      { label: "Garantía", value: "2 años" }
    ],
    features: [
      "Diseño ergonómico",
      "Teclas silenciosas",
      "Mouse ambidiestro",
      "Excelente relación precio-calidad",
      "Fácil instalación",
      "RGB sincronizado"
    ]
  }
];
