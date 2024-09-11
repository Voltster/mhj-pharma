import React from "react";

const EmailSignature = () => {
  return (
    <div className="p-4 border-t mt-6 text-sm text-gray-600">
      <p>Best regards,</p>
      <p className="font-semibold">
        Acknowledgement of Your Inquiry at MHJ Pharmaconcepts Pvt Ltd
      </p>
      <p>Email: info@mhjpharma.com</p>
      <p>Phone: +91 9999 436 570</p>
      <p>
        Website:{" "}
        <a href="https://www.mhj.com" className="text-red-600 underline">
          www.mhj.com
        </a>
      </p>
      <p className="mt-4 text-xs text-gray-500">
        Thank you for reaching out to us with your inquiry regarding
        [Product/Service]. We appreciate your interest in MHJ Pharmaconcepts Pvt
        Ltd and are excited to have the opportunity to discuss your
        requirements. We have received your inquiry and are processing it
        accordingly. Our team will review your request and respond to you within
        24 hours.
      </p>
      Best regards <br />
      MHJ Pharmaconcepts Pvt Ltd
    </div>
  );
};

export default EmailSignature;
