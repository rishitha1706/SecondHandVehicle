import { useState } from "react";

function SellVehicle() {
  const emptyForm = {
    type: "",
    brand: "",
    model: "",
    variant: "",
    year: "",
    registrationYear: "",
    kilometers: "",
    fuel: "",
    transmission: "",
    owners: "",
    condition: "",
    color: "",
    price: "",
    location: "",
    state: "",
    city: "",
    areaPincode: "",
    description: "",
    sellerName: "",
    phone: "",
    email: "",
    images: [],
  };

  const [formData, setFormData] = useState(emptyForm);
  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  /* =========================
     HANDLE INPUT CHANGES
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  /* =========================
     IMAGE UPLOAD
  ========================= */

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) {
      return;
    }

    const imagePromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = () => {
          resolve(reader.result);
        };

        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((images) => {
      setFormData((previous) => ({
        ...previous,
        images: [...previous.images, ...images],
      }));

      setMessage("");
    });

    e.target.value = "";
  };

  /* =========================
     REMOVE IMAGE
  ========================= */

  const removeImage = (index) => {
    setFormData((previous) => ({
      ...previous,
      images: previous.images.filter(
        (_, imageIndex) => imageIndex !== index
      ),
    }));

    setMessage("");
  };

  /* =========================
     VALIDATION
  ========================= */

  const validateForm = () => {
    const phoneRegex = /^[6-9][0-9]{9}$/;

    if (!phoneRegex.test(formData.phone)) {
      setMessage(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return false;
    }

    if (Number(formData.price) <= 0) {
      setMessage("Please enter a valid vehicle price.");
      return false;
    }

    if (Number(formData.kilometers) < 0) {
      setMessage("Kilometers cannot be negative.");
      return false;
    }

    if (
      Number(formData.registrationYear) >
      Number(formData.year)
    ) {
      setMessage(
        "Registration year cannot be greater than vehicle year."
      );
      return false;
    }

    if (formData.images.length === 0) {
      setMessage(
        "Please upload at least one vehicle image."
      );
      return false;
    }

    return true;
  };

  /* =========================
     SAVE DRAFT
  ========================= */

  const saveDraft = () => {
    localStorage.setItem(
      "sellerDraft",
      JSON.stringify(formData)
    );

    setMessage("Draft saved successfully!");
  };

  /* =========================
     PREVIEW
  ========================= */

  const handlePreview = () => {
    setMessage("");
    setShowPreview(true);
  };

  /* =========================
     SUBMIT LISTING
  ========================= */

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (!validateForm()) {
      setShowPreview(false);
      return;
    }

    const existingListings =
      JSON.parse(
        localStorage.getItem("sellerListings")
      ) || [];

    const newListing = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "sellerListings",
      JSON.stringify([
        ...existingListings,
        newListing,
      ])
    );

    setMessage(
      "Vehicle listing submitted successfully!"
    );

    setShowPreview(false);
    setFormData(emptyForm);
  };

  return (
    <div className="sell-page">

      {/* =========================
          HEADER
      ========================= */}

      <section className="sell-header">
        <p>SELL YOUR VEHICLE</p>

        <h1>List Your Vehicle</h1>

        <span>
          Sell your used vehicle quickly and easily.
        </span>
      </section>

      <section className="sell-container">

        <form
          className="sell-form"
          onSubmit={handleSubmit}
        >

          {/* =========================
              01 VEHICLE INFORMATION
          ========================= */}

          <div className="sell-section">

            <div className="sell-section-title">

              <span>01</span>

              <div>
                <h2>Vehicle Information</h2>

                <p>
                  Enter the basic details of your vehicle.
                </p>
              </div>

            </div>

            <div className="sell-grid">

              {/* Vehicle Type */}

              <div className="sell-field">

                <label>
                  Vehicle Type *
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Vehicle Type
                  </option>

                  <option value="Car">
                    Car
                  </option>

                  <option value="Bike">
                    Bike
                  </option>

                  <option value="SUV">
                    SUV
                  </option>

                  <option value="Sedan">
                    Sedan
                  </option>

                  <option value="Hatchback">
                    Hatchback
                  </option>
                </select>

              </div>

              {/* Brand */}

              <div className="sell-field">

                <label>
                  Brand *
                </label>

                <input
                  type="text"
                  name="brand"
                  placeholder="e.g. Toyota"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Model */}

              <div className="sell-field">

                <label>
                  Model *
                </label>

                <input
                  type="text"
                  name="model"
                  placeholder="e.g. Innova Crysta"
                  value={formData.model}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Variant */}

              <div className="sell-field">

                <label>
                  Variant
                </label>

                <input
                  type="text"
                  name="variant"
                  placeholder="e.g. 2.4 ZX"
                  value={formData.variant}
                  onChange={handleChange}
                />

              </div>

              {/* Year */}

              <div className="sell-field">

                <label>
                  Manufacturing Year *
                </label>

                <input
                  type="number"
                  name="year"
                  min="1900"
                  max="2026"
                  placeholder="2022"
                  value={formData.year}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Registration Year */}

              <div className="sell-field">

                <label>
                  Registration Year *
                </label>

                <input
                  type="number"
                  name="registrationYear"
                  min="1900"
                  max="2026"
                  placeholder="2022"
                  value={formData.registrationYear}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Kilometers */}

              <div className="sell-field">

                <label>
                  Kilometers Driven *
                </label>

                <input
                  type="number"
                  name="kilometers"
                  min="0"
                  placeholder="30000"
                  value={formData.kilometers}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>

          {/* =========================
              02 VEHICLE SPECIFICATIONS
          ========================= */}

          <div className="sell-section">

            <div className="sell-section-title">

              <span>02</span>

              <div>
                <h2>
                  Vehicle Specifications
                </h2>

                <p>
                  Provide additional vehicle details.
                </p>
              </div>

            </div>

            <div className="sell-grid">

              {/* Fuel */}

              <div className="sell-field">

                <label>
                  Fuel Type *
                </label>

                <select
                  name="fuel"
                  value={formData.fuel}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Fuel Type
                  </option>

                  <option value="Petrol">
                    Petrol
                  </option>

                  <option value="Diesel">
                    Diesel
                  </option>

                  <option value="Electric">
                    Electric
                  </option>

                  <option value="CNG">
                    CNG
                  </option>

                  <option value="Hybrid">
                    Hybrid
                  </option>
                </select>

              </div>

              {/* Transmission */}

              <div className="sell-field">

                <label>
                  Transmission *
                </label>

                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Transmission
                  </option>

                  <option value="Manual">
                    Manual
                  </option>

                  <option value="Automatic">
                    Automatic
                  </option>
                </select>

              </div>

              {/* Owners */}

              <div className="sell-field">

                <label>
                  Number of Owners *
                </label>

                <select
                  name="owners"
                  value={formData.owners}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Owners
                  </option>

                  <option value="1">
                    1 Owner
                  </option>

                  <option value="2">
                    2 Owners
                  </option>

                  <option value="3">
                    3 Owners
                  </option>

                  <option value="4+">
                    4+ Owners
                  </option>
                </select>

              </div>

              {/* Condition */}

              <div className="sell-field">

                <label>
                  Condition *
                </label>

                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Condition
                  </option>

                  <option value="Excellent">
                    Excellent
                  </option>

                  <option value="Good">
                    Good
                  </option>

                  <option value="Fair">
                    Fair
                  </option>
                </select>

              </div>

              {/* Color */}

              <div className="sell-field">

                <label>
                  Color
                </label>

                <input
                  type="text"
                  name="color"
                  placeholder="e.g. White"
                  value={formData.color}
                  onChange={handleChange}
                />

              </div>

              {/* Location */}

              <div className="sell-field">

                <label>
                  Location *
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Hyderabad"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* State */}

              <div className="sell-field">

                <label>
                  State *
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder="e.g. Telangana"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* City */}

              <div className="sell-field">

                <label>
                  City *
                </label>

                <input
                  type="text"
                  name="city"
                  placeholder="e.g. Hyderabad"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Area / Pincode */}

              <div className="sell-field">

                <label>
                  Area / Pincode *
                </label>

                <input
                  type="text"
                  name="areaPincode"
                  placeholder="e.g. Kukatpally / 500072"
                  value={formData.areaPincode}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>

          {/* =========================
              03 PRICE & DESCRIPTION
          ========================= */}

          <div className="sell-section">

            <div className="sell-section-title">

              <span>03</span>

              <div>
                <h2>
                  Price & Description
                </h2>

                <p>
                  Tell buyers about your vehicle.
                </p>
              </div>

            </div>

            {/* Price */}

            <div className="sell-field">

              <label>
                Expected Price *
              </label>

              <input
                type="number"
                name="price"
                min="1"
                placeholder="₹ Enter price"
                value={formData.price}
                onChange={handleChange}
                required
              />

            </div>

            {/* Description */}

            <div className="sell-field">

              <label>
                Description *
              </label>

              <textarea
                name="description"
                rows="6"
                placeholder="Describe your vehicle, its condition, service history, features, etc."
                value={formData.description}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* =========================
              04 VEHICLE IMAGES
          ========================= */}

          <div className="sell-section">

            <div className="sell-section-title">

              <span>04</span>

              <div>
                <h2>
                  Vehicle Images
                </h2>

                <p>
                  Add clear photos of your vehicle.
                </p>
              </div>

            </div>

            <div className="image-upload-box">

              <div className="upload-icon">
                📷
              </div>

              <h3>
                Upload Vehicle Photos
              </h3>

              <p>
                Add photos showing the exterior,
                interior and important details.
              </p>

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />

              {/* Selected Images */}

              {formData.images.length > 0 && (

                <div className="uploaded-images">

                  {formData.images.map(
                    (image, index) => (

                      <div
                        className="uploaded-image"
                        key={index}
                      >

                        <img
                          src={image}
                          alt={`Vehicle ${index + 1}`}
                        />

                        <button
                          type="button"
                          onClick={() =>
                            removeImage(index)
                          }
                        >
                          ×
                        </button>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>

          </div>

          {/* =========================
              05 SELLER INFORMATION
          ========================= */}

          <div className="sell-section">

            <div className="sell-section-title">

              <span>05</span>

              <div>
                <h2>
                  Seller Information
                </h2>

                <p>
                  Enter your contact information.
                </p>
              </div>

            </div>

            <div className="sell-grid">

              {/* Name */}

              <div className="sell-field">

                <label>
                  Full Name *
                </label>

                <input
                  type="text"
                  name="sellerName"
                  placeholder="Your name"
                  value={formData.sellerName}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Phone */}

              <div className="sell-field">

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

              {/* Email */}

              <div className="sell-field">

                <label>
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>

          {/* =========================
              MESSAGE
          ========================= */}

          {message && (

            <div className="sell-message">
              {message}
            </div>

          )}

          {/* =========================
              ACTION BUTTONS
          ========================= */}

          <div className="sell-actions">

            <button
              type="button"
              className="save-draft-btn"
              onClick={saveDraft}
            >
              Save Draft
            </button>

            <button
              type="button"
              className="preview-listing-btn"
              onClick={handlePreview}
            >
              Preview Listing
            </button>

            <button
              type="submit"
              className="submit-listing-btn"
            >
              Submit Listing
            </button>

          </div>

        </form>

      </section>

      {/* =========================
          PREVIEW MODAL
      ========================= */}

      {showPreview && (

        <div
          className="preview-overlay"
          onClick={() =>
            setShowPreview(false)
          }
        >

          <div
            className="preview-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* Preview Header */}

            <div className="preview-header">

              <div>

                <p>
                  LISTING PREVIEW
                </p>

                <h2>
                  {formData.brand ||
                    "Vehicle"}{" "}
                  {formData.model}
                </h2>

              </div>

              <button
                type="button"
                className="preview-close"
                onClick={() =>
                  setShowPreview(false)
                }
              >
                ×
              </button>

            </div>

            <div className="preview-content">

              {/* Preview Images */}

              {formData.images.length > 0 && (

                <div className="preview-images">

                  {formData.images.map(
                    (image, index) => (

                      <img
                        key={index}
                        src={image}
                        alt={`Vehicle preview ${
                          index + 1
                        }`}
                      />

                    )
                  )}

                </div>

              )}

              {/* Main Information */}

              <div className="preview-main">

                <span className="preview-year">
                  {formData.year ||
                    "Year"}
                </span>

                <h1>
                  {formData.brand ||
                    "Brand"}{" "}
                  {formData.model ||
                    "Model"}
                </h1>

                {formData.variant && (

                  <p className="preview-variant">
                    {formData.variant}
                  </p>

                )}

                <div className="preview-price">

                  ₹
                  {formData.price
                    ? Number(
                        formData.price
                      ).toLocaleString(
                        "en-IN"
                      )
                    : "0"}

                </div>

                <p className="preview-location">
                  📍{" "}
                  {formData.location ||
                    "Location"}
                </p>

              </div>

              {/* Specifications */}

              <div className="preview-specs">

                <div>
                  <span>
                    Vehicle Type
                  </span>

                  <strong>
                    {formData.type ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    Manufacturing Year
                  </span>

                  <strong>
                    {formData.year ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    Registration Year
                  </span>

                  <strong>
                    {formData.registrationYear ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    Kilometers
                  </span>

                  <strong>
                    {formData.kilometers
                      ? `${Number(
                          formData.kilometers
                        ).toLocaleString()} km`
                      : "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    Fuel
                  </span>

                  <strong>
                    {formData.fuel ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    Transmission
                  </span>

                  <strong>
                    {formData.transmission ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    Owners
                  </span>

                  <strong>
                    {formData.owners ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    Condition
                  </span>

                  <strong>
                    {formData.condition ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    Color
                  </span>

                  <strong>
                    {formData.color ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    Location
                  </span>

                  <strong>
                    {formData.location ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    State
                  </span>

                  <strong>
                    {formData.state ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    City
                  </span>

                  <strong>
                    {formData.city ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>
                    Area / Pincode
                  </span>

                  <strong>
                    {formData.areaPincode ||
                      "-"}
                  </strong>
                </div>

              </div>

              {/* Description */}

              <div className="preview-description">

                <h3>
                  Description
                </h3>

                <p>
                  {formData.description ||
                    "No description provided."}
                </p>

              </div>

              {/* Seller */}

              <div className="preview-seller">

                <h3>
                  Seller Information
                </h3>

                <p>
                  👤{" "}
                  {formData.sellerName ||
                    "Seller Name"}
                </p>

                <p>
                  📞{" "}
                  {formData.phone ||
                    "Phone Number"}
                </p>

                <p>
                  ✉️{" "}
                  {formData.email ||
                    "Email Address"}
                </p>

              </div>

            </div>

            {/* Preview Actions */}

            <div className="preview-actions">

              <button
                type="button"
                className="preview-edit-btn"
                onClick={() =>
                  setShowPreview(false)
                }
              >
                ← Continue Editing
              </button>

              <button
                type="button"
                className="submit-listing-btn"
                onClick={handleSubmit}
              >
                Submit Listing
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default SellVehicle;