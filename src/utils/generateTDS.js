import { jsPDF } from 'jspdf';

export function generateTDS(product, category) {
  const doc = new jsPDF();
  
  // Document margins and dimensions
  const margin = 15;
  const pageWidth = 210;
  const contentWidth = pageWidth - (margin * 2);
  
  // Helper colors (RGB)
  const cNavy = { r: 12, g: 19, b: 31 }; // #0C131F
  const cRoyal = { r: 255, g: 183, b: 0 }; // #FFB700
  const cSlate = { r: 71, g: 85, b: 105 }; // #475569
  const cLight = { r: 248, g: 250, b: 252 }; // #F8FAFC
  const cBorder = { r: 226, g: 232, b: 240 }; // #E2E8F0
  
  let y = 15;
  
  // --- HEADER SECTION ---
  // Top thick colored accent bar
  doc.setFillColor(cRoyal.r, cRoyal.g, cRoyal.b);
  doc.rect(margin, y, contentWidth, 3, 'F');
  y += 10;
  
  // Company Logo Initials box
  doc.setFillColor(cNavy.r, cNavy.g, cNavy.b);
  doc.rect(margin, y, 12, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("KD", margin + 3, y + 8.5);
  
  // Company Name
  doc.setTextColor(cNavy.r, cNavy.g, cNavy.b);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("KAPOOR DYES & CHEMICALS COMPANY", margin + 16, y + 6);
  
  // Company Sub-info
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(cSlate.r, cSlate.g, cSlate.b);
  doc.text("ISO 9001:2015 Certified Company  |  Est. 1966  |  Quality & Standardized Dyestuffs", margin + 16, y + 11);
  y += 18;
  
  // Address & Contacts Header Bar
  doc.setFillColor(cLight.r, cLight.g, cLight.b);
  doc.rect(margin, y, contentWidth, 8, 'F');
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(cNavy.r, cNavy.g, cNavy.b);
  doc.text("Works: Vatva, Ahmedabad, Gujarat & Dada Nagar, Kanpur, UP, India", margin + 3, y + 5.5);
  doc.text("Email: shubkashyap806@gmail.com  |  Web: www.kapoordyes.com", margin + contentWidth - 100, y + 5.5);
  
  y += 18;
  
  // --- DOCUMENT TITLE ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(cNavy.r, cNavy.g, cNavy.b);
  doc.text("TECHNICAL DATA SHEET (TDS)", pageWidth / 2, y, { align: 'center' });
  
  // Thin decorative line
  y += 3;
  doc.setDrawColor(cBorder.r, cBorder.g, cBorder.b);
  doc.line(pageWidth / 2 - 40, y, pageWidth / 2 + 40, y);
  
  y += 10;
  
  // --- PRODUCT METADATA TABLE ---
  doc.setFillColor(cLight.r, cLight.g, cLight.b);
  doc.rect(margin, y, contentWidth, 38, 'F');
  doc.rect(margin, y, contentWidth, 38, 'S'); // Outline border
  
  // Table Rows (Vertical separator line and text)
  doc.setDrawColor(cBorder.r, cBorder.g, cBorder.b);
  doc.line(margin + 55, y, margin + 55, y + 38);
  
  const drawRow = (label, value, yPos) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(cSlate.r, cSlate.g, cSlate.b);
    doc.text(label, margin + 4, yPos);
    
    doc.setFont("helvetica", "bold");
    doc.setTextColor(cNavy.r, cNavy.g, cNavy.b);
    doc.text(value || "N/A", margin + 59, yPos);
  };
  
  drawRow("Product Name:", product.name, y + 8);
  doc.line(margin, y + 12, margin + contentWidth, y + 12);
  
  drawRow("Chemical Class:", category.name, y + 17);
  doc.line(margin, y + 21, margin + contentWidth, y + 21);
  
  drawRow("C.I. Generic Name:", product.ci, y + 26);
  doc.line(margin, y + 30, margin + contentWidth, y + 30);
  
  drawRow("Standard Shade Description:", product.shade || "Commercial Standard Shade", y + 35);
  
  y += 48;
  
  // --- DETAILED TECHNICAL SPECIFICATIONS ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(cNavy.r, cNavy.g, cNavy.b);
  doc.text("1. Physical & Chemical Properties", margin, y);
  y += 4;
  doc.line(margin, y, margin + 55, y);
  y += 6;
  
  // Table grid for specs
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(cSlate.r, cSlate.g, cSlate.b);
  
  const specItems = [
    { key: "Physical Form:", val: "Dry Fine Powder / Uniform Granules" },
    { key: "Solubility in Water:", val: "Excellent (> 50 g/l at 25°C)" },
    { key: "pH of 1% Aq. Solution:", val: "6.5 - 7.5" },
    { key: "Insolubles in Water:", val: "< 0.1% (Standardized)" },
    { key: "Moisture Content:", val: "< 4.0%" },
    { key: "Standard Strength:", val: "100% matched to standard lot (+/- 2%)" }
  ];
  
  specItems.forEach((item, idx) => {
    const rowY = y + (idx * 6);
    doc.setFont("helvetica", "bold");
    doc.text(item.key, margin + 2, rowY);
    doc.setFont("helvetica", "normal");
    doc.text(item.val, margin + 45, rowY);
  });
  
  y += 44;
  
  // --- APPLICATIONS SECTION ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(cNavy.r, cNavy.g, cNavy.b);
  doc.text("2. Primary Industrial Applications", margin, y);
  y += 4;
  doc.line(margin, y, margin + 55, y);
  y += 6;
  
  const appsText = (category.applications || []).join(", ");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(cSlate.r, cSlate.g, cSlate.b);
  const wrappedApps = doc.splitTextToSize(appsText, contentWidth - 4);
  doc.text(wrappedApps, margin + 2, y);
  
  y += (wrappedApps.length * 5) + 8;
  
  // --- QUALITY & TEST PARAMETERS ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(cNavy.r, cNavy.g, cNavy.b);
  doc.text("3. Quality Management & Fastness Features", margin, y);
  y += 4;
  doc.line(margin, y, margin + 70, y);
  y += 6;
  
  const featsText = (category.features || []).join(", ");
  const wrappedFeats = doc.splitTextToSize(featsText, contentWidth - 4);
  doc.text(wrappedFeats, margin + 2, y);
  
  y += (wrappedFeats.length * 5) + 12;
  
  // --- DISCLAIMER & CERTIFICATION ---
  doc.setFillColor(cLight.r, cLight.g, cLight.b);
  doc.rect(margin, y, contentWidth, 22, 'F');
  doc.rect(margin, y, contentWidth, 22, 'S');
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(cNavy.r, cNavy.g, cNavy.b);
  doc.text("TECHNICAL DISCLAIMER & APPLICATION ADVISEMENT", margin + 4, y + 5);
  
  doc.setFont("helvetica", "italic");
  doc.setFontSize(6.5);
  doc.setTextColor(cSlate.r, cSlate.g, cSlate.b);
  const disclaimerText = "The technical information, advice, and recommendations in this datasheet are given in good faith and based on our extensive laboratory testing and manufacturing history. However, as the actual conditions of use, dyeing baths, auxiliaries, and substrate types are beyond our direct control, no guarantee (express or implied) is made regarding performance. Processors are strongly advised to perform pilot trials before large-scale operations.";
  const wrappedDisclaimer = doc.splitTextToSize(disclaimerText, contentWidth - 8);
  doc.text(wrappedDisclaimer, margin + 4, y + 9);
  
  y += 30;
  
  // --- FOOTER ---
  doc.setDrawColor(cNavy.r, cNavy.g, cNavy.b);
  doc.line(margin, y, margin + contentWidth, y);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(cSlate.r, cSlate.g, cSlate.b);
  doc.text("Kapoor Dyes & Chemicals Company | Technical Division | GIDC Vatva, Ahmedabad, Gujarat, India", margin, y + 4.5);
  doc.text("Document Ref: KDC/TDS/" + product.name.replace(/\s+/g, '_').toUpperCase(), margin + contentWidth - 65, y + 4.5);
  
  doc.save(`TDS_${product.name.replace(/\s+/g, '_')}.pdf`);
}
