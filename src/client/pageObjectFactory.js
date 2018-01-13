  // Creates 3d webpage object
  function create3dPage(id, w, h, position, rotation, isGauge, vectorArray) {

    function drawDescLine(vectorArray) {
      var material = new THREE.LineBasicMaterial({
        linewidth: 40,
        // color: 0xffffff
        color: 0x000000
      });

      var geometry = new THREE.Geometry();
      for (var i=0; i < vectorArray.length; i++){
        var va = vectorArray[i];
        geometry.vertices.push(new THREE.Vector3( va.x, va.y, va.z));
      }

      var line = new THREE.Line( geometry, material );
      return line ;
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
    var geometry = new THREE.RoundedRectGeometry(19, 98);
    if (isGauge) {
      geometry = new THREE.CircleBufferGeometry(w / 2, 36, 0, Math.PI)
    }

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
    }    

  }