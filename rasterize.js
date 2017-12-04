/* GLOBAL CONSTANTS AND VARIABLES */

/* assignment specific globals */




function main() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    var terrainGeometry = new THREE.BoxGeometry(window.innerWidth,0.7,0.5);
    var terrainMaterial = new THREE.MeshBasicMaterial({color: 0x800000});
    var terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrain.position.setY(window.innerHeight);
    scene.add(terrain);
    
    camera.position.z = 5;
    
    var animate = function(){
     requestAnimationFrame(animate);   
        
        
        renderer.render(scene,camera);
    }
    
    animate();
  
} // end main
