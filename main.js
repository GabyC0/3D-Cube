import * as THREE from 'three';

//to display: scene, camera, and renderer - render the scene w/ camera

const scene = new THREE.Scene();

//there are diff cameras in three.js
    //attribute 1 is field of view (75) in degrees - the extent of the scene that is seen on the display at any given moment
    //attribute 2 is aspect ratio - width of elem div by height (squished view if this is off)
    //attributes 3 & 4 - near and far clipping pane - objects further than the val of far or closer than near won't render
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//set size at which to render our app - use width and height of area to fill/ browser window (to render at lower res but keep size, use setSize with false as updateStyle(third arg))
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//add renderer elem to our HTML doc - canvas elem that renderer uses to display the scene to us
document.body.appendChild( renderer.domElement );

//creating a cube
//BoxGeometry contains all the vertices and faces of cube
const geometry = new THREE.BoxGeometry( 1, 1, 1, 1);
//material to color cube - materials take an object of props
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00});
//Mesh - obj that takes geometry & applies material to it to apply it to scene
const cube = new THREE.Mesh( geometry, material );
//whatever we add to scene.add() will be added to coordinates (0,0,0) -> causes the camera and cube to be inside each other
scene.add( cube );
//to avoid the above, move the camera out
camera.position.z = 5;

//render/animate loop - causes the renderer to draw the scene when screen is refreshed
//requestAnimationFrame pauses when user navigates to another browser tab
function animate (){
    requestAnimationFrame( animate );
    //add rotation to run every 60 secs
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();