var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 25, 0);

var scene = new THREE.Scene();
//plane for the left side
var l1 = obelisk(-2.75, 0, -2.75, -2.75, 0, 2.75, -1.7, 50, -1.7, 0x800080);
var l2 = obelisk(-1.7, 50, -1.7, -2.75, 0, 2.75, -1.7, 50, 1.7, 0x800080);
var l3 = obelisk(0, 55.5, 0, -1.7, 50, -1.7, -1.7, 50, 1.7, 0xFFC0CB);
//plane for the right side
var r1 = obelisk(2.75, 0, 2.75, 2.75, 0, -2.75, 1.7, 50, 1.7, 0x42a6a4);
var r2 = obelisk(1.7, 50, 1.7, 2.75, 0, -2.75, 1.7, 50, -1.7, 0x42d6a4);
var r3 = obelisk(0, 55.5, 0, 1.7, 50, 1.7, 1.7, 50, -1.7, 0x9d94ff);
//plane for the front side
var front1 = obelisk(-2.75, 0, 2.75, 2.75, 0, 2.75, 1.7, 50, 1.7, 0xff6961);
var front2 = obelisk(-1.7, 50, 1.7, -2.75, 0, 2.75, 1.7, 50, 1.7, 0xff6961);
var front3 = obelisk(0, 55.5, 0, -1.7, 50, 1.7, 1.7, 50, 1.7, 0xFF0000);

//plane for the back
var b1 = obelisk(2.75, 0, -2.75, -2.75, 0, -2.75, 1.7, 50, -1.7, 0x00FF00);
var b2 = obelisk(1.7, 50, -1.7, -2.75, 0, -2.75, -1.7, 50, -1.7, 0x00FF00);
var b3 = obelisk(0, 55.5, 0, 1.7, 50, -1.7, -1.7, 50, -1.7, 0x808080);


scene.add(b1, b2, b3, l1, l2, l3, front1, front2, front3, r1, r2, r3);

animate();

function obelisk(a1, a2, a3, b1, b2, b3, c1, c2, c3, clr)
{
	var geometry = new THREE.BufferGeometry();
  var vertices = new Float32Array([a1, a2, a3, b1, b2, b3, c1, c2, c3]);
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  
  var material = new THREE.MeshBasicMaterial({color: clr});
  var mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function animate()
{
	requestAnimationFrame(animate);
  b1.rotation.y += 0.01;
  b2.rotation.y += 0.01;
  b3.rotation.y += 0.01;
  l1.rotation.y += 0.01;
	l2.rotation.y += 0.01;
  l3.rotation.y += 0.01;
  front1.rotation.y += 0.01;
  front2.rotation.y += 0.01;
  front3.rotation.y += 0.01;
  r1.rotation.y += 0.01;
  r2.rotation.y += 0.01;
  r3.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}
