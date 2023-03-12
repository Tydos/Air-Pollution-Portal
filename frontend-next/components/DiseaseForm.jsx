import React from "react";
import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

const DiseaseForm = () => {
  const [output, setOutput] = useState("");
  const [guideline, setGuide] = useState(`\n AQI 0-50 (Good): No health impact is expected. Enjoy your normal outdoor activities.\n

  AQI 51-100 (Moderate): Unusually sensitive people should consider reducing prolonged or heavy exertion.
  \n
  AQI 101-150 (Unhealthy for Sensitive Groups): People with lung disease, older adults, and children are at a greater risk from exposure to ozone, whereas persons with heart and lung disease, older adults, and children are at greater risk from the presence of particles in the air.
  \n
  AQI 151-200 (Unhealthy): Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.
  \n
  AQI 201-300 (Very Unhealthy): Health warnings of emergency conditions. The entire population is more likely to be affected.
  \n
  AQI 301-500 (Hazardous): Health alert: everyone may experience more serious health effects.
  \n
  Note: AQI values above 500 are beyond the EPA's AQI range and are considered to be hazardous to health.
  \n
  Some general preventive measures you can take to reduce exposure to air pollution include:
  \n
  Staying indoors and keeping windows and doors closed, especially during high pollution episodes\n
  Using air purifiers in your home and workplace\n
  Avoiding outdoor activities during high pollution episodes\n
  Carpooling, using public transportation, or biking instead of driving\n
  Planting trees, shrubs, and grass to reduce air pollution levels\n
  Supporting policies and regulations aimed at reducing air pollution.\n`);

  const [color, setColor] = useState("dark");
  const [imageSrc, setImageSrc] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    start_year: 0,
    location: ""
  });

  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    console.log(formData);
    await axios
      .post("http://127.0.0.1:5000/get_pm25_data", {
        start_year: Number(formData.start_year),
        location: String(formData.location)
      })
      .then(function (response) {
        // console.log(response);
        // return;
        let newData = String(guideline);
        const formatted = newData.split("\n");
        setGuide(formatted)
        // console.log(formatted);
        // console.log(newData);
        // console.log(response.data);
        // return;
        setOutput(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <form onSubmit={handleSubmit} class="w-full max-w-lg mx-auto py-10">
      <div className="grid grid-cols-2">
            <div className="mr-2 mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="location"
              >
                Enter a location
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="location"
                type="text"
                placeholder="Mumbai"
                name="location"
                required
                onChange={handleChange}
                value={formData.location}
              />
            </div>

            <div className="ml-2 mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="start_year"
              >
                Enter an year
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="start_year"
                type="number"
                placeholder="2021"
                name="start_year"
                required
                onChange={handleChange}
                value={formData.start_year}
              />
            </div>
          </div>
        {imageSrc && (
          <div className="flex justify-center mt-6">
            <img src={imageSrc} alt="img" />
          </div>
        )}

        <div className="text-center mt-6">
          <button
            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-48 ease-linear transition-all duration-150"
            type="submit"
          >
            {isLoading ? (
              <ReactLoading
                type="bars"
                color="#ffffff"
                height={25}
                width={25}
              />
            ) : (
              "Submit"
            )}
          </button>
        </div>

        {output ? (
          <div
            class="mt-2 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span class="font-medium">Output:</span>
            {/* {output} */}

             <p><span> Guidelines : </span> {guideline} </p>
            {
              <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Historical Data
                 </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Value (Average PM2.5)
                </th>


              </tr>
            </thead>
            <tbody>
              {output.map((item, index) => {
    return (
      <tr key={index}>
        <td className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }>
          <span
            className={
              "font-bold " +
              +(color === "light" ? "text-blueGray-600" : "text-white")
            }
          >
            {item.date}
          </span>
          </td>

        <td className={"px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }>
        <span
            className={
              "font-bold " +
              +(color === "light" ? "text-blueGray-600" : "text-white")
            }
          >
            {item.value}
          </span>
          </td>




      </tr>
    );
  })}
              </tbody>
          </table>
        </div>
      </div>}
          </div>
        ) : (
          <div className="flex justify-center">
            <img src="https://res.cloudinary.com/sarveshp46/image/upload/v1673158646/nothing-here_w38mzj.webp" />
          </div>
        )}
      </form>
    </div>
  );
};

export default DiseaseForm;
