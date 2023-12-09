import {createBrowserRouter} from "react-router-dom"
import WebLayout from "../Layout/WebLayout"
import UserDashboard from "../Page/UserDashboard"
import MyService from "../Page/MyService"
import Dashboard from "../Page/Dashboard"
import Estimate from "../Page/Estimate"
import Faq from "../Page/Faq"
import Setting from "../Page/Setting"
import Logout from "../Page/Logout"
import Worker from "../Page/WorkerDashboard"
import WorkerDashboard from "../Page/WorkerDashboard"


export const Index = createBrowserRouter([
    {
        path: "/",
        element: <WebLayout />,
        children:[
            {
                index: true,
                element: <UserDashboard />
            },
            {
                path: "/myservice",
                element: <MyService />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/request",
                element: <Estimate />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/setting",
                element: <Setting />
            },
            {
                path: "logout",
                element:<Logout />
            },
            {
                path: "worker",
                element: <WorkerDashboard />
            }
        ]
    }
])