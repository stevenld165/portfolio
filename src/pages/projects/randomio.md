---
layout: /src/layouts/ProjectPageLayout.astro
title: "Randomio"
pubDate: 2024-10-01
description: "Randomio is a web-app for generating a random episode of your favorite shows for when you don't know what to watch!"
technologies: ["react", "javascript"]
image:
  url: "/images/projects/randomio.jpg"
  alt: "Thumbnail of Randomio app."
github: "https://github.com/stevenld165/randomio-webapp"
url: "https://randomio.netlify.app/"
---

_Personal Project_

**Randomio** is a React web app that generates a random episode of a randomly selected show from a list provided by the user. This solves my personal issue I face when I don't know what to watch, but I have a limited amount of time, like when eating dinner. This project integrates with Stremio by creating links that take you straight to the episode it chooses without any extra steps!

Developed with **React**

## 🧩 Features

- Selects random episode from .yaml list provided by user
- Generates Stremio link that opens straight to the episode selected
- Saves uploaded .yaml list to browser storage
- Convenient back button in case you skipped one you liked

## 💡 Technologies used

- React
- OMDB API
- Stremio Cinemeta API
- HTML5
- JavaScript

## 🌐 Demo

👉 [View live demo](https://randomio.netlify.app/)

## 🎯 Objective

The purpose of Randomio is to provide an easy way to revisit favorite shows when pressed for time. I created it to learn and practice React for the first time, and was built upon the backbone of a Python command line tool I made that was for the same purpose. Having a nice-looking user interface makes it compatible with many more devices, and in the future I plan to made a better optimized version for mobile/TV devices.

🚀 _Developed by Steven Duong_
