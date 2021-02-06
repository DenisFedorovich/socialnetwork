import React from 'react';
import styles from "./Paginator.module.css";
import s from "../../Users/Users.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div >
        {pages.map(p => {
            return <span className={currentPage === p && s.selectedPage} onClick={(e) => {
                onPageChanged(p)// e - event(обработчик события)
            }}> {p} </span>
        })}
        </div>
}

export default Paginator;