// lib/collectionService.js
const collectionsData = {
    "julley-ladakh": {
      title: "JULLEY LADAKH",
      heroImage: "/assets/images/julley_1.jpg",
      description: "INSPIRED BY THE RUGGED, SERENE LANDSCAPES OF LADAKH, THIS COLLECTION SEAMLESSLY BLENDS THE BOLDNESS OF BLACK LEATHER WITH THE REFINED SOFTNESS OF GREY SUEDE. A PERFECT EMBODIMENT OF THE COLLECTION'S ESSENCE, IT SPEAKS TO THE UNTAMED BEAUTY AND RAW ELEGANCE OF THE REGION.",
      detailImages: [
        "/assets/images/julley_2.jpg",
        "/assets/images/julley_4.jpg"
      ],
      leftCtaText: "EXPERIENCE THE SERENITY OF LADAKH",
      leftCtaLink: "/experience",
      rightCtaText: "EXPLORE OUR COLLECTION",
      rightCtaLink: "/collection",
      items: [
        {
          id: 1,
          name: "BOXED BREEZE",
          price: "₹2,599.00",
          collec_name: "DISRUPT",
          image: "/assets/images/collecpage_1.jpg",
          productId: "boxed-breeze"
        },
        {
          id: 2,
          name: "KHADELLA",
          price: "₹3,499.00",
          collec_name: "TOP SELLERS",
          image: "/assets/images/collecpage_2.jpg",
          productId: "khadella"
        },
        {
          id: 3,
          name: "SLEEK MODE",
          price: "₹2,800.00",
          collec_name: "TOP SELLERS",
          image: "/assets/images/collecpage_3.jpg",
          productId: "sleek-mode"
        },
        {
          id: 4,
          name: "CHILLINOS",
          price: "₹2,800.00",
          collec_name: "TOP SELLERS",
          image: "/assets/images/collecpage_4.jpg",
          productId: "chillinos"
        },
        {
          id: 5,
          name: "DREAMWAVE",
          price: "₹3,800.00",
          collec_name: "TOP SELLERS",
          image: "/assets/images/collecpage_5.jpg",
          productId: "dreamwave"
        },
        {
          id: 6,
          name: "EMBODY GRACE",
          price: "₹3,599.00",
          collec_name: "TOP SELLERS",
          image: "/assets/images/collecpage_6.jpg",
          productId: "embody-grace"
        },
        {
          id: 7,
          name: "CROPPED TUNDRA GUARD",
          price: "₹8,000.00",
          collec_name: "TOP SELLERS",
          image: "/assets/images/collecpage_7.jpg",
          productId: "cropped-tundra-guard"
        },
        {
          id: 8,
          name: "PARACHUTE PANTS",
          price: "₹2,999.00",
          collec_name: "TOP SELLERS",
          image: "/assets/images/collecpage_8.jpg",
          productId: "parachute-pants"
        }
      ]
    },
    "disrupt": {
      title: "DISRUPT",
      heroImage: "/assets/images/disrupt_hero.jpg",
      description: "CHALLENGING NORMS AND BREAKING BOUNDARIES, OUR DISRUPT COLLECTION PUSHES THE LIMITS OF CONTEMPORARY FASHION WITH BOLD SHAPES, UNEXPECTED MATERIALS, AND INNOVATIVE DESIGN TECHNIQUES.",
      detailImages: [
        "/assets/images/disrupt_1.jpg",
        "/assets/images/disrupt_2.jpg"
      ],
      leftCtaText: "BREAK THE MOLD",
      leftCtaLink: "/disrupt-story",
      rightCtaText: "SHOP THE COLLECTION",
      rightCtaLink: "/collection",
      items: [
        {
          id: 1,
          name: "ECHOES OF PAST",
          price: "₹3,299.00",
          collec_name: "DISRUPT",
          image: "/assets/images/echoes_of_past.jpg",
          productId: "echoes-of-past"
        },
        {
          id: 5,
          name: "SASHIMI",
          price: "₹2,699.00",
          collec_name: "DISRUPT",
          image: "/assets/images/sashimi.webp",
          productId: "sashimi"
        },
        {
          id: 8,
          name: "ZIP & GO",
          price: "₹2,699.00",
          collec_name: "DISRUPT",
          image: "/assets/images/zipgo.webp",
          productId: "zip-go"
        }
      ]
    },
    "techno": {
      title: "TECHNO",
      heroImage: "/assets/images/collection_1.jpg",
      description: "MERGING FUTURISTIC AESTHETICS WITH FUNCTIONAL DESIGN, OUR TECHNO COLLECTION EMBRACES CUTTING-EDGE MATERIALS AND INNOVATIVE CONSTRUCTION TECHNIQUES TO CREATE FORWARD-THINKING FASHION FOR THE DIGITAL AGE.",
      detailImages: [
        "/assets/images/techno_1.jpg",
        "/assets/images/techno_2.jpg"
      ],
      leftCtaText: "DISCOVER THE FUTURE",
      leftCtaLink: "/techno-story",
      rightCtaText: "SHOP THE COLLECTION",
      rightCtaLink: "/collection",
      items: [
        {
          id: 1,
          name: "NEURAL MESH",
          price: "₹4,299.00",
          collec_name: "TECHNO",
          image: "/assets/images/collection_1.jpg",
          productId: "neural-mesh"
        },
        {
          id: 2,
          name: "DIGITAL NOMAD",
          price: "₹3,899.00",
          collec_name: "TECHNO",
          image: "/assets/images/collection_2.jpg",
          productId: "digital-nomad"
        },
        {
          id: 3,
          name: "CIRCUIT BREAKER",
          price: "₹3,599.00",
          collec_name: "TECHNO",
          image: "/assets/images/collection_3.jpg",
          productId: "circuit-breaker"
        },
        {
          id: 4,
          name: "BINARY FLOW",
          price: "₹4,199.00",
          collec_name: "TECHNO",
          image: "/assets/images/collection_4.jpg",
          productId: "binary-flow"
        }
      ]
    }
  };
  
  export function getCollection(id) {
    return collectionsData[id] || null;
  }
  
  export function getAllCollections() {
    return Object.keys(collectionsData).map(key => ({
      id: key,
      title: collectionsData[key].title,
      heroImage: collectionsData[key].heroImage
    }));
  }
  