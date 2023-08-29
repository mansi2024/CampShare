
# CampShare🎪.
It's a Full-stack website providing a platform for travelers or camping lovers to share their experiences and learn/plan their own travel camps by viewing other CampShares.<br>

## 📃Table of Contents
✔ [Features](#features)<br>
✔ [Tech Stack Used](#tech-stack)<br>
✔ [Getting Started](#getting-started)<br>
✔ [Application Flow](#flow)<br>

<a id="features"></a>
## Features
#### The platform gives the user multiple features example:<br>
- Login and Registration available.
- Manage their Camp photos and details by updating and deleting them.
- Take a look at other Camp Experiences and add a review, comments, and ratings on the other camps' posts.
- Locate Camp through Maps.
- UI is beautiful and easy to interact with.
&nbsp;

<a id="tech-stack"></a>
## Tech Stack Used
- Language: JavaScript
- Framework: Node.js, Express.js, BootStrap(CSS)
- Database: MongoDB( NoSql)
- Others: Map API, Cloudinary, and Various Packages like Passport for Authentication.
&nbsp;

<a id="getting-started"></a>
## Getting Started
- Download the Zip file extract it or clone the git repository
```
 git clone 
```
- Install all the required packages(see the versions or packages through package.json)
```
 pip install
```
- Make one *.env* file and put your Cloudinary credential here.
```
CLOUDINARY_NAME = .....
CLOUDINARY_KEY= ....
CLOUDINARY_SECRET= ....
MAPBOX_TOKEN = .....
```
- In app.js file put your username and password of MongoDB.
```
 mongoose.connect('mongodb+srv://username:<password>@cluster0.hielw.mongodb.net/?retryWrites=true&w=majority',

```
- Connect the database and run the application
```
 node app.js
```
&nbsp;

<a id="flow"></a>
## Application Flow
- **Home Page**
![Screenshot (23)](https://github.com/mansi2024/CampShare/assets/89377143/42b010db-e87a-424e-9995-397b0e70309c)
&nbsp;
- **All Campgrounds Locate and Map**
![Screenshot (25)](https://github.com/mansi2024/CampShare/assets/89377143/0dd2b1cf-7472-4745-ab09-a2020160c048)
&nbsp;
- **Registration**
![Screenshot (28)](https://github.com/mansi2024/CampShare/assets/89377143/d1fee49a-9c80-4b4c-8a0a-a0b2526b109f)
&nbsp;
- **Login**
![Screenshot (27)](https://github.com/mansi2024/CampShare/assets/89377143/261d6709-e870-49a2-852c-398e4fa36f2b)
&nbsp;
- **Add new Camps**
![Screenshot (31)](https://github.com/mansi2024/CampShare/assets/89377143/dc167496-c688-4af2-aff9-71db89260638)
&nbsp;
- **Update, Delete, Review Camps**
![Screenshot (32)](https://github.com/mansi2024/CampShare/assets/89377143/a5361665-a354-4606-a45c-34cd4817a8c7)
&nbsp;
![Screenshot (33)](https://github.com/mansi2024/CampShare/assets/89377143/db27d9de-26f8-4d48-8fc6-3fee5073258a)
&nbsp;
- **All Campgrounds**
![Screenshot (26)](https://github.com/mansi2024/CampShare/assets/89377143/a0dd1384-37bb-4181-87c4-e62e388bfa05)





















