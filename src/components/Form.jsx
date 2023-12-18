import React, { useState } from 'react';
import { updateUser } from "../graphql/mutations";

import { generateClient } from "aws-amplify/api";

export function UpdateProfile(props) {

  console.log(props);

  const client = generateClient();

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    dob:'',
    isBusiness:'',
    bio:'',
    experience:'',
    genre:''
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    //console.log(formData);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formData.id = props.user.id;
      const response = await client.graphql({ 
        query: updateUser,
        variables: { input: formData} 
      });
      console.log('Response:', response);
    } catch (err) {
      console.error('Error updating user:', err);
    }

    props.setPage("feed");
  };

  return (
    <div className="App">
      <form>
        <div>Update User Profile</div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Birthdate:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Business:</label>
          <input
            type="boolean"
            name="isBusiness"
            value={formData.isBusiness}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bio:</label>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Years of experience:</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
