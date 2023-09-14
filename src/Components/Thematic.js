import React, { useState, useEffect } from "react";
import axios from "axios";
function Thematic({ questionId }) {
  const [data, setData] = useState();
  const [tableData, setTableData] = useState();
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
    const generateTableData = async () => {
      try {
        if (data) {
          const response = await axios.post(
            "http://localhost:8000/get_topics",
            { texts: data }
          );
          setTableData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    generateTableData();
  }, [data]);
  return (
    <div className="pt-10 px-5">
      {tableData && (
        <div className="overflow-x-auto">
            <h1 className="text-center font-semibold text-lg">Topic Modeling</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Topic Number</th>
                <th>Topic Words</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((topics, index) => {
                return (
                  <tr className="hover">
                    <th>{index + 1}</th>
                    <td>
                    {topics.map((topicWord, index) => {
                      return `${topicWord},`;
                    })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Thematic;
