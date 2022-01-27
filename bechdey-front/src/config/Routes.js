import Login from "../components/Login";
import Mainpage from "../components/Mainpage";
import NotFound from "../components/Notfound";
import Userpage from "../components/Userpage";
import AddProduct from "../components/AddProduct";
import RecentlyProducts from "../components/RecentlyProducts";
import Register from "../components/Register";
import ProductDetail from "../components/ProductDetail";

const routes = [
    {
        path:"/login",
        component:Login,
        isPrivate:false,
    },
    {
        path:"/register",
        component:Register,
        isPrivate:false,
    },
    {
        path:"/users",
        component:Userpage,
        isPrivate:true
    },
    {
        path:"/addproduct",
        component:AddProduct,
        isPrivate:true
    },
    {
        path:"/recent",
        component:RecentlyProducts,
        isPrivate:false
    },
    {
        path:'/detailpage/:id',
        component:ProductDetail,
        isPrivate:false
    },
    {
        path:"/",
        component:Mainpage,
        isPrivate:false
    },
    {
        path:"/*",
        component:NotFound,
        isPrivate:false
    },
    // {
    //     path:"/",
    //     component:Mainpage,
    //     isPrivate:false
    // },
]

export default routes;