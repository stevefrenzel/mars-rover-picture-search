# Mars Rover Search by Steve Frenzel

###### Please note this is a work in progress website and documentation, so content and appearance will change during time.

## 1. Introduction

My name is Steve and I'm a Junior Full Stack Web Developer from Berlin, Germany. I graduated from coding bootcamp [SPICED Academy](https://www.spiced-academy.com/) in May 2019 and this is my first project I'm working "on my own".

I had a lot of fun using [React](https://reactjs.org/) during my studies, so I decided to dive deeper into the documentation to find out what this JavaScript library is really capable of.

This project will also be my playground for making a website as responsive as possible, as this is not only a really interesting process, but also crucial for making it look good on as many devices as possible. Therefore I will either use [Bootstrap](https://getbootstrap.com/) or [styled components](https://www.styled-components.com/), I haven't decided yet. 😬

## 2. Idea

My main goal will be to create a website that is getting live data from an API of my choice, looks and feels nice and is as responsive as possible. For this project I will access the [NASA API](https://api.nasa.gov/api.html#MarsPhotos) to create a search for photos taken by a Mars rover. It get's even better: You can either filter the search by using the earth date or the martian sol! 😱

Depending on the Mars rover selected, you can see photos taken by one of the following cameras:

1. Front Hazard Avoidance Camera
2. Rear Hazard Avoidance Camera
3. Mast Camera
4. Chemistry and Camera Complex
5. Mars Hand Lens Imager
6. Mars Descent Imager
7. Navigation Camera
8. Panoramic Camera
9. Miniature Thermal Emission Spectrometer (Mini-TES)

## 3. Structure

By now I have the following structure, but it will change and expand:

1. App.js
    - Title.js
    - Form.js
    - Data.js

## 4. To Do List

#### Choosing between earth time or martian sol

Depending on the selection, an input field for entering the earth date (calendar) or the martian sol (number) will appear.

#### Showing only available cameras

Depending on the selected Mars rover, the following cameras will be available:

**Curiosity:**

-   Front Hazard Avoidance Camera
-   Rear Hazard Avoidance Camera
-   Mast Camera
-   Chemistry and Camera Complex
-   Mars Hand Lens Imager
-   Mars Descent Imager
-   Navigation Camera

**Opportunity & Spirit:**

-   Front Hazard Avoidance Camera
-   Rear Hazard Avoidance Camera
-   Navigation Camera
-   Panoramic Camera
-   Miniature Thermal Emission Spectrometer (Mini-TES)

#### Showing pictures

Show the available amount of photos (25 per page, limited by NASA), otherwise show a message that no pictures are available.
