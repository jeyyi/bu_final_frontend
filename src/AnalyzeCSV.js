import React from "react";
import { useState, useEffect } from "react";
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
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

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
      <h2>Upload CSV File</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".csv,.xlsx,.xls"
        />
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form>
      <div className="w-full h-40 my-10 bg-base-100 shadow-sm flex">
        <div className="w-full h-full flex flex-col">
          <h3 className="px-10 pt-10 text-green-700 text-xl lg:text-4xl font-bold">
            ANAL<span className="text-green-600">YSE</span>
          </h3>
          <h3 className="px-10 text-green-700 text-2xl lg:text-6xl font-bold">
            EXCEL<span className="text-green-600"> FILE</span>
          </h3>
        </div>
        {/* Cover photo */}
        <div className="h-full w-44 lg:w-72 flex items-center">
          {
            <img
              src={Logo}
              className="w-full h-full mx-auto object-contain lg:object-cover pr-5 lg:pr-0"
              alt="excel logo"
            />
          }
        </div>
      </div>
      <div className="divider" />
      <h3 className="text-gray-700 font-semibold text-2xl pb-6">Analysis</h3>
      <div className="flex flex-col gap-3">
        {/* Question Card dropdown details summary */}
        {transformedData &&
          Object.keys(subset).map((question, index) => {
            const dataForQuestion = transformedData.filter(
              (item) => item.question === question
            );
            return (
              <div
                key={index}
                tabIndex={0}
                className="collapse collapse-arrow bg-blue-300 shadow-sm"
              >
                <div className="collapse-title">{question}</div>
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
