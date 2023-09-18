import React, { useState, useEffect } from "react";
import axios from "axios";
function Bigram({ questionId }) {
  const [data, setData] = useState();
  const [imgWordCloud, setImgWordCloud] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/responses/${questionId}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [questionId]);
  useEffect(() => {
    const generateBigram = async () => {
      try {
        if (data) {
          const response = await axios.post(
            "http://localhost:8000/generate_bigramnetwork/",
            { texts: data },
            { responseType: "blob" }
          );
          const imageUrl = URL.createObjectURL(response.data);
          setImgWordCloud(imageUrl);
        }
      } catch (error) {
        console.error(error);
      }
    };
    generateBigram();
  }, [data]);
  return (
    <div className="pt-5">
      <h2 className="text-center text-lg font-semibold">Bigram</h2>
      {imgWordCloud ? (
        <img src={imgWordCloud} alt="Bigram Network" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
}

export default Bigram;
