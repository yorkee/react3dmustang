  function load3DModel(glRenderer) {
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
      model.rotation.z = Math.PI * 9 / 4;
      model.scale.set(0.5, 0.5, 0.5);
      glScene.add(model);
    }
  }