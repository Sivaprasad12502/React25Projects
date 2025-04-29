import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [loading, setLoadig] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);
  function handlechange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUser(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }
  function handlClick(event){
    setShowDropDown(false)
    setSearchParam(event.target.innerText)
    setFilteredUser([])
  }

  async function fetchListOfUsers(params) {
    try {
      setLoadig(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoadig(false);
        setError(null);
      }
    } catch (error) {
      setLoadig(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);
  console.log(users, filteredUser);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data!Plese wait</h1>
      ) : (
        <input
          type="text"
          name="search-users"
          placeholder="Search Users here..."
          value={searchParam}
          onChange={handlechange}
        />
      )}

      {showDropDown && <Suggestions handleClick={handlClick} data={filteredUser} />}
    </div>
  );
}
