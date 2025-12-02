import { CollectionData } from "@/types/collections";
import bannerFrontDesk from "@/assets/banner-frontdesk.jpg";
import bannerRestaurant from "@/assets/banner-restaurant.jpg";
import bannerHousekeeping from "@/assets/banner-housekeeping.jpg";
import bannerDoorman from "@/assets/banner-doorman.jpg";
import bannerResort from "@/assets/banner-resort.jpg";
import bannerSpa from "@/assets/banner-spa.jpg";
import bannerMedical from "@/assets/banner-medical.jpg";
import bannerShirts from "@/assets/banner-shirts.jpg";
import bannerTrousers from "@/assets/banner-trousers.jpg";
import bannerAprons from "@/assets/banner-aprons.jpg";

import productBlazer from "@/assets/product-blazer-navy.jpg";
import productVest from "@/assets/product-vest-charcoal.jpg";
import productShirt from "@/assets/product-shirt-white.jpg";
import productTunic from "@/assets/product-tunic-gray.jpg";
import productCoat from "@/assets/product-coat-burgundy.jpg";
import productApron from "@/assets/product-apron-black.jpg";
import productScrub from "@/assets/product-scrub-teal.jpg";
import productTrousers from "@/assets/product-trousers-black.jpg";

export const collectionsData: CollectionData[] = [
  {
    id: "front-desk",
    title: "Front Desk Collection",
    slug: "front-desk",
    bannerImage: bannerFrontDesk,
    introduction: "Explore our premium Front Desk collection featuring refined, professional uniforms designed for style, comfort, and durability. Create lasting first impressions with elegant designs available in custom colors, fabrics, and sizing with branding and embroidery options.",
    products: [
      { styleCode: "FD101", name: "Executive Blazer", description: "Tailored navy blazer with peak lapels", image: productBlazer },
      { styleCode: "FD102", name: "Classic Vest", description: "Charcoal three-button waistcoat", image: productVest },
      { styleCode: "FD103", name: "Dress Shirt", description: "Premium cotton white dress shirt", image: productShirt },
      { styleCode: "FD104", name: "Reception Tunic", description: "Modern fit with accent piping", image: productTunic },
      { styleCode: "FD105", name: "Dress Trousers", description: "Flat-front professional pants", image: productTrousers },
      { styleCode: "FD106", name: "Concierge Blazer", description: "Double-breasted luxury blazer", image: productBlazer },
    ],
  },
  {
    id: "restaurant",
    title: "Restaurant & F&B Collection",
    slug: "restaurant",
    bannerImage: bannerRestaurant,
    introduction: "Explore our premium Restaurant & F&B collection featuring refined, professional uniforms designed for style, comfort, and durability. Elevate your dining experience with performance-driven designs available in custom colors, fabrics, and sizing with branding and embroidery options.",
    products: [
      { styleCode: "RFB201", name: "Server Vest", description: "Classic black service vest", image: productVest },
      { styleCode: "RFB202", name: "Bistro Apron", description: "Full-length professional apron", image: productApron },
      { styleCode: "RFB203", name: "Dress Shirt", description: "Wrinkle-resistant white shirt", image: productShirt },
      { styleCode: "RFB204", name: "Chef Coat", description: "Double-breasted executive coat", image: productCoat },
      { styleCode: "RFB205", name: "Service Trousers", description: "Durable black dress pants", image: productTrousers },
      { styleCode: "RFB206", name: "Sommelier Vest", description: "Wine service formal vest", image: productVest },
    ],
  },
  {
    id: "housekeeping",
    title: "Housekeeping Collection",
    slug: "housekeeping",
    bannerImage: bannerHousekeeping,
    introduction: "Explore our premium Housekeeping collection featuring refined, professional uniforms designed for style, comfort, and durability. Practical yet polished designs available in custom colors, fabrics, and sizing with branding and embroidery options.",
    products: [
      { styleCode: "HK301", name: "Housekeeping Tunic", description: "Comfortable stretch tunic", image: productTunic },
      { styleCode: "HK302", name: "Utility Shirt", description: "Breathable work shirt", image: productShirt },
      { styleCode: "HK303", name: "Apron", description: "Durable cleaning apron", image: productApron },
      { styleCode: "HK304", name: "Work Trousers", description: "Easy-care utility pants", image: productTrousers },
      { styleCode: "HK305", name: "Dress Tunic", description: "Premium housekeeping dress", image: productTunic },
      { styleCode: "HK306", name: "Polo Shirt", description: "Casual work polo", image: productShirt },
    ],
  },
  {
    id: "doorman-valet",
    title: "Doorman & Valet Collection",
    slug: "doorman-valet",
    bannerImage: bannerDoorman,
    introduction: "Explore our premium Doorman & Valet collection featuring refined, professional uniforms designed for style, comfort, and durability. Make a grand impression with distinguished designs available in custom colors, fabrics, and sizing with branding and embroidery options.",
    products: [
      { styleCode: "DV401", name: "Doorman Coat", description: "Classic burgundy long coat", image: productCoat },
      { styleCode: "DV402", name: "Valet Vest", description: "Formal service vest", image: productVest },
      { styleCode: "DV403", name: "Dress Shirt", description: "White wing-collar shirt", image: productShirt },
      { styleCode: "DV404", name: "Dress Trousers", description: "Tailored formal pants", image: productTrousers },
      { styleCode: "DV405", name: "Bell Captain Jacket", description: "Gold-button service jacket", image: productBlazer },
      { styleCode: "DV406", name: "Bellhop Coat", description: "Traditional bellhop uniform", image: productCoat },
    ],
  },
  {
    id: "resort-poolside",
    title: "Resort & Poolside Collection",
    slug: "resort-poolside",
    bannerImage: bannerResort,
    introduction: "Explore our premium Resort & Poolside collection featuring refined, professional uniforms designed for style, comfort, and durability. Relaxed luxury meets function with designs available in custom colors, fabrics, and sizing with branding and embroidery options.",
    products: [
      { styleCode: "RP501", name: "Polo Shirt", description: "Breathable resort polo", image: productShirt },
      { styleCode: "RP502", name: "Linen Shirt", description: "Lightweight casual shirt", image: productShirt },
      { styleCode: "RP503", name: "Shorts", description: "Comfortable resort shorts", image: productTrousers },
      { styleCode: "RP504", name: "Tunic", description: "Poolside service tunic", image: productTunic },
      { styleCode: "RP505", name: "Beach Vest", description: "Light outdoor vest", image: productVest },
      { styleCode: "RP506", name: "Cabana Shirt", description: "Tropical style uniform shirt", image: productShirt },
    ],
  },
  {
    id: "spa",
    title: "Spa Collection",
    slug: "spa",
    bannerImage: bannerSpa,
    introduction: "Explore our premium Spa collection featuring refined, professional uniforms designed for style, comfort, and durability. Create tranquil wellness experiences with serene designs available in custom colors, fabrics, and sizing with branding and embroidery options.",
    products: [
      { styleCode: "SP601", name: "Spa Tunic", description: "Zen-inspired comfort tunic", image: productTunic },
      { styleCode: "SP602", name: "Therapist Shirt", description: "Relaxed wellness shirt", image: productShirt },
      { styleCode: "SP603", name: "Yoga Pants", description: "Flexible spa trousers", image: productTrousers },
      { styleCode: "SP604", name: "Wrap Tunic", description: "Kimono-style spa uniform", image: productTunic },
      { styleCode: "SP605", name: "Wellness Vest", description: "Calming spa vest", image: productVest },
      { styleCode: "SP606", name: "Meditation Tunic", description: "Flowing spa dress", image: productTunic },
    ],
  },
  {
    id: "hospital-medical",
    title: "Hospital & Medical Collection",
    slug: "hospital-medical",
    bannerImage: bannerMedical,
    introduction: "Explore our premium Hospital & Medical collection featuring refined, professional uniforms designed for style, comfort, and durability. Combining hygiene and modern aesthetics with designs available in custom colors, fabrics, and sizing with branding and embroidery options.",
    products: [
      { styleCode: "HM701", name: "Medical Scrub Top", description: "Antimicrobial scrub top", image: productScrub },
      { styleCode: "HM702", name: "Scrub Pants", description: "Flexible medical pants", image: productTrousers },
      { styleCode: "HM703", name: "Lab Coat", description: "Professional white coat", image: productCoat },
      { styleCode: "HM704", name: "Nurse Tunic", description: "Comfortable care tunic", image: productTunic },
      { styleCode: "HM705", name: "Surgical Scrubs", description: "Sterile OR uniform", image: productScrub },
      { styleCode: "HM706", name: "Doctor Coat", description: "Executive medical coat", image: productCoat },
    ],
  },
  {
    id: "shirts-blouses",
    title: "Shirts & Blouses Collection",
    slug: "shirts-blouses",
    bannerImage: bannerShirts,
    introduction: "Explore our premium Shirts & Blouses collection featuring refined, professional uniforms designed for style, comfort, and durability. Versatile corporate essentials available in custom colors, fabrics, and sizing with branding and embroidery options.",
    products: [
      { styleCode: "SB801", name: "Oxford Shirt", description: "Classic button-down", image: productShirt },
      { styleCode: "SB802", name: "Dress Shirt", description: "Formal white shirt", image: productShirt },
      { styleCode: "SB803", name: "Polo Shirt", description: "Casual work polo", image: productShirt },
      { styleCode: "SB804", name: "Blouse", description: "Professional women's blouse", image: productShirt },
      { styleCode: "SB805", name: "Poplin Shirt", description: "Crisp business shirt", image: productShirt },
      { styleCode: "SB806", name: "Tunic Top", description: "Modern style blouse", image: productTunic },
    ],
  },
  {
    id: "trousers-skirts",
    title: "Trousers & Skirts Collection",
    slug: "trousers-skirts",
    bannerImage: bannerTrousers,
    introduction: "Explore our premium Trousers & Skirts collection featuring refined, professional uniforms designed for style, comfort, and durability. Polished bottom-wear essentials available in custom colors, fabrics, and sizing with branding and embroidery options.",
    products: [
      { styleCode: "TS901", name: "Dress Trousers", description: "Flat-front dress pants", image: productTrousers },
      { styleCode: "TS902", name: "Pencil Skirt", description: "Professional knee-length skirt", image: productTrousers },
      { styleCode: "TS903", name: "Chino Pants", description: "Casual work trousers", image: productTrousers },
      { styleCode: "TS904", name: "A-Line Skirt", description: "Comfortable work skirt", image: productTrousers },
      { styleCode: "TS905", name: "Pleated Trousers", description: "Classic dress pants", image: productTrousers },
      { styleCode: "TS906", name: "Midi Skirt", description: "Elegant professional skirt", image: productTrousers },
    ],
  },
  {
    id: "aprons-accessories",
    title: "Aprons & Accessories Collection",
    slug: "aprons-accessories",
    bannerImage: bannerAprons,
    introduction: "Explore our premium Aprons & Accessories collection featuring refined, professional uniforms designed for style, comfort, and durability. Complete your uniform look with essential accessories available in custom colors, fabrics, and sizing with branding and embroidery options.",
    products: [
      { styleCode: "AA1001", name: "Bistro Apron", description: "Full-length service apron", image: productApron },
      { styleCode: "AA1002", name: "Waist Apron", description: "Half apron with pockets", image: productApron },
      { styleCode: "AA1003", name: "Chef Apron", description: "Professional kitchen apron", image: productApron },
      { styleCode: "AA1004", name: "Bib Apron", description: "Classic work apron", image: productApron },
      { styleCode: "AA1005", name: "Barista Apron", description: "Canvas coffee shop apron", image: productApron },
      { styleCode: "AA1006", name: "Server Apron", description: "Premium dining apron", image: productApron },
    ],
  },
];
