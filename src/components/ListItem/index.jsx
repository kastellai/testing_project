import style from "./ListItem.module.scss"

const ListItem = ({content}) => {

    return (
        <li className={style.listItem__wrapper}>
            <div className={style.listItem__text}>{content}</div>
            <button className={style.listItem__btn_edit}>Edit</button>
            <button className={style.listItem__btn_delete}>Elimina</button>
        </li>
    );
}

export default ListItem;