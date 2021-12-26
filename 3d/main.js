
//var img = 'https://i.imgur.com/GFLxXVV.jpg';

// var img = new Image()
// img.src = "1.jpg"
let img = "https://psv4.userapi.com/c237331/u462011364/docs/d3/b74198cb72bc/detskaya.jpg?extra=AS4JeGuuLPw8VRuNdBrOrhRix0efvOGHE1n_oEEO_P3WwFJUlWY21HFzdx9Xj9YynLMT2uXcvMx2Lx3VXZ4gZ853GCWd75eg32-4ZXrYUfzQ1pnbCgCg8HgdNxynpexu7BVSprAlGEivgoHkhZWfqu8S"
var camera, renderer, scene,
    mouseDownMouseX, mouseDownMouseY, mouseDownLon, mouseDownLat,
    lon = 180, lat = 0, phi = 0, theta = 0;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 1, 1100);
    camera.target = new THREE.Vector3(0, 0, 0);
    scene = new THREE.Scene();
    var geometry = new THREE.SphereBufferGeometry(500, 60, 40);
    // -1 выворачивает сферу наизнанку и текстура накладывается изнутри а не снаружи
    geometry.scale(-1, 1, 1 ); 
    var texture = new THREE.TextureLoader().load(img);
    var material = new THREE.MeshBasicMaterial({map: texture});
    scene.add( new THREE.Mesh(geometry, material));
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.append( renderer.domElement);
    addEventListener('mousedown', onPointerStart);
    addEventListener('mousemove', onPointerMove);
    addEventListener('mouseup', onPointerUp);
    addEventListener('wheel', onDocumentMouseWheel);
    addEventListener('resize', onWindowResize,);
}

function onWindowResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( innerWidth, innerHeight );
}

function onPointerStart( event ) {
    var clientX = event.clientX || event.touches[0].clientX;
    var clientY = event.clientY || event.touches[0].clientY;
    mouseDownMouseX = clientX;
    mouseDownMouseY = clientY;
    mouseDownLon = lon;
    mouseDownLat = lat;
}

function onPointerMove( event ) {
    if ( !mouseDownMouseX ) return;
    var clientX = event.clientX || event.touches[0].clientX;
    var clientY = event.clientY || event.touches[0].clientY;
    lon = ( mouseDownMouseX - clientX ) * camera.fov/600 + mouseDownLon;
    lat = ( clientY - mouseDownMouseY ) * camera.fov/600 + mouseDownLat;
}

function onPointerUp() {
    mouseDownMouseX = null;
}

function onDocumentMouseWheel( event ) {
    var fov = camera.fov + event.deltaY * 0.05;
    camera.fov = THREE.Math.clamp(fov, 10, 75);
    camera.updateProjectionMatrix();
}

function animate() {
    requestAnimationFrame( animate );
    // азимут поворота камеры в градусах, вращаем камеру 
   // lon += mouseDownMouseX ? 0 : 0.02;
    // угол места в градусах ограничиваем от -85 до 85
 lat = Math.max(-85, Math.min(85, lat));
    // пересчитываем в радианы
    phi = THREE.Math.degToRad(90 - lat);
    theta = THREE.Math.degToRad(lon);
    camera.target.x = 0.001 * Math.sin(phi) * Math.cos(theta);
    camera.target.y = 0.001 * Math.cos(phi);
    camera.target.z = 0.001 * Math.sin(phi) * Math.sin(theta);
    camera.lookAt(camera.target);
    renderer.render(scene, camera);
}
