import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();

  const vehicle = location.state?.vehicle || null;

  const userData = JSON.parse(
    localStorage.getItem("userData") || "null"
  );

  const [formData, setFormData] = useState({
    name:
      userData?.fullName ||
      userData?.fullname ||
      userData?.name ||
      "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    message: "",
  });

  const [successMessage, setSuccessMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^[6-9][0-9]{9}$/;

    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage(
        "Please enter your message."
      );
      return;
    }

    const existingEnquiries =
      JSON.parse(
        localStorage.getItem("enquiries") || "[]"
      );

    const newEnquiry = {
      id: Date.now(),

      name: formData.name,

      email: formData.email,

      phone: formData.phone,

      message: formData.message,

      vehicleId: vehicle?.id || null,

      vehicleName: vehicle
        ? `${vehicle.brand || ""} ${
            vehicle.model || ""
          }`.trim()
        : "General Enquiry",

      vehicle: vehicle || null,

      sellerName:
        vehicle?.seller?.name ||
        vehicle?.sellerName ||
        "",

      sellerEmail:
        vehicle?.seller?.email ||
        vehicle?.email ||
        "",

      sellerPhone:
        vehicle?.seller?.phone ||
        vehicle?.phone ||
        "",

      createdAt: new Date().toISOString(),

      date: new Date().toLocaleDateString(
        "en-IN"
      ),
    };

    localStorage.setItem(
      "enquiries",
      JSON.stringify([
        ...existingEnquiries,
        newEnquiry,
      ])
    );

    setSuccessMessage(
      "Your enquiry has been sent successfully!"
    );

    setErrorMessage("");

    setFormData((previous) => ({
      ...previous,
      message: "",
    }));
  };

  return (
    <div className="contact-page">

      {/* Header */}

      <section className="contact-header">

        <p>CONTACT SELLER</p>

        <h1>Get in Touch</h1>

        <span>
          Send your enquiry to the seller.
        </span>

      </section>

      <section className="contact-container">

        {/* Vehicle Information */}

        {vehicle && (
          <div className="contact-vehicle-card">

            <div className="contact-vehicle-image">

              {vehicle.image ? (

                <img
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                />

              ) : vehicle.images &&
                vehicle.images.length > 0 ? (

                <img
                  src={vehicle.images[0]}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                />

              ) : (

                <div className="contact-image-placeholder">
                  Vehicle
                </div>

              )}

            </div>

            <div className="contact-vehicle-info">

              <p>VEHICLE</p>

              <h2>
                {vehicle.brand}{" "}
                {vehicle.model}
              </h2>

              {vehicle.variant && (
                <span>
                  {vehicle.variant}
                </span>
              )}

              <strong>
                ₹
                {Number(
                  vehicle.price || 0
                ).toLocaleString("en-IN")}
              </strong>

              <p>
                {vehicle.year} •{" "}
                {Number(
                  vehicle.kilometers || 0
                ).toLocaleString()}{" "}
                km •{" "}
                {vehicle.fuel || "N/A"}
              </p>

              <p>
                {vehicle.location ||
                  vehicle.city ||
                  "Location not available"}
              </p>

            </div>

          </div>
        )}

        <div className="contact-content">

          {/* Contact Form */}

          <div className="contact-form-card">

            <h2>
              Send an Enquiry
            </h2>

            <p>
              Fill in your details and
              message below.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="contact-field">

                <label>
                  Name *
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="contact-field">

                <label>
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="contact-field">

                <label>
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  required
                />

              </div>

              <div className="contact-field">

                <label>
                  Message *
                </label>

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Write your message to the seller..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>

              {errorMessage && (
                <div className="contact-error">
                  {errorMessage}
                </div>
              )}

              {successMessage && (
                <div className="contact-success">
                  {successMessage}
                </div>
              )}

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Enquiry
              </button>

            </form>

          </div>

          {/* Seller Information */}

          <div className="contact-side-card">

            <h2>
              Seller Information
            </h2>

            {vehicle?.seller ? (

              <>
                <div className="contact-seller-profile">

                  <div className="contact-seller-avatar">
                    {vehicle.seller.name
                      ?.charAt(0)
                      ?.toUpperCase() || "S"}
                  </div>

                  <div>

                    <h3>
                      {vehicle.seller.name ||
                        "Seller"}
                    </h3>

                    <p>
                      Vehicle Seller
                    </p>

                  </div>

                </div>

                <div className="contact-seller-details">

                  {vehicle.seller.phone && (
                    <p>
                      Phone:{" "}
                      {vehicle.seller.phone}
                    </p>
                  )}

                  {vehicle.seller.email && (
                    <p>
                      Email:{" "}
                      {vehicle.seller.email}
                    </p>
                  )}

                  {vehicle.location && (
                    <p>
                      Location:{" "}
                      {vehicle.location}
                    </p>
                  )}

                </div>
              </>

            ) : (

              <div className="contact-general-info">

                <h3>
                  Have a question?
                </h3>

                <p>
                  Fill out the enquiry
                  form and your message
                  will be saved in your
                  dashboard.
                </p>

              </div>

            )}

            <div className="contact-dashboard-note">

              <strong>
                Your Enquiries
              </strong>

              <p>
                Submitted enquiries can
                be viewed from Dashboard
                → Enquiries.
              </p>

              <Link to="/dashboard">
                Go to Dashboard
              </Link>

            </div>

          </div>

        </div>

        {/* Back Button */}

        <div className="contact-back">

          <Link to="/vehicles">
            ← Back to Vehicles
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Contact;