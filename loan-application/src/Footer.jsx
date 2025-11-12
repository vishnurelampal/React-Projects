import React from "react";

const Footer = ({ handleProceed, handleCancel }) => {
  return (
    <footer className="footer  fixed bottom-0 sm:footer-horizontal text-base-content p-4">
      <aside className="flex gap-2">
        <button onClick={handleCancel} className="btn btn-active btn-primary">
          Cancel
        </button>
        <button onClick={handleProceed} className="btn btn-neutral">
          Proceed
        </button>
      </aside>
    </footer>
  );
};

export default Footer;
