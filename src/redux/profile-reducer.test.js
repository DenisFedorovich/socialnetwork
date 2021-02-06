import profileReducer, {addPostActionCreator} from '../redux/profile-reducer';
import React from 'react';
import App from '../App';
import ReactDOM from 'react-dom';
import {deletePost} from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
    ],
};


it('length of post should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});


it('length of after length should be decrement', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);

    expect(newState.posts[3].length).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

