---
layout: essay
type: essay
published: true
title: Alloy Release Notes 1
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

## Upcoming Features

<ul>
  <li><strong>Object-Oriented Templates</strong>
  <br />
  <em>Jan 15, 2017:</em> While doing simple improvements I also had to find similarities within the HTML to turn into templates and treat them as objects to pass around the files.
  <br />
  <em>Feb 16, 2017:</em> I am currently running into some problems on how to handle this. Will get there eventually.
  </li>
  <li><strong>Default Profile Images</strong>
  <br />
  <em>Jan 15, 2017:</em> Give users a few images to select from as a profile picture. Having implemented something similar in a previous project, I will bring over the code and improve it to be able to give users a selection of images to use for their profile.
  <em>Feb 16, 2017:</em> I will be starting this very soon.
  </li>
  <li><strong>Ability to Upload a Profile Image</strong>
  <br />
  <em>Jan 15, 2017:</em> After implementing default images, we want to give people the ability to upload their own image.
  <br />
  <em>Feb 16, 2017:</em> Ed White has decided to take on this task.
  </li>
  <li><strong>Overhaul HTML Code (Semantic UI)</strong>
  <br />
  <em>Feb 16, 2017:</em> Currently the HTML code for each page is handled poorly. There is a lot of grids or containers within grids or containers. While this works, it is also a very poor way of handling Semantic UI's way of making webpage layouts. I plan to overhaul the code to fix it up a bit.
  </li>
</ul>
