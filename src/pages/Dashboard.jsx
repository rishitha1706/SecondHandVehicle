import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const getUser = () => {
    try {
      return JSON.parse(
        localStorage.getItem("userData") || "null"
      );
    } catch {
      return null;
    }
  };

  const getArray = (key) => {
    try {
      return JSON.parse(
        localStorage.getItem(key) || "[]"
      );
    } catch {
      return [];
    }
  };

  const savedUser = getUser();

  const userName =
    savedUser?.fullName ||
    savedUser?.fullname ||
    savedUser?.name ||
    "User";

  const [favorites] = useState(
    getArray("favoriteVehicles")
  );

  const [compareVehicles] = useState(
    getArray("compareVehicles")
  );

  const [sellerListings] = useState(
    getArray("sellerListings")
  );

  const [enquiries] = useState(
    getArray("enquiries")
  );

  const [activeTab, setActiveTab] =
    useState("overview");

  const [editForm, setEditForm] = useState({
    fullName:
      savedUser?.fullName ||
      savedUser?.fullname ||
      savedUser?.name ||
      "",
    email: savedUser?.email || "",
    phone: savedUser?.phone || "",
    city: savedUser?.city || "",
  });

  const [profileMessage, setProfileMessage] =
    useState("");

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  /* =========================
     EDIT PROFILE INPUT
  ========================= */

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setEditForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setProfileMessage("");
  };

  /* =========================
     SAVE PROFILE
  ========================= */

  const handleProfileSave = (e) => {
    e.preventDefault();

    const phoneRegex = /^[6-9][0-9]{9}$/;

    if (!editForm.fullName.trim()) {
      setProfileMessage(
        "Please enter your full name."
      );
      return;
    }

    if (!editForm.email.trim()) {
      setProfileMessage(
        "Please enter your email."
      );
      return;
    }

    if (
      editForm.phone &&
      !phoneRegex.test(editForm.phone)
    ) {
      setProfileMessage(
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    const updatedUser = {
      ...savedUser,
      fullName: editForm.fullName,
      name: editForm.fullName,
      email: editForm.email,
      phone: editForm.phone,
      city: editForm.city,
    };

    localStorage.setItem(
      "userData",
      JSON.stringify(updatedUser)
    );

    setProfileMessage(
      "Profile updated successfully!"
    );
  };

  return (
    <div className="dashboard-page">

      {/* =========================
          DASHBOARD HEADER
      ========================= */}

      <div className="dashboard-header">

        <div>
          <h1>My Dashboard</h1>

          <p>
            Welcome back,{" "}
            <strong>{userName}</strong>
          </p>
        </div>

        <button
          className="dashboard-logout"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <div className="dashboard-container">

        {/* =========================
            SIDEBAR
        ========================= */}

        <aside className="dashboard-sidebar">

          <div className="dashboard-profile">

            <div className="profile-avatar">
              {userName
                ? userName
                    .charAt(0)
                    .toUpperCase()
                : "U"}
            </div>

            <h3>{userName}</h3>

            <p>
              {savedUser?.email ||
                "user@email.com"}
            </p>

          </div>

          <nav className="dashboard-menu">

            <button
              className={
                activeTab === "overview"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("overview")
              }
            >
              Overview
            </button>

            <button
              className={
                activeTab === "listings"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("listings")
              }
            >
              My Listings
            </button>

            <button
              className={
                activeTab === "favorites"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("favorites")
              }
            >
              Favorites
            </button>

            <button
              className={
                activeTab === "compare"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("compare")
              }
            >
              Compared Vehicles
            </button>

            <button
              className={
                activeTab === "enquiries"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("enquiries")
              }
            >
              Enquiries
            </button>

            <button
              className={
                activeTab === "profile"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("profile")
              }
            >
              My Profile
            </button>

            <button
              className={
                activeTab === "edit-profile"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("edit-profile")
              }
            >
              Edit Profile
            </button>

          </nav>

          <Link
            to="/sell"
            className="dashboard-sell-btn"
          >
            + Sell a Vehicle
          </Link>

        </aside>

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <main className="dashboard-main">

          {/* =========================
              OVERVIEW
          ========================= */}

          {activeTab === "overview" && (
            <>

              <div className="dashboard-welcome">

                <h2>
                  Dashboard Overview
                </h2>

                <p>
                  Manage your vehicles,
                  favorites and account
                  from one place.
                </p>

              </div>

              {/* Statistics */}

              <div className="dashboard-stats">

                <div className="dashboard-stat-card">

                  <div className="stat-icon">
                    V
                  </div>

                  <div>
                    <h3>
                      {sellerListings.length}
                    </h3>

                    <p>My Listings</p>
                  </div>

                </div>

                <div className="dashboard-stat-card">

                  <div className="stat-icon">
                    F
                  </div>

                  <div>
                    <h3>
                      {favorites.length}
                    </h3>

                    <p>Favorites</p>
                  </div>

                </div>

                <div className="dashboard-stat-card">

                  <div className="stat-icon">
                    C
                  </div>

                  <div>
                    <h3>
                      {compareVehicles.length}
                    </h3>

                    <p>Compared Vehicles</p>
                  </div>

                </div>

                <div className="dashboard-stat-card">

                  <div className="stat-icon">
                    E
                  </div>

                  <div>
                    <h3>
                      {enquiries.length}
                    </h3>

                    <p>Enquiries</p>
                  </div>

                </div>

              </div>

              {/* Quick Actions */}

              <div className="dashboard-section">

                <h2>Quick Actions</h2>

                <div className="dashboard-actions">

                  <Link
                    to="/vehicles"
                    className="dashboard-action-card"
                  >
                    <span>Search</span>
                    <h3>
                      Browse Vehicles
                    </h3>
                    <p>
                      Find your next vehicle
                    </p>
                  </Link>

                  <Link
                    to="/sell"
                    className="dashboard-action-card"
                  >
                    <span>Sell</span>
                    <h3>
                      Sell Vehicle
                    </h3>
                    <p>
                      List your vehicle
                      for sale
                    </p>
                  </Link>

                  <Link
                    to="/favorites"
                    className="dashboard-action-card"
                  >
                    <span>Saved</span>
                    <h3>
                      My Favorites
                    </h3>
                    <p>
                      View saved vehicles
                    </p>
                  </Link>

                  <Link
                    to="/compare"
                    className="dashboard-action-card"
                  >
                    <span>Compare</span>
                    <h3>
                      Compare Vehicles
                    </h3>
                    <p>
                      Compare selected
                      vehicles
                    </p>
                  </Link>

                </div>

              </div>

              {/* Account Information */}

              <div className="dashboard-section">

                <h2>
                  Account Information
                </h2>

                <div className="dashboard-info-card">

                  <div className="info-row">

                    <span>Name</span>

                    <strong>
                      {userName ||
                        "Not available"}
                    </strong>

                  </div>

                  <div className="info-row">

                    <span>Email</span>

                    <strong>
                      {savedUser?.email ||
                        "Not available"}
                    </strong>

                  </div>

                  <div className="info-row">

                    <span>Phone</span>

                    <strong>
                      {savedUser?.phone ||
                        "Not available"}
                    </strong>

                  </div>

                  <div className="info-row">

                    <span>City</span>

                    <strong>
                      {savedUser?.city ||
                        "Not available"}
                    </strong>

                  </div>

                </div>

              </div>

            </>
          )}

          {/* =========================
              MY LISTINGS
          ========================= */}

          {activeTab === "listings" && (

            <div className="dashboard-section">

              <div className="dashboard-section-header">

                <div>
                  <h2>My Listings</h2>

                  <p>
                    Vehicles you have
                    listed for sale.
                  </p>
                </div>

                <Link
                  to="/sell"
                  className="dashboard-primary-btn"
                >
                  + Add Listing
                </Link>

              </div>

              {sellerListings.length === 0 ? (

                <div className="dashboard-empty">

                  <div>Vehicles</div>

                  <h3>
                    No listings yet
                  </h3>

                  <p>
                    You haven't listed
                    any vehicles for sale.
                  </p>

                  <Link to="/sell">
                    Sell Your Vehicle
                  </Link>

                </div>

              ) : (

                <div className="dashboard-listings">

                  {sellerListings.map(
                    (vehicle) => (

                      <div
                        className="dashboard-listing-card"
                        key={vehicle.id}
                      >

                        <div className="listing-placeholder">

                          {vehicle.images &&
                          vehicle.images.length > 0 ? (

                            <img
                              src={
                                vehicle.images[0]
                              }
                              alt={`${vehicle.brand} ${vehicle.model}`}
                            />

                          ) : (
                            "Vehicle"
                          )}

                        </div>

                        <div className="listing-details">

                          <h3>
                            {vehicle.brand}{" "}
                            {vehicle.model}
                          </h3>

                          <p>
                            {vehicle.year}{" "}
                            •{" "}
                            {vehicle.kilometers} km
                          </p>

                          <strong>
                            ₹{" "}
                            {Number(
                              vehicle.price || 0
                            ).toLocaleString(
                              "en-IN"
                            )}
                          </strong>

                          <span>
                            {vehicle.location}
                          </span>

                        </div>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>

          )}

          {/* =========================
              FAVORITES
          ========================= */}

          {activeTab === "favorites" && (

            <div className="dashboard-section">

              <div className="dashboard-section-header">

                <div>
                  <h2>
                    My Favorites
                  </h2>

                  <p>
                    Vehicles you have saved.
                  </p>
                </div>

                <Link
                  to="/favorites"
                  className="dashboard-primary-btn"
                >
                  View All
                </Link>

              </div>

              {favorites.length === 0 ? (

                <div className="dashboard-empty">

                  <div>Favorites</div>

                  <h3>
                    No favorite vehicles
                  </h3>

                  <p>
                    Save vehicles you
                    like to see them here.
                  </p>

                  <Link to="/vehicles">
                    Browse Vehicles
                  </Link>

                </div>

              ) : (

                <div className="dashboard-mini-grid">

                  {favorites
                    .slice(0, 4)
                    .map((vehicle) => (

                      <Link
                        to={`/vehicles/${vehicle.id}`}
                        className="dashboard-mini-card"
                        key={vehicle.id}
                      >

                        <div className="mini-image">

                          {vehicle.image ? (

                            <img
                              src={vehicle.image}
                              alt={`${vehicle.brand} ${vehicle.model}`}
                            />

                          ) : (
                            "Vehicle"
                          )}

                        </div>

                        <h3>
                          {vehicle.brand}{" "}
                          {vehicle.model}
                        </h3>

                        <p>
                          {vehicle.year}{" "}
                          •{" "}
                          {vehicle.location}
                        </p>

                        <strong>
                          ₹{" "}
                          {Number(
                            vehicle.price || 0
                          ).toLocaleString(
                            "en-IN"
                          )}
                        </strong>

                      </Link>

                    ))}

                </div>

              )}

            </div>

          )}

          {/* =========================
              COMPARE
          ========================= */}

          {activeTab === "compare" && (

            <div className="dashboard-section">

              <div className="dashboard-section-header">

                <div>

                  <h2>
                    Compared Vehicles
                  </h2>

                  <p>
                    Vehicles you selected
                    for comparison.
                  </p>

                </div>

                <Link
                  to="/compare"
                  className="dashboard-primary-btn"
                >
                  Open Compare
                </Link>

              </div>

              {compareVehicles.length === 0 ? (

                <div className="dashboard-empty">

                  <div>Compare</div>

                  <h3>
                    No vehicles to compare
                  </h3>

                  <p>
                    Add vehicles to compare
                    them side by side.
                  </p>

                  <Link to="/vehicles">
                    Browse Vehicles
                  </Link>

                </div>

              ) : (

                <div className="compare-summary">

                  {compareVehicles.map(
                    (vehicle) => (

                      <div
                        className="compare-summary-card"
                        key={vehicle.id}
                      >

                        <div>
                          Vehicle
                        </div>

                        <h3>
                          {vehicle.brand}{" "}
                          {vehicle.model}
                        </h3>

                        <p>
                          ₹{" "}
                          {Number(
                            vehicle.price || 0
                          ).toLocaleString(
                            "en-IN"
                          )}
                        </p>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>

          )}

          {/* =========================
              ENQUIRIES
          ========================= */}

          {activeTab === "enquiries" && (

            <div className="dashboard-section">

              <div className="dashboard-section-header">

                <div>

                  <h2>
                    My Enquiries
                  </h2>

                  <p>
                    Enquiries and messages
                    related to vehicles.
                  </p>

                </div>

              </div>

              {enquiries.length === 0 ? (

                <div className="dashboard-empty">

                  <div>Enquiries</div>

                  <h3>
                    No enquiries yet
                  </h3>

                  <p>
                    Your enquiries will
                    appear here after you
                    contact a seller.
                  </p>

                  <Link to="/vehicles">
                    Browse Vehicles
                  </Link>

                </div>

              ) : (

                <div className="dashboard-enquiries">

                  {enquiries.map(
                    (enquiry, index) => (

                      <div
                        className="dashboard-enquiry-card"
                        key={
                          enquiry.id ||
                          index
                        }
                      >

                        <div className="enquiry-header">

                          <div>

                            <h3>
                              {enquiry.vehicleName ||
                                enquiry.vehicle?.brand +
                                  " " +
                                  enquiry.vehicle?.model ||
                                "Vehicle Enquiry"}
                            </h3>

                            <p>
                              {enquiry.date ||
                                enquiry.createdAt ||
                                "Recent enquiry"}
                            </p>

                          </div>

                        </div>

                        <div className="enquiry-details">

                          <p>
                            <strong>
                              Name:
                            </strong>{" "}
                            {enquiry.name ||
                              userName}
                          </p>

                          <p>
                            <strong>
                              Email:
                            </strong>{" "}
                            {enquiry.email ||
                              "Not available"}
                          </p>

                          <p>
                            <strong>
                              Phone:
                            </strong>{" "}
                            {enquiry.phone ||
                              "Not available"}
                          </p>

                          <p>
                            <strong>
                              Message:
                            </strong>{" "}
                            {enquiry.message ||
                              "No message"}
                          </p>

                        </div>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>

          )}

          {/* =========================
              MY PROFILE
          ========================= */}

          {activeTab === "profile" && (

            <div className="dashboard-section">

              <h2>
                My Profile
              </h2>

              <div className="dashboard-profile-card">

                <div className="large-profile-avatar">

                  {userName
                    ? userName
                        .charAt(0)
                        .toUpperCase()
                    : "U"}

                </div>

                <div className="profile-info">

                  <h3>
                    {userName}
                  </h3>

                  <p>
                    Email:{" "}
                    {savedUser?.email ||
                      "Not available"}
                  </p>

                  <p>
                    Phone:{" "}
                    {savedUser?.phone ||
                      "Not available"}
                  </p>

                  <p>
                    City:{" "}
                    {savedUser?.city ||
                      "Not available"}
                  </p>

                </div>

              </div>

              <div className="profile-note">

                <strong>
                  Profile Information
                </strong>

                <p>
                  Your profile information
                  is stored in your browser
                  for this frontend project.
                </p>

              </div>

              <button
                className="dashboard-primary-btn"
                onClick={() =>
                  setActiveTab(
                    "edit-profile"
                  )
                }
              >
                Edit Profile
              </button>

            </div>

          )}

          {/* =========================
              EDIT PROFILE
          ========================= */}

          {activeTab === "edit-profile" && (

            <div className="dashboard-section">

              <div className="dashboard-section-header">

                <div>

                  <h2>
                    Edit Profile
                  </h2>

                  <p>
                    Update your account
                    information.
                  </p>

                </div>

              </div>

              <form
                className="dashboard-edit-form"
                onSubmit={handleProfileSave}
              >

                <div className="sell-field">

                  <label>
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={
                      editForm.fullName
                    }
                    onChange={
                      handleProfileChange
                    }
                    required
                  />

                </div>

                <div className="sell-field">

                  <label>
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={
                      editForm.email
                    }
                    onChange={
                      handleProfileChange
                    }
                    required
                  />

                </div>

                <div className="sell-field">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={
                      editForm.phone
                    }
                    onChange={
                      handleProfileChange
                    }
                    maxLength="10"
                    pattern="[6-9][0-9]{9}"
                    placeholder="10-digit mobile number"
                  />

                </div>

                <div className="sell-field">

                  <label>
                    City / Location
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={
                      editForm.city
                    }
                    onChange={
                      handleProfileChange
                    }
                    placeholder="e.g. Hyderabad"
                  />

                </div>

                {profileMessage && (

                  <div className="sell-message">
                    {profileMessage}
                  </div>

                )}

                <div className="sell-actions">

                  <button
                    type="submit"
                    className="submit-listing-btn"
                  >
                    Save Changes
                  </button>

                  <button
                    type="button"
                    className="preview-listing-btn"
                    onClick={() =>
                      setActiveTab(
                        "profile"
                      )
                    }
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default Dashboard;