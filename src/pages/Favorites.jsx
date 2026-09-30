import { useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("favoriteVehicles")) || []
    );
  });

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (vehicle) => vehicle.id !== id
    );

    localStorage.setItem(
      "favoriteVehicles",
      JSON.stringify(updatedFavorites)
    );

    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-page">

      {/* Header */}
      <section className="favorites-header">
        <div>
          <p>YOUR SAVED VEHICLES</p>

          <h1>My Favorites</h1>

          <span>
            Vehicles you have saved for later.
          </span>
        </div>
      </section>

      {/* Content */}
      <section className="favorites-container">

        {favorites.length === 0 ? (
          <div className="favorites-empty">

            <div className="empty-heart">
              ♡
            </div>

            <h2>No Favorite Vehicles</h2>

            <p>
              You haven't added any vehicles to your
              favorites yet.
            </p>

            <Link to="/vehicles">
              Browse Vehicles
            </Link>

          </div>
        ) : (
          <>
            <div className="favorites-top">

              <h2>
                {favorites.length}{" "}
                {favorites.length === 1
                  ? "Vehicle"
                  : "Vehicles"}{" "}
                Saved
              </h2>

              <Link to="/vehicles">
                + Browse More Vehicles
              </Link>

            </div>

            <div className="favorites-grid">

              {favorites.map((vehicle) => (
                <div
                  className="favorite-card"
                  key={vehicle.id}
                >

                  {/* Image */}
                  <div className="favorite-image">

                    <img
                      src={vehicle.image}
                      alt={`${vehicle.brand} ${vehicle.model}`}
                    />

                    <button
                      className="remove-favorite"
                      onClick={() =>
                        removeFavorite(vehicle.id)
                      }
                      title="Remove from Favorites"
                    >
                      ♥
                    </button>

                  </div>

                  {/* Information */}
                  <div className="favorite-info">

                    <span className="favorite-year">
                      {vehicle.year}
                    </span>

                    <h3>
                      {vehicle.brand} {vehicle.model}
                    </h3>

                    <p className="favorite-location">
                      📍 {vehicle.location}
                    </p>

                    <div className="favorite-details">

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

                    <div className="favorite-bottom">

                      <strong>
                        ₹{vehicle.price.toLocaleString("en-IN")}
                      </strong>

                      <Link
                        to={`/vehicles/${vehicle.id}`}
                      >
                        View Details
                      </Link>

                    </div>

                    <button
                      className="remove-favorite-btn"
                      onClick={() =>
                        removeFavorite(vehicle.id)
                      }
                    >
                      Remove from Favorites
                    </button>

                  </div>

                </div>
              ))}

            </div>
          </>
        )}

      </section>

    </div>
  );
}

export default Favorites;