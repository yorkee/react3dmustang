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
      new THREE.Vector3(100, -60, 70),
      new THREE.Vector3(0, 0, 0),
      [{x:100, y:-60, z:70},
        {x:30, y:-20, z:10},
        {x:30, y:-20, z:-10}]
      ));

    add3DPageToApp(
      pageFactory.createGauge("fuelGauge",
      new THREE.Vector3(120, 170, 20),
      new THREE.Vector3(0, 0, 0),
      [{x:120, y:170, z:20},
        {x:50, y:112, z:5},
        {x:50, y:112, z:-10}]
      ));

    add3DPageToApp(
      pageFactory.createTempGauge(
      "temperatureGauge", 
      new THREE.Vector3(-150, -100, 70),
      new THREE.Vector3(0, 0, 0),
      [{x:-150, y:-90, z:70},
        {x:0, y:-90, z:20},
        {x:0, y:-90, z:-5}]
      ));



    add3DPageToApp(
      pageFactory.createTirePressure(
      'tirePressureLF',
      new THREE.Vector3(-150, -90, -100),
      new THREE.Vector3(0, 0, 0),
      [{x:-150, y:-90, z:-90},
      {x:-40, y:-60, z:-70},
      {x:-40, y:-60, z:-50}]
      ));

    add3DPageToApp(
      pageFactory.createTirePressure(
      'tirePressureLR',
      new THREE.Vector3(-150, 90, -100),
      new THREE.Vector3(0, 0, 0),
      [{x:-150, y:90, z:-90},
        {x:-40, y:90, z:-70},
        {x:-40, y:90, z:-50}]
      ));

    add3DPageToApp(
      pageFactory.createTirePressure(
      'tirePressureRF',
      new THREE.Vector3(150, -90, -100),
      new THREE.Vector3(0, 0, 0),
      [{x:150, y:-90, z:-90},
        {x:40, y:-70, z:-70},
        {x:40, y:-70, z:-50}]
      ));

    add3DPageToApp(
      pageFactory.createTirePressure(
      'tirePressureRR',
      new THREE.Vector3(150, 90, -100),
      new THREE.Vector3(0, 0, 0),
      [{x:150, y:90, z:-90},
        {x:40, y:90, z:-70},
        {x:40, y:90, z:-50}]
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