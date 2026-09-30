import { useState } from "react";
import { Link } from "react-router-dom";

function Compare() {
  const [compareVehicles, setCompareVehicles] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("compareVehicles")) || []
    );
  });

  const removeVehicle = (id) => {
    const updatedVehicles = compareVehicles.filter(
      (vehicle) => vehicle.id !== id
    );

    localStorage.setItem(
      "compareVehicles",
      JSON.stringify(updatedVehicles)
    );

    setCompareVehicles(updatedVehicles);
  };

  const clearAll = () => {
    localStorage.removeItem("compareVehicles");
    setCompareVehicles([]);
  };

  return (
    <div className="compare-page">

      {/* Header */}
      <section className="compare-header">
        <p>COMPARE YOUR OPTIONS</p>

        <h1>Compare Vehicles</h1>

        <span>
          Compare vehicles side-by-side and choose the right one.
        </span>
      </section>

      <section className="compare-container">

        {compareVehicles.length === 0 ? (
          /* Empty State */
          <div className="compare-empty">

            <div className="compare-icon">
              ⚖️
            </div>

            <h2>No Vehicles to Compare</h2>

            <p>
              Add vehicles to compare their price,
              specifications and features.
            </p>

            <Link to="/vehicles">
              Browse Vehicles
            </Link>

          </div>
        ) : (
          <>
            {/* Top Bar */}
            <div className="compare-top">

              <div>
                <h2>
                  {compareVehicles.length}{" "}
                  {compareVehicles.length === 1
                    ? "Vehicle"
                    : "Vehicles"}{" "}
                  Selected
                </h2>

                <p>
                  Compare the selected vehicles below.
                </p>
              </div>

              <button
                className="clear-compare"
                onClick={clearAll}
              >
                Clear All
              </button>

            </div>

            {/* Comparison */}
            <div className="compare-table-wrapper">

              <table className="compare-table">

                <thead>
                  <tr>
                    <th className="compare-label">
                      Vehicle
                    </th>

                    {compareVehicles.map((vehicle) => (
                      <th key={vehicle.id}>
                        <div className="compare-vehicle">

                          <div className="compare-image">
                            <img
                              src={vehicle.image}
                              alt={`${vehicle.brand} ${vehicle.model}`}
                            />
                          </div>

                          <h3>
                            {vehicle.brand} {vehicle.model}
                          </h3>

                          <span>
                            {vehicle.variant}
                          </span>

                          <button
                            onClick={() =>
                              removeVehicle(vehicle.id)
                            }
                          >
                            Remove
                          </button>

                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Price</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        <strong className="compare-price">
                          ₹{vehicle.price.toLocaleString("en-IN")}
                        </strong>
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Year</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        {vehicle.year}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Kilometers</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        {vehicle.kilometers.toLocaleString()} km
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Fuel</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        {vehicle.fuel}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Transmission</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        {vehicle.transmission}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Owners</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        {vehicle.owners}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Condition</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        {vehicle.condition}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Color</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        {vehicle.color}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Location</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        📍 {vehicle.location}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Features</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        <div className="compare-features">
                          {vehicle.features.map(
                            (feature, index) => (
                              <span key={index}>
                                ✓ {feature}
                              </span>
                            )
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Details</td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id}>
                        <Link
                          className="compare-details"
                          to={`/vehicles/${vehicle.id}`}
                        >
                          View Details
                        </Link>
                      </td>
                    ))}

                  </tr>

                </tbody>

              </table>

            </div>

          </>
        )}

      </section>

    </div>
  );
}

export default Compare;