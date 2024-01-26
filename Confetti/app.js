function getRandom(max = 1, min = 0) {
    return Math.random() * (max - min) + min;
}

function getRandomFloor(max = 1, min = 0) {
    return Math.floor(getRandom(max, min));
}

function paLeCentre(max = 1, min = 0) {
    var proba = getRandomFloor(2, 0);

    //* console.log(proba);

    if (proba == 1) {
        return getRandom(-0.8, min);
    } else { 
        return getRandom(max, 0.8);
    }
}

//* ----------------------------------------------------------------------

import * as THREE from 'three';

//* console.log('Coucou depuis app.js');
//* console.log(THREE.REVISION);

//? --- Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0X1e1e1e);
scene.fog = new THREE.Fog(0X1e1e1e, 12, 25);

//? --- Cube
const geometry = new THREE.BoxGeometry( 1, 0.5, 0.1 );
//* console.log(geometry);

const material = [ 
    new THREE.MeshBasicMaterial( { color: 0xED4D1D} ),
    new THREE.MeshBasicMaterial( { color: 0xFFBB36} ),
    new THREE.MeshBasicMaterial( { color: 0x19B7F9} ),
    new THREE.MeshBasicMaterial( { color: 0x9D58FA} ),
    new THREE.MeshBasicMaterial( { color: 0X09CA7F} ),
    new THREE.MeshBasicMaterial( { color: 0xED4D1D, wireframe: true} ),
    new THREE.MeshBasicMaterial( { color: 0xFFBB36, wireframe: true} ),
    new THREE.MeshBasicMaterial( { color: 0x19B7F9, wireframe: true} ),
    new THREE.MeshBasicMaterial( { color: 0x9D58FA, wireframe: true} ),
    new THREE.MeshBasicMaterial( { color: 0X09CA7F, wireframe: true} )/*,
    new THREE.MeshNormalMaterial()
    */
];

//* console.log(material);

const NbCube = 1600;
let cubes = [];

for (let i = 0; i < NbCube ; i++) {
    
    let cube = new THREE.Mesh(geometry, material[getRandomFloor(material.length)]);
    cube.position.set(
        paLeCentre(50, -50), 
        paLeCentre(15, -15), 
        getRandom(10, -13)
    );
    cube.rotation.set(
        getRandom(), 
        getRandom(), 
        getRandom()
    );

    cubes.push(cube);
    scene.add(cube);
    
}

//? --- Camera
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera( 75, aspect, 1, 5000 );
camera.position.set( 0, 0, 10 );


//? --- Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

// setInterval(() => {
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }, 1000 / 60);

let vitesse = 1;

function render() {
    
    cubes = cubes.map((c) => {
        c.rotation.x += 0.01;
        c.rotation.y += 0.01;
        c.rotation.z += 0.001;

        if (c.position.z > camera.position.z) {
            // c.position.z = camera.position.z-20;
            c.position.z = -13;
        } else if (c.position.z < -13) {
            // c.position.z = camera.position.z;
            c.position.z = camera.position.z;
        } else {
            c.position.z += 0.01 * vitesse;
        }
        return c;
    })

    renderer.render( scene, camera );
    requestAnimationFrame(render);
}


let pause = false;
let Vit_pause = 1;

addEventListener('keydown', (e)=> {
    if (e.key == 'ArrowUp' || e.key == 'z') {
        // camera.position.z -= 0.1;
        if (pause == false) {
            vitesse += 1;
        }
    } else if (e.key == 'ArrowDown' || e.key == 's') {
        // camera.position.z += 0.1;
        if (pause == false) {
            vitesse -= 1;
        }
    } else if (e.key =='ArrowLeft') {
        if (pause == false) {
            vitesse -= 0.1;
        }
    } else if (e.key =='ArrowRight') {
        if (pause == false) {
            vitesse += 0.1;
        }
    } else if (e.key ==' ') {
        if (pause == false) {
            Vit_pause = vitesse;
            vitesse = 0;
            pause = true;
        } else {
            vitesse = Vit_pause;
            pause = false;
        }
    } else if (e.key =='r') {
        vitesse = 1;
        Vit_pause = 1;
    }
})

render();
