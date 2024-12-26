
// import { createRoot } from "react-dom/client";
// // import App from "./App";
// let root = createRoot(document.getElementById("root"))


// function Aziz(){
//     let firstName = "aziz"
//     let lastName = "taufiqeue"
//     let hour = new Date().getHours()

//     let timeOfDay;

//     if(hour <12 ) timeOfDay = "Good morning"
//     else if(hour >= 12 && hour < 17) timeOfDay = "Good afternoon"
//     else if(hour >=17 && hour < 21 ) timeOfDay = "Good evening"
//     else timeOfDay = "Good night"
//     return(
//         <>
//         <h1>Hello {firstName} {lastName}</h1>
//         <h1>It is currentlry {new Date().getHours() % 12}</h1>
//         <h1>{timeOfDay}</h1>
//         </>
//     )
// }

// root.render(
//     // <App/>
//     <Aziz/>
// )


import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"))

root.render(
    <App/>
)