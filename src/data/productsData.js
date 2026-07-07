export const productCategories = [
  {
    id: 'reactive',
    name: 'Reactive Dyes',
    shortDesc: 'Fiber-reactive dyes which chemically combine with cellulosic fibers, offering brilliant shades and excellent fastness.',
    description: 'Reactive Dyes belong to the Fiber Reactive class of dyes, which chemically combine with cellulosic fibers (mostly cotton and flax) in the presence of alkali, yielding brilliant shades with good fastness properties. They can also be used for dyeing wool and nylon applied under weakly acid conditions.',
    applications: ['Cotton Dyeing', 'Flax & Linen Dyeing', 'Wool & Nylon (weakly acid conditions)', 'Cellulosic Blended Fabrics', 'Knitwear Dyeing', 'Textile Printing'],
    features: ['High Fixation Rates', 'Excellent Leveling Capacity', 'Outstanding Light & Washing Fastness', 'Good Alkali Stability', 'Vibrant Color Range']
  },
  {
    id: 'acid',
    name: 'Acid Dyes',
    shortDesc: 'Water-soluble anionic dyes widely used for dyeing nitrogenous fibers like wool, angora, cashmere, silk, and nylon.',
    description: 'These dyestuffs are anionic in nature and are widely used for dyeing protein fibers. Some Acid dyes are also safely used as food colorants. KDC offers a wide range of Acid dyestuffs, usually applied to wool with the addition of acids or acid salts. They vary in their dyeing properties, using strong acid, weakly acid, or neutral dyebaths.',
    applications: ['Wool Dyeing', 'Angora & Cashmere', 'Natural Silk Dyeing', 'Nylon Dyeing', 'Carpet Industry', 'Leather Industry', 'Food Colorants (select items)'],
    features: ['Easy Application', 'Bright Shades', 'High Wet & Light Fastness (Milling type)', 'Cost-Effective Dyeing (Metal Complex type)', 'Exceptional Leveling Properties']
  },
  {
    id: 'direct',
    name: 'Direct Dyes',
    shortDesc: 'Sodium salts of sulfonic acids applied directly to cellulosic fibers in an aqueous bath containing electrolytes.',
    description: 'Direct Dyes are renowned for their ease of application, leveling properties, good brightness, and fastness. They can be safely used on cellulose textiles (cotton, linen, viscose) as well as silk and leather without needing complex mordanting stages.',
    applications: ['Cotton & Viscose fabrics', 'Silk Dyeing', 'Paper Industry', 'Leather Industry', 'Textile Blends'],
    features: ['Single-bath application', 'Good Leveling Properties', 'Exceptional Brightness', 'Highly Economical', 'Moderate to Good Fastness']
  },
  {
    id: 'disperse',
    name: 'Disperse Dyes',
    shortDesc: 'Nonionic, water-insoluble dyes specifically developed for dyeing and printing synthetic fibers, mainly polyester.',
    description: 'Mainly used for polyester. They are nonionic in nature and characterized by a high degree of dispersion. Especially suitable for dyeing and printing of polyester in various forms (fiber, yarn, fabric) either alone or as a blend with other fibers.',
    applications: ['Polyester Dyeing & Printing', 'Nylon Dyeing (Carrier method)', 'Polyester/Cotton Blends', 'High Temperature/High Pressure (HT/HP) processing'],
    features: ['High Heat Stability', 'Excellent Dispersion Properties', 'Brilliant Shades on Synthetics', 'Sublimation Fastness', 'Ideal for HT/HP at 130°C']
  },
  {
    id: 'naphthol',
    name: 'Naphthol & Fast Bases',
    shortDesc: 'Insoluble azo dyestuffs formed directly inside the fiber, producing deep, rich shades with excellent wet fastness.',
    description: 'Naphthol dyes are insoluble azo dyestuffs produced on the fiber by applying a coupling component (Naphthol) and then developing it with a diazotized fast color base or salt at low temperatures. Azoic combinations are the premier choice for achieving deep orange, red, scarlet, and Bordeaux shades of excellent light and washing fastness.',
    applications: ['African Prints & Batik', 'High-Fastness Red/Scarlet dyeing', 'Cotton Yarn & Fabric Dyeing', 'Specialty Artisanal Textiles'],
    features: ['Deepest Reds and Scarlets', 'Unmatched Washing and Wet Fastness', 'Excellent Light Fastness', 'Insoluble Azo development inside the fiber']
  },
  {
    id: 'pigments',
    name: 'Organic & Inorganic Pigments',
    shortDesc: 'Premium colorants designed for printing inks, plastics, paints, coatings, rubber, cosmetics, and textile printing.',
    description: 'With vast market experience and presence, we offer premium organic and inorganic pigments tailored for the printing ink, paint, plastic, cosmetics, and textile printing industries.',
    applications: ['Industrial Paints & Coatings', 'Plastics Masterbatches', 'Printing Inks', 'Cosmetics', 'Textile Printing Paste', 'Rubber Industry'],
    features: ['Excellent Dispersion', 'High Heat Stability', 'Weather & Light Fastness', 'Vibrant Color Strength', 'Strict Particle Size Control']
  },
  {
    id: 'basic_dyes',
    name: 'Basic Dyes',
    shortDesc: 'Cationic dyes with high brilliance, mainly used for acrylic, modacrylic, paper, and leather coloring.',
    description: 'Basic Dyes are cationic colorants characterized by brilliant shades and high tinctorial strength. While traditionally used for silk, wool, and paper, they are the primary choice for acrylic and modacrylic fibers, offering excellent brightness and fastness properties on synthetics.',
    applications: ['Acrylic Fiber Dyeing', 'Paper & Cardboard Coloring', 'Leather Finishing', 'Silk & Wool Specialty Dyeing', 'Jute & Coir Dyeing'],
    features: ['Highest Brilliance', 'Intense Color Strength', 'Excellent Compatibility on Acrylics', 'Good Leveling properties']
  },
  {
    id: 'brighteners',
    name: 'Optical Brighteners & Ultramarine Blue',
    shortDesc: 'Fluorescent whitening agents and premium ultramarine pigments to enhance whiteness and brightness.',
    description: 'We supply high-efficiency Optical Brightening Agents (OBA) and Ultramarine Blue. OBAs absorb ultraviolet light and re-emit it in the blue spectrum, compensating for yellowness, while Ultramarine Blue provides a premium, safe, reddish-blue shade for whitening and color correction.',
    applications: ['Textile Whitening (Cotton, Polyester)', 'Paper Whitening', 'Detergent Formulations', 'Plastics & Coatings', 'Laundry Blueing'],
    features: ['High Fluorescent Intensity', 'Acid & Alkali Stability', 'Excellent Heat Resistance', 'Pure Reddish-Blue Undertones', 'Non-Toxic and Eco-Friendly']
  }
];

export const productsList = {
  reactive: [
    {
      series: 'ME Series (Bi-Functional Dyes)',
      description: 'Bi-functional reactive dyes characterized by high fixation rate, low temperature high exhaust, good leveling capacity, and high alkali stability.',
      headers: ['Product Name', 'C.I. Generic Name', 'Shade (On Cotton)'],
      items: [
        { name: 'Yellow ME4GL', ci: 'Reactive Yellow 160 A', hex: '#EAB308', shade: 'Bright Yellow' },
        { name: 'Yellow MERL', ci: 'Reactive Yellow 145', hex: '#F59E0B', shade: 'Golden Yellow' },
        { name: 'Orange ME2RL', ci: 'Reactive Orange 122', hex: '#EA580C', shade: 'Reddish Orange' },
        { name: 'Red ME4BL', ci: 'Reactive Red 195', hex: '#DC2626', shade: 'Mid Red' },
        { name: 'Navy Blue ME2GL', ci: 'Reactive Blue 194', hex: '#1E3A8A', shade: 'Deep Navy Blue' },
        { name: 'Blue ME2RL', ci: 'Reactive Blue 248', hex: '#1D4ED8', shade: 'Royal Blue' }
      ]
    },
    {
      series: 'HE Series (High Exhaust Dyes)',
      description: 'Specially engineered for exhaust dyeing. Largely employed for dyeing knitwear and cellulosic blended fabrics, showing superior fastness compared to H-Series.',
      headers: ['Product Name', 'C.I. Generic Name', 'Shade (On Cotton)'],
      items: [
        { name: 'Yellow HE4G', ci: 'Reactive Yellow 81', hex: '#FACC15', shade: 'Greenish Yellow' },
        { name: 'Golden Yellow HER', ci: 'Reactive Yellow 84', hex: '#D97706', shade: 'Warm Golden Yellow' },
        { name: 'Orange HE2R', ci: 'Reactive Orange 84', hex: '#F97316', shade: 'Vibrant Orange' },
        { name: 'Red HE3B', ci: 'Reactive Red 120', hex: '#EF4444', shade: 'Brilliant Red' },
        { name: 'Red HE7B', ci: 'Reactive Red 141', hex: '#BE123C', shade: 'Deep Red' },
        { name: 'Red HE8B', ci: 'Reactive Red 152', hex: '#9F1239', shade: 'Ruby Red' },
        { name: 'Navy Blue HER', ci: 'Reactive Blue 171', hex: '#172554', shade: 'Dark Navy' },
        { name: 'Navy Blue HE2R', ci: 'Reactive Blue 172', hex: '#1E40AF', shade: 'Deep Royal Blue' },
        { name: 'Blue HERD', ci: 'Reactive Blue 160', hex: '#3B82F6', shade: 'Sky Blue' },
        { name: 'Green HE4BD', ci: 'Reactive Green 19 A', hex: '#047857', shade: 'Forest Green' }
      ]
    },
    {
      series: 'VS Series (Vinyl Sulphone Dyes)',
      description: 'Widely used for exhaust dyeing and textile printing. Offers very good light and washing fastness, reacting chemically with cellulose in alkaline conditions.',
      headers: ['Product Name', 'C.I. Generic Name', 'Shade (On Cotton)'],
      items: [
        { name: 'Yellow FG', ci: 'Reactive Yellow 42', hex: '#FBBF24', shade: 'Bright Yellow' },
        { name: 'Yellow GL', ci: 'Reactive Yellow 37', hex: '#FCD34D', shade: 'Light Yellow' },
        { name: 'Golden Yellow R', ci: 'Reactive Yellow 77', hex: '#B45309', shade: 'Amber' },
        { name: 'Red BS', ci: 'Reactive Red 111', hex: '#F87171', shade: 'Scarlet' },
        { name: 'Red RB', ci: 'Reactive Red 198', hex: '#E11D48', shade: 'Cherry Red' },
        { name: 'Red 5B', ci: 'Reactive Red 35', hex: '#C084FC', shade: 'Magenta Red' },
        { name: 'Violet 5R', ci: 'Reactive Violet 5', hex: '#6D28D9', shade: 'Deep Violet' },
        { name: 'Brown GR', ci: 'Reactive Brown 18', hex: '#78350F', shade: 'Chocolate Brown' },
        { name: 'Black B', ci: 'Reactive Black 5', hex: '#0F172A', shade: 'Intense Black' },
        { name: 'Black WNN Mix', ci: 'Reactive Black Mix', hex: '#020617', shade: 'Standard Black' }
      ]
    }
  ],
  acid: [
    {
      series: 'Acid Milling Dyes',
      description: 'Usually applied to wool in a weakly acid or neutral dyebath. Known for high wet fastness and good brightness.',
      headers: ['Product Classification', 'Key Features', 'Applications'],
      items: [
        { name: 'Acid Milling Yellows & Oranges', ci: 'High leveling and brightness', hex: '#F59E0B', shade: 'Wool, Silk, Carpet wool' },
        { name: 'Acid Milling Reds & Rubines', ci: 'Exceptional wash fastness', hex: '#DC2626', shade: 'Textiles, Wool outerwear' },
        { name: 'Acid Milling Blues & Navies', ci: 'Excellent light fastness', hex: '#1D4ED8', shade: 'Nylon apparel, Angora fabrics' }
      ]
    },
    {
      series: 'Metal Complex Acid Dyes',
      description: 'Formed by coordinating transition metal ions (like Chromium or Cobalt) with dye ligands. Economical option with outstanding light and wet fastness, yielding rich, muted shades.',
      headers: ['Dye Class', 'Properties', 'Primary Uses'],
      items: [
        { name: '1:1 Metal Complex Dyes', ci: 'Applied in strongly acidic bath (pH 1.8 - 2.2). Excellent penetration.', hex: '#475569', shade: 'Carbonized wool, Wool yarns' },
        { name: '1:2 Metal Complex Dyes', ci: 'Applied in weakly acid/neutral bath. Excellent light and wash fastness.', hex: '#334155', shade: 'Leather dyeing, Carpet wool, Silk blends' }
      ]
    }
  ],
  direct: [
    {
      series: 'Direct Dyes (Standard Range)',
      description: 'Water-soluble anionic dyes characterized by ease of application in a neutral or slightly alkaline bath, providing excellent leveling.',
      headers: ['Dye Name', 'C.I. Generic Name', 'Typical Shade'],
      items: [
        { name: 'Direct Yellow 3GX', ci: 'Direct Yellow 6', hex: '#FCD34D', shade: 'Light Yellow' },
        { name: 'Direct Yellow CFG', ci: 'Direct Yellow 8', hex: '#FBBF24', shade: 'Pure Yellow' },
        { name: 'Direct Yellow 5GLL', ci: 'Direct Yellow 44', hex: '#F59E0B', shade: 'Warm Yellow' },
        { name: 'Direct Sun Yellow RCH', ci: 'Direct Yellow 99', hex: '#D97706', shade: 'Sun Yellow' },
        { name: 'Direct Orange SE', ci: 'Direct Orange 26', hex: '#EA580C', shade: 'Vibrant Orange' },
        { name: 'Direct Orange BRO', ci: 'Direct Orange 108', hex: '#C2410C', shade: 'Brownish Orange' },
        { name: 'Direct Brilliant Fast Helio B', ci: 'Direct Violet 35', hex: '#A855F7', shade: 'Brilliant Violet' },
        { name: 'Direct Sky Blue FF', ci: 'Direct Blue 15', hex: '#0EA5E9', shade: 'Sky Blue' },
        { name: 'Direct Light Fast Blue GL', ci: 'Direct Blue 71', hex: '#2563EB', shade: 'Medium Blue' },
        { name: 'Direct Turquoise Blue GL', ci: 'Direct Blue 86', hex: '#06B6D4', shade: 'Turquoise' },
        { name: 'Direct Turquoise Blue FBL', ci: 'Direct Blue 199', hex: '#22D3EE', shade: 'Bright Turquoise' },
        { name: 'Direct Fast Scarlet 4BS', ci: 'Direct Red 23', hex: '#EF4444', shade: 'Bright Scarlet' },
        { name: 'Direct Red 12B', ci: 'Direct Red 31', hex: '#BE123C', shade: 'Deep Red' },
        { name: 'Direct Red 5BL', ci: 'Direct Red 81', hex: '#E11D48', shade: 'Rose Red' },
        { name: 'Direct Black VSF', ci: 'Direct Black 22', hex: '#1E293B', shade: 'Deep Black' }
      ]
    }
  ],
  disperse: [
    {
      series: 'Disperse Dyes for Nylon & Polyester (Carrier / HT-HP)',
      description: 'Suitable for carrier dyeing at boiling temperature (100°C) or high-temperature/high-pressure (HT/HP) processing.',
      headers: ['Dye Name', 'C.I. Generic Name', 'Shade Category'],
      items: [
        { name: 'Disperse Yellow G', ci: 'Disperse Yellow 3', hex: '#FACC15', shade: 'Yellow' },
        { name: 'Disperse Orange GR', ci: 'Disperse Orange 3', hex: '#F97316', shade: 'Orange' },
        { name: 'Disperse Red GG', ci: 'Disperse Red 17', hex: '#EF4444', shade: 'Red' },
        { name: 'Disperse Scarlet 2G', ci: 'Disperse Red 1', hex: '#DC2626', shade: 'Scarlet' },
        { name: 'Disperse Rubine GFL', ci: 'Disperse Red 13', hex: '#9F1239', shade: 'Rubine' },
        { name: 'Disperse Violet RL', ci: 'Disperse Violet 1', hex: '#8B5CF6', shade: 'Violet' },
        { name: 'Disperse Blue BN', ci: 'Disperse Blue 3', hex: '#3B82F6', shade: 'Blue' },
        { name: 'Disperse Black BT Mix', ci: 'Disperse Black Mix', hex: '#334155', shade: 'Black' }
      ]
    },
    {
      series: 'HT/HP (High Temperature / High Pressure) Dyes (130°C)',
      description: 'Specially selected disperse colorants for high-temperature exhaust dyeing (130°C) of polyester, offering high sublimation and light fastness.',
      headers: ['Dye Name', 'C.I. Generic Name', 'Purity/Strength'],
      items: [
        { name: 'Disperse Yellow 4GLS', ci: 'Disperse Yellow 211', hex: '#EAB308', shade: 'Standard Strength' },
        { name: 'Disperse Yellow 8GF 200%', ci: 'Disperse Yellow 82', hex: '#FDE047', shade: 'Double Strength' },
        { name: 'Disperse Orange RL', ci: 'Disperse Orange 25', hex: '#EA580C', shade: 'Standard Strength' },
        { name: 'Disperse Yellow Brown REL', ci: 'Disperse Orange 30', hex: '#B45309', shade: 'Brownish Orange' },
        { name: 'Disperse Red BS 200%', ci: 'Disperse Red 152', hex: '#F87171', shade: 'Double Strength' },
        { name: 'Disperse Scarlet GS 200%', ci: 'Disperse Red 153', hex: '#DC2626', shade: 'Double Strength' },
        { name: 'Disperse Dark Red 2B', ci: 'Disperse Red 167', hex: '#991B1B', shade: 'Deep Dark Red' },
        { name: 'Disperse Rubine BL', ci: 'Disperse Red 73', hex: '#881337', shade: 'Deep Rubine' },
        { name: 'Disperse Red FB', ci: 'Disperse Red 60', hex: '#EC4899', shade: 'Bright Pinkish Red' },
        { name: 'Disperse Blue 2RX', ci: 'Disperse Blue 56', hex: '#2563EB', shade: 'Standard Strength' },
        { name: 'Disperse Navy Blue S2GL', ci: 'Disperse Blue 79', hex: '#1E3A8A', shade: 'Navy Blue' },
        { name: 'Disperse Blue SE2R', ci: 'Disperse Blue 183', hex: '#1D4ED8', shade: 'Royal Blue' },
        { name: 'Navy Blue EXSF 300%', ci: 'Disperse Navy Mix', hex: '#0F172A', shade: 'Triple Strength Mix' },
        { name: 'Black EXSF 300%', ci: 'Disperse Black Mix', hex: '#020617', shade: 'Triple Strength Mix' }
      ]
    }
  ],
  naphthol: [
    {
      series: 'Azoic Coupling Components (Naphthols)',
      description: 'Used for grounding cotton fibers to react with diazo components and form insoluble azoic pigments.',
      headers: ['Product Name', 'C.I. Number', 'Azoic Generic Name'],
      items: [
        { name: 'Naphthol - AS', ci: '37505', hex: '#F1F5F9', shade: 'Azoic Coupling Component 2' },
        { name: 'Naphthol - ASBO', ci: '37560', hex: '#F1F5F9', shade: 'Azoic Coupling Component 4' },
        { name: 'Naphthol - ASG', ci: '37610', hex: '#F1F5F9', shade: 'Azoic Coupling Component 5' },
        { name: 'Naphthol - ASBS', ci: '37515', hex: '#F1F5F9', shade: 'Azoic Coupling Component 15' }
      ]
    },
    {
      series: 'Azoic Diazo Components (Fast Color Bases)',
      description: 'Free amine salts requiring diazotisation to react with azoic coupling components on the fiber.',
      headers: ['Product Name', 'C.I. Number', 'Azoic Generic Name'],
      items: [
        { name: 'Fast Orange GC Base', ci: '37005', hex: '#EA580C', shade: 'Azoic Diazo Component 2' },
        { name: 'Fast Scarlet RC Base', ci: '37130', hex: '#DC2626', shade: 'Azoic Diazo Component 13' },
        { name: 'Fast Yellow GC Base', ci: '37000', hex: '#EAB308', shade: 'Azoic Diazo Component 44' },
        { name: 'Fast Garnet GBC', ci: '37218', hex: '#7F1D1D', shade: 'Azoic Diazo Component 5' },
        { name: 'Fast Scarlet G Base', ci: '37105', hex: '#EF4444', shade: 'Azoic Diazo Component 12' }
      ]
    }
  ],
  pigments: [
    {
      series: 'Organic & Inorganic Pigment Powders',
      description: 'High-grade pigment powders selected for heat, light, and chemical fastness across diverse industrial media.',
      headers: ['Product Name', 'Common Industry Name', 'Hue Category'],
      items: [
        { name: 'Pigment Blue 15.1', ci: 'Phthalo Blue (Alpha modification)', hex: '#1E40AF', shade: 'Reddish Blue' },
        { name: 'Pigment Blue 15.3', ci: 'Phthalo Blue (Beta modification)', hex: '#0284C7', shade: 'Greenish Blue' },
        { name: 'Pigment Red 53.1', ci: 'Lake Red C', hex: '#EA580C', shade: 'Bright Orange-Red' },
        { name: 'Pigment Red 4', ci: 'Scarlet Chrome', hex: '#E11D48', shade: 'Brilliant Scarlet' },
        { name: 'Pigment Orange 13', ci: 'Benzidine Orange', hex: '#F97316', shade: 'Vibrant Orange' },
        { name: 'Pigment Yellow 12', ci: 'Benzidine Yellow G', hex: '#FACC15', shade: 'Medium Yellow' },
        { name: 'Pigment Yellow 34', ci: 'Middle Chrome', hex: '#EAB308', shade: 'Warm Chrome Yellow' },
        { name: 'Pigment Yellow 34 (Lemon)', ci: 'Lemon Chrome', hex: '#FDE047', shade: 'Greenish Yellow' },
        { name: 'Pigment Green 7', ci: 'Phthalocyanine Green', hex: '#047857', shade: 'Emerald Green' }
      ]
    }
  ],
  basic_dyes: [
    {
      series: 'Basic Dyes Range',
      description: 'Specialty cationic colorants used for acrylics, paper, and leather, offering high tinctorial strength and excellent brilliance.',
      headers: ['Subclass', 'Key Characteristics', 'Standard Applications'],
      items: [
        { name: 'Basic Yellows & Auramines', ci: 'Extremely bright and fluorescent', hex: '#FEF08A', shade: 'Acrylic fiber, craft paper' },
        { name: 'Basic Rhodamines & Violets', ci: 'Highest tinctorial strength', hex: '#EC4899', shade: 'Fluorescent inks, specialty fabrics' },
        { name: 'Basic Browns (Bismarck)', ci: 'Excellent build-up and penetration', hex: '#78350F', shade: 'Leather staining, wood polish' }
      ]
    }
  ],
  brighteners: [
    {
      series: 'Optical Whitening Agents (OBAs)',
      description: 'Fluorescent whitening chemicals that absorb UV rays and emit blue light to counteract natural yellow tinting in cellulose/polyester.',
      headers: ['Product Name', 'Target Fiber', 'Application Method'],
      items: [
        { name: 'Optical Brightener BA', ci: 'Cotton & Cellulosics', hex: '#EFF6FF', shade: 'Exhaust & Pad application' },
        { name: 'Optical Brightener OB-1', ci: 'Polyester & Plastics', hex: '#F8FAFC', shade: 'Melt spin & high-temp exhaust' },
        { name: 'Ultramarine Blue Pigment', ci: 'Cellulose, Detergent, Plastics', hex: '#1D4ED8', shade: 'Color correction blueing agent' }
      ]
    }
  ]
};
