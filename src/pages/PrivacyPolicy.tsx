
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Privacy Policy | Veteran Campaigns"
        description="Our privacy policy outlines how Veteran Campaigns collects, uses, and protects your personal information when you use our website or services."
        canonical="/privacy-policy"
        keywords="privacy policy, data protection, personal information, privacy terms, campaign privacy"
      />
      <Header />
      <main>
        <section className="py-20 container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-10">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data We Collect</h2>
            <p>
              Veteran Campaigns collects personal information that you voluntarily provide to us when you use our website, 
              express an interest in obtaining information about us or our products and services, or when you interact with us.
            </p>
            <p>
              The personal information we collect may include names, email addresses, phone numbers, and other information 
              you choose to provide through our contact forms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Communicate with you, including responding to your inquiries</li>
              <li>Develop new products, services, features, and functionality</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
            <p>
              We do not sell, rent, or share your personal information with third parties without your consent, 
              except as described in this Privacy Policy.
            </p>
            <p>
              We may share your personal information with third-party service providers who perform services on our behalf, 
              such as website hosting, data analysis, payment processing, and customer service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <address className="not-italic">
              Veteran Media LLC<br />
              8 Wright Street, Suite 107<br />
              Westport, CT 06880<br />
              <a href="mailto:privacy@veterancampaigns.com" className="text-primary-dark-blue">
                privacy@veterancampaigns.com
              </a>
            </address>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
