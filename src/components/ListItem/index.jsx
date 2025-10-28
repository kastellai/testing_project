import "../ListItem/style.css"

const ListItem = ({content}) => {

    return (
        <li className="listItem">
            <div className="listItem__text">{content}</div>
            <button className="listItem__btn-edit">Edit</button>
            <button className="listItem__btn-delete">Elimina</button>
        </li>
    );
}

export default ListItem;