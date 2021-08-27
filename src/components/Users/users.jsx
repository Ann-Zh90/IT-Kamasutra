import React from "react";
import style from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUN8PNq9Fzwe4gkSW3yjcUOwyHEBluYy0RA&usqp=CAU',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQT8yUXrkDf5pKs0bRtfcAOkzgQkkTc5ozw&usqp=CAU',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moskow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fYHdQXrttCCsDmYgV9S7XuuMk2ebdREBrA&usqp=CAU',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }
    return <div>
        {props.users.map((u) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoURL} className={style.userPhoto} alt=''/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}

    </div>
}

export default Users;