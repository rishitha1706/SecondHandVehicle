import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-small-title">YOUR TRUSTED VEHICLE MARKETPLACE</p>

            <h1>
              Find Your
              <span> Perfect Vehicle</span>
            </h1>

            <p className="hero-description">
              Discover quality second-hand cars and bikes from trusted sellers.
              Search, compare and find the vehicle that's right for you.
            </p>

            {/* Search Box */}
            <div className="home-search-box">

              <div className="search-field">
                <label>Vehicle</label>
                <select>
                  <option>All Vehicles</option>
                  <option>Cars</option>
                  <option>Bikes</option>
                  <option>SUVs</option>
                  <option>Sedans</option>
                  <option>Hatchbacks</option>
                </select>
              </div>

              <div className="search-field">
                <label>Brand</label>
                <select>
                  <option>All Brands</option>
                  <option>Toyota</option>
                  <option>Hyundai</option>
                  <option>Honda</option>
                  <option>Maruti Suzuki</option>
                  <option>Tata</option>
                  <option>Mahindra</option>
                </select>
              </div>

              <div className="search-field">
                <label>Location</label>
                <select>
                  <option>All Locations</option>
                  <option>Hyderabad</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Pune</option>
                </select>
              </div>

              <Link to="/vehicles" className="search-button">
                🔍 Search
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="categories-section">
        <div className="section-container">

          <div className="section-heading">
            <p>EXPLORE VEHICLES</p>
            <h2>Browse by Category</h2>
            <span>
              Find the perfect vehicle based on your needs.
            </span>
          </div>

          <div className="category-grid">

            <Link to="/vehicles" className="category-card">
              <div className="category-icon">🚗</div>
              <h3>Cars</h3>
              <p>Explore used cars</p>
            </Link>

            <Link to="/vehicles" className="category-card">
              <div className="category-icon">🏍️</div>
              <h3>Bikes</h3>
              <p>Explore used bikes</p>
            </Link>

            <Link to="/vehicles" className="category-card">
              <div className="category-icon">🚙</div>
              <h3>SUVs</h3>
              <p>Powerful & spacious</p>
            </Link>

            <Link to="/vehicles" className="category-card">
              <div className="category-icon">🚘</div>
              <h3>Sedans</h3>
              <p>Comfortable & stylish</p>
            </Link>

            <Link to="/vehicles" className="category-card">
              <div className="category-icon">🚗</div>
              <h3>Hatchbacks</h3>
              <p>Compact & practical</p>
            </Link>

          </div>
        </div>
      </section>


      {/* ================= FEATURED VEHICLES ================= */}
      <section className="vehicles-section">
        <div className="section-container">

          <div className="section-heading-row">
            <div>
              <p>OUR TOP PICKS</p>
              <h2>Featured Vehicles</h2>
              <span>
                Hand-picked vehicles worth checking out.
              </span>
            </div>

            <Link to="/vehicles" className="view-all-btn">
              View All Vehicles →
            </Link>
          </div>


          <div className="vehicle-preview-grid">

            {/* Vehicle 1 */}
            <div className="vehicle-card">

              <div className="vehicle-image">
                <div className="vehicle-placeholder">
                  🚗
                </div>

                <span className="featured-badge">
                  Featured
                </span>

                <button className="favorite-button">
                  ♡
                </button>
              </div>

              <div className="vehicle-info">

                <p className="vehicle-year">2021</p>

                <h3>Toyota Innova Crysta</h3>

                <p className="vehicle-location">
                  📍 Hyderabad
                </p>

                <div className="vehicle-details">
                  <span>42,000 km</span>
                  <span>Diesel</span>
                  <span>Automatic</span>
                </div>

                <div className="vehicle-bottom">
                  <strong>₹15.5 Lakh</strong>

                  <Link to="/vehicles/1">
                    View Details
                  </Link>
                </div>

              </div>
            </div>


            {/* Vehicle 2 */}
            <div className="vehicle-card">

              <div className="vehicle-image">
                <div className="vehicle-placeholder">
                  🚙
                </div>

                <span className="featured-badge">
                  Featured
                </span>

                <button className="favorite-button">
                  ♡
                </button>
              </div>

              <div className="vehicle-info">

                <p className="vehicle-year">2022</p>

                <h3>Hyundai Creta</h3>

                <p className="vehicle-location">
                  📍 Bangalore
                </p>

                <div className="vehicle-details">
                  <span>30,000 km</span>
                  <span>Petrol</span>
                  <span>Manual</span>
                </div>

                <div className="vehicle-bottom">
                  <strong>₹14 Lakh</strong>

                  <Link to="/vehicles/2">
                    View Details
                  </Link>
                </div>

              </div>
            </div>


            {/* Vehicle 3 */}
            <div className="vehicle-card">

              <div className="vehicle-image">
                <div className="vehicle-placeholder">
                  🚘
                </div>

                <span className="featured-badge">
                  Featured
                </span>

                <button className="favorite-button">
                  ♡
                </button>
              </div>

              <div className="vehicle-info">

                <p className="vehicle-year">2023</p>

                <h3>Honda City</h3>

                <p className="vehicle-location">
                  📍 Hyderabad
                </p>

                <div className="vehicle-details">
                  <span>18,500 km</span>
                  <span>Petrol</span>
                  <span>Automatic</span>
                </div>

                <div className="vehicle-bottom">
                  <strong>₹12.5 Lakh</strong>

                  <Link to="/vehicles/3">
                    View Details
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= RECENTLY ADDED ================= */}
      <section className="recent-section">
        <div className="section-container">

          <div className="section-heading-row">
            <div>
              <p>JUST ARRIVED</p>
              <h2>Recently Added</h2>
              <span>
                Check out the latest vehicles listed on AutoMart.
              </span>
            </div>

            <Link to="/vehicles" className="view-all-btn">
              See More →
            </Link>
          </div>

          <div className="recent-grid">

            <div className="recent-card">
              <span>2024</span>
              <h3>Tata Nexon</h3>
              <p>₹10.2 Lakh</p>
              <small>📍 Hyderabad</small>
            </div>

            <div className="recent-card">
              <span>2022</span>
              <h3>Maruti Swift</h3>
              <p>₹7.1 Lakh</p>
              <small>📍 Chennai</small>
            </div>

            <div className="recent-card">
              <span>2021</span>
              <h3>Mahindra XUV700</h3>
              <p>₹17.8 Lakh</p>
              <small>📍 Bangalore</small>
            </div>

            <div className="recent-card">
              <span>2023</span>
              <h3>Honda Activa 6G</h3>
              <p>₹85,000</p>
              <small>📍 Hyderabad</small>
            </div>

          </div>
        </div>
      </section>


      {/* ================= POPULAR BRANDS ================= */}
      <section className="brands-section">
        <div className="section-container">

          <div className="section-heading">
            <p>TOP MANUFACTURERS</p>
            <h2>Popular Brands</h2>
            <span>
              Browse vehicles from popular manufacturers.
            </span>
          </div>

          <div className="brand-grid">

            <Link to="/vehicles">Toyota</Link>
            <Link to="/vehicles">Hyundai</Link>
            <Link to="/vehicles">Honda</Link>
            <Link to="/vehicles">Maruti Suzuki</Link>
            <Link to="/vehicles">Tata</Link>
            <Link to="/vehicles">Mahindra</Link>

          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <div className="section-container">

          <div className="section-heading">
            <p>WHY AUTOMART?</p>
            <h2>Why Choose Us</h2>
            <span>
              Everything you need to make your vehicle search easier.
            </span>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <div>✓</div>
              <h3>Quality Listings</h3>
              <p>
                Browse detailed vehicle listings with important
                information before making your decision.
              </p>
            </div>

            <div className="why-card">
              <div>⚖</div>
              <h3>Easy Comparison</h3>
              <p>
                Compare multiple vehicles side by side and choose
                the one that suits you best.
              </p>
            </div>

            <div className="why-card">
              <div>♡</div>
              <h3>Save Favorites</h3>
              <p>
                Save vehicles you're interested in and come back
                to them whenever you want.
              </p>
            </div>

            <div className="why-card">
              <div>⚡</div>
              <h3>Simple Experience</h3>
              <p>
                Search, filter and explore vehicles through a
                simple and user-friendly interface.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonial-section">
        <div className="section-container">

          <div className="section-heading">
            <p>WHAT OUR USERS SAY</p>
            <h2>Customer Reviews</h2>
          </div>

          <div className="testimonial-grid">

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>

              <p>
                "The comparison feature made it really easy for me
                to choose between different cars."
              </p>

              <h4>Rahul Sharma</h4>
              <span>Hyderabad</span>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>

              <p>
                "I found the search and filtering options very easy
                to use. Great experience."
              </p>

              <h4>Priya Reddy</h4>
              <span>Bangalore</span>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>

              <p>
                "The website makes browsing second-hand vehicles
                simple and convenient."
              </p>

              <h4>Arjun Kumar</h4>
              <span>Chennai</span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SELL CTA ================= */}
      <section className="sell-cta">

        <div className="sell-cta-content">

          <div>
            <p>HAVE A VEHICLE TO SELL?</p>

            <h2>
              Sell Your Vehicle With AutoMart
            </h2>

            <span>
              Create a listing and reach potential buyers.
            </span>
          </div>

          <Link to="/sell" className="sell-cta-button">
            Sell Your Vehicle →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;