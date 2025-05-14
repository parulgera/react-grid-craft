
import React, { useState } from 'react';
import DataGrid from '../components/DataGrid';
import Header from '../components/Header';
import Badge from '../components/Badge';
// import { useToast } from "@/hooks/use-toast"; // Removed

const TruckersList = () => {
  // const { toast } = useToast(); // Removed
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for truckers
  const truckersData = [
    {
      id: "01",
      name: "John Smith",
      phone: "(555) 123-4567",
      location: "Dallas, TX",
      truckType: "Heavy-duty",
      availability: "Available"
    },
    {
      id: "02",
      name: "Sarah Johnson",
      phone: "(555) 234-5678",
      location: "Phoenix, AZ",
      truckType: "Refrigerator",
      availability: "On delivery"
    },
    {
      id: "03",
      name: "Michael Brown",
      phone: "(555) 345-6789",
      location: "Chicago, IL",
      truckType: "Flatbed",
      availability: "Available"
    },
    {
      id: "04",
      name: "Jennifer Davis",
      phone: "(555) 456-7890",
      location: "Los Angeles, CA",
      truckType: "Container",
      availability: "Available"
    },
  ];
  
  const columns = [
    { 
      header: "ID", 
      accessor: "id" 
    },
    { 
      header: "Name", 
      accessor: "name" 
    },
    { 
      header: "Phone", 
      accessor: "phone" 
    },
    { 
      header: "Location", 
      accessor: "location" 
    },
    { 
      header: "Truck Type", 
      accessor: "truckType" 
    },
    { 
      header: "Availability", 
      accessor: "availability",
      cell: (row) => {
        const variant = row.availability === "Available" ? "success" : "warning";
        return <Badge variant={variant}>{row.availability}</Badge>;
      }
    },
  ];
  
  const filteredData = truckersData.filter(
    (trucker) =>
      trucker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trucker.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trucker.truckType.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddTrucker = () => {
    // toast({ // Removed
    //   title: "Add Trucker",
    //   description: "This feature is not implemented yet.",
    // });
    console.log("Add trucker button clicked. Toast functionality removed.");
  };
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Header title="Trucker List">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search truckers"
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
            onClick={handleAddTrucker}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Add Trucker
          </button>
        </div>
      </Header>
      
      <div className="mt-6">
        <DataGrid 
          columns={columns} 
          data={filteredData} 
        />
      </div>
    </div>
  );
};

export default TruckersList;
