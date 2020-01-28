import React from "react";

const Description = () => {
  return (
    <div className="instructions">
      <h2>Instructions:</h2>
      <p>
        Follow the instructions in the video below or read the instructions on 
          <a style={{textDecoration: "underline"}} href="https://github.com/toorhamza/simple-web-scraper">
          {""} Simple Web Scraper Github
        </a>{" "}
        repository page.{" "}
      </p>
      <p style={{color: "red"}}>Please Note: This app can only scrape text and it might not work on all the webpages due to them blocking bots.</p>
      <p>This app was created just to demonstrate skills and learn PuppeteerJS. </p>
      <div>
        <iframe
          title="Test-video"
          width="70%"
          height="300"
          src="https://www.youtube.com/embed/3R8VOc2WWfY"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default Description;
