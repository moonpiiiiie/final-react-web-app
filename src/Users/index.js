import Nav from "../nav";
import { configureStore }
    from '@reduxjs/toolkit';
import usersReducer from "./users-reducer";
import {Provider} from "react-redux";
import LoginScreen from "./login-screen";
import AdminScreen from "./admin-screen";

const store = configureStore({
        reducer: {
            users: usersReducer
        }
});

export default store;





// function Users() {
//     return (
//         <div>
//             <Nav/>
//             <h1>Login and out Page is Here</h1>
//         </div>
//     );
// }
// export default Users;