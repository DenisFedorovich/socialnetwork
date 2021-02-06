import React from 'react';
import userPhoto from './../../assets/img/rick.jpg';
import s from './Users.module.css';
import {NavLink} from 'react-router-dom';
import Paginator from "../Utils/Paginator/Paginator";
import User from "./User";

let Users = ({
                 currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress,
                 follow, unfollow, ...props
             }) => {

    return <div>

        <div className={s.numberPage}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        </div>


        {users.map(u => <User user={u}
                              followingInProgress={followingInProgress}
                              follow={follow}
                              unfollow={unfollow}
                              key={u.id}
            />
        )}
    </div>
}


export default Users;


