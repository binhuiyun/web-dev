const PROFILE_API = 'http://localhost:4000/rest/profile/6197eff8b43a8376cbc951c6';

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile  =>
            dispatch({
                type: 'get-profile',
                profile
            })
        );

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
})

        .then(response => response.json())
        .then(profile  =>
            dispatch({
                type: 'update-profile',
                profile
            })
        );