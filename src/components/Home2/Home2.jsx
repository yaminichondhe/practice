import React from "react";
import "./Home2.css";

function Home2() {
  return (
    <>
    
    <div class="center">
        <div class="image"></div>
        
        <div class="content">
            <h1>Welcome to College Attendance Portal !</h1>
            <h3>Keep track of your classes and attendance with ease.</h3>
            <p>
                Welcome to our college attendance website! 
                To get started, register yourself and your college. 
                Once registered, if you are a teacher, log in to generate a one-time attendance code. 
                Students can easily mark their attendance by entering this unique code. 
                Enjoy a seamless and efficient attendance-taking experience with our platform!
            </p>
            <label for="cta-button">
                <button class="cta-button"><a href="get_started.html">Get Started</a></button>

            </label>
            
        </div>
    </div>
    <div class="center4">
        
        <div class="content4">
            <h1>Visual representation of weekly, monthly attendance!</h1>
            <h3>Visualize Your Attendance Data!</h3>
            <p>
                Easily analyze attendance trends with both tabular data and graphical representations. 
                Our intuitive graphs help you identify patterns, 
                showing which days and lectures have higher student presence and when attendance tends to drop. 
                This insight empowers you to make informed decisions and improve class engagement.

            </p>
        </div>
        <div class="image4"></div>
    </div>
    <div class="center3">
        <div class="image3"></div>
        <div class="content3">
            <h1>Always Beneficial!</h1>
            <h3>No need to worry about attendance now!</h3>
            <ul>
                <li>No chances of fake Attendance</li>
                <li>Reduction in unnecessary use pages directly effects on environment</li>
                <li>Saves time of teachers and students which increases the quality teaching time</li>
                <li>Allows one to one online interaction with teachers through comments</li>
                <li>No chances of mistakes in Attendance data</li>
            </ul>
        </div>
    </div> 
    <div class="center2">
        <div class="content2">
            <h1>Special feature of Website!</h1>
            <h3>Secure Attendance Verification:</h3>
            <p>
                To ensure the integrity of our attendance system, 
                students must remain on this webpage until the one-time code timer expires. 
                If a student attempts to open another app, visit a different site, 
                or close this page before the timer ends, their attendance will not be counted. 
                This feature prevents the sharing of codes with students who are not present in class, 
                maintaining a fair and accurate attendance record.
            </p>
        </div>
        <div class="image2"></div>
    </div>
    </>
    
  );
}

export default Home2;


