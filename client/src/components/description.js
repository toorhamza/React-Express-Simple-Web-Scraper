import React from 'react';

const Description = () => {
    return (
        <div className="instructions">
        <h2>Instructions:</h2>
        <p>Follow the instructions in the video below or read the instructions on 
            <a href="https://github.com/toorhamza/simple-web-scraper">Simple Web Scraper Github</a> repository page. </p>
            <p>Please Note:This app can only scrape text.</p>
            <div><iframe title="Test-video" width="600" height="400" src="https://www.youtube.com/embed/3R8VOc2WWfY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe></div>
        </div>
    )
}

export default Description;