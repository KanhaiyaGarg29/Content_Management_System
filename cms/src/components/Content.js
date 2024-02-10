import React from "react";
import "./Content.css";

function Content(props) {
  const info = props.data;
  const contentStyle = {
    fontFamily: 'poppins', 
  };

  return ( <div className="main">
    <div style={contentStyle} className="content-container">
      <div className="heading">
        {info.title && <h1>{info.title}</h1>}
      </div>
      <div>
        <p className="des1">{info.intro}</p>
      </div>
      <div className="des2">
        <ul>
          {info.list &&
            info.list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        {info.example && (
          <div className="heading2">
            {info.example
              .split("\n")
              .map((line, index) => <p key={index}>{line}</p>)}
          </div>
        )}
      </div>

      {info.title1 && (
        <div className="des2">
          <h1 className="heading2">{info.title1}</h1>
          {info.desc1 &&
            info.desc1
              .split("\n")
              .map((line, index) => <p key={index}>{line}</p>)}
          <div className="list">
            <ul className="list">
              {info.list2 &&
                info.list2.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          {info.example1 && (
            <div className="example">
              {info.example1
                .split("\n")
                .map((line, index) => <p key={index}>{line}</p>)}
            </div>
          )}
        </div>
      )}
        {info.title2 && (
        <div className="des2">
          <h1 className="heading2">{info.title2}</h1>
          {info.desc2 &&
            info.desc2
              .split("\n")
              .map((line, index) => <p key={index}>{line}</p>)}
          {info.example2 && (
            <div className="example">
              {info.example2
                .split("\n")
                .map((line, index) => <p key={index}>{line}</p>)}
            </div>
          )}
        </div>
      )}
        {info.title3 && (
        <div className="des2">
          <h1 className="heading2">{info.title3}</h1>
          {info.desc3 &&
            info.desc3
              .split("\n")
              .map((line, index) => <p key={index}>{line}</p>)}
          {info.example3 && (
            <div className="example">
              {info.example3
                .split("\n")
                .map((line, index) => <p key={index}>{line}</p>)}
            </div>
          )}
        </div>
      )}
        {info.title4 && (
        <div className="des2">
          <h1 className="heading2">{info.title4}</h1>
          {info.desc4 &&
            info.desc4
              .split("\n")
              .map((line, index) => <p key={index}>{line}</p>)}
          {info.example4 && (
            <div className="example">
              {info.example4
                .split("\n")
                .map((line, index) => <p key={index}>{line}</p>)}
            </div>
          )}
        </div>
      )}
        {info.title5 && (
        <div className="des2">
          <h1 className="heading2">{info.title5}</h1>
          {info.desc5 &&
            info.desc5
              .split("\n")
              .map((line, index) => <p key={index}>{line}</p>)}
       
          {info.example5 && (
            <div className="example">
              {info.example5
                .split("\n")
                .map((line, index) => <p key={index}>{line}</p>)}
            </div>
          )}
        </div>
      )}
        {info.title6 && (
        <div className="des2">
          <h1 className="heading2">{info.title6}</h1>
          {info.desc6 &&
            info.desc6
              .split("\n")
              .map((line, index) => <p key={index}>{line}</p>)}
          
          {info.example6 && (
            <div className="example">
              {info.example6
                .split("\n")
                .map((line, index) => <p key={index}>{line}</p>)}
            </div>
          )}
        </div>
      )}
    </div> </div>
  );
}


export default Content;

// import React from "react";
// import "./Content.css";

// function Content(props) {
//   const info = props.data;
//   const contentStyle = {
//     fontFamily: 'poppins', 
//   };

//   return (
//     <div className="main">
//       <div style={contentStyle} className="content-container">
//         <div className="heading">
//           {info && info.title && <h1>{info.title}</h1>}
//         </div>
//         <div>
//           <p className="des1">{info && info.intro}</p>
//         </div>
//         <div className="des2">
//           <ul>
//             {info && info.list &&
//               info.list.map((item, index) => <li key={index}>{item}</li>)}
//           </ul>
//           {info && info.example && (
//             <div className="heading2">
//               {info.example
//                 .split("\n")
//                 .map((line, index) => <p key={index}>{line}</p>)}
//             </div>
//           )}
//         </div>

//         {[1, 2, 3, 4, 5, 6].map((num) => (
//           <div key={num} className="des2">
//             {info && info[`title${num}`] && (
//               <>
//                 <h1 className="heading2">{info[`title${num}`]}</h1>
//                 {info[`desc${num}`] && (
//                   info[`desc${num}`]
//                     .split("\n")
//                     .map((line, index) => <p key={index}>{line}</p>)
//                 )}
//                 {info[`example${num}`] && (
//                   <div className="example">
//                     {info[`example${num}`]
//                       .split("\n")
//                       .map((line, index) => <p key={index}>{line}</p>)}
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Content;

