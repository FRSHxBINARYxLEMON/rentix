export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  tag: string | null;
  image: string;
  description: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: "sony-a7iv",
    name: "Sony A7 IV Body",
    category: "Camera",
    price: 85,
    tag: "Popular",
    image:
      "/imgs/products/sony-a7iv.jpg",
    description:
      "The Sony A7 IV is a full-frame mirrorless camera that delivers outstanding image quality and versatile video capabilities. With its 33MP Exmor R sensor, advanced autofocus system, and 4K 60p recording, it's the perfect all-rounder for photographers and filmmakers who demand reliability and performance.",
    specs: [
      "33MP Full-Frame Exmor R Sensor",
      "4K 60fps Video Recording",
      "5-Axis In-Body Stabilization",
      "Real-Time Eye AF & Tracking",
      "10fps Continuous Shooting",
      "Dual Card Slots (CFexpress A / SD)",
    ],
  },
  {
    id: "aputure-300d",
    name: "Aputure 300d Mark II Kit",
    category: "Lighting",
    price: 120,
    tag: "Best Seller",
    image:
      "/imgs/products/aputure-300d.jpg",
    description:
      "The Aputure 300d Mark II is a powerful daylight-balanced LED light with an output of 4500 lux at 3 meters. This kit includes the light head, controller, reflector, and a sturdy C-stand, making it ideal for interviews, narrative work, and commercial productions.",
    specs: [
      "5600K Daylight Balanced",
      "4500 lux @ 3m Output",
      "CRI 96+ / TLCI 97+",
      "Bowens Mount Compatible",
      "DMX & Wireless Control",
      "Includes C-Stand & Reflector",
    ],
  },
  {
    id: "rode-ntg5",
    name: "RODE NTG5 Shotgun Mic",
    category: "Audio",
    price: 45,
    tag: null,
    image:
      "/imgs/products/rode-ntg5.jpg",
    description:
      "The RODE NTG5 is an ultra-lightweight shotgun microphone designed for professional film and broadcast work. With a supercardioid polar pattern, low self-noise, and a smooth, natural frequency response, it excels at capturing dialogue and ambient sound in any environment.",
    specs: [
      "Supercardioid Polar Pattern",
      "Super Lightweight (76g)",
      "Low Self-Noise (10dBA)",
      "Frequency Response: 20Hz-20kHz",
      "Includes WS10 Windshield",
      "XLR Connection",
    ],
  },
  {
    id: "dji-rs3-pro",
    name: "DJI RS 3 Pro Gimbal",
    category: "Stabilizer",
    price: 75,
    tag: "New",
    image:
      "/imgs/products/dji-rs3-pro.jpg",
    description:
      "The DJI RS 3 Pro is a professional 3-axis gimbal stabilizer for cinema cameras and DSLRs. Featuring LiDAR focusing, a 4.5kg payload capacity, and advanced stabilization algorithms, it enables buttery-smooth tracking shots, vertical mode, and time-lapse movements.",
    specs: [
      "4.5kg Max Payload",
      "3-Axis Stabilization",
      "LiDAR Focusing System",
      "12hr Battery Life",
      "Bluetooth Shutter Control",
      "Vertical Shooting Mode",
    ],
  },
  {
    id: "canon-r5",
    name: "Canon EOS R5 Body",
    category: "Camera",
    price: 110,
    tag: null,
    image:
      "/imgs/products/canon-r5.jpg",
    description:
      "The Canon EOS R5 is a flagship mirrorless camera with a 45MP sensor, 8K RAW video, and up to 20fps burst shooting. Ideal for high-end photography, commercial work, and cinematic video production.",
    specs: [
      "45MP Full-Frame CMOS Sensor",
      "8K 30fps RAW Video",
      "4K 120fps Slow Motion",
      "20fps Electronic Shutter",
      "In-Body Image Stabilization",
      "Dual Card Slots (CFexpress + SD)",
    ],
  },
  {
    id: "godox-sl200",
    name: "Godox SL200III LED Light",
    category: "Lighting",
    price: 40,
    tag: null,
    image:
      "/imgs/products/godox-sl200.jpg",
    description:
      "The Godox SL200III is a compact 200W daylight LED video light with Bowens mount. Features include built-in cooling, 11 scene effects, and app control via the Godox Light app. A versatile and budget-friendly option for any production.",
    specs: [
      "200W Daylight LED",
      "5600K Color Temperature",
      "Bowens Mount Compatible",
      "CRI 96 / TLCI 97",
      "App Control (2.4GHz)",
      "Quiet Fan Cooling",
    ],
  },
  {
    id: "shure-sm7b",
    name: "Shure SM7B Microphone",
    category: "Audio",
    price: 55,
    tag: "Popular",
    image:
      "/imgs/products/shure-sm7b.jpg",
    description:
      "The Shure SM7B is a legendary dynamic microphone used by podcasters, broadcasters, and musicians worldwide. Its smooth, warm vocal reproduction and excellent shielding against electromagnetic hum make it a studio essential.",
    specs: [
      "Dynamic Cardioid Pattern",
      "Frequency Response: 50Hz-20kHz",
      "Excellent EMI Shielding",
      "Yoke Mount Design",
      "XLR Connection",
      "Switchable EQ (Bass/Treble)",
    ],
  },
  {
    id: "dji-ronin4d",
    name: "DJI Ronin 4D 6K Kit",
    category: "Stabilizer",
    price: 200,
    tag: "Premium",
    image:
      "/imgs/products/dji-ronin4d.jpg",
    description:
      "The DJI Ronin 4D is an all-in-one cinema camera with built-in 4-axis stabilization, LiDAR autofocus, and a full-frame 6K sensor. A complete filmmaking solution that eliminates the need for separate camera and gimbal setups.",
    specs: [
      "Full-Frame 6K Cinema Sensor",
      "4-Axis Stabilization",
      "LiDAR + Phase Detection AF",
      "Internal ProRes/RAW Recording",
      "Up to 8hr Battery Life",
      "Wireless Video Transmission",
    ],
  },
  {
    id: "sony-fx30",
    name: "Sony FX30 Cinema Camera",
    category: "Camera",
    price: 95,
    tag: null,
    image:
      "/imgs/products/sony-fx30.jpg",
    description:
      "The Sony FX30 is a Super 35mm cinema camera designed for content creators and indie filmmakers. It shoots 4K 120fps, features S-Cinetone color science, and has professional audio inputs in a compact, gimbal-friendly body.",
    specs: [
      "26MP Super 35 Sensor",
      "4K 120fps Recording",
      "S-Cinetone Color Science",
      "Cinema Line Features",
      "XLR/TRS Audio Inputs",
      "Active Cooling System",
    ],
  },
  {
    id: "nanlite-forza-60c",
    name: "Nanlite Forza 60C RGBWW",
    category: "Lighting",
    price: 65,
    tag: "New",
    image:
      "/imgs/products/nanlite-forza-60c.jpg",
    description:
      "The Nanlite Forza 60C is a compact RGBWW LED point light with full-color mixing, 0-100% dimming, and built-in effects. Perfect for creative lighting, color washes, and accent lighting on set.",
    specs: [
      "60W RGBWW LED",
      "15,000 lux @ 1m",
      "CRI 96 / TLCI 95",
      "Full RGB Color Gamut",
      "DMX / Wireless Control",
      "Bowens Mount Adapter",
    ],
  },
  {
    id: "sennheiser-mke600",
    name: "Sennheiser MKE 600 Mic",
    category: "Audio",
    price: 40,
    tag: null,
    image:
      "/imgs/products/sennheiser-mke600.jpg",
    description:
      "The Sennheiser MKE 600 is a professional shotgun microphone with excellent directionality and a warm, natural sound. It can be powered by phantom power or a single AA battery, making it ideal for both studio and field recording.",
    specs: [
      "Super-Cardioid Pattern",
      "Frequency Response: 40Hz-20kHz",
      "Max SPL: 132 dB",
      "Phantom or AA Battery Power",
      "Low-Cut Filter Switch",
      "Rugged Metal Housing",
    ],
  },
  {
    id: "smallrig-cage-kit",
    name: "SmallRig Camera Cage Kit",
    category: "Accessory",
    price: 20,
    tag: null,
    image:
      "/imgs/products/smallrig-cage-kit.jpg",
    description:
      'A universal camera cage kit with top handle, baseplate, and multiple 1/4"-20 and 3/8"-16 mounting points. Protects your camera while providing endless options for mounting monitors, microphones, lights, and other accessories.',
    specs: [
      "CNC Machined Aluminum",
      'Universal 1/4"-20 Mounting',
      "NATO Rail Included",
      "Cold Shoe Mounts",
      "Top Handle with ARRI Locating",
      "Compatible with Most DSLRs",
    ],
  },
  {
    id: "atomos-ninja-v",
    name: "Atomos Ninja V Monitor",
    category: "Accessory",
    price: 50,
    tag: null,
    image:
      "/imgs/products/atomos-ninja-v.jpg",
    description:
      "The Atomos Ninja V is a 5.2-inch HDR monitor-recorder with 1000 nits brightness and support for Apple ProRes RAW recording. Essential for critical focus pulling, exposure monitoring, and high-quality external recording.",
    specs: [
      "5.2-inch 10-bit HDR Display",
      "1000 nits Brightness",
      "4K HDMI 2.0 Input",
      "Apple ProRes RAW Recording",
      "AtomX SSDmini Support",
      "Built-in Conversion LUTs",
    ],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getSimilar(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
}
