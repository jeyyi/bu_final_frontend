import React from "react";

function Table() {
  return (
    <div className="overflow-auto mt-10 h-96">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Date</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover cursor-pointer">
            <th>1</th>
            <td>100414</td>
            <td>1-03-2023</td>
            <td>
              <div className="badge bg-blue-500 px-8 py-4">Male</div>
            </td>
          </tr>
          {/* row 2 */}
          <tr className="hover cursor-pointer">
            <th>2</th>
            <td>100415</td>
            <td>1-04-2023</td>
            <td>
              <div className="badge bg-blue-500 px-8 py-4">Male</div>
            </td>
          </tr>
          {/* row 3 */}
          <tr className="hover cursor-pointer">
            <th>3</th>
            <td>100418</td>
            <td>1-04-2023</td>
            <td>
              <div className="badge bg-pink-500 px-8 py-4">Female</div>
            </td>
          </tr>
          {/* row 4 */}
          <tr className="hover cursor-pointer">
            <th>4</th>
            <td>100420</td>
            <td>1-03-2023</td>
            <td>
              <div className="badge bg-blue-500 px-8 py-4">Male</div>
            </td>
          </tr>
          {/* row 5 */}
          <tr className="hover cursor-pointer">
            <th>5</th>
            <td>100487</td>
            <td>1-04-2023</td>
            <td>
            <div className="badge bg-pink-500 px-8 py-4">Female</div>
            </td>
          </tr>
          {/* row 6 */}
          <tr className="hover cursor-pointer">
            <th>6</th>
            <td>100430</td>
            <td>1-04-2023</td>
            <td>
            <div className="badge bg-pink-500 px-8 py-4">Female</div>
            </td>
          </tr>
          <tr className="hover cursor-pointer">
            <th>1</th>
            <td>100414</td>
            <td>1-03-2023</td>
            <td>
              <div className="badge bg-blue-500 px-8 py-4">Male</div>
            </td>
          </tr>
          {/* row 2 */}
          <tr className="hover cursor-pointer">
            <th>2</th>
            <td>100415</td>
            <td>1-04-2023</td>
            <td>
              <div className="badge bg-blue-500 px-8 py-4">Male</div>
            </td>
          </tr>
          {/* row 3 */}
          <tr className="hover cursor-pointer">
            <th>3</th>
            <td>100418</td>
            <td>1-04-2023</td>
            <td>
              <div className="badge bg-pink-500 px-8 py-4">Female</div>
            </td>
          </tr>
          {/* row 4 */}
          <tr className="hover cursor-pointer">
            <th>4</th>
            <td>100420</td>
            <td>1-03-2023</td>
            <td>
              <div className="badge bg-blue-500 px-8 py-4">Male</div>
            </td>
          </tr>
          {/* row 5 */}
          <tr className="hover cursor-pointer">
            <th>5</th>
            <td>100487</td>
            <td>1-04-2023</td>
            <td>
            <div className="badge bg-pink-500 px-8 py-4">Female</div>
            </td>
          </tr>
          {/* row 6 */}
          <tr className="hover cursor-pointer">
            <th>6</th>
            <td>100430</td>
            <td>1-04-2023</td>
            <td>
            <div className="badge bg-pink-500 px-8 py-4">Female</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
