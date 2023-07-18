"use strict";

let playList = [
   {
      author: "LED ZEPPELIN",
      song: "STAIRWAY TO HEAVEN",
   },

   {
      author: "QUEEN",
      song: "BOHEMIAN RHAPSODY",
   },

   {
      author: "LYNYRD SKYNYRD",
      song: "FREE BIRD",
   },

   {
      author: "DEEP PURPLE",
      song: "SMOKE ON THE WATER",
   },
   {
      author: "JIMI HENDRIX",
      song: "ALL ALONG THE WATCHTOWER",
   },

   {
      author: "AC/DC",
      song: "BACK IN BLACK",
   },

   {
      author: "QUEEN",
      song: "WE WILL ROCK YOU",
   },

   {
      author: "METALLICA",
      song: "ENTER SANDMAN",
   },
];

let blockTitle = document.querySelector(".header");
let blockSong = document.querySelector(".song");

let newTitle = document.createElement("h1");
newTitle.classList.add("title");
newTitle.innerText = "Song list";
blockTitle.append(newTitle);

playList.forEach((item) => {
   blockSong.innerHTML += `<li>Author: ${item.author}, 
      song: ${item.author} </li>`;
});
