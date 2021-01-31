
const EventItem = (props) => {
    return (
        <div>
            {props.title + ' ' + props.start + ' ' + props.end}
        </div>
    )
}

export default EventItem;