const PROFILE_API = 'http://localhost:4000/api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile  =>
            dispatch({
                type: 'get-profile',
                profile
            })
        );