import React from "react";
import "./Footer.css";
import { format } from "date-fns";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper bg-textColor flex justify-center items-center">
        <h4 className="py-5 text-white text-base font-normal">
          © Copyright {format(new Date(), "yyyy")}
        </h4>
      </div>
    </div>
  );
}
