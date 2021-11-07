
# [Paijolizmal](https://comp3120-group-x.herokuapp.com/) &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)![npm version](https://img.shields.io/npm/v/react.svg?style=flat)![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

``Paijolizmal`` is a progressive web application which is for tracking productivity collaboratively built with React, MongoDB, Express, SASS and hosted with Heroku.
<p align="left"> 
    <p>   <a href="https://reactnative.dev/" target="_blank"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40" /> </a>
      <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />
 <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a>
  <a href="https://mui.com/" rel="noopener" target="_blank"><img width="40" src="https://mui.com/static/logo.svg" alt="MUI logo"></a>
  <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40" /> </a>
</p>

# Paijolizmal Outline

## Inspiration

Prolonged focused work is hard to achieve with the ever present distractions of today's technologie. As such it is more important than ever for students, researchers, and learners of all fields and disciplines to manage their focus.

``Paijolizmal`` is a focus tracking and aid application. The application was conceptualised as a community based app which would incentivise members to participate in focused work sessions and provide valuable feedback and tracking metrics on their work habits.

## Application Breakdown

* **Time Tracking:**
The main tracking services which ``Paijolizmal`` provides are in the form of *Pomodoro* style timed sessions. The *Pomodoro* method is a method for maintaining a sustained workflow over prolonged periods of time. In the traditional *Pomodoro* method, individuals usually set a focused work time of 30 to 50 minutes followed by a break time of 5 to 10 minutes, which are repeated for multiple hours. Participating in bursts of intense focused work for less than 1 hour, followed by reasonable breaks, has been shown to greatly improve effectiveness and efficiency, as well as provide a more sustainable method of work. Paijolismal provides users the ability to start timed sessions of up to 1 hour, ensuring that members take the necessary breaks to sustain their work and maintain their health. The timer implemented is intended to be easy to use and provide the minimal amount of friction to users starting their work.


* **Insentive to Work:** 
``Paijolizmal`` provides incentives for completing these timed sessions in the form of coins. The coins are paid out at the end of each completed session, and the amount paid out is based on the duration of the session. These coins can be utilised within the application by members to purchase ``RANTS``. A RANT is a ‘note’ which a user may write on and share with the ``Paijolizmal`` community. Users may use these ‘notes’ to write whatever they wish, though as is implied by the name (``RANTS``) these notes are intended to allow users to vent their frustrations and grievances. As students themselves, the development team of ``Paijolizmal`` know how important it is to be able to relieve stress and anxieties though sharing shared issues. Though users may also use their ``RANTS`` to share worlds of encouragement, short poems, or even share their achievements. All ``RANTS`` are displayed on a communal board where any other users and visitors to the site may see them. The sole purpose of these notes is to provide a community of like minded individuals, who all have an interest in furthering their studies, education and skills through managing their work.

* **Statistics Tracking:**
The final aspect of ``Paijolizmal`` is the stats tracking system. Every session completed provides valuable statistics which may be useful to users. These statistics come in the form of; time of day a user completed most of their sessions, number of sessions a user has completed consecutively, days of the week sessions were completed, over number of hours spent maintaining focused work, etc. These metrics are highly valuable as they can help members understand how they work and what works best for them, as no two members will work the same.

The developers of ``Paijolizmal`` committed themselves for 4 weeks to produce the first MVP of this application. The developers are passionate students with first hand experience in the trial and tribulations of managing intense workloads. It is hoped that this application both proves proof of the skills and capabilities of the team as competent developers, whilst also being a functionally valuable and valuable product.

# MVP Implementation

## Reworked milestones

As was expected, the aforementioned milestones simply served as a guide to development and were ultimately revised as work began. The following paragraphs will detail the revised workflow and the reasoning behind the changes made:

1. The first week proceeded mostly as expected, though it was decided that development should be begun on the database in the first week. Thus additional work was added into the weeks 1 work and milestone requirements.

2. Week two was too heavily weighted in the original milestone outline and as such was revised to push some of the tasks into the third week. Thus week 3 consisted of the implementation of most of the logic specified though transactions were moved back and the implementation of authentication was also paused.

3. The third week thus changed quite dramatically from the original plan with most of the time being delegated to the implementation of the transaction system and the authentication/validation systems. The only testing completed was ultimately in the form of manual testing within this milestone.

4. The final week revolved around polishing the application and resolving any logic issues which were still present. The transaction system required tweaking due to issues uncovered during the previous week and a large proportion of team resources were dedicated to polishing the application styling. The application was successfully deployed and the desired MVP results were achieved.

## Paijolizmal MVP

Following is a detailed review of all notable components which were implemented in the MVP produced. First the technical aspects of the applicaiton are detailed, followed by a breakdown of each page and the functionality achieved:

![MVPwalkthrough](src\assets\img\paijolizmalMVP.gif)

### Technical components

>**Backend:** The MVP ``Paijolizmal`` application has a MongoDB database with NodeJs, express and mongoose middleware implemented. The database collection has three main documents, notes, timers and users, with one supplementary document notetypes.
>
>* **Users:** the users document specified a list of all members of the ``Paijolizmal`` application. Each user consisted of a user id, username, password, stats, and coins. Services were provided to allow the creation of users, secure retrieval of user information validated through logging in, and the updating of users.
>
>* **Timers:** the timers document provides stored data which references timed user work sessions. The purpose of this document is to store valid timer data which may be utilised to verify a user's worked sessions. Each entry consists of an associated user, a session start time and a duration. The entries in this document are automatically removed upon verification of a timed session's completion.
>
>* **Notes:** the notes document provides a list of all the ``RANTS`` produced by users. The entries are detailed with an id, title, body or text content, associated user, and visualisation data. Services are provided to allow for the creation and retrieval of notes.
>
>* **Notetypes:** notetypes is a document utilised to store note variations. This allows for new note variations to be added and dynamically allowed for the generation of notes. A notetype is defined by an id, background colour and cost.
>
>**Frontend:** The ``Paijolizmal`` is a React application. The app implements Material UI (MUI) and Sass for the styling of the user interfaces. This allows for the applications to implement reactive design. All pages of the application are implemented to allow compatibility with a range of divides. The app can be comfortably accessed on mobile devices, larger tablets and desktop/laptop setups with wide screen monitors.
>
>**Security:**
``Paijolizmal`` handles very little sensitive data and this is by design. The application is not meant to be intrusive or provide high barriers to entry, the application is simply meant to be an easily accessible community that encourages interaction through sharing somewhat anonymously. Despite this though the application still implements reasonable security measures.
>
>* **Token authentication** is implemented into user sessions. Any user specific data or full application access requires a valid authentication token. Authentication tokens are passed to the server in request headers and stored locally on the client end in local storage.
>
>* **Password hashing** is implemented using the bcrypt library. A password is hashed the moment it is created and is never passed over a network unencrypted. Newly created passwords are hashed before being sent and stored in the database. Any future password comparisons are performed on the server side of the application, as a hashed password may be passed and then compared without ever having to decrypt the hashed passwords. Passwords are also not passed to the frontend client from the database.
>
>* **Validation:** Some minor security measures were also implemented to ensure that the timed sessions were validated. As the timer is a client side implementation, users may bypass the timed session to earn coins through altering their local computers state. In order to make the application more secure against such tactics, server side verification of timed sessions is implemented. When a timed session is started a timer entry is sent to the database using UTC time to define the start time and duration which may be verified by the server. This time is stored and once the session is completed another request is sent to the server which validates that the correct amount of time has passed. This secures the coin transaction process by ensuring that recipients actually deserve the coins they are receiving.
>
>**Deployment:**
``Paijolizmal`` is deployed and hosted on Heroku at [Paijolizmal](https://comp3120-group-x.herokuapp.com/) (note that this link will not be indefinitely supported).

### Page Breakdown

The MVP of Paijolozmal required a reasonable list of client side components to make the application usable. The following section will break the application doen by pages and detail each of the components implemented as a part of this MVP.
> 
> **Navigation Page:** A top navigation bar was included in the MVP to allow users to navigate between the home page, dashboard and login/out pages. If a user is logged in then the navigation bar will also provide the option for a user to logout. The navigation bar is styled with the custom colour pallet and features the application title logo.
>
> **Login and Logout Page:** The login page provides a form which is equipped with error handling to create a more seamless user experience. The page also directs the user to their dashboard upon successfully logging in. The sign up page allows for a user to create a new account and again is equipped to handle errors and display the appropriate messages to direct users.
>
> **Home Page:** The home page is equipped with a grid display of ``RANTS`` which have been posted. The home page may be seen by all users, logged in or not. The page provides interesting visuals through the animation of each RANT which was implemented through the user of Sass.
>
> **Dashboard Page:** The dashboard consists of three main components, the ``profile``, ``timer`` and ``shop``. Each of these components are organised to allow users on all devices to access their functionality. The styling is also kept consistent throughout by the overarching colour pallet of the application
>
>* The ``profile`` section of the dashboard allows users to view their personal information and statistics. The profile also allows users to edit and update their user information, including their username and password. The update form is styled using MUI compients and transitions to create a more pleasant user experience with a more reactive application.
>
>* The ``timer`` is implemented as a selection and display area. Times from 1 minute to 60 minutes may be selected to complete a timed session. A visitation of the time remaining in a session is provided through large circular progress bars which are animated. The timer automatically congratulates and updates the users balance once the session has completed and been validated.
>
>* Finally the ``shop`` section of the dashboard allows users to interact with a dynamic shop display. Users can scroll through custom selections of styled ``RANTS`` which they may then fill out with a title and body of text. The shop is animated and reactive creating an immersive experience in the application. The shop facilitates user transactions and if a purchase is successful will create users RANT and display it on the homepage for all users to view.

This MVP was completed on 7/1//2021. You can improve it by sending pull requests to [this repository](https://github.com/reactjs/reactjs.org).

## Where the most work has been done

📦group-web-project-group-x  
 ┣ 📂SCREENSHOTS  
 ┣ 📂public  
 ┣ 📂server  
 ┃ ┣ 📂controllers  
 ┃ ┣ 📂models  
 ┃ ┣ 📂testRequests  
 ┃ ┣ 📂tests  
 ┣ 📂src  
 ┃ ┣ 📂assets  
 ┃ ┃ ┣ 📂global  
 ┃ ┃ ┣ 📂img  
 ┃ ┃ ┣ 📂scss  
 ┃ ┃ ┃ ┣ 📂components  
 ┃ ┃ ┃ ┣ 📂layout  
 ┃ ┃ ┃ ┗ 📂views  
 ┃ ┣ 📂components  
 ┃ ┃ ┣ 📂header  
 ┃ ┃ ┣ 📂shop  
 ┃ ┣ 📂services  
 ┃ ┣ 📂tests  
 ┃ ┣ 📂views  
 ┃ ┃ ┣ 📂Dashboard  
 ┣ 📜DEPLOYMENT.md  
 ┣ 📜Procfile  
 ┣ 📜README.md  
 ┣ 📜jest.all.config.js  
 ┣ 📜package-lock.json  
 ┣ 📜package.json  
 ┗ 📜static.json  


## Next Steps


## Communication & Roles
### Communication
[Trello](https://trello.com/b/Qfrxz3KY/group-project-comp3120) is where we keep track of our tasks
[Discord Server](https://discord.com/) is where we communicate for meetings and general comms
 ### Roles 
 - Front-End Software Engineer: [Jonah Skinner](https://github.com/J5kinner)
 - Full-Stack Software Engineer: [Elizabeth Laham](https://github.com/elizabetht94)
 - Full-Stack Software Engineer: [Paige Anthony](https://github.com/paigelea)
 - Back-End Software Engineer:  [Malachi Mashiah](https://github.com/Ner0theHer0)

