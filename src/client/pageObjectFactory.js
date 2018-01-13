// Creates 3d webpage object

function PageObjectFactory() {

  function drawDescLine(vectorArray) {
    var material = new THREE.LineBasicMaterial({
      linewidth: 40,
      // color: 0xffffff
      color: 0x000000
    });

    var geometry = new THREE.Geometry();
    for (var i = 0; i < vectorArray.length; i++) {
      var va = vectorArray[i];
      geometry.vertices.push(new THREE.Vector3(va.x, va.y, va.z));
    }

    var line = new THREE.Line(geometry, material);
    return line;
  }

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

  function createPageObject(geometry, id, position, rotation, vectorArray) {
    var div = document.createElement('div');
    div.id = id;

    var cssObject = new THREE.CSS3DObject(div);
    copyXyz(cssObject.position, position);
    copyXyz(cssObject.rotation, rotation);

    var plane = new THREE.Mesh(geometry, material);
    copyXyz(plane.position, position);
    copyXyz(plane.rotation, rotation);

    let line = drawDescLine(vectorArray);

    return {
      plane,
      cssObject,
      line
    };
  }

  function createGauge(id, position, rotation, vectorArray) {
    let w = 100,
      h = 50;
    let geometry = new THREE.CircleBufferGeometry(w / 2, 36, 0, Math.PI);
    return createPageObject(geometry, id, position, rotation, vectorArray);
  }

  function createTempGauge(id, position, rotation, vectorArray) {
    let w = 38,
      h = 98;
    var geometry = new THREE.RoundedRectGeometry(w / 2, h);
    return createPageObject(geometry, id, position, rotation, vectorArray);
  }

  function createTirePressure(id, position, rotation, vectorArray) {
    let w = 50,
      h = 20;
    var geometry = new THREE.PlaneGeometry(w, h);
    return createPageObject(geometry, id, position, rotation, vectorArray);
  }

  return {
    createTempGauge,
    createGauge,
    createTirePressure
  };

}