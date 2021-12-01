// import owner from './data/profile.json';
const PROFILE_API = 'http://localhost:4000/rest/profile/6197eff8b43a8376cbc951c6';
let owner = {};
fetch(PROFILE_API)
    .then(response => response.json())
    .then(profile  => owner = profile);
const profile = (state = owner, action) => {
    switch (action.type) {
        case 'update-profile':
            return action.profile;
        case 'get-profile':
            return action.profile;
        default:
            return state;
    }
}

export default profile;