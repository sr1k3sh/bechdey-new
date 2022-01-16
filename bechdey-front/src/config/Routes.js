import Login from "../components/Login";
// import Mainpage from "../components/Mainpage";
import NotFound from "../components/Notfound";
import Userpage from "../components/Userpage";
import AddProduct from "../components/AddProduct";

const routes = [
    {
        path:"/login",
        component:Login,
        isPrivate:false,
    },
    {
        path:"/users",
        component:Userpage,
        isPrivate:true
    },
    // {
    //     path:"/",
    //     component:Mainpage,
    //     isPrivate:false
    // },
    {
        path:"/addproduct",
        component:AddProduct,
        isPrivate:true
    },
    {
        path:"/*",
        component:NotFound,
        isPrivate:false
    }
]

export default routes;