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
    canvas: document.querySelector('#threeCanvas'),
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const Light = new THREE.AmbientLight(0xffffff,0,2);
scene.add(Light);
const starLight = new THREE.PointLight(0xffffaa, 1, 10);
scene.add(starLight);

const starGeometry = new THREE.SphereGeometry(1,64,64);
const starMaterial = new THREE.MeshStandardMaterial({
    color:0xffffaa,
    emissive: 0xbe99c9,
    metalness: 0.5,
    roughness: 0.4
});
const star = new THREE.Mesh(starGeometry, starMaterial);
scene.add(star);
starLight.position.copy(star.position);

const spotGeometry = new THREE.SphereGeometry(0.05, 8, 8);
const spotMaterial = new THREE.MeshBasicMaterial({color:0xffffff});
const spots = [];



