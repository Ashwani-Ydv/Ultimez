import React, { useState } from "react";
import { Link } from "react-router-dom";

const countries = [
  { id: "101", name: "Country 1" },
  { id: "102", name: "Country 2" },
  { id: "103", name: "Country 3" },
];

const Signup = () => {
  const [countryRowId, setCountryRowId] = useState("");
  return (
    <div>
      <h1>Register</h1>
      <h5>Create Your Company Accounts.</h5>
      <div>
        <div>
          <input placeholder="Full name *" type="text" />
        </div>
        <div>
          <input placeholder="User name *" type="text" />
        </div>
        <div>
          <select
            value={countryRowId}
            onChange={(e) => setCountryRowId(e.target.value)}
          >
            <option>Select Country *</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input placeholder="Mobile Number *" type="number" />
        </div>
        <div>
          <input placeholder="Email Id *" type="email" />
        </div>
        <div>
          <input placeholder="Password *" type="Password" />
        </div>
        <div>
          <input placeholder="Refferal ID " type="text" />
        </div>
        <div>
          <button>Register</button>
        </div>
        <div>
          Have an account?
          <Link to="/">Sign In</Link> here
        </div>
      </div>
    </div>
  );
};

export default Signup;
