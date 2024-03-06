// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { addDoc, collection, getFirestore } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyNcz9Y8VgEPUX59qFYKkhuqlOvTZDOt8",
  authDomain: "next-store-f2f10.firebaseapp.com",
  projectId: "next-store-f2f10",
  storageBucket: "next-store-f2f10.appspot.com",
  messagingSenderId: "269902806889",
  appId: "1:269902806889:web:e1e56595a9ab8bb56ec7f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const categories = [
  {
    id: "8a7b6c5d4e3f2g1h0i",
    name: "Jackets",
    displayName: "Jaquetas",
    imageUrl:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: "8c3df819a2e4b1c6d",
        name: "Blazer Preta",
        price: 150,
        imageUrl:
          "https://images.unsplash.com/photo-1592878849122-facb97520f9e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "5b4a9e2e4c7f3g6h",
        name: "Blusa Oakley",
        price: 320,
        imageUrl:
          "https://images.unsplash.com/photo-1610650243550-faab208bfeba?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "3a2f7c6a2d9e1i4j5k",
        name: "Corta Vento Marrom",
        price: 270,
        imageUrl:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "a5d8e9f1g6h3j4al7m",
        name: "Jaqueta Bege",
        price: 190,
        imageUrl:
          "https://images.unsplash.com/photo-1676281161960-c6d1d369b755?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "2n1o4p5q6r3s2t8v9w",
        name: "Jaqueta Jeans Azul",
        price: 420,
        imageUrl:
          "https://images.unsplash.com/photo-1552135526-aa0f96c2207a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "2n1oasd123sa2t8v9w",
        name: "Puffer Verde Limão",
        price: 230,
        imageUrl:
          "https://images.unsplash.com/photo-1609006642422-f239e3bf8918?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  {
    id: "1b2c3d4e5f6g7h8i9j",
    name: "pants",
    displayName: "Calças",
    imageUrl:
      "https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: "5s6t7u8v9w0x1y2z3a4b",
        name: "Calça Bege",
        price: 320,
        imageUrl:
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "6c7d8e9f0g1h2i3j4k5l",
        name: "Calça Jogger Marrom Claro",
        price: 170,
        imageUrl:
          "https://images.unsplash.com/photo-1519211777646-3a7ccf759b64?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "7m8n9o0p1q2r3s4t5u6v",
        name: "Calça Jeans Cinza",
        price: 250,
        imageUrl:
          "https://images.unsplash.com/photo-1511105043137-7e66f28270e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fENhbCVDMyVBN2FzJTIwbWFzY3VsaW5hfGVufDB8fDB8fHww",
      },
      {
        id: "8w9x0y1z2a3b4c5d6e7f",
        name: "Calça Jogger Rosa",
        price: 400,
        imageUrl:
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "9g0h1i2j3k4l5m6n7o8p",
        name: "Calça Cargo Cinza",
        price: 270,
        imageUrl:
          "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },

      {
        id: "0q1r2s3t4u5v6w7x8y9z",
        name: "Calça Skinny",
        price: 190,
        imageUrl:
          "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  {
    id: "9j8k7l6m5n4o3p2q1r",
    name: "shoes",
    displayName: "Calçados",
    imageUrl:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: "9x8y7z6a5b4c3d2e1f",
        name: "Adidas para Corrida",
        price: 320,
        imageUrl:
          "https://images.unsplash.com/photo-1521774971864-62e842046145?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "5g4h3i2j1k0l9m8n7o",
        name: "Bota de Couro",
        price: 400,
        imageUrl:
          "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "6p5q4r3s2t1u0v9w8x7y",
        name: "New Balance",
        price: 250,
        imageUrl:
          "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "4z3a2b1c0d9e8f7g6h",
        name: "Salto Florido",
        price: 170,
        imageUrl:
          "https://images.unsplash.com/photo-1519707574798-77140649cfe5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "7i6j5k4l3m2n1o0p9q",
        name: "New Balance X-90",
        price: 270,
        imageUrl:
          "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "3r2s1t0u9v8w7x6y5z",
        name: "Salto Azul",
        price: 190,
        imageUrl:
          "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  {
    id: "2k3l4m5n6o7p8q9r",
    name: "bags",
    displayName: "Bolsas",
    imageUrl:
      "https://images.unsplash.com/photo-1601987078664-863b07dc0907?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: "3s4t5u6v7w8x9y0z",
        name: "Mochila Vinta",
        price: 320,
        imageUrl:
          "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "4a5b6c7d8e9f0g1h",
        name: "Bolsa de Ombro Cinza",
        price: 170,
        imageUrl:
          "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "5i6j7k8l9m0n1o2p",
        name: "Mochila Unissex Cor Vinho",
        price: 250,
        imageUrl:
          "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "6q7r8s9t0u1v2w3x",
        name: "Bolsa De Ombro Prada",
        price: 400,
        imageUrl:
          "https://images.unsplash.com/photo-1590739225287-bd31519780c3?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "7y8z9a0b1c2d3e4f",
        name: "Mochila Levelo",
        price: 270,
        imageUrl:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },

      {
        id: "8g9h0i1j2k3l4m5n",
        name: "Bolsa de Ombro Gucci",
        price: 190,
        imageUrl:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  {
    id: "9o0p1q2r3s4t5u6v",
    name: "hats",
    displayName: "Chapéus",
    imageUrl:
      "https://images.unsplash.com/photo-1552399230-e073362b3bf4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: "0w1x2y3z4a5b6c7d",
        name: "Boné RVCA",
        price: 320,
        imageUrl:
          "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "1e2f3g4h5i6j7k8l",
        name: "Boné New York Unissex",
        price: 170,
        imageUrl:
          "https://images.unsplash.com/photo-1541598609756-e7dfa98d129f?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "2m3n4o5p6q7r8s9t",
        name: "Gorro Laranja Thinsulafe",
        price: 250,
        imageUrl:
          "https://images.unsplash.com/photo-1511500118080-275313ec90a1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "3u4v5w6x7y8z9a0b",
        name: "Gorro Branco Feminino",
        price: 400,
        imageUrl:
          "https://images.unsplash.com/photo-1514867312438-db0960ee52e5?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "4c5d6e7f8g9h0i1j",
        name: "Boné Ice",
        price: 270,
        imageUrl:
          "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },

      {
        id: "5k6l7m8n9o0p1q2r",
        name: "Chapéu Laranja",
        price: 190,
        imageUrl:
          "https://images.unsplash.com/photo-1551734413-5943d61e002a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

const main = async () => {
  await Promise.all(
    categories.map(async (category) => {
      await addDoc(collection(db, "categories"), category);
    })
  );
};

main().then(() => process.exit());
