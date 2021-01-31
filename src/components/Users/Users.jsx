import React from 'react';
import userPhoto from './../../assets/img/rick.jpg';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    //navlink здесь себя ведет как тег <a>
    return <div >
        <div className={s.numberPage}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                    props.onPageChanged(p)// e - event(обработчик события)
                }}> {p} </span>
            })}
        </div>

        {props.users.map(u => <div key={u.id}>
            <div className={s.userBlock}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div className={s.btnPosition}>
                        {u.followed
                            ? <button className={s.btn} disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id) }}>
                                Unfollow</button>
                            : <button className={s.btn} disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.follow(u.id) }}>
                                Follow</button>}
                    </div>
                </div>
                <div className={s.infoBlock}>
                    <div className={s.nameAndStatus}>
                        <div className={s.name} >
                            <div> {u.name}: </div>
                        </div>
                        <div className={s.status}>
                            <div> "{u.status}" </div>
                        </div>
                    </div>
                    <div className={s.location}>
                        <div>
                            <div> {"u.location.city"}</div>
                        </div>
                        <div className={s.country}>
                            <div> {"u.location.country"} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
    </div>
}

export default Users;
/*<div>
                         {u.followed
                             ? <button onClick={() => {
                                props.unfollow(u.id)

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });



                             }} className={s.btn}>Unfollow</button>
                             : <button onClick={() => {
                                props.follow(u.id)

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });


                             }} className={s.btn}>Follow</button>}

                     </div>*/