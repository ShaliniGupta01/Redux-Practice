import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { setMainUser, setUsers, setActive } from "../Redux/Slices/userSllice.js";
import { useSelector } from "react-redux";


const User = () => {
// const  data = useSelector(state => state.user.user)
// const  users = useSelector(state => state.user.users)
const dispatch = useDispatch();

const isActive  = useSelector(state=>state.user.isActive)

console.log(isActive);


// console.log(data); //user:null value

// console.log(users);  //[] value



  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    dispatch(setMainUser(user))
    setUser({
       name: "",
    email: "",
    password: "",
    })
    dispatch(setUsers(user))
    dispatch(setActive())
  };

  return (
    <div>
      <h1>User</h1>
      
{
  isActive ? <h2>true</h2>: <h2>false</h2>
}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User;



// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setMainUser, setUsers, setActive } from "../Redux/Slices/userSllice.js";

// const User = () => {
//   const dispatch = useDispatch();
//   const isActive = useSelector((state) => state.user.isActive);

//   console.log(isActive);

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setMainUser(user));
//     dispatch(setUsers(user));
//     dispatch(setActive(true)); // <-- Pass payload or toggle inside reducer
//     setUser({
//       name: "",
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div>
//       <h1>User</h1>
//       {isActive ? <h2>true</h2> : <h2>false</h2>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           value={user.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Email"
//           name="email"
//           value={user.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={user.password}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default User;




