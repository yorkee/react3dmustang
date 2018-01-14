function createCamera() {
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000);
    console.log("hahah what camera", camera);
    // camera.rotation.x.set(0.2);
    // camera.rotation.y=0.2;
    // camera.rotation.z=0.2;
    // camera.up.set(0, -1, 0)
    camera.up = new THREE.Vector3(2,-2,4);
    camera.position.set(250, -250, 80);
    let pointLight = new THREE.PointLight(0xaaaaaa);
    pointLight.position.set(-.5, .5, 1.5).normalize();
    camera.add(pointLight);

	return camera;	
}