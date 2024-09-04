import'./EventCard.css'
function EventCard({title, date, place}) {
    return ( 
        <div className="eventCard">
        <h3>{title}</h3>
        <p>Дата: {date}</p>
        <p>Место: {place}</p>
        </div>
     );
}

export default EventCard;