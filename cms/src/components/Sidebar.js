// import React, { useState } from "react";
// import "./Sidebar.css";

// function Sidebar({ contentData, fetchData,activeName,currentIndex }) {
//   const [activeButton, setActiveButton] = useState(null);

//   const handleButtonClick = (name) => {
//     setActiveButton(name);
//     fetchData(name);
//   };

//   return (
//     <div className="sidebar-container">
//       <div className="btn-container" data-aos="fade-right" data-aos-duration="1000">
//         {contentData.map((item) => (
//           <button
//             key={item.name}
//             className={`btns ${activeButton === item.name ? "active" : ""}`}
//             // className={`btns ${activeName === item.name || currentIndex === index ? "active" : ""}`}
//             onClick={() => handleButtonClick(item.name)}
//           >
//             {item.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import React from "react";
import "./Sidebar.css";

function Sidebar({ contentData, fetchData, activeName }) {
  const handleButtonClick = (name) => {
    fetchData(name);
  };

  return (
    <div className="sidebar-container">
      <div className="btn-container" data-aos="fade-right" data-aos-duration="1000">
        {contentData.map((item) => (
          <button
            key={item.name}
            className={`btns ${activeName === item.name ? "active" : ""}`}
            onClick={() => handleButtonClick(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
