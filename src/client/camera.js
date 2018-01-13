function createCamera() {
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000);
    camera.position.set(0, 100, 300);
    let pointLight = new THREE.PointLight(0xaaaaaa);
    pointLight.position.set(-.5, .5, 1.5).normalize();
    camera.add(pointLight);

	return camera;	
}