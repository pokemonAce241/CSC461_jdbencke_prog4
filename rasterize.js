/* GLOBAL CONSTANTS AND VARIABLES */

/* assignment specific globals */
 var scene;
  
 var camera;

 var renderer;

 var terrain;

function initializeScene(){
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setClearColor(0x000000,1);
    
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    
    renderer.setSize(canvasWidth,canvasHeight);
    
    document.getElementById("WebGLCanvas").appendChild(renderer.domElement);
    
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(45,canvasWidth/canvasHeight,1,100);
    camera.position.set(0,0,10);
    camera.lookAt(scene.position);
    scene.add(camera);
    
    var terrainGeometry = new THREE.BoxGeometry(canvasWidth,0.5,0.5);
    var terrainMaterial = new THREE.MeshBasicMaterial({color:0xFF0000});
    
    terrain = new THREE.Mesh(terrainGeometry,terrainMaterial);
    terrain.position.set(1.5,0.0,4.0);
    scene.add(terrain);
}

function animateScene(){
    
    requestAnimationFrame(animateScene)
    
    render.render(scene,camera);
    
    }



function main() {

    initializeScene();
    animateScene();
    
   
    
    
  
} // end main
