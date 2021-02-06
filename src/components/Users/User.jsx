import React from 'react';
import userPhoto from './../../assets/img/rick.jpg';
import s from './Users.module.css';
import {NavLink} from 'react-router-dom';
import Paginator from "../Utils/Paginator/Paginator";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return <div>

        <div className={s.userBlock}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div className={s.btnPosition}>
                    {user.followed
                        ? <button className={s.btn} disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow</button>
                        : <button className={s.btn} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow</button>}
                </div>
            </div>
            <div className={s.infoBlock}>
                <div className={s.nameAndStatus}>
                    <div className={s.name}>
                        <div> {user.name}:</div>
                    </div>
                    <div className={s.status}>
                        <div> "{user.status}"</div>
                    </div>
                </div>
                <div className={s.location}>
                    <div>
                        <div> {"user.location.city"}</div>
                    </div>
                    <div className={s.country}>
                        <div> {"user.location.country"} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default User;

// return <div >
//     <div className={s.numberPage}>
//         {pages.map(p => {
//             return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
//                 props.onPageChanged(p)// e - event(обработчик события)
//             }}> {p} </span>
//         })}
//     </div>
//
//
//     {props.users.map(u => <div key={u.id}>
//         <div className={s.userBlock}>
//             <div>
//                 <div>
//                     <NavLink to={'/profile/' + u.id}>
//                         <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
//                     </NavLink>
//                 </div>
//                 <div className={s.btnPosition}>
//                     {u.followed
//                         ? <button className={s.btn} disabled={props.followingInProgress
//                             .some(id => id === u.id)}
//                                   onClick={() => { props.unfollow(u.id) }}>
//                             Unfollow</button>
//                         : <button className={s.btn} disabled={props.followingInProgress.some(id => id === u.id)}
//                                   onClick={() => { props.follow(u.id) }}>
//                             Follow</button>}
//                 </div>
//             </div>
//             <div className={s.infoBlock}>
//                 <div className={s.nameAndStatus}>
//                     <div className={s.name} >
//                         <div> {u.name}: </div>
//                     </div>
//                     <div className={s.status}>
//                         <div> "{u.status}" </div>
//                     </div>
//                 </div>
//                 <div className={s.location}>
//                     <div>
//                         <div> {"u.location.city"}</div>
//                     </div>
//                     <div className={s.country}>
//                         <div> {"u.location.country"} </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>)}
// </div>