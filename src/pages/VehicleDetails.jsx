import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import vehicles from "../data/vehicles";

function VehicleDetails() {
  const { id } = useParams();

  const vehicle = vehicles.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(
    vehicle?.image || ""
  );

  // =========================
  // FAVORITE STATE
  // =========================

  const [isFavorite, setIsFavorite] = useState(() => {
    const savedFavorites =
      JSON.parse(
        localStorage.getItem("favoriteVehicles")
      ) || [];

    return savedFavorites.some(
      (item) => item.id === Number(id)
    );
  });

  // =========================
  // COMPARE STATE
  // =========================

  const [isCompared, setIsCompared] = useState(() => {
    const savedCompare =
      JSON.parse(
        localStorage.getItem("compareVehicles")
      ) || [];

    return savedCompare.some(
      (item) => item.id === Number(id)
    );
  });

  // =========================
  // TOGGLE FAVORITE
  // =========================

  const toggleFavorite = () => {
    const savedFavorites =
      JSON.parse(
        localStorage.getItem("favoriteVehicles")
      ) || [];

    if (isFavorite) {
      const updatedFavorites =
        savedFavorites.filter(
          (item) => item.id !== vehicle.id
        );

      localStorage.setItem(
        "favoriteVehicles",
        JSON.stringify(updatedFavorites)
      );

      setIsFavorite(false);
    } else {
      const updatedFavorites = [
        ...savedFavorites,
        vehicle,
      ];

      localStorage.setItem(
        "favoriteVehicles",
        JSON.stringify(updatedFavorites)
      );

      setIsFavorite(true);
    }
  };

  // =========================
  // TOGGLE COMPARE
  // =========================

  const toggleCompare = () => {
    const savedCompare =
      JSON.parse(
        localStorage.getItem("compareVehicles")
      ) || [];

    if (isCompared) {
      const updatedCompare =
        savedCompare.filter(
          (item) => item.id !== vehicle.id
        );

      localStorage.setItem(
        "compareVehicles",
        JSON.stringify(updatedCompare)
      );

      setIsCompared(false);
    } else {
      if (savedCompare.length >= 4) {
        alert(
          "You can compare up to 4 vehicles."
        );
        return;
      }

      const updatedCompare = [
        ...savedCompare,
        vehicle,
      ];

      localStorage.setItem(
        "compareVehicles",
        JSON.stringify(updatedCompare)
      );

      setIsCompared(true);
    }
  };

  // =========================
  // SHARE VEHICLE
  // =========================

  const shareVehicle = async () => {
    const vehicleUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `${vehicle.brand} ${vehicle.model}`,
          text: `Check out this ${vehicle.brand} ${vehicle.model} on AutoMart.`,
          url: vehicleUrl,
        });
      } else {
        await navigator.clipboard.writeText(vehicleUrl);
        alert("Vehicle link copied to clipboard!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        try {
          await navigator.clipboard.writeText(vehicleUrl);
          alert("Vehicle link copied to clipboard!");
        } catch {
          alert("Unable to share the vehicle link.");
        }
      }
    }
  };

  // =========================
  // VEHICLE NOT FOUND
  // =========================

  if (!vehicle) {
    return (
      <div className="details-not-found">

        <h2>
          Vehicle Not Found
        </h2>

        <p>
          The vehicle you are looking for does not
          exist.
        </p>

        <Link to="/vehicles">
          ← Back to Vehicles
        </Link>

      </div>
    );
  }

  return (
    <div className="vehicle-details-page">

      {/* =========================
          BREADCRUMB
      ========================= */}

      <div className="details-container">

        <div className="breadcrumb">

          <Link to="/">
            Home
          </Link>

          <span>›</span>

          <Link to="/vehicles">
            Buy Vehicle
          </Link>

          <span>›</span>

          <span>
            {vehicle.brand} {vehicle.model}
          </span>

        </div>

      </div>

      {/* =========================
          MAIN DETAILS
      ========================= */}

      <section className="details-container details-main">

        {/* =========================
            GALLERY
        ========================= */}

        <div className="details-gallery">

          <div className="main-vehicle-image">

            <img
              src={selectedImage}
              alt={`${vehicle.brand} ${vehicle.model}`}
            />

            {/* FAVORITE */}

            <button
              className={`details-favorite ${
                isFavorite
                  ? "favorite-active"
                  : ""
              }`}
              onClick={toggleFavorite}
              title={
                isFavorite
                  ? "Remove from Favorites"
                  : "Add to Favorites"
              }
            >
              {isFavorite ? "♥" : "♡"}
            </button>

          </div>

          {/* =========================
              THUMBNAILS
          ========================= */}

          <div className="image-thumbnails">

            <button
              className="thumbnail active"
              onClick={() =>
                setSelectedImage(vehicle.image)
              }
            >

              <img
                src={vehicle.image}
                alt={`${vehicle.brand} ${vehicle.model}`}
              />

            </button>

            <button
              className="thumbnail"
              onClick={() =>
                setSelectedImage(vehicle.image)
              }
            >

              <img
                src={vehicle.image}
                alt={`${vehicle.brand} ${vehicle.model}`}
              />

            </button>

            <button
              className="thumbnail"
              onClick={() =>
                setSelectedImage(vehicle.image)
              }
            >

              <img
                src={vehicle.image}
                alt={`${vehicle.brand} ${vehicle.model}`}
              />

            </button>

          </div>

        </div>

        {/* =========================
            VEHICLE INFORMATION
        ========================= */}

        <div className="details-info">

          <div className="details-top-line">

            <span className="details-year">
              {vehicle.year}
            </span>

            <span className="details-condition">
              {vehicle.condition}
            </span>

          </div>

          <h1>
            {vehicle.brand} {vehicle.model}
          </h1>

          <p className="details-variant">
            {vehicle.variant}
          </p>

          <div className="details-price">
            ₹{vehicle.price.toLocaleString("en-IN")}
          </div>

          <p className="details-location">
            📍 {vehicle.location}
          </p>

          {/* =========================
              SPECIFICATIONS
          ========================= */}

          <div className="specifications">

            <div className="spec-item">
              <span>
                Year
              </span>

              <strong>
                {vehicle.year}
              </strong>
            </div>

            <div className="spec-item">
              <span>
                Kilometers
              </span>

              <strong>
                {vehicle.kilometers.toLocaleString()} km
              </strong>
            </div>

            <div className="spec-item">
              <span>
                Fuel
              </span>

              <strong>
                {vehicle.fuel}
              </strong>
            </div>

            <div className="spec-item">
              <span>
                Transmission
              </span>

              <strong>
                {vehicle.transmission}
              </strong>
            </div>

            <div className="spec-item">
              <span>
                Owners
              </span>

              <strong>
                {vehicle.owners}
              </strong>
            </div>

            <div className="spec-item">
              <span>
                Color
              </span>

              <strong>
                {vehicle.color}
              </strong>
            </div>

            <div className="spec-item">
              <span>
                Registration
              </span>

              <strong>
                {vehicle.registrationYear}
              </strong>
            </div>

            <div className="spec-item">
              <span>
                Condition
              </span>

              <strong>
                {vehicle.condition}
              </strong>
            </div>

          </div>

          {/* =========================
              ACTION BUTTONS
          ========================= */}

          <div className="details-actions">

            <Link
              to="/contact"
              state={{ vehicle }}
              className="contact-seller-btn"
            >
              Contact Seller
            </Link>

            <button
              className={`compare-btn ${
                isCompared
                  ? "compare-active"
                  : ""
              }`}
              onClick={toggleCompare}
            >
              {isCompared
                ? "✓ Added to Compare"
                : "⚖ Add to Compare"}
            </button>

            <button
              className="share-btn"
              onClick={shareVehicle}
            >
              🔗 Share
            </button>

          </div>

        </div>

      </section>

      {/* =========================
          DESCRIPTION + FEATURES
      ========================= */}

      <section className="details-container details-lower">

        <div className="details-description">

          <h2>
            Vehicle Description
          </h2>

          <p>
            {vehicle.description}
          </p>

          <h2>
            Features
          </h2>

          <div className="features-list">

            {vehicle.features.map(
              (feature, index) => (
                <span key={index}>
                  ✓ {feature}
                </span>
              )
            )}

          </div>

        </div>

        {/* =========================
            SELLER CARD
        ========================= */}

        <div className="seller-card-details">

          <h2>
            Seller Information
          </h2>

          <div className="seller-profile">

            <div className="seller-avatar">
              👤
            </div>

            <div>

              <h3>
                {vehicle.seller.name}
              </h3>

              <p>
                Verified Seller
              </p>

            </div>

          </div>

          <div className="seller-contact">

            <p>
              📞 {vehicle.seller.phone}
            </p>

            <p>
              ✉️ {vehicle.seller.email}
            </p>

          </div>

          {/* CONTACT SELLER */}

          <Link
            to="/contact"
            state={{ vehicle }}
            className="contact-seller-btn full"
          >
            Contact Seller
          </Link>

        </div>

      </section>

      {/* =========================
          BACK BUTTON
      ========================= */}

      <div className="details-container details-back">

        <Link to="/vehicles">
          ← Back to All Vehicles
        </Link>

      </div>

    </div>
  );
}

export default VehicleDetails;