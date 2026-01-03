import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageCard from "../components/ImageCard";
import Filterbar from "../components/FilterBar";

const images = [
  {
    id: 1,
    title: "SHIBA PAGE DESIGN",
    author: "Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    likes: 5,
    views: 2100,
    category: "Web Design",
    description: "Modern Shiba Inu themed page design",
    downloads: 156,
  },
  {
    id: 2,
    title: "Transform Education Through AI-Powered Learning",
    author: "Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    likes: 5,
    views: 2800,
    category: "Web Design",
    description: "AI-powered educational platform design",
    downloads: 243,
  },
  {
    id: 3,
    title: "ChatIX Mobile App",
    author: "Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    likes: 2,
    views: 1600,
    category: "Mobile",
    description: "ChatIX messaging application UI",
    downloads: 89,
  },
  {
    id: 4,
    title: "Healthy Sleep with 7hr",
    author: "Lorem Ipsum (ux Remixov)",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    likes: 113,
    views: 12380,
    category: "Mobile",
    description: "Sleep tracking and health monitoring app",
    downloads: 512,
  },
  {
    id: 5,
    title: "Finance Dashboard",
    author: "Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    likes: 8,
    views: 3200,
    category: "Web Design",
    description: "Comprehensive financial analytics dashboard",
    downloads: 178,
  },
];

const Explore = () => {
  return (
    <>
      <Header />

      <div className="bg-background text-foreground pt-10 relative">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <Filterbar />

          {/* Card Contents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
