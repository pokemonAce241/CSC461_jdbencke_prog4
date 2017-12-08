/* GLOBAL CONSTANTS AND VARIABLES */

/* assignment specific globals */

var score = 0;


var launch1 = 0.0;

var launch2 = 0.0;

var launch3 = 0.0;

var detonate = 0.0;

var attack1Status = 1.0;

var attack2Status = 1.0;

var attack3Status = 1.0;

var attack4Status = 1.0;

var attack5Status = 1.0;

var attack6Status = 1.0;




function main() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    camera.lookAt(scene.position);
    
    var light = new THREE.DirectionalLight(0xFFFFFF, 2);
    light.position.set( 10, 10, 10 );
    scene.add(light);
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    
    var pos =  new THREE.Vector3();
    
    document.addEventListener('mousedown',onDocumentMouseDown,false);
    
    function onDocumentMouseDown(event){
        
        if(launch1 == 0.0 && launch2 == 0.0 && launch3 == 0.0){
        var mouse = new THREE.Vector3();
        mouse.set(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, -2.0);
        mouse.unproject(camera);
        var dir = mouse.sub(camera.position).normalize();
        var distance = -(camera.position.z/dir.z);
        pos = camera.position.clone().add(dir.multiplyScalar(distance));
        launch1 = 1.0;
        launch2 = 1.0;
        launch3 = 1.0;
        
    }
    }
        
    
    
    
    var terrainGeometry = new THREE.BoxGeometry(window.innerWidth,0.7,3.0);
    var terrainMaterial = new THREE.MeshBasicMaterial({color: 0x800000});
    var terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrain.position.set(1.5,-7.0,-1.0);
    terrain.rotation.x += 0.2;
    
    var cityGeometry = new THREE.BoxGeometry(1.5,1.0,0.75);
    var cityMaterial = new THREE.MeshBasicMaterial({color: 0x00BFFF});
    
    var batteryGeometry = new THREE.BoxGeometry(2.5,0.65,0.75);
    var batteryMaterial = new THREE.MeshBasicMaterial({color: 0xFF00});
    
    var attackMissleGeometry = new THREE.SphereGeometry(0.3,4.0,4.0);
    var attackMissleMaterial = new THREE.MeshBasicMaterial({color: 0xFF4500});
    
    var defenceMissleMaterial = new THREE.MeshBasicMaterial({color: 0x006400});
    
    var battery1 = new THREE.Mesh(batteryGeometry,batteryMaterial);
    battery1.position.set(1.0,-6.5,-2.0);
    var defence1 = new THREE.Mesh(attackMissleGeometry,defenceMissleMaterial);
    defence1.position.set(1.0,-6.0,-2.0);
    
    var battery2 = new THREE.Mesh(batteryGeometry,batteryMaterial);
    battery2.position.set(-16.0,-6.5,-2.0);
     var defence2 = new THREE.Mesh(attackMissleGeometry,defenceMissleMaterial);
    defence2.position.set(-16.0,-6.0,-2.0);
    
    var battery3 = new THREE.Mesh(batteryGeometry,batteryMaterial);
    battery3.position.set(16.0,-6.5,-2.0);
     var defence3 = new THREE.Mesh(attackMissleGeometry,defenceMissleMaterial);
    defence3.position.set(16.0,-6.0,-2.0);
    
    
    var city1 = new THREE.Mesh(cityGeometry,cityMaterial);
    city1.position.set(-2.0,-6.5,-2.0);
    
    var attackMissle1 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle1.position.set(-2.0,8.0,-2.0);
    
    
    
    var city2 = new THREE.Mesh(cityGeometry,cityMaterial);
    city2.position.set(4.0,-6.5,-2.0);
    
    var attackMissle2 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle2.position.set(4.0,8.0,-2.0);
    
    
    
    var city3 = new THREE.Mesh(cityGeometry,cityMaterial);
    city3.position.set(-6.0,-6.5,-2.0);
    
    var attackMissle3 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle3.position.set(-6.0,8.0,-2.0);
    
    
    var city4 = new THREE.Mesh(cityGeometry,cityMaterial);
    city4.position.set(8.0,-6.5,-2.0);
    
    var attackMissle4 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle4.position.set(8.0,8.0,-2.0);
    
    
    var city5 = new THREE.Mesh(cityGeometry,cityMaterial);
    city5.position.set(-10.0,-6.5,-2.0);
    
    var attackMissle5 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle5.position.set(-10.0,8.0,-2.0);
    
    
    var city6 = new THREE.Mesh(cityGeometry,cityMaterial);
    city6.position.set(12.0,-6.5,-2.0);
    
    var attackMissle6 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle6.position.set(12.0,8.0,-2.0);
    
  
    scene.add(terrain);
    scene.add(battery1);
    scene.add(defence1);
    scene.add(battery2);
    scene.add(defence2);
    scene.add(battery3);
    scene.add(defence3);
    
    scene.add(city1);
    scene.add(city2);
    scene.add(city3);
    scene.add(city4);
    scene.add(city5);
    scene.add(city6);
    
    scene.add(attackMissle1);
    scene.add(attackMissle2);
    scene.add(attackMissle3);
    scene.add(attackMissle4);
    scene.add(attackMissle5);
    scene.add(attackMissle6);
    
    
    camera.position.z = 10;
    
    var hit = 2.0;
    
    var animate = function(){
     requestAnimationFrame(animate); 
        
        
        if(launch1 == 1.0 ){
           var target = pos.clone();
            target.sub(defence1.position);
            var dist = Math.min(target.length(),.1);
            
            var attackDefenceDist1 = defence1.position.distanceToSquared(attackMissle1.position);
            
            if(dist > 0){
               target.setLength(dist);
                defence1.position.add(target);
                if(attackDefenceDist1 < hit){
                   attack1Status = 0.0;
                   }
                
               }
            else{
             launch1 = 0.0;
              defence1.position.set(1.0,-6.0,-2.0);  
            }
           }
        
        if(launch2 == 1.0 ){
           var target = pos.clone();
            target.sub(defence2.position);
            var dist = Math.min(target.length(),.1);
            
             var attackDefenceDist2 = defence2.position.distanceToSquared(attackMissle1.position);
            
            if(dist > 0){
               target.setLength(dist);
                defence2.position.add(target);
                if(attackDefenceDist2 < hit){
                   attack1Status = 0.0;
                   }
               }
            else{
             launch2 = 0.0;
              defence2.position.set(-16.0,-6.0,-2.0);  
            }
           }
        
        
        if(launch3 == 1.0 ){
           var target = pos.clone();
            target.sub(defence3.position);
            var dist = Math.min(target.length(),.1);
            
            var attackDefenceDist3 = defence3.position.distanceToSquared(attackMissle1.position);
            
            if(dist > 0){
               target.setLength(dist);
                defence3.position.add(target);
                if(attackDefenceDist3 < hit){
                   attack1Status = 0.0;
                   }
               }
            else{
             launch3 = 0.0;
              defence3.position.set(16.0,-6.0,-2.0);  
            }
           }
       
        
        if(attack1Status == 1.0){
        attackMissle1.rotation.y += 0.1;
         attackMissle1.position.y -= 0.001;
            if(attackMissle1.position.y < -6.0){
               attack1Status = 0.0;
                scene.remove(city1);
               }
           }
        
           if(attack2Status == 1.0){
        attackMissle2.rotation.y += 0.1;
         attackMissle2.position.y -= 0.002;
               if(attackMissle2.position.y < -6.0){
               attack2Status = 0.0;
                scene.remove(city2);
               }
        }
        
        if(attack3Status == 1.0){
        attackMissle3.rotation.y += 0.1;
        attackMissle3.position.y -= 0.0025;
            if(attackMissle3.position.y < -6.0){
               attack3Status = 0.0;
                scene.remove(city3);
               }
           }
           
        if(attack4Status == 1.0){
        attackMissle4.rotation.y += 0.1;
        attackMissle4.position.y -= 0.0012;
            if(attackMissle4.position.y < -6.0){
               attack4Status = 0.0;
                scene.remove(city4);
               }
        }
        
        if(attack5Status == 1.0){
        attackMissle5.rotation.y += 0.1;
        attackMissle5.position.y -= 0.003;
            if(attackMissle5.position.y < -6.0){
               attack5Status = 0.0;
                scene.remove(city5);
               }
           }
        
           if(attack6Status == 1.0){
        attackMissle6.rotation.y += 0.1;
        attackMissle6.position.y -= 0.004;
               if(attackMissle6.position.y < -6.0){
               attack6Status = 0.0;
                scene.remove(city6);
               }
        }
        

        
        renderer.render(scene,camera);
    }
    
    animate();
  
} // end main
