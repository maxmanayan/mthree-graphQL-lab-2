import React, { useEffect, useState } from "react";

const Home = () => {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    console.log("homepage");
  }, []);

  return (
    <div>
      <h1>Authors</h1>
    </div>
  );
};

export default Home;
