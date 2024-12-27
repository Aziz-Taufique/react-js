

// export default function Entry(){
//     return (
//         <>
//             <article>
//                 <div className="main-image-container">
//                 <img className="main-image" src="https://imgs.search.brave.com/B-qXiTVn1J_BVn0JTlsy52anlgJab-MQ2ZOgPBm-wwU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9scC1j/bXMtcHJvZHVjdGlv/bi5pbWdpeC5uZXQv/MjAxOS0wNi85N2U4/YjdhMWQ1NGMzMWZl/NmVkODNhNGRlZDE4/NWMzMy1ob3J5dS1q/aS5qcGc_Zml0PWNy/b3AmYXI9MToxJnc9/MTIwMCZhdXRvPWZv/cm1hdCZxPTc1" alt="" />
//                 </div>
//                     <div className="main-items">
//                         <img className="logo-image" src="https://imgs.search.brave.com/iVPBEhZtN2LPXchyLOCMGRPkROlHlzmGOtCWaKENs50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzE5OC0xOTg0/MDE2X2xvY2F0aW9u/LWNpcmNsZS5wbmc" alt="" />
//                         <span>Japan</span>
//                         <a href="https://support.google.com/maps/thread/154163526/map-location-shared-link-shows-in-japanese-instead-of-english?hl=en">View on google map</a>
//                         <h1>white house</h1>
//                         <p>27 jan 2024</p>
//                         <p></p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores ipsa sed quia nobis molestias reprehenderit illo sequi natus quo. Suscipit aliquam consequuntur itaque, dolorem sunt quasi dolore accusamus, libero fugiat similique provident vitae ad quibusdam obcaecati ducimus in, aspernatur laboriosam. Possimus odit mollitia eveniet dicta libero provident nulla rerum.
//                     </div>
//             </article>
//         </>
//     )
// }





// export default function Entry(props){
//     return (
//         <>
//             <article>
//                 <div className="main-image-container">
//                 <img className="main-image" src={props.img.src} alt={props.img.alt} />
//                 </div>
//                     <div className="main-items">
//                         <img className="logo-image" src="https://imgs.search.brave.com/iVPBEhZtN2LPXchyLOCMGRPkROlHlzmGOtCWaKENs50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzE5OC0xOTg0/MDE2X2xvY2F0aW9u/LWNpcmNsZS5wbmc" alt="" />
//                         <span>{props.title}</span>
//                         <a href="https://support.google.com/maps/thread/154163526/map-location-shared-link-shows-in-japanese-instead-of-english?hl=en">View on google map</a>
//                         <h1>{props.country}</h1>
//                         <p>{props.date}</p>
//                         <p>{props.text}</p>
//                     </div>
//             </article>
//         </>
//     )
// }


// passing object as props

export default function Entry(props){

    console.log(props)
    return (
        <>
            <article>
                <div className="main-image-container">
                <img className="main-image" src={props.entry.img.src} alt={props.entry.img.alt} />
                </div>
                    <div className="main-items">
                        <img className="logo-image" src="https://imgs.search.brave.com/iVPBEhZtN2LPXchyLOCMGRPkROlHlzmGOtCWaKENs50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzE5OC0xOTg0/MDE2X2xvY2F0aW9u/LWNpcmNsZS5wbmc" alt="" />
                        <span>{props.entry.title}</span>
                        <a href="https://support.google.com/maps/thread/154163526/map-location-shared-link-shows-in-japanese-instead-of-english?hl=en">View on google map</a>
                        <h1>{props.entry.country}</h1>
                        <p>{props.entry.date}</p>
                        <p>{props.entry.text}</p>
                    </div>
            </article>
        </>
    )
}