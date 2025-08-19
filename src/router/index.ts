import { RouteObject } from "react-router-dom";
const routes: RouteObject[] = ([
    {
        path: "/",
        async lazy() {
            const { default: Component } = await import("@/views/Home")
            return { Component }
        }
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
    {
        path: "/detail",
        async lazy() {
            const { default: Component } = await import("@/views/Detail")
            return { Component }
        }
    },
])
export default routes