
import React from 'react';
import { cn } from "@/lib/utils";

const DataGrid = ({ columns, data, className }) => {
  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            {columns.map((column) => (
              <th 
                key={column.accessor} 
                className="p-3 text-left font-medium"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                {columns.map((column) => (
                  <td 
                    key={`${rowIndex}-${column.accessor}`}
                    className="p-3"
                  >
                    {column.cell ? column.cell(row) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td 
                colSpan={columns.length} 
                className="p-3 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
