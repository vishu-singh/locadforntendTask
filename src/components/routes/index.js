import { Login } from "../Login/Login"
import { ProductListing } from "../Products/ProducListing"
import MainLayout from '../Layouts/MainLayout'

export const routes=[
    {
        path: "/",
        component: Login,
        layout: MainLayout,
        requireAuth: false,
      },
    {
        path: "/productListing",
        component: ProductListing,
        layout: MainLayout,
        requireAuth: true,
      },
      {
        path: "*",
        component: Notfound,
        layout: MainLayout,
        requireAuth: false,
      },
]