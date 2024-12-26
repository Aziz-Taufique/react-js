// import { createElement } from "react";
// import { createRoot } from "react-dom/client";
// import MainContent from "./MainContent";







// const root = createRoot(document.getElementById("root"))

// // const reactElement = createElement("h1", null, "hello baby")  // early days
// const reactElement = <h1>hello from jsx</h1>
// console.log(reactElement) // return obj

// function Footer(){
//   return(
//     <h1>This is footer</h1>
//   )
// }

// root.render(
//  <div>
//   <MainContent/>
//   <h1 className="header">foo</h1>
//  </div>
// )


// const h1 = document.createElement("h1")
// h1.textContent = "This is manual coding"
// h1.className = "header"
// document.getElementById("root").appendChild(h1)


// import { createElement } from "react";
// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"))

// root.render(<h1 className="header">this is foo</h1>)

// root.render(
//     // createElement()createElement()   // this is problematic
//     <>
//     <h1>this is image</h1>
//     <img className="img" src="https://imgs.search.brave.com/AZkKYOifhfns8OmMQcTUfP9YTKWXy4N2vwDbbzYEV9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw" alt="" />
//     </>
// )

// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"))
// root.render(
//     <>
//     <img src="https://imgs.search.brave.com/AZkKYOifhfns8OmMQcTUfP9YTKWXy4N2vwDbbzYEV9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw" alt="" />
//     <h1>This is image</h1>
//     <ul>
//         <li>one</li>
//         <li>two</li>
//         <li>three</li>
//         <li>four</li>
//         <li>five</li>
//     </ul>
//     </>
// )

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// function MyComponent(){
//     return(
//         <>
//         <img src="https://imgs.search.brave.com/AZkKYOifhfns8OmMQcTUfP9YTKWXy4N2vwDbbzYEV9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw" alt="" />
//         <h1>This is image and items</h1>
//         <ul>
//             <li>one</li>
//             <li>two</li>
//             <li>three</li>
//             <li>four</li>
//             <li>five</li>
//         </ul>
//         </>
//     )
// }

// root.render(
//     <MyComponent/>
// )


// import { createRoot } from "react-dom/client";
// import Foo from "./Aziz";
// // import { Fragment } from "react";
// const root = createRoot(document.getElementById("root"))

// root.render(
    // simple call function if we use function name start with lowercase and also we cann pass parameter like regular fn
//     tempFn("google")
// )

// function tempFn(name){
//     return (
//          <>
//       <img src="https://imgs.search.brave.com/AZkKYOifhfns8OmMQcTUfP9YTKWXy4N2vwDbbzYEV9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw" alt="" />
//       <h1>This is image and items from {name}</h1>
//        <ul>
//             <li>one</li>
//             <li>two</li>
//             <li>three</li>
//             <li>four</li>
//             <li>five</li>
//    </ul>
//    </>
//     )
// }


// root.render(
//     <TempFn/>
// )

// function TempFn(){
//     return (
//          <>
//       <img src="https://imgs.search.brave.com/AZkKYOifhfns8OmMQcTUfP9YTKWXy4N2vwDbbzYEV9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw" alt="" />
//       <h1>This is image and items from {name}</h1>
//        <ul>
//             <li>one</li>
//             <li>two</li>
//             <li>three</li>
//             <li>four</li>
//             <li>five</li>
//    </ul>
//    </>
//     )
// }



// function Page(){
//     return (
//         <>
//            <ol>
//             <li>one</li>
//             <li>two</li>
//             <li>three</li>
//            </ol>
//         </>
//     )
// }

// root.render(
//     // Page()   it also work
//     <Page/>
// )


// function Header(){
//     return (
//         <Fragment>
//         <header>
//         <img  src="https://imgs.search.brave.com/AZkKYOifhfns8OmMQcTUfP9YTKWXy4N2vwDbbzYEV9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw" alt="this is image" />
//         </header>
//        <main>
//         <h1>react is easy</h1>
//             <ol>
//                 <li>one</li>
//                 <li>two</li>
//             </ol>
//        </main>
//        <footer>
//         <small>
//         2024 aziz taufique development. All rights reserved.
//         </small>
//        </footer>
//         </Fragment>
//     )
// }

// root.render(
//     <Header/>
// )


// function Header(){
//     return(
//         <header>
//         <img  src="https://imgs.search.brave.com/AZkKYOifhfns8OmMQcTUfP9YTKWXy4N2vwDbbzYEV9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw" alt="this is image" />
//         </header>
//     )
// }

// function Page(){
//     return(
//         <>
//             <h1>this header is nested header</h1>
//             <Header/>
//         </>
//     )
// }

// root.render(
//     <Page/>
// )

// function Header(){
//     return(
//         <>
//         <header className="header">
//         <img className="img"  src="https://imgs.search.brave.com/AZkKYOifhfns8OmMQcTUfP9YTKWXy4N2vwDbbzYEV9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw" alt="this is image" />
//             <nav>
//                 <ul className="nav-list">
//                     <li className="nav-list-item">Pricing</li>
//                     <li className="nav-list-item">About</li>
//                     <li className="nav-list-item">Contact</li>
//                 </ul>
//             </nav>
//         </header>
//         <Foo/>
//         </>
//     )
// }

// root.render(
//     <Header/>
// )

// import { createRoot } from "react-dom/client";
// import Header from "./Header";
// import Main from "./Bdy";

// const root = createRoot(document.getElementById("root"))

// root.render(
//     <>
//     <Header/>
//     <Main/>
//     </>
// )


// import Mains from "./components/Mains";
// import Navbar from "./components/Navbar";

// export default function App(){
//     return(
//         <>
//         <Navbar/>
//         <Mains/>
//         </>
//     )
// }

import Header from "./components/Header";

export default function App(){
    return (
        <>
        <Header/>
        </>
    )
}