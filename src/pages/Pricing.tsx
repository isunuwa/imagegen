import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check, Sparkles } from "lucide-react";
import CTA from "../components/CTA";

const Contact = () => {
  const pricingPlanList = [
    {
      planName: "Free Plan",
      planDescription: "No features, great for getting started.",
      planFeatures: [
        "1 image per day",
        "Explore creators",
        "Community support",
      ],
      planCardClass: "bg-gray-100 rounded-[20px] p-6 dark:bg-gray-100",
    },
    {
      planName: "Premium Plan",
      planDescription: "Limited features, great for exploring.",
      planFeatures: [
        "1000 image per day",
        "Explore creators",
        "Community support",
      ],
      planCardClass: "bg-purple-200 rounded-[20px] p-6 dark:bg-purple-200",
      isPopular: true,
    },
    {
      planName: "Enterprise Plan",
      planDescription: "Custom solutions for large organizations.",
      planFeatures: ["Unlimited images", "Advanced tools", "Priority support"],
      planCardClass: "bg-blue-200 rounded-[20px] p-6 dark:bg-blue-200",
    },
  ];

  const features = [
    { name: "Unlimited Conversations", availability: [true, true, true] },
    { name: "Messages", availability: [true, true, true] },
    { name: "Support", availability: [true, true, true] },
    { name: "Knowledge Base", values: ["Basic", "Advanced", "Custom"] },
    {
      name: "Website Integration",
      values: ["Basic", "Crawling & Auto-Updates", "Advanced"],
    },
    { name: "Customization", values: ["Basic", "Full Options", "Full"] },
    { name: "API Access", availability: [false, true, true] },
    { name: "Security Controls", availability: [false, false, true] },
    { name: "Custom Integrations", availability: [false, false, true] },
  ];

  return (
    <>
      <Header />

      <div className="bg-background">
        <div className="max-w-6xl mx-auto py-10">
          <div className="text-center">
            <h1 className="text-primary text-3xl font-bold mb-4">
              Simple,&nbsp;
              <span className="bg-gradient-to-r from-primary to-primarydark bg-clip-text mr-2">
                Transparent
              </span>
              Pricing
            </h1>
            <p className="text-foreground mb-4">
              Choose the plan that best fits your needs and start creating
              stunning images today!
            </p>
          </div>

          {/* Pricing details would go here */}
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlanList.map((plan, index) => (
                <div className={plan.planCardClass} key={index}>
                  {/* if there is isPopular then show a div */}
                  {plan.isPopular && (
                    <div className="relative width-full flex justify-center">
                      <span className="-mt-2 absolute -top-7 mx-auto bg-white inline-block border border-purple-600 text-purple-600 text-xs px-3 py-2 rounded-full">
                        <Sparkles className="inline-block w-3 h-3 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h2 className="text-xl font-bold mb-2 mt-1">{plan.planName}</h2>
                  <p className="text-gray-600 mb-4">{plan.planDescription}</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    {plan.planFeatures.map((feature, index) => (
                      <li key={index} id={`feature-${index}`}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-primary hover:bg-primarydark text-white py-3 px-4 rounded-full transition-all duration-200 flex items-center justify-center">
                    Contact Us
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Features table */}
          <div className="max-w-6xl mx-auto mt-20 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-6 px-6 text-slate-600 dark:text-foreground">
                    Features
                  </th>
                  <th className="text-center py-6 px-6 text-slate-600 dark:text-foreground">
                    Small Business
                  </th>
                  <th className="text-center py-6 px-6 text-purple-600 dark:text-foreground">
                    Professional
                  </th>
                  <th className="text-center py-6 px-6 text-blue-600 dark:text-foreground">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-5 px-6 text-slate-600 dark:text-foreground font-semibold">
                      {feature.name}
                    </td>
                    {feature.values
                      ? feature.values.map((value, planIndex) => (
                          <td
                            key={planIndex}
                            className="py-5 px-6 text-center text-slate-600 dark:text-foreground"
                          >
                            {value}
                          </td>
                        ))
                      : feature.availability?.map((isAvailable, planIndex) => (
                          <td key={planIndex} className="py-5 px-6 text-center">
                            {isAvailable ? (
                              <div className="flex justify-center">
                                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                  <Check
                                    className="w-4 h-4 text-white"
                                    strokeWidth={3}
                                  />
                                </div>
                              </div>
                            ) : (
                              <span className="text-gray-400">–</span>
                            )}
                          </td>
                        ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA />

      <Footer />
    </>
  );
};

export default Contact;
