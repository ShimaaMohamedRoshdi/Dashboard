

import React from 'react';
import { ordersData, ordersGrid } from '../data/dummy';

const Orders = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <h2 className="text-2xl font-semibold text-gray-800 p-6 border-b">
          Orders Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {ordersGrid.map((col) => (
                  <th
                    key={col.field}
                    className="py-3 px-6 text-left text-gray-600 font-medium uppercase border-b border-gray-200"
                  >
                    {col.headerText}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ordersData.map((order, index) => (
                <tr
                  key={order.OrderID}
                  className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <td className="py-4 px-6 text-gray-700">{order.OrderID}</td>
                  <td className="py-4 px-6 text-gray-700 font-semibold">
                    {order.CustomerName}
                  </td>
                  <td className="py-4 px-6 text-gray-700">${order.TotalAmount}</td>
                  <td className="py-4 px-6 text-gray-700">{order.OrderItems}</td>
                  <td className="py-4 px-6 text-gray-700">{order.Location}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`py-1 px-3 rounded-full text-white font-semibold`}
                      style={{ backgroundColor: order.StatusBg }}
                    >
                      {order.Status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <img
                      src={order.ProductImage}
                      alt={order.OrderItems}
                      className="w-12 h-12 rounded-lg shadow-sm"
                    />
                  </td>
                </tr>
                
              ))}
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
