import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';


export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      console.log('FETCH_POST ', action.payload.data.id);
      // const post = action.payload.data; // es5
      // const newState = { ...state }; // es5
      // newState[post.id] = post; // es5
      // return newState; // es5
      return { ...state, [action.payload.data.id]: action.payload.data };  // es6

    case FETCH_POSTS:
      console.log('FETCH_POSTS ', action.payload.data); // [ post1, post2 ]
      // take an array and create an object using lodash
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
