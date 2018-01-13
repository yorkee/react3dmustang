"use strict";

  var controls, camera, glScene, cssScene, glRenderer, cssRenderer, pageFactory,
    billboardList = [];


  function initialize() {

    pageFactory = new PageObjectFactory();

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
      pageFactory.createGauge("speedo",
      new THREE.Vector3(100, 20, -50),
      new THREE.Vector3(0, 0, 0),
      [{x:100, y:20, z:-50},
        {x:30, y:10, z:10},
        {x:30, y:0, z:10}]
      ));

    add3DPageToApp(
      pageFactory.createGauge("fuelGauge",
      new THREE.Vector3(-150, 50, -150),
      new THREE.Vector3(0, 0, 0),
      [{x:-150, y:50, z:-150},
        {x:-46, y:0, z:-115},
        {x:-46, y:-15, z:-115}]
      ));

    add3DPageToApp(
      pageFactory.createTempGauge(
      "temperatureGauge", 
      new THREE.Vector3(-150, -10, 70),
      new THREE.Vector3(0, 0, 0),
      [{x:-130, y:10, z:70},
        {x:65, y:0, z:80},
        {x:65, y:-15, z:80}]
      ));



    add3DPageToApp(
      pageFactory.createTirePressure(
      'tirePressureLF',
      new THREE.Vector3(-150, -90, 0),
      new THREE.Vector3(0, 0, 0),
      [{x:-150, y:-80, z:0},
      {x:-90, y:-70, z:-30},
      {x:-90, y:-55, z:-30}]
      ));

    add3DPageToApp(
      pageFactory.createTirePressure(
      'tirePressureLR',
      new THREE.Vector3(0, -90, 150),
      new THREE.Vector3(0, 0, 0),
      [{x:0, y:-80, z:150},
        {x:15, y:-70, z:80},
        {x:15, y:-55, z:80}]
      ));

    add3DPageToApp(
      pageFactory.createTirePressure(
      'tirePressureRF',
      new THREE.Vector3(150, -90, 0),
      new THREE.Vector3(0, 0, 0),
      [{x:150, y:-80, z:0},
        {x:80, y:-70, z:20},
        {x:80, y:-55, z:20}]
      ));

    add3DPageToApp(
      pageFactory.createTirePressure(
      'tirePressureRR',
      new THREE.Vector3(0, -90, -150),
      new THREE.Vector3(0, 0, 0),
      [{x:0, y:-80, z:-150},
        {x:0, y:-70, z:-150},
        {x:-30, y:-55, z:-90}]
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