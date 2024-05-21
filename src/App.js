import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCloudSun,
  faLeaf,
  faGlobe,
  faUsers,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-customGreen text-white font-sans">
      <header className="bg-white">
        <div className="container mx-auto px-4 lg:px-20 flex items-center justify-between  py-4">
          <div className="flex items-center space-x-2">
            <img src="KALRO.png" alt="KADP Logo" className="h-10 w-14" />
            <div className="h-10 border-l border-gray-300 mx-2"></div>
            <div className="text-black font-bold text-lg">
              <span className="font-bold">KADP</span>
              <span className="block text-xs text-slate-600">
                KENYA AGRICULTURAL
                <br className="hidden lg:inline" /> DATA-SHARING PLATFORM
              </span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6 text-slate-600">
            <a href="#data" className="hover:underline">
              DATA
            </a>
            <a href="#organisations" className="hover:underline">
              ORGANISATIONS
            </a>
            <a href="#dashboards" className="hover:underline">
              DASHBOARDS
            </a>
            <a
              href="#register"
              className="px-6 py-2 bg-customGreen text-white rounded-full hover:bg-yellow-200"
            >
              Register
            </a>
          </nav>
          <button
            className="md:hidden text-customGreen"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center md:hidden text-green-900">
              <a
                href="#data"
                className="py-2 hover:underline w-full text-center"
              >
                DATA
              </a>
              <a
                href="#organisations"
                className="py-2 hover:underline w-full text-center"
              >
                ORGANISATIONS
              </a>
              <a
                href="#dashboards"
                className="py-2 hover:underline w-full text-center"
              >
                DASHBOARDS
              </a>
              <a
                href="#register"
                className="py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 w-full text-center"
              >
                Register
              </a>
            </div>
          )}
        </div>
      </header>
      <main className="container mx-auto px-4 lg:px-20 py-16">
        <section className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h1 className="text-3xl font-bold">
              Welcome to the Kenya Agricultural{" "}
              <br className="hidden lg:inline" /> Data Sharing Platform (KADP)
            </h1>
            <p className="mt-4 text-lg">
              Revolutionary approach to data exchange in agriculture by
              fostering collaboration between organisations and harnessing the
              power of collective data.
            </p>
            <button className="mt-6 px-16 py-3 bg-white text-green-800 font-semibold rounded-full hover:bg-yellow-200">
              Add Data
            </button>
          </div>
          <div className="mt-8 lg:mt-0 w-full md:w-3/4 lg:w-1/2 bg-white text-customGreen rounded-b-2xl p-6 pt-2 mx-auto">
            <div className="bg-slate-400 w-full">
              <h2 className="text-center text-lg font-bold text-white py-2">
                FIND DATA
              </h2>
            </div>

            <div className="flex justify-center items-center mt-4">
              <input
                type="text"
                placeholder="Search Datasets"
                className="border border-gray-300 p-2 rounded-l-2xl w-full"
              />
              <button className="bg-customGreen p-2 rounded-r-lg text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.707 22.293l-6.482-6.482A9.931 9.931 0 0020 10a10 10 0 10-10 10 9.931 9.931 0 005.811-2.225l6.482 6.482a1 1 0 001.414-1.414zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
              </button>
            </div>

            <div className="flex justify-around mt-8 text-customGreen">
              <div className="text-center">
                <h2 className="text-2xl font-bold">20,300</h2>
                <p>DATASETS</p>
              </div>
              <div className="h-10 border-l border-gray-300 mx-2"></div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">45</h2>
                <p>Counties</p>
              </div>
              <div className="h-10 border-l border-gray-300 mx-2"></div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">209</h2>
                <p>Organizations</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-customGray p-4 text-center">
        <section className="container mx-auto px-4 lg:px-20 py-8">
          <h2 className="text-center text-3xl font-bold text-black">
            CATEGORIES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {[
              { name: "Farmer Profile", icon: faUser },
              { name: "Weather", icon: faCloudSun },
              { name: "GAPS", icon: faLeaf },
              { name: "Soil", icon: faGlobe },
              { name: "DAT Cohorts", icon: faUsers },
              { name: "TIMPS", icon: faCogs },
              { name: "TIMPS", icon: faCogs },
              { name: "TIMPS", icon: faCogs },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white text-center p-4 rounded-lg shadow-md h-36 hover:bg-yellow-100 flex flex-col justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={category.icon}
                  className="text-4xl text-customGreen mb-2"
                />
                <p className="font-bold text-slate-600">{category.name}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <footer className="bg-slate-800 p-4 text-center text-white">
        <div className="container mx-auto px-4 lg:px-20 py-8">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-left">Disclaimer</p>
              <p>
                The KALRO Selector product is still under continuous
                development!
              </p>
            </div>
            <div>
              <h3 className="font-bold text-left">Explore</h3>
              <ul className="text-left">
                <li>
                  <a href="#crop-selector" className="hover:underline">
                    Crop Selector
                  </a>
                </li>
                <li>
                  <a href="#livestock-selector" className="hover:underline">
                    Livestock Selector
                  </a>
                </li>
                <li>
                  <a href="#pasture-selector" className="hover:underline">
                    Pasture Selector
                  </a>
                </li>
                <li>
                  <a href="#chat-room" className="hover:underline">
                    Chat Room
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-left">Contacts</h3>
              <address className="text-left">
                Kenya Agricultural and Livestock Research Organisation.
                <br />
                P.O. Box 57811, 00200 City Square, Nairobi, Kenya.
                <br />
                <a href="mailto:info@kalro.org" className="hover:underline">
                  info@kalro.org
                </a>
                <br />
                Phone: +254 722 206986, +254 733 707000
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
