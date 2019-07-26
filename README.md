# Simple Web Scraper

 <b>Disclaimer</b>: Web scraping can be illegal. This app was created for educational purposes only. Any misuse of this application or the source code is sole responsibility of the user. The author is not liable for any sort of damages the user causes. Please use it responsibly.
 
 # How to Use It
 
 Instructions:

1. Download both "client and "api" folder from Github page and save them to any new folder in your computer. 

2. Open cmd or Powershell and go to that folder using "cd" command. 

3. Once in that folder go to "cd client" first and run "npm install" in cmd. It will install the node modules. After it is done Come back to root folder by typing "cd.." in cmd and now do the same for api too. Go to api folder by typing "cd api" and install node modules by typing "npm install".

3. Once finished type command "npm run dev" and leave it. It start the backend express server in api folder. DO NOT CLOSE THIS CMD window

4. Open another cmd and this time go to client folder and start it using "npm start" command. DO NOT CLOSE THIS CMD WINDOW EITHER.

Let both cmd windows run.

5. Now both your client and api have started. You can check it by visiting http://localhost:3000/ for front-end (client) and http://localhost:8000/ for backend (api).

6. Once both are working open the webpage you want to scrape the data from. Identify the data and copy the selector by right clicking on it and selecting "Inspect". 

7. Input the URL and the selector in the Application and click fetch. It should return the text written in that selector.

# Please see the video below for demonstration of how the app works.

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/3R8VOc2WWfY/0.jpg)](https://www.youtube.com/watch?v=3R8VOc2WWfY)
 

