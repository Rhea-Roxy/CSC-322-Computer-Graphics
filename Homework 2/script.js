var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(
  45, window.innerWidth / window.innerHeight,
  1, 1000
);
camera.position.z = 5;

//Cone 
var topGeometry = new THREE.ConeGeometry(0.12, 0.5, 4);
var topMaterial = new THREE.MeshBasicMaterial({
  color: 0x00aaff
});
var baseGeometry = new THREE.BoxGeometry(0.2, 0.9, 0.2);
var baseMaterial = new THREE.MeshBasicMaterial({
  color: 0xffff00
});


var cone = new THREE.Mesh(topGeometry, topMaterial);
cone.position.y = 0.7;
cone.position.x = 0.5;
var base = new THREE.Mesh(baseGeometry, baseMaterial);
base.position.y = 0;
base.position.x = 0.5;
scene.add(cone);
scene.add(base);

function animate() {
  requestAnimationFrame(animate);
  /*  cone.rotation.y += 0.01;
                base.rotation.y += 0.01;  */
  renderer.render(scene, camera);

}


animate();
