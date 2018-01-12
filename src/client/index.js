"use strict";

  var controls, camera, glScene, cssScene, glRenderer, cssRenderer,
    billboardList = [];

  // Creates WebGL Renderer
  function createGlRenderer() {
    var glRenderer = new THREE.WebGLRenderer({ alpha: true });
    glRenderer.setClearColor(0xECF8FF);
    glRenderer.setPixelRatio(window.devicePixelRatio);
    glRenderer.setSize(window.innerWidth, window.innerHeight);
    glRenderer.domElement.style.position = 'absolute';
    glRenderer.domElement.style.zIndex = 1;
    glRenderer.domElement.style.top = 0;
    return glRenderer;
  }

  // Creates CSS Renderer
  function createCssRenderer() {
    var cssRenderer = new THREE.CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = 'absolute';
    glRenderer.domElement.style.zIndex = 0;
    cssRenderer.domElement.style.top = 0;
    return cssRenderer;
  }

  function load3DImage(glRenderer) {
    var loader = new THREE.JSONLoader();
    //TODO: after clean up all json file sin model, loop it
    loader.load("./public/models/chassis.json", addModelToScene);
    loader.load("./public/models/underbody.json", addModelToScene);
    loader.load("./public/models/wheel1.json", addModelToScene);
    loader.load("./public/models/wheel2.json", addModelToScene);
    loader.load("./public/models/wheel3.json", addModelToScene);
    loader.load("./public/models/wheel4.json", addModelToScene);
    loader.load("./public/models/skirt1.json", addModelToScene);
    loader.load("./public/models/skirt2.json", addModelToScene);
    loader.load("./public/models/windows.json", addModelToScene);
    loader.load("./public/models/windscreen.json", addModelToScene);

    loader.load("./public/models/doorlf1.json", addModelToScene);
    loader.load("./public/models/doorlf2.json", addModelToScene);
    loader.load("./public/models/doorlf3.json", addModelToScene);
    loader.load("./public/models/doorrf1.json", addModelToScene);
    loader.load("./public/models/doorrf2.json", addModelToScene);
    loader.load("./public/models/doorrf3.json", addModelToScene);

    loader.load("./public/models/exhaust.json", addModelToScene);
    loader.load("./public/models/skirt1.json", addModelToScene);
    loader.load("./public/models/skirt2.json", addModelToScene);
    loader.load("./public/models/bumperft.json", addModelToScene);
    loader.load("./public/models/bumperrear.json", addModelToScene);
    loader.load("./public/models/bonnet.json", addModelToScene);
    loader.load("./public/models/boot.json", addModelToScene);

    loader.load("./public/models/blight.json", addModelToScene);
    loader.load("./public/models/alightlf.json", addModelToScene);
    loader.load("./public/models/alightrf.json", addModelToScene);
    loader.load("./public/models/brake1.json", addModelToScene);
    loader.load("./public/models/brake2.json", addModelToScene);
    loader.load("./public/models/brake3.json", addModelToScene);
    loader.load("./public/models/brake4.json", addModelToScene);

    loader.load("./public/models/extra1.json", addModelToScene);
    loader.load("./public/models/extra2.json", addModelToScene);
    loader.load("./public/models/extra3.json", addModelToScene);
    loader.load("./public/models/extra4.json", addModelToScene);

    loader.load("./public/models/interior1.json", addModelToScene);
    loader.load("./public/models/interior2.json", addModelToScene);
    loader.load("./public/models/interior3.json", addModelToScene);

    loader.load("./public/models/scenicRoof.json", addModelToScene);
    loader.load("./public/models/winglf.json", addModelToScene);
    loader.load("./public/models/wingrf.json", addModelToScene);

    // After loading JSON from our file, we add it to the scene
    function addModelToScene(geometry, materials) {
      var material = new THREE.MeshFaceMaterial(materials);
      let model = new THREE.Mesh(geometry, material);
      model.rotation.x = Math.PI * 3 / 2;
      model.rotation.z = Math.PI * 3 / 2;
      model.scale.set(0.5, 0.5, 0.5);
      glScene.add(model);
    }
  }


  // Creates 3d webpage object
  function create3dPage(id, w, h, position, rotation, isGauge) {

    function copyXyz(obj1, obj2, offset) {
      obj1.x = obj2.x;
      obj1.y = obj2.y;
      obj1.z = obj2.z;
    }
    var material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      opacity: 0.0,
      side: THREE.DoubleSide
    });
    // var geometry = new THREE.PlaneGeometry(w, h);
    var geometry = new THREE.RoundedRectGeometry(19, 98);
    if (isGauge) {
      geometry = new THREE.CircleBufferGeometry(w / 2, 36, 0, Math.PI)
    // } else {
    //   var trackShape = new THREE.Shape();
    //   trackShape.moveTo( 40, 40 );
    //   trackShape.lineTo( 40, 160 );
    //   trackShape.absarc( 60, 160, 20, Math.PI, 0, true );
    //   trackShape.lineTo( 80, 40 );
    //   trackShape.absarc( 60, 40, 20, 2 * Math.PI, Math.PI, true );
    //   geometry = new THREE.ExtrudeBufferGeometry( trackShape, {} );

    }


    var div = document.createElement('div');
    div.id = id;

    var cssObject = new THREE.CSS3DObject(div);
    copyXyz(cssObject.position, position);
    copyXyz(cssObject.rotation, rotation);

    // position.y -=25;
    // position.y =position.y-10;
    var plane = new THREE.Mesh(geometry, material);
    copyXyz(plane.position, position);
    copyXyz(plane.rotation, rotation);

    glScene.add(plane);
    cssScene.add(cssObject);
    billboardList.push(cssObject);
    billboardList.push(plane);
  }

  function initialize() {
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000);
    camera.position.set(0, 100, 300);
    controls = new THREE.TrackballControls(camera);
    glRenderer = createGlRenderer();
    cssRenderer = createCssRenderer();
    document.getElementById('content').appendChild(cssRenderer.domElement);
    cssRenderer.domElement.appendChild(glRenderer.domElement);
    glScene = new THREE.Scene();
    cssScene = new THREE.Scene();

    let pointLight = new THREE.PointLight(0xaaaaaa);
    pointLight.position.set(-.5, .5, 1.5).normalize();
    camera.add(pointLight);
    glScene.add(camera);

    var ambientLight = new THREE.AmbientLight(0x555555);
    glScene.add(ambientLight);

    //TODO: should add directional light?  
    // var directionalLight = new THREE.DirectionalLight(0xffffff);
    // directionalLight.position.set( -.5, .5, 1.5 ).normalize();    
    // glScene.add(directionalLight);

    create3dPage(
      "speedo",
      100, 50,
      new THREE.Vector3(100, 50, 50),
      new THREE.Vector3(0, 0, 0), true);

    create3dPage(
      "fuelGauge",
      100, 50,
      new THREE.Vector3(-150, 0, -150),
      new THREE.Vector3(0, 0, 0), true);

    create3dPage(
      "temperatureGauge",
      38, 98,
      new THREE.Vector3(50, -50, 100),
      new THREE.Vector3(0, 0, 0));


    var script = document.createElement("script"); // Make a script DOM node
    script.src = "public/bundle.js"; // Set it's src to the provided URL

    document.head.appendChild(script);
    load3DImage(glRenderer);
    update();
  }
  // Updates scene
  //
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
  //
  $(document).ready(function() {
    initialize();

  });