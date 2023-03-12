import React from "react";

// components

import TableComponent from "components/Cards/TableComponent.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables({TableData}) {
  return (
    <>
      <div className="flex flex-wrap">
        {" "}
        <div className="text-lg">
          <p className="font-bold">Analysis: </p>
          <p>{TableData[1]}</p>
        </div>
        { TableData[0]?
        <div className="w-full mb-12 px-4 mt-4">
          <TableComponent color="dark" TableData={TableData[0]} />
        </div>
        : ""
        }
      </div>
    </>
  );
}

Tables.layout = Admin;
