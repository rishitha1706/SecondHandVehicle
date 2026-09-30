import { useState } from "react";
import { Link } from "react-router-dom";
import vehicles from "../data/vehicles";

function Vehicles() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [fuel, setFuel] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [sort, setSort] = useState("default");

  const filteredVehicles = vehicles
    .filter((vehicle) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        vehicle.brand.toLowerCase().includes(searchText) ||
        vehicle.model.toLowerCase().includes(searchText) ||
        vehicle.location.toLowerCase().includes(searchText);

      const matchesType =
        type === "All" || vehicle.type === type;

      const matchesFuel =
        fuel === "All" || vehicle.fuel === fuel;

      const matchesTransmission =
        transmission === "All" ||
        vehicle.transmission === transmission;

      return (
        matchesSearch &&
        matchesType &&
        matchesFuel &&
        matchesTransmission
      );
    })
    .sort((a, b) => {
      if (sort === "price-low") {
        return a.price - b.price;
      }

      if (sort === "price-high") {
        return b.price - a.price;
      }

      if (sort === "newest") {
        return b.year - a.year;
      }

      if (sort === "oldest") {
        return a.year - b.year;
      }

      if (sort === "km-low") {
        return a.kilometers - b.kilometers;
      }

      if (sort === "km-high") {
        return b.kilometers - a.kilometers;
      }

      return 0;
    });

  return (
    <div className="vehicles-page">

      {/* PAGE HEADER */}
      <section className="vehicles-header">
        <div>
          <p>EXPLORE OUR COLLECTION</p>
          <h1>Buy Used Vehicles</h1>
          <span>
            Find the right vehicle from our collection of
            quality second-hand vehicles.
          </span>
        </div>
      </section>

      {/* SEARCH + FILTER AREA */}
      <section className="vehicles-container">

        <div className="vehicle-search">
          <input
            type="text"
            placeholder="Search by brand, model or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>🔍 Search</button>
        </div>

        <div className="vehicle-content">

          {/* FILTER SIDEBAR */}
          <aside className="filter-sidebar">

            <div className="filter-title">
              <h3>Filters</h3>

              <button
                onClick={() => {
                  setSearch("");
                  setType("All");
                  setFuel("All");
                  setTransmission("All");
                  setSort("default");
                }}
              >
                Clear All
              </button>
            </div>

            {/* Vehicle Type */}
            <div className="filter-group">
              <h4>Vehicle Type</h4>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
              </select>
            </div>

            {/* Fuel */}
            <div className="filter-group">
              <h4>Fuel Type</h4>

              <select
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
              >
                <option value="All">All Fuel Types</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="CNG">CNG</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Transmission */}
            <div className="filter-group">
              <h4>Transmission</h4>

              <select
                value={transmission}
                onChange={(e) =>
                  setTransmission(e.target.value)
                }
              >
                <option value="All">All Transmissions</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </select>
            </div>

          </aside>

          {/* VEHICLE RESULTS */}
          <div className="vehicle-results">

            <div className="results-top">

              <p>
                <strong>{filteredVehicles.length}</strong>{" "}
                vehicles found
              </p>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="default">
                  Sort By
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="newest">
                  Newest Vehicles
                </option>

                <option value="oldest">
                  Oldest Vehicles
                </option>

                <option value="km-low">
                  Lowest Kilometers
                </option>

                <option value="km-high">
                  Highest Kilometers
                </option>
              </select>

            </div>

            {/* VEHICLE GRID */}
            {filteredVehicles.length > 0 ? (

              <div className="vehicles-grid">

                {filteredVehicles.map((vehicle) => (

                  <div
                    className="listing-card"
                    key={vehicle.id}
                  >

                    <div className="listing-image">

                      <img
                        src={vehicle.image}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                      />

                      <button className="listing-favorite">
                        ♡
                      </button>

                    </div>

                    <div className="listing-info">

                      <span className="listing-year">
                        {vehicle.year}
                      </span>

                      <h3>
                        {vehicle.brand} {vehicle.model}
                      </h3>

                      <p className="listing-location">
                        📍 {vehicle.location}
                      </p>

                      <div className="listing-details">
                        <span>
                          {vehicle.kilometers.toLocaleString()} km
                        </span>

                        <span>
                          {vehicle.fuel}
                        </span>

                        <span>
                          {vehicle.transmission}
                        </span>
                      </div>

                      <div className="listing-bottom">

                        <strong>
                          ₹{vehicle.price.toLocaleString("en-IN")}
                        </strong>

                        <Link
                          to={`/vehicles/${vehicle.id}`}
                        >
                          View Details
                        </Link>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              <div className="no-results">
                <div>🚗</div>

                <h2>No vehicles found</h2>

                <p>
                  Try changing your search filters.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setType("All");
                    setFuel("All");
                    setTransmission("All");
                  }}
                >
                  Clear Filters
                </button>
              </div>

            )}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Vehicles;