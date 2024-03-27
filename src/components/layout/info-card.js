export default function InfoCard(props) {
    return (
        <div className="info-card">
            <h2 className="card-title">{props.title}</h2>
            {props.children}
        </div>
    )
}