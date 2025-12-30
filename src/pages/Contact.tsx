import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail } from "lucide-react";
import { useState } from "react";

const contactInformation = {
  
}

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Handle contact form submission
    alert("Message sent!");
  };

  return (
    <>
      <Header />

      <div className="min-h-lvh bg-background">
        <div className="container max-w-2xl mx-auto py-10">
          <div className="text-center">
            <h1 className="text-primary text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-foreground mb-4">
              We'd love to hear from you! Reach out to us using the form below.
            </p>
          </div>

          {/* Form for contact information */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-foreground mb-2">
                Full Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="eg. John Doe"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-foreground mb-2">
                Email Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
                />
              </div>
            </div>
            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-foreground mb-2">
                Your Message
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* these are the contact details Email info@agentic-ai.ltd Get in touch for project inquiries Phone +44 7771 970567 Call us for immediate assistance Emergency Contact +44 (0) 1892 529563 24/7 emergency support line Location Tunbridge Wells, Kent, UK Based in the heart of Kent */}
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
