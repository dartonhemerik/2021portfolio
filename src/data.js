import React from 'react';
import { FaCodepen, FaFreeCodeCamp, FaGithub } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/projects-cosw20',
    text: 'HTML/CSS Projects',
  },
  {
    id: 2,
    url: '/projects-cosw200',
    text: 'JS Projects',
  },
  {
    id: 3,
    url: '/about',
    text: 'about/contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://codepen.io/dartonh',
    icon: <FaCodepen />,
  },
  {
    id: 2,
    url: 'https://www.freecodecamp.org/dartonhemerik',
    icon: <FaFreeCodeCamp />,
  },
  {
    id: 3,
    url: 'https://github.com/dartonhemerik',
    icon: <FaGithub />,
  },
];

export const cosw20Projects = [
  {
    id: 1,
    title: 'Foundation Report',
    url: 'https://codepen.io/dartonh/full/VwKwZPX?',
    image: '/media/cosw20proj4.png',
    info:
      'A Foundation framework report made entirely with the Foundation framework! The in-house CSS classes made responsive web design a breeze, provided navgational options, and allowed the easy addition of a carousel to name a few features.',
    tools: ['HTML', 'CSS', 'Foundation Report'],
  },
  {
    id: 2,
    title: 'Video Game Survey',
    url: 'https://codepen.io/dartonh/full/KKMaZNa',
    image: '/media/cosw20proj3.png',
    info:
      'A video game survey form that checks for required fields. These inputs include email, buttons, checkboxes, dropdowns, a comment box, and a submit button. Responsive design was implemented.',
    tools: ['HTML', 'CSS'],
  },
  {
    id: 3,
    title: 'Unnecessary Inventions',
    url: 'https://codepen.io/dartonh/full/RwRbpvR',
    image: '/media/cosw20proj2.png',
    info:
      "A mock online shop for Matty Benedetto's Unnecessary Inventions. Heavy use of CSS flex to structure the content with a bit of CSS grid to organize the 'Products' tiles. Responsive web design thanks to CSS flex.",
    tools: ['HTML', 'CSS Flex', 'CSS Grid'],
  },
  {
    id: 4,
    title: 'Grant Imahara Tribute',
    url: 'https://codepen.io/dartonh/full/abNqqrr',
    image: '/media/cosw20proj1.png',
    info:
      'A tribute page dedicated to the late Grant Imahara of Mythbusters fame. Pure HTML and CSS utilizing floats to organize content.',
    tools: ['HTML', 'CSS'],
  },
  {
    id: 5,
    title: 'Sass Style Guide',
    url: 'https://codepen.io/dartonh/full/XWjmmQe',
    image: '/media/cosw20wk14.png',
    info:
      'Style guides set the standard for how the CSS is written and used. SCSS variables were assigned to the different colors, typography, and headings.',
    tools: ['HTML', 'SCSS'],
  },
  {
    id: 6,
    title: 'Hand Drawn Images',
    url: 'https://codepen.io/dartonh/pen/dyXePxx',
    image: '/media/cosw20wk10.png',
    info:
      'A really fun activity that involved getting familiar with creating Scalable Vector Graphics (SVGs) using XML code. The graphics software Vectr was used to create Fire Plant.',
    tools: ['HTML', 'SVG Graphics'],
  },
  {
    id: 7,
    title: 'Spooky Parallax',
    url: 'https://codepen.io/dartonh/full/oNLeyyQ',
    image: '/media/cosw20wk9c.png',
    info:
      'The parallax scrolling effect was used to give the halloween themed activity a little more oomph. It allowed the images of the costumed doggies and cupcake to fill the screen as cover photos while allowing the content to scroll by.',
    tools: ['HTML', 'CSS Parallax'],
  },
  {
    id: 8,
    title: 'Floating Jack',
    url: 'https://codepen.io/dartonh/pen/eYzEyrp',
    image: '/media/cosw20wk9b.png',
    info:
      'The @keyframe rule was applied to our friend Jack, the Pumpkin King, giving him the ability to "float". This "float" ability is tied to the translate() method within the transform property.',
    tools: ['HTML', 'CSS Animations'],
  },
  {
    id: 9,
    title: 'Jack-O-Laterns',
    url: 'https://codepen.io/dartonh/pen/KKMvXjv',
    image: '/media/cosw20wk9a.png',
    info:
      "The collection of Jack-O-Laterns images were modified when hovered over using the properties transform and filter. The various values gave each Jack-O-Latern it's own unique effect. CSS Flex was used for mobile design.",
    tools: ['HTML', 'CSS Transitions/Transforms'],
  },
];

export const cosw200Projects = [
  {
    id: 1,
    title: 'Vue.js Report',
    url: 'https://codepen.io/dartonh/full/gOwrWJW',
    image: '/media/cosw200vueProject.png',
    info:
      "The youngest of the big three JS frameworks Vue.js caught my attention through it's approachable code and wide use by well known companies. The Vue.js report was made with HTML and CSS.",
    tools: ['HTML', 'SCSS'],
  },
  {
    id: 2,
    title: 'Form Validation',
    url: 'https://hw7-jsvalidate.dartonhemerik.repl.co/',
    image: '/media/cosw200hw7.png',
    info:
      'Form validation is taken further with JavaScript through checking character length, confirming that passwords match, and stating specific messages for invalid inputs. A counter is used to keep track of the remaining character allowed for the comment box',
    tools: ['JS', 'HTML', 'CSS'],
  },
  {
    id: 3,
    title: 'AJAX/JSON',
    url: 'https://cosw200-hw6-ajaxjson.dartonhemerik.repl.co/',
    image: '/media/cosw200hw6.png',
    info:
      'The Maker Bus site uses AJAX/JSON to fill out a timetable of events at different locations. JavaScript functions retrieved data from the JSON file and are inputted through click events.',
    tools: ['JS', 'jQuery', 'AJAX/JSON'],
  },
  {
    id: 4,
    title: 'Qualities of JS Programmer',
    url: 'https://codepen.io/dartonh/full/OJXBroE',
    image: '/media/cosw200hw5.png',
    info:
      'A program that allows users to input new text to the "Qualities of JavaScript Programmers" list. This is done through an event listener, which activates a function creating a new element and appending itself to the targeted location.',
    tools: ['JS', 'HTML', 'CSS'],
  },
  {
    id: 5,
    title: 'Character Generator',
    url: 'https://codepen.io/dartonh/pen/dyXddGM?editors=1010',
    image: '/media/cosw200hw4.png',
    info:
      'A random World of Warcraft character generator that was a lot of fun to make. Many arrays were used to store all the information. Random number generators and stat comparisons determined a good or bad ending for the character.',
    tools: ['JS', 'HTML', 'CSS'],
  },
  {
    id: 6,
    title: 'Strings & Arrays',
    url: 'https://codepen.io/dartonh/pen/LYZbxog',
    image: '/media/cosw200hw3.png',
    info:
      'This program is two parts. The first requires a string that is at least 25 characters before manipulating the output using various methods. The second part inputs the string into an array before manipulating the array using various methods.',
    tools: ['JS', 'CSS'],
  },
  {
    id: 7,
    title: 'Functions',
    url: 'https://codepen.io/dartonh/pen/JjKGWBN',
    image: '/media/cosw200hw2.png',
    info:
      'A fantasy story built entirely in JavaScript with multiple endings. Sections of the story are neatly wrapped in their own functions for organization. Random number generator and for loops are used to elevate the experience.',
    tools: ['JS'],
  },
  {
    id: 8,
    title: 'Input & Output',
    url: 'https://codepen.io/dartonh/details/rNLaLRM',
    image: '/media/cosw200hw1.png',
    info:
      'A simple math and trivia program built purely in JavaScript. A tracker keeps count of the correct guesses and a different statement is provided at the end depending on the score.',
    tools: ['JS'],
  },
];
