/* GLOBAL CONSTANTS AND VARIABLES */

/* assignment specific globals */




function main() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    camera.lookAt(scene.position);
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    var terrainGeometry = new THREE.BoxGeometry(window.innerWidth,0.7,3.0);
    var terrainMaterial = new THREE.MeshBasicMaterial({color: 0x800000});
    var terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrain.position.set(1.5,-5.0,-1.0);
    terrain.rotation.x += 0.2;
    
    var cityGeometry = new THREE.BoxGeometry(0.3,0.75,0.75);
    var cityMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
    
    var batteryGeometry = new THREE.BoxGeometry(0.5,0.5,0.75);
    var batteryMaterial = new THREE.MeshBasicMaterial({color: 0xff00});
    
    var battery1 = new THREE.Mesh(batteryGeometry,batteryMaterial);
    battery1.position.set(2.0,-4.0,-2.0);
    
    
    var city1 = new THREE.Mesh(cityGeometry,cityMaterial);
    var city2 = new THREE.Mesh(cityGeometry,cityMaterial);
    
    
  
    scene.add(terrain);
    scene.add(battery1);
    
    
    camera.position.z = 10;
    
    var animate = function(){
     requestAnimationFrame(animate);   
        
        
        renderer.render(scene,camera);
    }
    
    animate();
  
} // end main
