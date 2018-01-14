function load3DModel(glRenderer) {
  var loader = new THREE.JSONLoader();
  //TODO: after clean up all json file sin model, loop it
  loader.load("./public/models/chassis.json", addModelToScene);
  loader.load("./public/models/underbody.json", addModelToScene);
  loader.load("./public/models/wheel.json", addFRWheelToScene);
  loader.load("./public/models/wheel.json", addFLWheelToScene);
  loader.load("./public/models/wheel.json", addRRWheelToScene);
  loader.load("./public/models/wheel.json", addRLWheelToScene);
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
    let model = new THREE.Mesh(geometry, materials);
    // model.rotation.x = Math.PI * 3 / 2;
    // model.rotation.z = Math.PI * 9 / 4;
    model.scale.set(0.5, 0.5, 0.5);
    glScene.add(model);
  }

  function addFRWheelToScene(geometry, materials) {
    let model = new THREE.Mesh(geometry, materials);
    model.position.set(-48, -68, -37);
    addWheelToScene(model);
  }

  function addFLWheelToScene(geometry, materials) {
    let model = new THREE.Mesh(geometry, materials);
    model.position.set(-48, 85, -37);
    addWheelToScene(model);
  }

  function addRRWheelToScene(geometry, materials) {
    let model = new THREE.Mesh(geometry, materials);
    model.rotation.z = Math.PI;
    model.position.set(50, 85, -37);
    addWheelToScene(model);
  }

  function addRLWheelToScene(geometry, materials) {
    let model = new THREE.Mesh(geometry, materials);
    model.rotation.z = Math.PI;
    model.position.set(50, -68, -37);
    addWheelToScene(model);
  }

  function addWheelToScene(model) {
    model.scale.set(0.5, 0.5, 0.5);

    var rotation = 0;
    var pi180 = Math.PI / 180;

    //TODO: its not pratical to set 4 intervals to control wheel speed.  only need one.
    setInterval(function() {
      var rotSpeed = 50 / 10;
      if (rotation > 360) rotation = 0;
      model.rotation.x = (rotation += rotSpeed) * pi180;
    }, 60);

    glScene.add(model);
  }
}