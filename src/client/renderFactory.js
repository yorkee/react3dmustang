  // Creates WebGL Renderer
  function createGlRenderer() {
    var glRenderer = new THREE.WebGLRenderer({ alpha: true });
    // glRenderer.setClearColor(0xECF8FF);
    glRenderer.setClearColor(0xeeeeee);
    // glRenderer.setClearColor(0x2097c9);
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
    // cssRenderer.domElement.style.position = 'absolute';
    glRenderer.domElement.style.zIndex = 0;
    cssRenderer.domElement.style.top = 0;
    return cssRenderer;
  }
