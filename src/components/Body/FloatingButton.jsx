import "./FloatingButton.css";

import zalo from "../../assets/zalo.png"

export const FloatingButton = () => {
  return (
    <div className="fixed bottom-10 left-10 z-50 flex flex-col space-y-16">
      {/* Link cho biểu tượng điện thoại */}
      <a href="tel:+84879203999" className="phone-link"> {/* Thay đổi đường link ở đây */}
        <div className="phone">
          <svg
            className="phone-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
          </svg>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </a>
      
      {/* Link cho biểu tượng Zalo */}
      <a href="https://zalo.me/0879203999" target="_blank" rel="noopener noreferrer" className="zalo-link">
        <div className="zalo">
          <img src={zalo} className="zalo-icon" alt="Zalo Icon" />
        </div>
        <div className="circle3"></div>
        <div className="circle4"></div>
      </a>
    </div>
  );
};

export default FloatingButton;
