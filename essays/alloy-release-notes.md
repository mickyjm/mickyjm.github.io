---
layout: essay
type: essay
published: true
title: Alloy Release Notes
date: 2017-01-15
labels:
  - Software Engineering
  - HTML
  - CSS
  - Semantic UI
  - Frameworks
  - Meteor
---

This semester (Spring 2017) I teamed up with [Ed White](https://spyhi.github.io/) and [Neil Teves](https://neilnthings.github.io/) to help out them develop and improve their app <i>Alloy</i>. <i>Alloy</i> aims to connect people through their skills and help them organize and collaborate projects together. In its current state, the app is limited to University of Hawaii faculty and students. To read more about <i>Alloy</i> click [here](https://alloyteams.github.io/).

## January 15, 2017 Update

Since majority of <i>Alloy</i> has already been developed, most of my time spent over the past week was to do simple improvements to get myself accustomed to their code before jumping into the code and possibly messing everything up.

<ul>
  <li><strong>Moved inline styles to global CSS</strong>
  <br />
  While majority of the project was developed, they mostly kept their CSS inline with the HTML code. I was suggested to move the inline CSS to the global CSS file to for easier editting and debugging.
  </li>
  <li><strong>Mobile Scaling</strong>
  <br />
  The layout of the project was well done for desktop viewing, but did not scale so well for mobile. I decided to fix this along the way.
  </li> 
</ul>

## February 16, 2017 Update

Been on a bit of a hiatus, but finally fixed my schedule up to allot time for <i>Alloy</i>. The changes are not that big so far, just fixing up some small errors.

<ul>
  <li><strong>Moved inline styles to global CSS</strong> (again)
  <br />
  I updated the inline css styles to be global last time and pushed those changes to the master branch. After pulling the  most recent master update I noticed that some of the css styles went back to the inline version. This seems to be a      problem on how pushing and pulling is handled on one of our developer's end. Hopefully we can fix this problem soon.
  </li>
  <li><strong>Mobile Scaling on Search Page</strong>
  <br />
  The search page has been updated to be a better fit for mobile scaling. This is a problem I overlooked. Though there are only a few pages in <i>Alloy</i>, it is very easy to overlook which pages has not been scaled for mobile yet. In the future I plan to also scale the Admin Page once that is implemented.
  </li>
</ul>

## March 1, 2017 Update

February is a short month. Less than two weeks after the 16th with a midterm in between. Anyway, here are some small updates on what I did.

<ul>
  <li><strong>Fixed CAS Login/Logout Button</strong>
  <br />
  When hovering over the Login/Logout button in the menu, the color would change letting the user know they can click the button but it did not work unless you were to click on the text itself. This is a problem in the way the tags were handled, especially since the CAS Login is its own template. The fix was not too bad to handle but I did run into some small problems.
  </li>
  <li><strong>Semantic UI Cleanup</strong>
  <br />
  The Semantic UI code in each page is not handled very well. There is a lot of grids/containers within grids/containers. While this works, it is a poor way of handling Semantic UI's way of making webpage layouts. Having so many grids/containers also does make the code a bit harder to read so cleaning this up will make it much easier to read the HTML code to fix, update or add new few features. This will also help in redesigning the UI overall, which I have planned. I have not merged the branch update yet as I have only updated a few pages.
  </li>
</ul>

## March 15, 2017 Update

Did not do as much updating as I wanted to this time around, but I did spend a good amount of time researching to get inspiration and come up with new ideas when redesigning the interface.

<ul>
  <li><strong>Overhaul HTML Code (Semantic UI)</strong>
  <br />
  The HTML code for each page was handled poorly. There is a lot of grids or containers within grids or containers. While this works, it is also a very poor way of handling Semantic UI's way of making webpage layouts. I fixed the accessible pages Semantic UI code. I did come across some problems such as fixing the horizontal rule on some of the headers. The horizontal rule being used was the default HTML5 version and Semantic UI's. When I tried changing it to Semantic UI's version it messed with the <em>Alloy</em> icon's style. I was able to fix this but then it messed with the icon's positioning. I then decided to just fix this issue when I redesign the pages, which is what this update was mostly about. Having to actually fix the sections of containers/grids within the main grid container allowed me to find what I could move around and even help with my planning of adding or redesigning the sections.
  </li>
</ul>

## April 1, 2017

During this update I spent an amount of time researching webpage layouts for the new landing and home page. I did go through a couple iterations, but mainly updated the master with the first rough draft and the "<em>final</em>" draft.

<ul>
  <li><strong>Update Landing Page and Home Page</strong>
  <br />
  During one of our meetings the team decided that the Landing Page needs to be redesigned along with the Home Page. This had to be done together because the previous person to design the original layout made the landing and home page into one. This was not really much of a problem as I do not mind it, but again, the way it was handled could have been designed better. I separated some parts of the page to be its own template and called it from the main template to better organize the code and make it easier to fix/update in the future. The problems I did come across was the projec cards fixing their size relative to the screen size. When looking at the Semantic UI example, it does not do that. While this is not really much of a problem, it is a slight annoyance to me, but will leave it alone if I am not able to fix it. The other problem is testing the notification cards. This is hard because I can't send invites and requests to myself on Meteor's Local Host, so I will need to user test how this looks to see if it does need fixing.
  <img class="ui medium leftt image" src="../images/landing-original.png">
  <img class="ui medium right image" src="../images/landing-draft001.png">
  </li>
</ul>
  

## Upcoming Features

<ul>
  <li><strong>Object-Oriented Templates</strong>
  <br />
  <em>Jan 15, 2017</em>
  <br />
  While doing simple improvements I also had to find similarities within the HTML to turn into templates and treat them as objects to pass around the files.
  <br />
  <em>Feb 16, 2017</em>
  <br />
  I am currently running into some problems on how to handle this. Will get there eventually.
  </li>
  <li><strong>Default Profile Images</strong>
  <br />
  <em>Jan 15, 2017</em>
  <br />
  Give users a few images to select from as a profile picture. Having implemented something similar in a previous project, I will bring over the code and improve it to be able to give users a selection of images to use for their profile.
  <br />
  <em>Feb 16, 2017</em>
  <br />
  I will be starting this very soon.
  <br />
  <em>Mar 1, 2017</em>
  <br />
  Started on this. Slowly making progress.
  </li>
  <li><strong>Fix UI Problems after User Testing and Update Other Pages UI</strong>
  <br />
  <em>Apr 1, 2017</em>
  <br />The Landing and and mainly the Home Page does need some user testing after being updated. I can not really view notifications when developing on my end as I can not really send invites to myself. I will need to see how they look with user testing and fix them. I may also update the UI for the other pages.
  </li>
</ul>
