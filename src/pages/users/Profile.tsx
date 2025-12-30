import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ProfileSidebar } from "../../components/ProfileSidebar";
import { GeneralProfile } from "../../components/GeneralProfile";
import { ApiKeys } from "../../components/ApiKeys";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <GeneralProfile />;
      case "api-keys":
        return <ApiKeys />;
      default:
        return <GeneralProfile />;
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-lvh bg-background">
        <div className="container mx-auto px-2">
          <div className="flex h-screen">
            <ProfileSidebar
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
            <main className="flex-1 overflow-auto">
              <div className="p-8">{renderContent()}</div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
