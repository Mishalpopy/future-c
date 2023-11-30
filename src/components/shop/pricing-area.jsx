import product_data from "@/src/data/product-data";
import NiceSelect from "@/src/ui/nice-select";
import Link from "next/link";
import React from "react";

const ShoppingArea = () => {
  const selectHandler = (e) => {};
  return (
    <>
      <section className="product__area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <h1>Terms and Conditions</h1>
            <p>
              Welcome to Future Connect! By accessing our website or using our
              services, you agree to comply with and be bound by the following
              Terms and Conditions. Please read these terms carefully before
              engaging with Future Connect.
            </p>
            <h4>Acceptance of Terms</h4>
            <p>
              By using our website or services, you agree to these Terms and
              Conditions and any additional terms referenced herein. If you do
              not agree with these terms, please refrain from using our website
              and services.
            </p>
            <h4>Services</h4>
            <p>
              2.1 Future Connect provides technology solutions and services
              aimed at empowering businesses through digital transformation.
              <br></br>
              2.2 We reserve the right to modify, suspend, or discontinue any
              aspect of our services at any time without prior notice.
            </p>
            <h4>User Conduct</h4>
            <p>
              3.1 You agree not to engage in any activity that may disrupt or
              interfere with the proper functioning of our website or services.
              <br></br>
              3.2 You shall not use our website or services for any unlawful or
              unauthorized purpose.
              <br></br>
              3.3 You are responsible for maintaining the confidentiality of
              your account information and passwords.
            </p>
            <h4>Intellectual Property</h4>
            <p>
              4.1 All content, logos, trademarks, and intellectual property on
              our website are owned by Future Connect or its licensors.
              <br></br>
              4.2 You may not reproduce, distribute, modify, or create
              derivative works from any content on our website without our
              express written consent.
            </p>
            <h4>Privacy</h4>
            <p>
              5.1 Our Privacy Policy governs the collection, use, and disclosure
              of your personal information. By using our services, you consent
              to the terms of our Privacy Policy.
            </p>
            <h4>Limitation of Liability</h4>
            <p>
              6.1 Future Connect shall not be liable for any direct, indirect,
              incidental, consequential, or special damages arising out of or in
              connection with your use of our website or services.
            </p>
            <h4>Changes to Terms</h4>
            <p>
              7.1 Future Connect reserves the right to update or modify these
              Terms and Conditions at any time. Continued use of our website or
              services after such changes constitutes your acceptance of the
              revised terms.
            </p>

            <h4>Contact Information</h4>
            <p>
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at info@futureconnectme.com.
              <br></br>
              Thank you for choosing Future Connect. We look forward to serving
              you on your journey to a connected future!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingArea;
