import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Client/Home/Home";
import UserTemplate from "../template/user/UserTemplate";
import Search from "../page/Client/Search/Search";


export const router = createBrowserRouter([
  {
    element: <UserTemplate />,
    children: [
      {
        path: "",
        element:<Home />

      },
      {
        path: "search-product",
        element:<Search />

      },
    
    ],
  },
  // {
  //   path: 'admin',
  //   element: <AdminTemplate/>,
  //   children:[
  //     // {
  //     //   path: 'films',
  //     //   element: <Films/>
  //     // },
     
  //   ]
  // }
]);
