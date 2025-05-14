
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Header from '../components/Header';
// import DataGrid from '../components/DataGrid'; // Replaced with DataTable

const QuotationsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const quotationsData = [
    {
      id: "01",
      title: "Steel Beams - 20 Ton",
      from: "Houston, Texas",
      to: "Atlanta, Georgia",
      deliveryTime: "2 Days",
      price: "$3,200"
    },
    {
      id: "02",
      title: "Frozen Food Shipment - 10 Ton",
      from: "Chicago, Illinois",
      to: "Orlando, Florida",
      deliveryTime: "3 Days",
      price: "$2,750"
    },
    {
      id: "03",
      title: "Construction Materials - 15 Ton",
      from: "Denver, Colorado",
      to: "Salt Lake City, Utah",
      deliveryTime: "1 Day",
      price: "$1,800"
    },
    {
      id: "04",
      title: "Electronics - 5 Ton",
      from: "Seattle, Washington",
      to: "Portland, Oregon",
      deliveryTime: "1 Day",
      price: "$1,200"
    },
  ];
  
  const columns = [
    { 
      name: "Sr.No", 
      selector: row => row.id,
      sortable: true,
    },
    { 
      name: "Title", 
      selector: row => row.title,
      sortable: true,
    },
    { 
      name: "From", 
      selector: row => row.from,
      sortable: true,
    },
    { 
      name: "To", 
      selector: row => row.to,
      sortable: true,
    },
    { 
      name: "Delivery Time", 
      selector: row => row.deliveryTime,
      sortable: true,
    },
    { 
      name: "Price", 
      selector: row => row.price,
      sortable: true,
    },
  ];
  
  const filteredData = quotationsData.filter(
    (quotation) =>
      quotation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quotation.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quotation.to.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddRequest = () => {
    console.log("Request feature button clicked. Toast functionality removed.");
  };
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Header title="List Of Quotations">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by anything"
              className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute right-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
          <button
            onClick={handleAddRequest}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Request
          </button>
        </div>
      </Header>
      
      <div className="mt-6">
        <DataTable 
          columns={columns} 
          data={filteredData}
          pagination
          highlightOnHover
          pointerOnHover
        />
      </div>
      
      {/* Removed custom pagination */}
    </div>
  );
};

export default QuotationsList;
