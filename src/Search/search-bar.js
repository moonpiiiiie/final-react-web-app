import React from "react";

async function searchBar() {
    setWebsite('http://localhost:3000/search/' + zipCode + '/' + search);
}

<div>
    <input
        type = "text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={search}
    />
    <input
        type = "text"
        value={zipCode}
        onChange={(e) => setZip(e.target.value)}
        placeholder={zipCode}
    />
    <a href={website}>
        <button onClick={searchYelp}>Search</button>
    </a>

</div>