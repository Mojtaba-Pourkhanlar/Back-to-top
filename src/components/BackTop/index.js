import { useEffect, useState } from "react";
import Up from "../../assets/up.svg";
import CS from "./index.module.css";

export const BackTop = () => {
  //..............Scroll Top
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //..............End

  return (
    <div className={CS.container}>
      {showButton && (
        <div
          onClick={scrollToTop}
          className={CS.backToTop}
          style={{
            transition: "all 0.50s linear",
            textAlign: "center",
          }}>
          <img src={Up} alt="Arrow_Up" width="40px" />
        </div>
      )}
    </div>
  );
};
