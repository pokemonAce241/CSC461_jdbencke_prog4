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
    terrain.position.set(1.5,-7.0,-1.0);
    terrain.rotation.x += 0.2;
    
    var cityGeometry = new THREE.BoxGeometry(1.5,4.0,0.75);
    var cityMaterial = new THREE.MeshBasicMaterial({color: 0x00BFFF});
    
    var batteryGeometry = new THREE.BoxGeometry(2.5,0.65,0.75);
    var batteryMaterial = new THREE.MeshBasicMaterial({color: 0xFF00});
    
    var battery1 = new THREE.Mesh(batteryGeometry,batteryMaterial);
    battery1.position.set(1.0,-6.5,-2.0);
    
    
    var city1 = new THREE.Mesh(cityGeometry,cityMaterial);
    city1.position.set(-2.0,-6.5,-2.0);
    var city2 = new THREE.Mesh(cityGeometry,cityMaterial);
    city2.position.set(4.0,-6.5,-2.0);
    
    var city3 = new THREE.Mesh(cityGeometry,cityMaterial);
    city3.position.set(-6.0,-6.5,-2.0);
    var city4 = new THREE.Mesh(cityGeometry,cityMaterial);
    city4.position.set(8.0,-6.5,-2.0);
    
    var city5 = new THREE.Mesh(cityGeometry,cityMaterial);
    city5.position.set(-10.0,-6.5,-2.0);
    var city6 = new THREE.Mesh(cityGeometry,cityMaterial);
    city6.position.set(12.0,-6.5,-2.0);
    
  
    scene.add(terrain);
    scene.add(battery1);
    scene.add(city1);
    scene.add(city2);
    scene.add(city3);
    scene.add(city4);
    scene.add(city5);
    scene.add(city6);
    
    
    camera.position.z = 10;
    
    var animate = function(){
     requestAnimationFrame(animate);   
        
        
        renderer.render(scene,camera);
    }
    
    animate();
  
} // end main
