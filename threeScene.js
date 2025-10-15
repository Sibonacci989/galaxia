const scene = new THREE.Scene(); //that creates a new scene in the three.js library
scene.background = new THREE.Color(0x000000); //that makes it black. scene.background is a property of the scene 
scene.fog = new THREE.Fog(0x000000, 1, 1000); // it adds fog to the scene. parameters: color, near, far
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000); //creates a camera. parameters: fov, aspect, near, far
const renderer = new THREE.WebGLRenderer(); 

