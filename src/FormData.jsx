import React, { useState } from "react";

const FormData = () => {
  const [cName, setCName] = useState("");
  const [cAddress, setCAddress] = useState("");
  const [cLocation, setCLocation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [phone ,setPhone]=useState("");
  

  const [cNameError, setCNameError] = useState(false);
  const [cAddressError, setCAddressError] = useState(false);
  const [cLocationError, setCLocationError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [zipError, setZipError] = useState(false);

  const [communityData, setCommunityData] = useState([]);

  const subHandler = (e) => {
    e.preventDefault();

    const newCommunity = {
      id: communityData.length + 1,
      name: cName,
      address: cAddress,
      location: cLocation,
      city: city,
      state: state,
      country: country,
      zipCode: zip,
    };
    setCommunityData([...communityData, newCommunity]);
    clearForm();
  };

  const clearForm = () => {
    setCName("");
    setCAddress("");
    setCLocation("");
    setCity("");
    setState("");
    setCountry("");
    setZip("");
  };

  const editHandler = (id) => {
    const communityToEdit = communityData.find(
      (community) => community.id === id,
    );
    setCName(communityToEdit.name);
    setCAddress(communityToEdit.address);
    setCLocation(communityToEdit.location);
    setCity(communityToEdit.city);
    setState(communityToEdit.state);
    setCountry(communityToEdit.country);
    setZip(communityToEdit.zipCode);
  };

  const deleteHandler = (id) => {
    const updatedCommunityData = communityData.filter(
      (community) => community.id !== id,
    );

    setCommunityData(updatedCommunityData);
  };

  return (
    <div>
      <form onSubmit={subHandler}>
        <label>Community Name :</label>
        <input
          type="text"
          value={cName}
          onChange={(e) => setCName(e.target.value)}
        />
        <span>{cNameError ? "Community Name should be STRING" : null}</span>
        <br />
        <br />
        <label>Community Address :</label>
        <input
          type="text"
          value={cAddress}
          onChange={(e) => setCAddress(e.target.value)}
        />
        <span>
          {cAddressError ? "Community Address should be STRING" : null}
        </span>
        <br />
        <br />
        <label>Community Location :</label>
        <input
          type="text"
          value={cLocation}
          onChange={(e) => setCLocation(e.target.value)}
        />
        <span>{cLocationError ? "Location should be STRING" : null}</span>
        <br />
        <br />
        <label>City :</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <span>{cityError ? "City Name should be STRING" : null}</span>
        <br />
        <br />
        <label>State:</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <span>{stateError ? "State should be STRING" : null}</span>
        <br />
        <br />
        <label>Country :</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <span>{countryError ? "Country Name should be STRING" : null}</span>
        <br />
        <br />
        <label>Zipcode :</label>
        <input
          type="number"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <span>
          {zipError ? "Zip-Code should be more than 6 -digits" : null}
        </span>
        <br />
        <br />
    <label>Phone Number</label>
        <input type="number"  value={phone} onChange={(e)=>setPhone(e.target.value)}/> <br />
        <br />



        
        <button type="submit">Create</button>
      </form>

      <div>
        <h1>Existing Community</h1>
        <table border="1px solid" cellSpacing="0px" cellPadding="15px">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Location</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>ZipCode</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {communityData.map((community) => (
              <tr key={community.id}>
                <td>{community.id}</td>
                <td>{community.name}</td>
                <td>{community.address}</td>
                <td>{community.location}</td>
                <td>{community.city}</td>
                <td>{community.state}</td>
                <td>{community.country}</td>
                <td>{community.zipCode}</td>
                <td>
                  <button onClick={() => editHandler(community.id)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteHandler(community.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormData;
