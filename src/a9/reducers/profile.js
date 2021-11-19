import owner from './data/profile.json';

const profile = (state = owner, action) => {
    switch (action.type) {
        case 'update-profile':
            return action.profile;
        default:
            return state;
    }
}

export default profile;