// const useRouteLazy
//     = (path: string) => {
//         // const { default: Component } = await import(path)
//         // return { Component }
//         return () => import(path).then(module => ({
//             Component: module.default
//         }))
//     }
// export default useRouteLazy;