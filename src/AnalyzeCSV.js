import React from "react";
import { useState, useEffect, useRef } from "react";
import Logo from "./Assets/logo.png";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
function AnalyzeCSV() {
  const [file, setFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [transformedData, setTransformedData] = useState(null);
  // State to hold the subset of data
  const [subset, setSubset] = useState({});
  const [data, setData] = useState(null);
  const fileInputRef = useRef(null);
  const CustomXAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#666" fontSize="11">
          {payload.value}
        </text>
      </g>
    );
  };

  const CustomYAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={-4} textAnchor="end" fill="#666" fontSize="11">
          {payload.value}
        </text>
      </g>
    );
  };
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      await handleSubmit(selectedFile);
    }
  };

  const handleSubmit = async (selectedFile) => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8000/analyzecsv",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setData(response.data); // Process response from server
      setTotalPages(
        Math.ceil(Object.keys(response.data).length / itemsPerPage)
      );
      transformResponseData(response.data); // Transform response data
    } catch (error) {
      console.error(error);
    }
  };
  const transformResponseData = (data) => {
    const transformed = [];

    Object.keys(data).forEach((question) => {
      const answers = data[question];

      Object.entries(answers).forEach(([name, value]) => {
        transformed.push({ question, name, value });
      });
    });

    setTransformedData(transformed);
  };

  useEffect(() => {
    if (!data) return;
    console.log(currentPage);
    console.log(totalPages);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const entries = Object.entries(data);
    const subsetEntries = entries.slice(startIndex, endIndex);
    setSubset(Object.fromEntries(subsetEntries));
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <div className="w-full h-40 my-10 bg-base-100 shadow-sm flex">
        <div className="w-full h-full flex flex-col">
          <h3 className="px-10 pt-10 text-green-700 text-xl lg:text-4xl font-bold">
            ANA<span className="text-green-600">LYSE</span>
          </h3>
          <h3 className="px-10 text-green-700 text-2xl lg:text-6xl font-bold">
            EXCEL<span className="text-green-600"> FILE</span>
          </h3>
        </div>
        {/* Cover photo */}
        <div className="h-full w-44 lg:w-72 flex items-center">
          <img
            src={Logo}
            className="w-full h-full mx-auto object-contain lg:object-cover pr-5 lg:pr-0 cursor-pointer"
            alt="excel logo"
            onClick={() => fileInputRef.current.click()}
          />
          <input
            type="file"
            onChange={handleFileChange}
            accept=".csv,.xlsx,.xls"
            style={{ display: "none" }}
            ref={fileInputRef}
          />
        </div>
      </div>
      <div className="divider" />

      <div className="flex flex-col gap-3">
        {/* Question Card dropdown details summary */}
        {transformedData ? (
          <>
            <h3 className="text-gray-700 font-semibold text-2xl pb-6">
              Analysis
            </h3>
            {Object.keys(subset).map((question, index) => {
              const dataForQuestion = transformedData.filter(
                (item) => item.question === question
              );
              return (
                <div
                  key={index}
                  tabIndex={0}
                  className="collapse collapse-arrow bg-blue-300 shadow-sm mx-0"
                >
                  <div className="collapse-title text-sm flex items-center">
                    {question}
                  </div>
                  <div className="collapse-content bg-white">
                    <div className="p-0 lg:p-10">
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={dataForQuestion} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" tick={<CustomXAxisTick />} />
                          <YAxis
                            type="category"
                            dataKey="name"
                            tick={<CustomYAxisTick />}
                          />
                          <Tooltip />
                          <Bar dataKey="value" fill="#1498FF" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h3 className="text-center my-10 font-semibold text-2xl lg:text-4xl text-gray-600">Analyze CSV by clicking on "excel" icon</h3>
        )}

        {/*   <div className="flex justify-between mt-4">
          <button
            className="btn btn-primary"
            onClick={() => setCurrentPage(currentPage-1)}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              setCurrentPage(currentPage+1)
            }
            disabled={currentPage === totalPages-1}
          >
            Next
          </button>
        </div> */}
        <div className="w-full flex items-center justify-center py-5">
          <div className="join">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`join-item btn ${
                  index === currentPage ? "btn-active" : ""
                }`}
                onClick={() => setCurrentPage(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalyzeCSV;
