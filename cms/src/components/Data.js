import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import Content from "./Content";
import Sidebar from "./Sidebar";
import "./Data.css"

function Data({value}) {
  const navigate=useNavigate();
 
  const [info, setInfo] = useState({});
  const [contentData, setContentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Add currentIndex state

  const fetchAllData = async () => {
    try {
      const response = await fetch(`http://localhost:1337/api/languages/${value}`);
      const data = await response.json();
      const result = data.data.attributes.content.content;
      setContentData(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllData();
  }, [value]);

  useEffect(() => {
    setCurrentIndex(0); // Reset the currentIndex when contentData changes
  }, [contentData]);

  useEffect(() => {
    if (contentData.length > 0) {
      setInfo(contentData[currentIndex].data);
    }
  }, [contentData, currentIndex]);



  function fetchData(name) {
    const content = contentData.find((item) => item.name === name);
    if (content) {
      setInfo(content.data);
    }
  }

   // Function to handle next content
   function handleNext() {
    if (currentIndex < contentData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

   // Function to handle previous content
   function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  function handleHome() {
    
    navigate("/");
    
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (

        <div>
        <div className="container">
        {/* here for selected */}
           <Sidebar contentData={contentData} fetchData={fetchData} selectedValue={value}/> 
          <div className="content-container">
          <div className="navigation-buttons">
          {currentIndex === 0 && (
            <button className="button" onClick={handleHome}>
              Home
            </button>
          )}
          {currentIndex > 0 && (
            <button className="button" onClick={handlePrevious}>
              Previous
            </button>
          )}
          {currentIndex<contentData.length-1 &&
              <button
              className="button"
              onClick={handleNext}
              disabled={currentIndex === contentData.length - 1}
            >
              Next
            </button>
          }
       
        </div>
       
          </div>
          </div>
          <div className="adjust">
            <Content data={info}></Content>
            </div>
        </div>
      )}
      
    </div>
    
  );
}

export default Data;