
export default function Components(props) {
    console.log(props);   // return object
    return (
        <article className="contact-card">
            <img src={props.img} alt={`photo of ${props.name}`} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={props.phoneIcon} alt="phone icon" /> {/* Replace with an actual phone icon URL */}
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={props.emailIcon} alt="email icon" /> {/* Replace with an actual email icon URL */}
                <p>{props.email}</p>
            </div>
        </article>
    );
}
