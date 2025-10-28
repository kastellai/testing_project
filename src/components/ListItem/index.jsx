import style from "./ListItem.module.scss"

const ListItem = ({content}) => {

    return (
        <li className={style.listItem__wrapper}>
            <div className={style.listItem__text}>{content}</div>
            <div className={style.listItem__buttons}>
                <button className={style.listItem__btn_done}>Done</button>
                <button className={style.listItem__btn_edit}>Edit</button>
                <button className={style.listItem__btn_delete}>Elimina</button>     
            </div>     
        </li>
    );
}

export default ListItem;