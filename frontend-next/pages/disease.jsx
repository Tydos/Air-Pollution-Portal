import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";
import UploadImage from "components/Cards/UploadImage";
import DiseaseForm from "components/DiseaseForm";

export default function Disease() {
  return (
    <Admin
      title="Historical Data"
      headerText="See historical data of pollution level"
    >
      <div className="flex flex-wrap mt-4 justify-center">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <DiseaseForm />
        </div>
      </div>
    </Admin>
  );
}
