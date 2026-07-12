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
      headers: ['Shade on Cotton 0.5%', 'Shade on Cotton 2.0%', 'Product Name', 'C.I. Generic Name'],
      items: [
        { name: 'Yellow ME4GL', ci: 'Reactive Yellow 160 A', hex05: '#FFFF99', hex20: '#FACC15', shade: 'Bright Yellow' },
        { name: 'Yellow MERL', ci: 'Reactive Yellow 145', hex05: '#FDE047', hex20: '#EAB308', shade: 'Golden Yellow' },
        { name: 'Orange ME2RL', ci: 'Reactive Orange 122', hex05: '#FB923C', hex20: '#EA580C', shade: 'Reddish Orange' },
        { name: 'Red ME4BL', ci: 'Reactive Red 195', hex05: '#FDA4AF', hex20: '#DC2626', shade: 'Mid Red' },
        { name: 'Navy Blue ME2GL', ci: 'Reactive Blue 194', hex05: '#3B82F6', hex20: '#1E3A8A', shade: 'Deep Navy Blue' },
        { name: 'Blue ME2RL', ci: 'Reactive Blue 248', hex05: '#60A5FA', hex20: '#1D4ED8', shade: 'Royal Blue' }
      ]
    },
    {
      series: 'HE Series (High Exhaust Dyes)',
      description: 'Specially engineered for exhaust dyeing. Largely employed for dyeing knitwear and cellulosic blended fabrics, showing superior fastness compared to H-Series.',
      headers: ['Shade on Cotton 0.5%', 'Shade on Cotton 2.0%', 'Product Name', 'C.I. Generic Name'],
      items: [
        { name: 'Yellow HE4G', ci: 'Reactive Yellow 81', hex05: '#FEF08A', hex20: '#FACC15', shade: 'Greenish Yellow' },
        { name: 'Golden Yellow HER', ci: 'Reactive Yellow 84', hex05: '#FDE047', hex20: '#D97706', shade: 'Warm Golden Yellow' },
        { name: 'Orange HE2R', ci: 'Reactive Orange 84', hex05: '#FB923C', hex20: '#F97316', shade: 'Vibrant Orange' },
        { name: 'Red HE3B', ci: 'Reactive Red 120', hex05: '#FCA5A5', hex20: '#EF4444', shade: 'Brilliant Red' },
        { name: 'Red HE7B', ci: 'Reactive Red 141', hex05: '#FDA4AF', hex20: '#BE123C', shade: 'Deep Red' },
        { name: 'Red HE8B', ci: 'Reactive Red 152', hex05: '#F472B6', hex20: '#9F1239', shade: 'Ruby Red' },
        { name: 'Navy Blue HER', ci: 'Reactive Blue 171', hex05: '#1E40AF', hex20: '#172554', shade: 'Dark Navy' },
        { name: 'Navy Blue HE2R', ci: 'Reactive Blue 172', hex05: '#3B82F6', hex20: '#1E40AF', shade: 'Deep Royal Blue' },
        { name: 'Blue HERD', ci: 'Reactive Blue 160', hex05: '#60A5FA', hex20: '#3B82F6', shade: 'Sky Blue' },
        { name: 'Green HE4BD', ci: 'Reactive Green 19 A', hex05: '#34D399', hex20: '#047857', shade: 'Forest Green' }
      ]
    },
    {
      series: 'VS Series (Vinyl Sulphone Dyes)',
      description: 'Widely used for exhaust dyeing and textile printing. Offers very good light and washing fastness, reacting chemically with cellulose in alkaline conditions.',
      headers: ['Shade on Cotton 0.5%', 'Shade on Cotton 2.0%', 'Product Name', 'C.I. Generic Name'],
      items: [
        { name: 'Yellow FG', ci: 'Reactive Yellow 42', hex05: '#FEF08A', hex20: '#FBBF24', shade: 'Bright Yellow' },
        { name: 'Yellow GL', ci: 'Reactive Yellow 37', hex05: '#FFF59D', hex20: '#FCD34D', shade: 'Light Yellow' },
        { name: 'Golden Yellow R', ci: 'Reactive Yellow 77', hex05: '#F59E0B', hex20: '#B45309', shade: 'Amber' },
        { name: 'Red BS', ci: 'Reactive Red 111', hex05: '#FCA5A5', hex20: '#F87171', shade: 'Scarlet' },
        { name: 'Red RB', ci: 'Reactive Red 198', hex05: '#FB7185', hex20: '#E11D48', shade: 'Cherry Red' },
        { name: 'Red 5B', ci: 'Reactive Red 35', hex05: '#F472B6', hex20: '#C084FC', shade: 'Magenta Red' },
        { name: 'Violet 5R', ci: 'Reactive Violet 5', hex05: '#C084FC', hex20: '#6D28D9', shade: 'Deep Violet' },
        { name: 'Brown GR', ci: 'Reactive Brown 18', hex05: '#B45309', hex20: '#78350F', shade: 'Chocolate Brown' },
        { name: 'Black B', ci: 'Reactive Black 5', hex05: '#475569', hex20: '#0F172A', shade: 'Intense Black' },
        { name: 'Black WNN Mix', ci: 'Reactive Black Mix', hex05: '#334155', hex20: '#020617', shade: 'Standard Black' }
      ]
    }
  ],
  acid: [
    {
      series: 'Acid Dyes Milling Complex',
      description: 'KDC offers a wide range of Acid dyestuffs, which are usually applied to wool with addition of acids or acid salts. These dyes widely vary in their dyeing properties, several dyeing methods with strong acid dyebath or weakly acid dyebath or neutral dyebath. The wet fastnesses of these dyes are medium to high range. These dyes are generally not combinable with other dyes hence are mainly used for self shading.',
      headers: ['Shade on Nylon 0.5%', 'Shade on Nylon 2.0%', 'Dye Name', 'C.I. Generic Name'],
      items: [
        { name: 'Yellow 2G', ci: 'Acid Yellow 17', hex05: '#E1FF00', hex20: '#FFFF00', shade: 'Bright Yellow' },
        { name: 'Yellow 5G', ci: 'Acid Yellow 186', hex05: '#FFF575', hex20: '#F4FF00', shade: 'Pure Yellow' },
        { name: 'Metanil Yellow', ci: 'Acid Yellow 36', hex05: '#FFAE19', hex20: '#FF8000', shade: 'Deep Orange Yellow' },
        { name: 'Orange II', ci: 'Acid Orange 7', hex05: '#FFB366', hex20: '#FF6600', shade: 'Orange' },
        { name: 'Scarlet 3R', ci: 'Acid Red 18', hex05: '#FF4D4D', hex20: '#CC0000', shade: 'Vibrant Scarlet' },
        { name: 'Red 3B', ci: 'Acid Red 131', hex05: '#FF66B2', hex20: '#99004C', shade: 'Ruby Red' },
        { name: 'Blue Black 10B', ci: 'Acid Black 1', hex05: '#7A8B99', hex20: '#0B132B', shade: 'Blue Black' },
        { name: 'Black LD', ci: 'Acid Black 172', hex05: '#3A3B3C', hex20: '#0A0A0A', shade: 'Jet Black' }
      ]
    },
    {
      series: 'Metal Complex Acid Dyes',
      description: 'Formed by coordinating transition metal ions (like Chromium or Cobalt) with dye ligands. Economical option with outstanding light and wet fastness, yielding rich, muted shades.',
      headers: ['Shade on Nylon 0.5%', 'Shade on Nylon 2.0%', 'Dye Name', 'C.I. Generic Name'],
      items: [
        { name: 'Grey SGL', ci: 'Acid Black 107', hex05: '#94A3B8', hex20: '#475569', shade: 'Muted Grey' },
        { name: 'Pink BE', ci: 'Acid Red 186', hex05: '#FDA4AF', hex20: '#F43F5E', shade: 'Muted Pink' },
        { name: 'Yellow M-5G', ci: 'Acid Yellow 110', hex05: '#FEF08A', hex20: '#CA8A04', shade: 'Golden Yellow' },
        { name: 'Bordeaux B', ci: 'Acid Red 194', hex05: '#FDA4AF', hex20: '#9F1239', shade: 'Deep Bordeaux' }
      ]
    }
  ],
  direct: [
    {
      series: 'Direct Dyes (Standard Range)',
      description: 'Water-soluble anionic dyes characterized by ease of application in a neutral or slightly alkaline bath, providing excellent leveling.',
      headers: ['Shade on Cotton 0.5%', 'Shade on Cotton 2.0%', 'Dye Name', 'C.I. Generic Name'],
      items: [
        { name: 'Direct Yellow 3GX', ci: 'Direct Yellow 6', hex05: '#FFF59D', hex20: '#FCD34D', shade: 'Light Yellow' },
        { name: 'Direct Yellow CFG', ci: 'Direct Yellow 8', hex05: '#FEF08A', hex20: '#FBBF24', shade: 'Pure Yellow' },
        { name: 'Direct Yellow 5GLL', ci: 'Direct Yellow 44', hex05: '#FDE047', hex20: '#F59E0B', shade: 'Warm Yellow' },
        { name: 'Direct Sun Yellow RCH', ci: 'Direct Yellow 99', hex05: '#F59E0B', hex20: '#D97706', shade: 'Sun Yellow' },
        { name: 'Direct Orange SE', ci: 'Direct Orange 26', hex05: '#FB923C', hex20: '#EA580C', shade: 'Vibrant Orange' },
        { name: 'Direct Orange BRO', ci: 'Direct Orange 108', hex05: '#F97316', hex20: '#C2410C', shade: 'Brownish Orange' },
        { name: 'Direct Brilliant Fast Helio B', ci: 'Direct Violet 35', hex05: '#C084FC', hex20: '#A855F7', shade: 'Brilliant Violet' },
        { name: 'Direct Sky Blue FF', ci: 'Direct Blue 15', hex05: '#7DD3FC', hex20: '#0EA5E9', shade: 'Sky Blue' },
        { name: 'Direct Light Fast Blue GL', ci: 'Direct Blue 71', hex05: '#93C5FD', hex20: '#2563EB', shade: 'Medium Blue' },
        { name: 'Direct Turquoise Blue GL', ci: 'Direct Blue 86', hex05: '#22D3EE', hex20: '#06B6D4', shade: 'Turquoise' },
        { name: 'Direct Turquoise Blue FBL', ci: 'Direct Blue 199', hex05: '#67E8F9', hex20: '#22D3EE', shade: 'Bright Turquoise' },
        { name: 'Direct Fast Scarlet 4BS', ci: 'Direct Red 23', hex05: '#FCA5A5', hex20: '#EF4444', shade: 'Bright Scarlet' },
        { name: 'Direct Red 12B', ci: 'Direct Red 31', hex05: '#FB7185', hex20: '#BE123C', shade: 'Deep Red' },
        { name: 'Direct Red 5BL', ci: 'Direct Red 81', hex05: '#FDA4AF', hex20: '#E11D48', shade: 'Rose Red' },
        { name: 'Direct Black VSF', ci: 'Direct Black 22', hex05: '#64748B', hex20: '#1E293B', shade: 'Deep Black' }
      ]
    }
  ],
  disperse: [
    {
      series: 'Disperse Dyes for Nylon & Polyester',
      description: 'Suitable for carrier dyeing at boiling temperature (100°C) or high-temperature/high-pressure (HT/HP) processing.',
      headers: ['Shade on Polyester 0.5%', 'Shade on Polyester 2.0%', 'Dye Name', 'C.I. Generic Name'],
      items: [
        { name: 'Disperse Yellow G', ci: 'Disperse Yellow 3', hex05: '#FEF08A', hex20: '#FACC15', shade: 'Yellow' },
        { name: 'Disperse Orange GR', ci: 'Disperse Orange 3', hex05: '#FB923C', hex20: '#F97316', shade: 'Orange' },
        { name: 'Disperse Red GG', ci: 'Disperse Red 17', hex05: '#FCA5A5', hex20: '#EF4444', shade: 'Red' },
        { name: 'Disperse Scarlet 2G', ci: 'Disperse Red 1', hex05: '#FDA4AF', hex20: '#DC2626', shade: 'Scarlet' },
        { name: 'Disperse Rubine GFL', ci: 'Disperse Red 13', hex05: '#F472B6', hex20: '#9F1239', shade: 'Rubine' },
        { name: 'Disperse Violet RL', ci: 'Disperse Violet 1', hex05: '#C084FC', hex20: '#8B5CF6', shade: 'Violet' },
        { name: 'Disperse Blue BN', ci: 'Disperse Blue 3', hex05: '#60A5FA', hex20: '#3B82F6', shade: 'Blue' },
        { name: 'Disperse Black BT Mix', ci: 'Disperse Black Mix', hex05: '#475569', hex20: '#334155', shade: 'Black' }
      ]
    },
    {
      series: 'HT/HP (High Temperature / High Pressure) Dyes (130°C)',
      description: 'Specially selected disperse colorants for high-temperature exhaust dyeing (130°C) of polyester, offering high sublimation and light fastness.',
      headers: ['Shade on Polyester 0.5%', 'Shade on Polyester 2.0%', 'Dye Name', 'C.I. Generic Name'],
      items: [
        { name: 'Disperse Yellow 4GLS', ci: 'Disperse Yellow 211', hex05: '#FDE047', hex20: '#EAB308', shade: 'Standard Strength' },
        { name: 'Disperse Yellow 8GF 200%', ci: 'Disperse Yellow 82', hex05: '#FFF59D', hex20: '#FDE047', shade: 'Double Strength' },
        { name: 'Disperse Orange RL', ci: 'Disperse Orange 25', hex05: '#FB923C', hex20: '#EA580C', shade: 'Standard Strength' },
        { name: 'Disperse Yellow Brown REL', ci: 'Disperse Orange 30', hex05: '#F59E0B', hex20: '#B45309', shade: 'Brownish Orange' },
        { name: 'Disperse Red BS 200%', ci: 'Disperse Red 152', hex05: '#FCA5A5', hex20: '#F87171', shade: 'Double Strength' },
        { name: 'Disperse Scarlet GS 200%', ci: 'Disperse Red 153', hex05: '#FDA4AF', hex20: '#DC2626', shade: 'Double Strength' },
        { name: 'Disperse Dark Red 2B', ci: 'Disperse Red 167', hex05: '#EF4444', hex20: '#991B1B', shade: 'Deep Dark Red' },
        { name: 'Disperse Rubine BL', ci: 'Disperse Red 73', hex05: '#FB7185', hex20: '#881337', shade: 'Deep Rubine' },
        { name: 'Disperse Red FB', ci: 'Disperse Red 60', hex05: '#FBCFE8', hex20: '#EC4899', shade: 'Bright Pinkish Red' },
        { name: 'Disperse Blue 2RX', ci: 'Disperse Blue 56', hex05: '#93C5FD', hex20: '#2563EB', shade: 'Standard Strength' },
        { name: 'Disperse Navy Blue S2GL', ci: 'Disperse Blue 79', hex05: '#1E40AF', hex20: '#1E3A8A', shade: 'Navy Blue' },
        { name: 'Disperse Blue SE2R', ci: 'Disperse Blue 183', hex05: '#3B82F6', hex20: '#1D4ED8', shade: 'Royal Blue' },
        { name: 'Navy Blue EXSF 300%', ci: 'Disperse Navy Mix', hex05: '#334155', hex20: '#0F172A', shade: 'Triple Strength Mix' },
        { name: 'Black EXSF 300%', ci: 'Disperse Black Mix', hex05: '#1E293B', hex20: '#020617', shade: 'Triple Strength Mix' }
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
