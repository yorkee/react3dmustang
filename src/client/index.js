"use strict";

  var controls, camera, glScene, cssScene, glRenderer, cssRenderer,
    billboardList = [];


  function initialize() {
    camera = createCamera();
    controls = new THREE.TrackballControls(camera);
    glRenderer = createGlRenderer();
    cssRenderer = createCssRenderer();
    document.getElementById('content').appendChild(cssRenderer.domElement);
    cssRenderer.domElement.appendChild(glRenderer.domElement);
    glScene = new THREE.Scene();
    cssScene = new THREE.Scene();

    glScene.add(camera);

    var ambientLight = new THREE.AmbientLight(0x555555);
    glScene.add(ambientLight);

    //TODO: should add directional light?  
    // var directionalLight = new THREE.DirectionalLight(0xffffff);
    // directionalLight.position.set( -.5, .5, 1.5 ).normalize();    
    // glScene.add(directionalLight);

    function add3DPageToApp(page){
      glScene.add(page.plane);
      cssScene.add(page.cssObject);
      billboardList.push(page.cssObject);
      billboardList.push(page.plane);
      glScene.add(page.line);
    }

    add3DPageToApp(
      create3dPage("speedo", 100, 50,
      new THREE.Vector3(100, 20, -50),
      new THREE.Vector3(0, 0, 0), true,
      [{x:100, y:20, z:-50},
        {x:30, y:10, z:10},
        {x:30, y:0, z:10}]
      ));

    add3DPageToApp(
      create3dPage("fuelGauge",100, 50,
      new THREE.Vector3(-150, 50, -150),
      new THREE.Vector3(0, 0, 0), true,
      [{x:-150, y:50, z:-150},
        {x:-46, y:0, z:-115},
        {x:-46, y:-15, z:-115}]
      ));

    add3DPageToApp(
      create3dPage(
      "temperatureGauge", 
      38, 98,
      new THREE.Vector3(-150, -10, 70),
      new THREE.Vector3(0, 0, 0),
      false,
      [{x:-130, y:10, z:70},
        {x:65, y:0, z:80},
        {x:65, y:-15, z:80}]
      ));

    // loading reactjs components
    var script = document.createElement("script"); // Make a script DOM node
    script.src = "public/bundle.js"; // Set it's src to the provided URL

    document.head.appendChild(script);
    load3DModel(glRenderer);
    update();
  }

  // Updates scene
  function update() {
    controls.update();
    billboardList.forEach(function(item) {
      item.setRotationFromQuaternion(camera.quaternion);
    });
    glRenderer.render(glScene, camera);
    cssRenderer.render(cssScene, camera);
    requestAnimationFrame(update);
  }
  // On document ready
  $(document).ready(function() {
    initialize();
  });