import initialState from '../initialState';
import update from 'immutability-helper';

export default (count = initialState.count, action) => {
    switch (action.type) {
    case 'ADD_CLICK_COUNT':
        return update(count, {
            clicks: {$set: count.clicks + (action.payload || 1)}
        });
    default:
        return count;
    }
};
