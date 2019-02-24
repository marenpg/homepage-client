import React from 'react';

const JokeList = ({jokes}) => (
    <div className='jokes'>
        {jokes.map((joke, i) =>
            <p key={i} className="jokes--text">
            {joke.jokeText}
            </p>
        )}
    </div>
);

export default JokeList;