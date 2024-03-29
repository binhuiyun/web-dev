import posts from './data/tweets.json';

const tweets = (state=posts, action) => {
    switch (action.type) {
        case 'create-tweet':
          state=[action.tweet,
              ...state]
            return state;

        case 'delete-tweet':
            return state
                    .filter(tweet => tweet._id !== action.tweet._id)

        case 'like-tweet':
            return state.map(tweet => {
                    if(tweet._id === action.tweet._id) {
                        if(tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                })
        case 'fetch-all-tweets':
            return action.tweets;
            break;

        default:
            return(state);
    }
};


export default tweets;

