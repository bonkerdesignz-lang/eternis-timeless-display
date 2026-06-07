/* ============================================================
   ETERNIS — Content (edit here, or map to Wix CMS later)
   ------------------------------------------------------------
   To connect to Wix CMS:
   - Replace this file's `watches` array with a Wix Data fetch
     (wix-data.query("Watches")) and map fields to the same keys.
   - Update `contact.whatsapp` and `contact.socials` from a
     "Settings" collection in Wix.
   ============================================================ */

window.ETERNIS_DATA = {
  contact: {
    // Placeholder WhatsApp number (international format, no + or spaces)
    whatsapp: "15551234567",
    email: "contact@eternis.com",
    address: "Geneva, Switzerland",
    socials: {
      instagram: "https://instagram.com/your-handle",
      facebook: "https://facebook.com/your-handle",
      twitter: "https://twitter.com/your-handle"
    }
  },

  // Add / remove / reorder watches freely.
  // Each watch: { id, name, price, description, images: [url, url, ...] }
  watches: [
    {
      id: "noir-classique",
      name: "Noir Classique",
      price: "$4,850",
      description: "An understated dress watch in brushed steel with a deep onyx dial. Swiss automatic movement, sapphire crystal, and a hand-stitched alligator strap.",
      images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&q=80",
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200&q=80",
        "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=1200&q=80"
      ]
    },
    {
      id: "regal-bordeaux",
      name: "Regal Bordeaux",
      price: "$6,200",
      description: "A wine-red sunburst dial framed in rose gold. Skeletonised hands reveal a finely decorated calibre, finished with a polished link bracelet.",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
        "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80",
        "https://images.unsplash.com/photo-1606293459209-d8d8c7d59a3f?w=1200&q=80"
      ]
    },
    {
      id: "heritage-chronograph",
      name: "Heritage Chronograph",
      price: "$8,900",
      description: "A vintage-inspired chronograph with twin sub-dials, tachymeter bezel, and a domed sapphire crystal. Built for those who measure moments precisely.",
      images: [
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1200&q=80",
        "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1200&q=80",
        "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=1200&q=80"
      ]
    },
    {
      id: "marine-azure",
      name: "Marine Azure",
      price: "$5,400",
      description: "Diver's heritage refined for the city. Ceramic bezel, luminous indices, and 300m water resistance in a perfectly proportioned 41mm case.",
      images: [
        "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=1200&q=80",
        "https://images.unsplash.com/photo-1614703418452-1abe1e8db96c?w=1200&q=80",
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1200&q=80"
      ]
    },
    {
      id: "or-imperial",
      name: "Or Impérial",
      price: "$12,500",
      description: "Solid 18k gold case and bracelet. A guilloché dial catches the light with every gesture — a quiet declaration of refinement.",
      images: [
        "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=1200&q=80",
        "https://images.unsplash.com/photo-1606293459209-d8d8c7d59a3f?w=1200&q=80",
        "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80"
      ]
    },
    {
      id: "midnight-tourbillon",
      name: "Midnight Tourbillon",
      price: "$24,800",
      description: "A flying tourbillon at 6 o'clock, hand-finished bridges, and a deep midnight blue dial. Limited to a single line of dedicated artisans.",
      images: [
        "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1200&q=80",
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1200&q=80",
        "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=1200&q=80"
      ]
    },
    {
      id: "ivoire-elegance",
      name: "Ivoire Élégance",
      price: "$3,750",
      description: "A slim 38mm case with an ivory lacquered dial and Roman numerals. The kind of watch that reads as quietly considered, never loud.",
      images: [
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=1200&q=80",
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200&q=80",
        "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=1200&q=80"
      ]
    },
    {
      id: "platine-royale",
      name: "Platine Royale",
      price: "$18,900",
      description: "Platinum case with a hand-engraved barley dial. A perpetual calendar complication tracks days, months, leap years and moon phases.",
      images: [
        "https://images.unsplash.com/photo-1639037687665-37e88c992970?w=1200&q=80",
        "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=1200&q=80",
        "https://images.unsplash.com/photo-1606293459209-d8d8c7d59a3f?w=1200&q=80"
      ]
    },
    {
      id: "voyager-gmt",
      name: "Voyager GMT",
      price: "$7,300",
      description: "Dual time zones in a travel-ready 40mm case. A 24-hour bezel in burgundy and black accompanies the seasoned traveller.",
      images: [
        "https://images.unsplash.com/photo-1614703418452-1abe1e8db96c?w=1200&q=80",
        "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=1200&q=80",
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1200&q=80"
      ]
    },
    {
      id: "rose-celeste",
      name: "Rose Céleste",
      price: "$9,600",
      description: "Rose gold accents meet a meteorite dial. Each piece is unique — no two patterns from the cosmos are ever alike.",
      images: [
        "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=1200&q=80",
        "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1200&q=80",
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1200&q=80"
      ]
    },
    {
      id: "atelier-skeleton",
      name: "Atelier Skeleton",
      price: "$15,400",
      description: "An open-worked dial reveals the architecture of the movement. Anglage and Côtes de Genève finishing by master watchmakers.",
      images: [
        "https://images.unsplash.com/photo-1639037687665-37e88c992970?w=1200&q=80",
        "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=1200&q=80",
        "https://images.unsplash.com/photo-1606293459209-d8d8c7d59a3f?w=1200&q=80"
      ]
    },
    {
      id: "obsidian-sport",
      name: "Obsidian Sport",
      price: "$5,950",
      description: "A black DLC-coated steel case with a rubber strap. Built for movement, refined enough for the boardroom.",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
        "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80",
        "https://images.unsplash.com/photo-1606293459209-d8d8c7d59a3f?w=1200&q=80"
      ]
    }
  ]
};
