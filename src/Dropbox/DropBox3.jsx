import React, { useState } from "react";

function DropBox3() {
  const bdGeoData = {
    Dhaka: {
      districts: {
        Dhaka: ["Dhanmondi", "Gulshan", "Mirpur"],
        Gazipur: ["Gazipur Sadar", "Tongi", "Kaliganj"],
        Narayanganj: ["Narayanganj Sadar", "Sonargaon", "Bandar"],
      },
    },
    Mymensingh: {
      districts: {
        Mymensingh: ["Mymensingh Sadar", "Phulpur", "Trishal"],
        Netrokona: ["Netrokona Sadar", "Kendua", "Mohanganj"],
        Sherpur: ["Sherpur Sadar", "Nalitabari", "Jhenaigati"],
      },
    },
    Chattogram: {
      districts: {
        Chattogram: ["Chattogram Sadar", "Rangunia", "Boalkhali"],
        CoxBazar: ["Cox's Bazar Sadar", "Ramu", "Teknaf"],
        Bandarban: ["Bandarban Sadar", "Thanchi", "Ruma"],
      },
    },
    Sylhet: {
      districts: {
        Sylhet: ["Sylhet Sadar", "Beanibazar", "Golapganj"],
        Moulvibazar: ["Moulvibazar Sadar", "Srimangal", "Kamalganj"],
        Habiganj: ["Habiganj Sadar", "Bahubal", "Chunarughat"],
      },
    },
  };

  const [division, setDivision] = useState("Dhaka");
  const [district, setDistrict] = useState(
    Object.keys(bdGeoData["Dhaka"].districts)[0]
  );
  const [upazila, setUpazila] = useState(
    bdGeoData["Dhaka"].districts["Dhaka"][0]
  );

  const divisionHandler = (event) => {
    const selectedDivision = event.target.value;
    setDivision(selectedDivision);

    const firstDistrict = Object.keys(bdGeoData[selectedDivision].districts)[0];
    setDistrict(firstDistrict);

    const firstUpazila =
      bdGeoData[selectedDivision].districts[firstDistrict][0];
    setUpazila(firstUpazila);
  };

  const districtHandler = (event) => {
    const selectedDistrict = event.target.value;
    setDistrict(selectedDistrict);

    const firstUpazila = bdGeoData[division].districts[selectedDistrict][0];
    setUpazila(firstUpazila);
  };

  const upazilaHandler = (event) => {
    setUpazila(event.target.value);
  };

  return (
    <div>
      <label>Select Division: </label>
      <select value={division} onChange={divisionHandler}>
        {Object.keys(bdGeoData).map((division) => (
          <option key={division} value={division}>
            {division}
          </option>
        ))}
      </select>
      <p>Division: {division}</p>

      <label>Select District: </label>
      <select value={district} onChange={districtHandler}>
        {Object.keys(bdGeoData[division].districts).map((dist) => (
          <option key={dist} value={dist}>
            {dist}
          </option>
        ))}
      </select>
      <p>District: {district}</p>

      <label>Select Upazila: </label>
      <select value={upazila} onChange={upazilaHandler}>
        {bdGeoData[division].districts[district].map((upa) => (
          <option key={upa} value={upa}>
            {upa}
          </option>
        ))}
      </select>
      <p>Upazila: {upazila}</p>
    </div>
  );
}

export default DropBox3;
