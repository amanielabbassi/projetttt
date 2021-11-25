import React, { useEffect, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { editProfil, getProfil } from "../../JS/actions/profilAction";

import "./Editprofil.css"
const Editprofil = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [edit, setEdit] = useState({ name: "", email: "", phone: "" });
  const editID = useSelector((state) => state.profileReducer.user);
  useEffect(() => {
    dispatch(getProfil(match.params.id));
  }, [match.params.id]);
  useEffect(() => {
    setEdit({ ...editID });
  }, [editID]);

  const handleChange = (e) => {
    e.preventDefault();

    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const update = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
    };

    dispatch(editProfil(editID._id, update, history));
    setEdit({ name: "", email: "", phone: "" });
  };
  return (
    
      <div class="body">
          <div class="center" onSubmit={handleSubmit}>
  <h1>Edit Profil</h1>
  <form>
    <div class="inputbox">
      <input onChange={handleChange}name="name" placeholder="Name" value={editID.name}/>
      <span>Name</span>
    </div>
    <div class="inputbox">
      <input onChange={handleChange}name="email" placeholder="Email" value={editID.email}/>
      <span>Email</span>
    </div>
    <div class="inputbox">
      <input onChange={handleChange} name="phone" placeholder="Phone" value={editID.phone}/>
      <span> phone</span>
    </div>
    <div class="inputbox">
      <input type="button" value="submit"/>
    </div>
  </form>
</div>
    </div>
  );
};

export default Editprofil;
