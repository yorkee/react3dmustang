# react3dmustang

## Reason
I always want to learn 3D modeling, as well as Reactjs.  I use this as a platform to get my feet wet.

I have seen examples of common js framework wrapping around WebGL components.  However, I rarely seen the otherway.  I decided to take the challenge to have webGL/three.js rendering Reactjs components, while keeping the binding mechanism working in webGL world.

On the side note, since I love Ford Mustang so much, I decided to create something Mustang related.  

I use what I learn from Henry Ford Maker Faire, as well as my react3d spike, to create this 3D model viewer:


![Screen Shot](https://user-images.githubusercontent.com/1068796/34903729-d14c2eb8-f805-11e7-9d86-f8daf04cd034.png?raw=true "Title")

I can't capture hand control on a screenshot.  Here is a video of how it works:
[![How this works](https://www.youtube.com/upload_thumbnail?v=jotvnm4EOf4&t=hqdefault&ts=1516161163414)](https://youtu.be/jotvnm4EOf4)




## Requirements
- node 8.9.2 (anything from 6 to latest should work.  However, I haven't try them yet.)
- Chrome v63 (or any web browser support WebGL)
- I tested it only on a mac.  Not sure if other system will render properly.


## Install and Run

1. clone the repo
2. npm install
3. bower install 
4. npm run dev
5. node server.js
6. go to localhost:3000


## note

*note anything prior to init commit was explored in https://github.com/yorkee/react3d


## credits/reference:

Philippe Leefsma: Embedding webpages in a 3D Three.js scene
http://adndevblog.typepad.com/cloud_and_mobile/2015/07/embedding-webpages-in-a-3d-threejs-scene.html

ReactJs
https://reactjs.org/tutorial/tutorial.html

Stefan Beutler: https://codepen.io/Sm1lEE/pen/IhbAy,  and heavily modified the component to suit my need. 

Tommy Creenan : https://codepen.io/TommyCreenan/pen/pCslj
heavily modified and being used in reactjs 

cadnav.com
3D drawings http://www.cadnav.com/3d-models/model-35144.html
