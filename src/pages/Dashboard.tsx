import Header from "../components/Header";
import Footer from "../components/Footer";
import StatsCards from "../components/StatsCard";

const Dashboard = () => {
  return (
    <>
      <Header />

      <div className="bg-background pt-10 relative">
        <div className=" min-h-screen container mx-auto">
          <StatsCards />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
