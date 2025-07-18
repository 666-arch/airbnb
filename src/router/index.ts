import { RouteObject } from "react-router-dom";
const routes: RouteObject[] = ([
    {
        path: "/",
        async lazy() {
            const { default: Component } = await import("@/views/Home")
            return { Component }
        }
        // element: React.createElement(Home)
    },
    {
        path: "/home",
        async lazy() {
            const { default: Component } = await import("@/views/Home")
            return { Component }
        }
    },
    {
        path: "/entire",
        async lazy() {
            const { default: Component } = await import("@/views/Entire")
            return { Component }
        }
    },
])
export default routes