const scene = new THREE.Scene(); //creates the entire 'scene'
scene.background = new THREE.Color(0x0a0a20);
scene.fog = new THREE.Fog(0x0a0a20, 1, 1000); //fog!!

//set up camera, basically what you see
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.z = 5; //makes the camera far away sorta?? idk

//set up the renderer!! draws everything to the screen
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#threeCanvas'),
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const Light = new THREE.AmbientLight(0x404040,0,2);
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

for (let i = 0; i < 10; i++ ){
    const spot = new THREE.Mesh(spotGeometry, spotMaterial) //meshes it
    const theta = Math.random() * Math.PI * 2; 
    const phi = Math.random() * Math.PI;
    const r = 1.05;
    spot.position.set( 
// too lazy to add code here will do 
    )
    star.add(spot);
    spots.push(spot);
}

//animation loop that makes it sort of wobble with the offset 
function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.001; //like seconds or something idk how to explain
    star.geometry.vertices.forEach(vertex => {
    const offset = Math.sin(time * 3 + vertex.x + vertex.y + vertex.z) * 0.02;
    vertex.normalize().multiplyScalar(1 + offset);
  }); 
  star.geometry.verticesNeedUpdate = true;
  star.rotation.y += 0.002; //yay it kind of spins a bit
  star.position.x = Math.sin(time) * 0.1;
  star.position.y = Math.cos(time * 0.5) * 0.5;
  starLight.intensity = 1 + Math.sin(time *2)* 0.3; //ah a light gloww
  renderer.render(scene, camera); //iconic three.js line fr
} 

animate(); //just calls to animate it

//ahhh im so tired
//now focusing on adding comments to everything (OR NOT ITS MIDNIGHT OMG)
//personal note: delete all these comments