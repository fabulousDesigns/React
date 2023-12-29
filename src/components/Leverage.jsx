import { useEffect, useState } from "react";
import { people } from "../utils/data";

const Leverage = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(people);
  }, []);

  console.log(user);

  return (
    <>
      {/* {user.map((person) => {
        <div className="user">
          <p>{person.name}</p>
        </div>;
      })} */}

      {user?.user.name}
    </>
  );
};

export default Leverage;
