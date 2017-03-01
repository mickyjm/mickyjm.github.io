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
  When hovering over the Login/Logout button in the menu, the color would change letting the user know they can click the button but it did not work unless you were to click on the text itself. This is a problem in the way the tags were handled, especially since the CAS Login is its own template. The fix was not too bad to handle but I did run into problems with the size of the button in the menu. Turns out, it was a problem with the CSS.
  </li>
  <li><strong>Semantic UI Cleanup</strong>
  <br />
  The Semantic UI code in each page is not handled very well. There is a lot of grids/containers within grids/containers. While this works, it is a poor way of handling Semantic UI's way of making webpage layouts. Having so many grids/containers also does make the code a bit harder to read so cleaning this up will make it much easier to read the HTML code and update or add new few features. This will also help in redesigning the UI overall, which I have planned. I have not merged the branch update yet as I have only updated a few pages.
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
  <br />
  <em>Mar 1, 2017:</em> Pages are being updated slowly.
  </li>
  <li><strong>Update Home and Landing Page UI</strong>
  <br />
  <em>Mar 1, 2017:</em> After our group meeting, we decided that there needs to be a change in how the UI looks, mainly the Landing and Home pages. I plan to redesign the layout of both these pages. I also have free reign to redesign the other pages, if I choose to do so. I do like the other page layouts, but we will see what happens after researching webpage layouts for the landing and home pages.
  </li>
</ul>
