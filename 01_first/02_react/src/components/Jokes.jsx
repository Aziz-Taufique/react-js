

export default function Jokes(foo){
    console.log(foo)
    // console.log(foo.upvotes+1)

    // if(!foo.isPun){
    //     console.log("not pun")
    // }else console.log("pun")



    return(
        <>
       {foo.joke && <h2>{foo.joke}</h2>}
       {foo.info && <p>{foo.info}</p>}
       {/* conditional renderign in css */}
        <p className={{display: foo.name ? "block" : "none"}}>{foo.name}</p>  
        </>
    )
}