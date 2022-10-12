const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera( 5, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, -1, 0 );

const scene = new THREE.Scene();
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array( [
0, 0,  2,
2, 0,  2,
2,  2,  2,

   2, 2,  2,
  0,  2,  2,
 0, 0,  2,

] );
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 0x7233f0  } );
const mesh1 = new THREE.Mesh( geometry, material );
const geometry2 = new THREE.BufferGeometry();
const vertices2 = new Float32Array( [
2, 0,  2,
2, 0,  0,
2,  2,  0,

   2, 2, 0,
  2,  2,  2,
  2, 0,  2,

] );


geometry2.setAttribute( 'position', new THREE.BufferAttribute( vertices2, 3 ) );
const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff20 } );
const mesh2 = new THREE.Mesh( geometry2, material2 );
const geometry3 = new THREE.BufferGeometry();
const vertices3 = new Float32Array( [
2, 0,  0,
0, 0,  0,
0,  2,  0,

   0, 2,  0,
  2,  2,  0,
  2, 0,  0,

] );
geometry3.setAttribute( 'position', new THREE.BufferAttribute( vertices3, 3 ) );
const material3 = new THREE.MeshBasicMaterial( { color: 0x80e4f8  } );
const mesh3 = new THREE.Mesh( geometry3, material3 );
const geometry4 = new THREE.BufferGeometry();
const vertices4 = new Float32Array( [
0, 0,  0,
0, 0,  2,
0, 2,  2,

   0, 2, 2,
  0,  2,  0,
  0, 0,  0,

] );


geometry4.setAttribute( 'position', new THREE.BufferAttribute( vertices4, 3 ) );
const material4 = new THREE.MeshBasicMaterial( { color: 0xbe0032 } );
const mesh4 = new THREE.Mesh( geometry4, material4 );
const geometry5 = new THREE.BufferGeometry();
const vertices5 = new Float32Array( [
0, 2,  2,
2, 2,  2,
2,  2,  0,
   2, 2,  0,
  0,  2,  0,
  0, 2,  2,

] );

geometry5.setAttribute( 'position', new THREE.BufferAttribute( vertices5, 3 ) );
const material5 = new THREE.MeshBasicMaterial( { color: 0xa48c1d  } );
const mesh5 = new THREE.Mesh( geometry5, material5 );
const geometry6 = new THREE.BufferGeometry();
const vertices6 = new Float32Array( [
2, 0,  2,
0, 0,  2,
0,  0,  0,
   0, 0,  0,
  2,  0,  0,
  2, 0,  2,

] );
geometry6.setAttribute( 'position', new THREE.BufferAttribute( vertices6, 3 ) );
const material6 = new THREE.MeshBasicMaterial( { color: 0xaec6cf } );
const mesh6 = new THREE.Mesh( geometry6, material6 );
scene.add( mesh1, mesh2, mesh3, mesh4, mesh5, mesh6);
var animate = function () {
requestAnimationFrame( animate );

  mesh1.rotation.x += 0.01;
  mesh1.rotation.y += 0.01;
  mesh2.rotation.x += 0.01;
  mesh2.rotation.y += 0.01;
  mesh3.rotation.x += 0.01;
  mesh3.rotation.y += 0.01;
  mesh4.rotation.x += 0.01;
  mesh4.rotation.y += 0.01;
  mesh5.rotation.x += 0.01;
  mesh5.rotation.y += 0.01;
  mesh6.rotation.y += 0.01;
  mesh6.rotation.x += 0.01;
 
renderer.render( scene, camera );
};

animate();
