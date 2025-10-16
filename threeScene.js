const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a20);
scene.fog = new THREE.Fog(0x0a0a20, 1, 1000);

//set up camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.z = 5;

//set up the renderer!! draws everything to the screen
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas'),
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xf0f0f0);
renderer.shadowMap.enabled = true;

