/* GLOBAL CONSTANTS AND VARIABLES */

/* assignment specific globals */

var score = 0;


var launch1 = 0.0;

var launch2 = 0.0;

var launch3 = 0.0;


var attack1Status = 1.0;


var attack2Status = 1.0;


var attack3Status = 1.0;


var attack4Status = 1.0;


var attack5Status = 1.0;


var attack6Status = 1.0;



var defenceExplosionStatus1 = 0.0;


var defenceExplosionStatus2 = 0.0;


var defenceExplosionStatus3 = 0.0;



var cityExplosionStatus1 = 0.0;


var cityExplosionStatus2 = 0.0;

var cityExplosionStatus3 = 0.0;


var cityExplosionStatus4 = 0.0;


var cityExplosionStatus5 = 0.0;


var cityExplosionStatus6 = 0.0;


var attackExplosionStatus1 = 0.0;

var attackExplosionStatus2 = 0.0;


var attackExplosionStatus3 = 0.0;


var attackExplosionStatus4 = 0.0;


var attackExplosionStatus5 = 0.0;


var attackExplosionStatus6 = 0.0;






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
    
    var backgroundTexture = new THREE.TextureLoader().load('https://i.imgur.com/Q2rNai5.png');
    scene.background = backgroundTexture;
    
    
    var attackClock1 = new THREE.Clock(false);
    var attackClock2 = new THREE.Clock(false);
    var attackClock3 = new THREE.Clock(false);
    var attackClock4 = new THREE.Clock(false);
    var attackClock5 = new THREE.Clock(false);
    var attackClock6 = new THREE.Clock(false);
    
    var defenceClock1 = new THREE.Clock(false);
    var defenceClock2 = new THREE.Clock(false);
    var defenceClock3 = new THREE.Clock(false);
    
    var cityClock1 = new THREE.Clock(false);
    var cityClock2 = new THREE.Clock(false);
    var cityClock3 = new THREE.Clock(false);
    var cityClock4 = new THREE.Clock(false);
    var cityClock5 = new THREE.Clock(false);
    var cityClock6 = new THREE.Clock(false);


    
    
    
    
    
    var pos =  new THREE.Vector3();
    
    document.addEventListener('mousedown',onDocumentMouseDown,false);
    
    function onDocumentMouseDown(event){
        
        if(launch1 == 0.0 && launch2 == 0.0 && launch3 == 0.0 && defenceExplosionStatus1 == 0.0 && defenceExplosionStatus2 == 0.0 && defenceExplosionStatus3 == 0.0){
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
    
    var explosionGeometry = new THREE.SphereGeometry(0.6,4.0,4.0);
    var attackExplosionGeometry = new THREE.SphereGeometry(0.4,4.0,4.0);
    var explosionMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
    
    var defenceMissleMaterial = new THREE.MeshBasicMaterial({color: 0x006400});
    
    var battery1 = new THREE.Mesh(batteryGeometry,batteryMaterial);
    battery1.position.set(1.0,-6.5,-2.0);
    var defence1 = new THREE.Mesh(attackMissleGeometry,defenceMissleMaterial);
    defence1.position.set(1.0,-6.0,-2.0);
    var defenceExplosion1 = new THREE.Mesh(explosionGeometry,explosionMaterial);
    defenceExplosion1.position.set(10.0,10.0,10.0);
    
    var battery2 = new THREE.Mesh(batteryGeometry,batteryMaterial);
    battery2.position.set(-16.0,-6.5,-2.0);
     var defence2 = new THREE.Mesh(attackMissleGeometry,defenceMissleMaterial);
    defence2.position.set(-16.0,-6.0,-2.0);
    var defenceExplosion2 = new THREE.Mesh(explosionGeometry,explosionMaterial);
    defenceExplosion2.position.set(10.0,10.0,10.0);
    
    var battery3 = new THREE.Mesh(batteryGeometry,batteryMaterial);
    battery3.position.set(16.0,-6.5,-2.0);
     var defence3 = new THREE.Mesh(attackMissleGeometry,defenceMissleMaterial);
    defence3.position.set(16.0,-6.0,-2.0);
    var defenceExplosion3 = new THREE.Mesh(explosionGeometry,explosionMaterial);
    defenceExplosion3.position.set(10.0,10.0,10.0);
    
    
    var city1 = new THREE.Mesh(cityGeometry,cityMaterial);
    city1.position.set(-2.0,-6.5,-2.0);
    var cityExplosion1 = new THREE.Mesh(explosionGeometry,explosionMaterial);
    cityExplosion1.position.set(10.0,10.0,10.0);
    
    var attackMissle1 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle1.position.set(-2.0,16.0,-2.0);
    
    var attackExplosion1 = new THREE.Mesh(attackExplosionGeometry,explosionMaterial);
    attackExplosion1.position.set(10.0,10.0,10.0);
    
    
    
    var city2 = new THREE.Mesh(cityGeometry,cityMaterial);
    city2.position.set(4.0,-6.5,-2.0);
    var cityExplosion2 = new THREE.Mesh(explosionGeometry,explosionMaterial);
    cityExplosion2.position.set(10.0,10.0,10.0);
    
    var attackMissle2 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle2.position.set(4.0,20.0,-2.0);
    
    var attackExplosion2 = new THREE.Mesh(attackExplosionGeometry,explosionMaterial);
    attackExplosion2.position.set(10.0,10.0,10.0);
    
    
    
    var city3 = new THREE.Mesh(cityGeometry,cityMaterial);
    city3.position.set(-6.0,-6.5,-2.0);
    var cityExplosion3 = new THREE.Mesh(explosionGeometry,explosionMaterial);
    cityExplosion3.position.set(10.0,10.0,10.0);
    
    var attackMissle3 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle3.position.set(-6.0,30.0,-2.0);
    
    var attackExplosion3 = new THREE.Mesh(attackExplosionGeometry,explosionMaterial);
    attackExplosion3.position.set(10.0,10.0,10.0);
    
    
    var city4 = new THREE.Mesh(cityGeometry,cityMaterial);
    city4.position.set(8.0,-6.5,-2.0);
    var cityExplosion4 = new THREE.Mesh(explosionGeometry,explosionMaterial);
    cityExplosion4.position.set(10.0,10.0,10.0);
    
    var attackMissle4 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle4.position.set(8.0,24.0,-2.0);
    
    var attackExplosion4 = new THREE.Mesh(attackExplosionGeometry,explosionMaterial);
    attackExplosion4.position.set(10.0,10.0,10.0);
    
    
    var city5 = new THREE.Mesh(cityGeometry,cityMaterial);
    city5.position.set(-10.0,-6.5,-2.0);
    var cityExplosion5 = new THREE.Mesh(explosionGeometry,explosionMaterial);
    cityExplosion5.position.set(10.0,10.0,10.0);
    
    var attackMissle5 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle5.position.set(-10.0,22.0,-2.0);
    
    var attackExplosion5 = new THREE.Mesh(attackExplosionGeometry,explosionMaterial);
    attackExplosion5.position.set(10.0,10.0,10.0);
    
    
    var city6 = new THREE.Mesh(cityGeometry,cityMaterial);
    city6.position.set(12.0,-6.5,-2.0);
    var cityExplosion6 = new THREE.Mesh(explosionGeometry,explosionMaterial);
    cityExplosion6.position.set(10.0,10.0,10.0);
    
    var attackMissle6 = new THREE.Mesh(attackMissleGeometry,attackMissleMaterial);
    attackMissle6.position.set(12.0,35.0,-2.0);
    
    var attackExplosion6 = new THREE.Mesh(attackExplosionGeometry,explosionMaterial);
    attackExplosion6.position.set(10.0,10.0,10.0);
    
  
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
    
    scene.add(defenceExplosion1);
    scene.add(defenceExplosion2);
    scene.add(defenceExplosion3);
    
    scene.add(attackExplosion1);
    scene.add(attackExplosion2);
    scene.add(attackExplosion3);
    scene.add(attackExplosion4);
    scene.add(attackExplosion5);
    scene.add(attackExplosion6);
    
    scene.add(cityExplosion1);
    scene.add(cityExplosion2);
    scene.add(cityExplosion3);
    scene.add(cityExplosion4);
    scene.add(cityExplosion5);
    scene.add(cityExplosion6);
    
    camera.position.z = 10;
    
    
    var animate = function(){
     requestAnimationFrame(animate); 
        
        
        if(launch1 == 1.0 ){
           var target = pos.clone();
            target.sub(defence1.position);
            var dist = Math.min(target.length(),.2);
            
            var attackDefenceDist1 = defence1.position.distanceToSquared(attackMissle1.position);
            var attackDefenceDist2 = defence1.position.distanceToSquared(attackMissle2.position);
            var attackDefenceDist3 = defence1.position.distanceToSquared(attackMissle3.position);
            var attackDefenceDist4 = defence1.position.distanceToSquared(attackMissle4.position);
            var attackDefenceDist5 = defence1.position.distanceToSquared(attackMissle5.position);
            var attackDefenceDist6 = defence1.position.distanceToSquared(attackMissle6.position);
            console.log(attackDefenceDist1);
            
            if(dist > 0){
               target.setLength(dist);
                defence1.position.add(target);
                
               }
            else{
             if(attackDefenceDist1 < 6.0){
                   score += 150;
                   attackMissle1.position.set(-2.0,16.0,-2.0); 
                   
                   }
                if(attackDefenceDist2 < 6.0){
                    score += 150;
                   attackMissle2.position.set(4.0,20.0,-2.0); 
                   
                   }
                if(attackDefenceDist3 < 6.0){
                   score += 150;
                   attackMissle3.position.set(-6.0,30.0,-2.0); 
                   
                   }
                if(attackDefenceDist4 < 6.0){
                   score += 150;
                   attackMissle4.position.set(8.0,24.0,-2.0); 
                   
                   }
                if(attackDefenceDist5 < 6.0){
                   score += 150;
                   attackMissle5.position.set(-10.0,22.0,-2.0);
                   
                   }
                if(attackDefenceDist6 < 6.0){
                    score += 150;
                   attackMissle6.position.set(12.0,35.0,-2.0); 
                   
                   }
                defenceExplosion1.position.set(defence1.position.x,defence1.position.y,defence1.position.z);
                defenceClock1.start();
                defenceExplosionStatus1 = 1.0;
                launch1 = 0.0;
              defence1.position.set(1.0,-6.0,-2.0);  
            }
           }
        
        if(launch2 == 1.0 ){
           var target = pos.clone();
            target.sub(defence2.position);
            var dist = Math.min(target.length(),.2);
            
             var attackDefenceDist1 = defence2.position.distanceToSquared(attackMissle1.position);
             var attackDefenceDist2 = defence2.position.distanceToSquared(attackMissle2.position);
            var attackDefenceDist3 = defence2.position.distanceToSquared(attackMissle3.position);
            var attackDefenceDist4 = defence2.position.distanceToSquared(attackMissle4.position);
            var attackDefenceDist5 = defence2.position.distanceToSquared(attackMissle5.position);
            var attackDefenceDist6 = defence2.position.distanceToSquared(attackMissle6.position);
            
            if(dist > 0){
               target.setLength(dist);
                defence2.position.add(target);
                
               }
            else{
                if(attackDefenceDist1 < 6.0){
                   score += 150;
                   attackMissle1.position.set(-2.0,16.0,-2.0); 
                   
                   }
                if(attackDefenceDist2 < 6.0){
                    score += 150;
                   attackMissle2.position.set(4.0,20.0,-2.0); 
                   
                   }
                if(attackDefenceDist3 < 6.0){
                   score += 150;
                   attackMissle3.position.set(-6.0,30.0,-2.0); 
                   
                   }
                if(attackDefenceDist4 < 6.0){
                   score += 150;
                   attackMissle4.position.set(8.0,24.0,-2.0); 
                   
                   }
                if(attackDefenceDist5 < 6.0){
                   score += 150;
                   attackMissle5.position.set(-10.0,22.0,-2.0);
                   
                   }
                if(attackDefenceDist6 < 6.0){
                    score += 150;
                   attackMissle6.position.set(12.0,35.0,-2.0); 
                   
                   }
                
                defenceExplosion2.position.set(defence2.position.x,defence2.position.y,defence2.position.z);
                defenceClock2.start();
                defenceExplosionStatus2 = 1.0;
             launch2 = 0.0;
              defence2.position.set(-16.0,-6.0,-2.0);  
            }
           }
        
        
        if(launch3 == 1.0 ){
           var target = pos.clone();
            target.sub(defence3.position);
            var dist = Math.min(target.length(),.2);
            
            var attackDefenceDist1 = defence3.position.distanceToSquared(attackMissle1.position);
            var attackDefenceDist2 = defence3.position.distanceToSquared(attackMissle2.position);
            var attackDefenceDist3 = defence3.position.distanceToSquared(attackMissle3.position);
            var attackDefenceDist4 = defence3.position.distanceToSquared(attackMissle4.position);
            var attackDefenceDist5 = defence3.position.distanceToSquared(attackMissle5.position);
            var attackDefenceDist6 = defence3.position.distanceToSquared(attackMissle6.position);
            
            if(dist > 0){
               target.setLength(dist);
                defence3.position.add(target);
                
               }
            else{
                if(attackDefenceDist1 < 6.0){
                   score += 150;
                   attackMissle1.position.set(-2.0,16.0,-2.0); 
                   
                   }
                if(attackDefenceDist2 < 6.0){
                    score += 150;
                   attackMissle2.position.set(4.0,20.0,-2.0); 
                   
                   }
                if(attackDefenceDist3 < 6.0){
                   score += 150;
                   attackMissle3.position.set(-6.0,30.0,-2.0); 
                   
                   }
                if(attackDefenceDist4 < 6.0){
                   score += 150;
                   attackMissle4.position.set(8.0,24.0,-2.0); 
                   
                   }
                if(attackDefenceDist5 < 6.0){
                   score += 150;
                   attackMissle5.position.set(-10.0,22.0,-2.0);
                   
                   }
                if(attackDefenceDist6 < 6.0){
                    score += 150;
                   attackMissle6.position.set(12.0,35.0,-2.0); 
                   
                   }
                
                defenceExplosion3.position.set(defence3.position.x,defence3.position.y,defence3.position.z);
                defenceClock3.start();
                defenceExplosionStatus3 = 1.0;
             launch3 = 0.0;
              defence3.position.set(16.0,-6.0,-2.0);  
            }
           }
       
        
        if(attack1Status == 1.0){
        attackMissle1.rotation.y += 0.1;
         attackMissle1.position.y -= 0.01;
            
            var attackDefenceExplosionDist1 = attackMissle1.position.distanceToSquared(defenceExplosion1.position);
            var attackDefenceExplosionDist2 = attackMissle1.position.distanceToSquared(defenceExplosion2.position);
            var attackDefenceExplosionDist3 = attackMissle1.position.distanceToSquared(defenceExplosion3.position);
               if(attackDefenceExplosionDist1 < 12){
                   score += 150;
                   attackMissle1.position.set(-2.0,16.0,-2.0);
                   attackExplosion1.position.set(attackMissle1.position.x,attackMissle1.position.y,attackMissle1.position.z);
                attackClock1.start();
                attackExplosionStatus1 = 1.0;
                  }
               if(attackDefenceExplosionDist2 < 12){
                   score += 150;
                   attackMissle1.position.set(-2.0,16.0,-2.0);
                   attackExplosion1.position.set(attackMissle1.position.x,attackMissle1.position.y,attackMissle1.position.z);
                attackClock1.start();
                attackExplosionStatus1 = 1.0;
                  }
               if(attackDefenceExplosionDist3 < 12){
                   score += 150;
                   attackMissle1.position.set(-2.0,16.0,-2.0);
                   attackExplosion1.position.set(attackMissle1.position.x,attackMissle1.position.y,attackMissle1.position.z);
                attackClock1.start();
                attackExplosionStatus1 = 1.0;
                  }
            
            if(attackMissle1.position.y < -6.0){
                cityExplosion1.position.set(attackMissle1.position.x,attackMissle1.position.y,attackMissle1.position.z);
                cityClock1.start();
                cityExplosionStatus1 = 1.0;
               attackMissle1.position.set(12.0,35.0,-2.0);
                attack1Status = 0.0;
                scene.remove(city1);
               }
           }
        
           if(attack2Status == 1.0){
        attackMissle2.rotation.y += 0.1;
         attackMissle2.position.y -= 0.02;
               
               var attackDefenceExplosionDist1 = attackMissle2.position.distanceToSquared(defenceExplosion1.position);
            var attackDefenceExplosionDist2 = attackMissle2.position.distanceToSquared(defenceExplosion2.position);
            var attackDefenceExplosionDist3 = attackMissle2.position.distanceToSquared(defenceExplosion3.position);
               if(attackDefenceExplosionDist1 < 12){
                   score += 150;
                   attackMissle2.position.set(4.0,20.0,-2.0);
                   attackExplosion2.position.set(attackMissle2.position.x,attackMissle2.position.y,attackMissle2.position.z);
                attackClock2.start();
                attackExplosionStatus2 = 1.0;
                  }
               if(attackDefenceExplosionDist2 < 12){
                   score += 150;
                   attackMissle2.position.set(4.0,20.0,-2.0);
                   attackExplosion2.position.set(attackMissle2.position.x,attackMissle2.position.y,attackMissle2.position.z);
                attackClock2.start();
                attackExplosionStatus2 = 1.0;
                  }
               if(attackDefenceExplosionDist3 < 12){
                   score += 150;
                  attackMissle2.position.set(4.0,20.0,-2.0);
                   attackExplosion2.position.set(attackMissle2.position.x,attackMissle2.position.y,attackMissle2.position.z);
                attackClock2.start();
                attackExplosionStatus2 = 1.0;
                  }
               
               if(attackMissle2.position.y < -6.0){
                   cityExplosion2.position.set(attackMissle2.position.x,attackMissle2.position.y,attackMissle2.position.z);
                cityClock2.start();
                cityExplosionStatus2 = 1.0;
               attackMissle2.position.set(12.0,35.0,-2.0);
                attack2Status = 0.0;
                scene.remove(city2);
               }
        }
        
        if(attack3Status == 1.0){
        attackMissle3.rotation.y += 0.1;
        attackMissle3.position.y -= 0.025;
            
          var attackDefenceExplosionDist1 = attackMissle3.position.distanceToSquared(defenceExplosion1.position);
            var attackDefenceExplosionDist2 = attackMissle3.position.distanceToSquared(defenceExplosion2.position);
            var attackDefenceExplosionDist3 = attackMissle3.position.distanceToSquared(defenceExplosion3.position);
               if(attackDefenceExplosionDist1 < 12){
                   score += 150;
                   attackMissle3.position.set(-6.0,30.0,-2.0);
                   attackExplosion3.position.set(attackMissle3.position.x,attackMissle3.position.y,attackMissle3.position.z);
                attackClock3.start();
                attackExplosionStatus3 = 1.0;
                  }
               if(attackDefenceExplosionDist2 < 12){
                   score += 150;
                   attackMissle3.position.set(-6.0,30.0,-2.0);
                   attackExplosion3.position.set(attackMissle3.position.x,attackMissle3.position.y,attackMissle3.position.z);
                attackClock3.start();
                attackExplosionStatus3 = 1.0;
                  }
               if(attackDefenceExplosionDist3 < 12){
                   score += 150;
                  attackMissle3.position.set(-6.0,30.0,-2.0);
                   attackExplosion3.position.set(attackMissle3.position.x,attackMissle3.position.y,attackMissle3.position.z);
                attackClock3.start();
                attackExplosionStatus3 = 1.0;
                  }
            
            if(attackMissle3.position.y < -6.0){
                cityExplosion3.position.set(attackMissle3.position.x,attackMissle3.position.y,attackMissle3.position.z);
                cityClock3.start();
                cityExplosionStatus3 = 1.0;
                attackMissle3.position.set(12.0,35.0,-2.0);
               attack3Status = 0.0;
                scene.remove(city3);
               }
           }
           
        if(attack4Status == 1.0){
        attackMissle4.rotation.y += 0.1;
        attackMissle4.position.y -= 0.012;
            
            
             var attackDefenceExplosionDist1 = attackMissle4.position.distanceToSquared(defenceExplosion1.position);
            var attackDefenceExplosionDist2 = attackMissle4.position.distanceToSquared(defenceExplosion2.position);
            var attackDefenceExplosionDist3 = attackMissle4.position.distanceToSquared(defenceExplosion3.position);
               if(attackDefenceExplosionDist1 < 12){
                   score += 150;
                   attackMissle4.position.set(8.0,24.0,-2.0);
                   attackExplosion4.position.set(attackMissle4.position.x,attackMissle4.position.y,attackMissle4.position.z);
                attackClock4.start();
                attackExplosionStatus4 = 1.0;
                  }
               if(attackDefenceExplosionDist2 < 12){
                   score += 150;
                   attackMissle4.position.set(8.0,24.0,-2.0);
                   attackExplosion4.position.set(attackMissle4.position.x,attackMissle4.position.y,attackMissle4.position.z);
                attackClock4.start();
                attackExplosionStatus4 = 1.0;
                  }
               if(attackDefenceExplosionDist3 < 12){
                   score += 150;
                  attackMissle4.position.set(8.0,24.0,-2.0);
                   attackExplosion4.position.set(attackMissle4.position.x,attackMissle4.position.y,attackMissle4.position.z);
                attackClock4.start();
                attackExplosionStatus4 = 1.0;
                  }
            
            if(attackMissle4.position.y < -6.0){
                cityExplosion4.position.set(attackMissle4.position.x,attackMissle4.position.y,attackMissle4.position.z);
                cityClock4.start();
                cityExplosionStatus4 = 1.0;
                attackMissle4.position.set(12.0,35.0,-2.0);
               attack4Status = 0.0;
                scene.remove(city4);
               }
        }
        
        if(attack5Status == 1.0){
        attackMissle5.rotation.y += 0.1;
        attackMissle5.position.y -= 0.03;
            
             var attackDefenceExplosionDist1 = attackMissle5.position.distanceToSquared(defenceExplosion1.position);
            var attackDefenceExplosionDist2 = attackMissle5.position.distanceToSquared(defenceExplosion2.position);
            var attackDefenceExplosionDist3 = attackMissle5.position.distanceToSquared(defenceExplosion3.position);
               if(attackDefenceExplosionDist1 < 12){
                   score += 150;
                   attackMissle5.position.set(-10.0,22.0,-2.0);
                   attackExplosion5.position.set(attackMissle5.position.x,attackMissle5.position.y,attackMissle5.position.z);
                attackClock5.start();
                attackExplosionStatus5 = 1.0;
                  }
               if(attackDefenceExplosionDist2 < 12){
                   score += 150;
                   attackMissle5.position.set(-10.0,22.0,-2.0);
                   attackExplosion5.position.set(attackMissle5.position.x,attackMissle5.position.y,attackMissle5.position.z);
                attackClock5.start();
                attackExplosionStatus5 = 1.0;
                  }
               if(attackDefenceExplosionDist3 < 12){
                   score += 150;
                  attackMissle5.position.set(-10.0,22.0,-2.0);
                   attackExplosion5.position.set(attackMissle5.position.x,attackMissle5.position.y,attackMissle5.position.z);
                attackClock5.start();
                attackExplosionStatus5 = 1.0;
                  }
            
            
            if(attackMissle5.position.y < -6.0){
                cityExplosion5.position.set(attackMissle5.position.x,attackMissle5.position.y,attackMissle5.position.z);
                cityClock5.start();
                cityExplosionStatus5 = 1.0;
                attackMissle5.position.set(12.0,35.0,-2.0);
               attack5Status = 0.0;
                scene.remove(city5);
               }
           }
        
           if(attack6Status == 1.0){
        attackMissle6.rotation.y += 0.1;
        attackMissle6.position.y -= 0.04;
               
            var attackDefenceExplosionDist1 = attackMissle6.position.distanceToSquared(defenceExplosion1.position);
            var attackDefenceExplosionDist2 = attackMissle6.position.distanceToSquared(defenceExplosion2.position);
            var attackDefenceExplosionDist3 = attackMissle6.position.distanceToSquared(defenceExplosion3.position);
               if(attackDefenceExplosionDist1 < 12){
                   score += 150;
                   attackMissle6.position.set(12.0,35.0,-2.0);
                   attackExplosion6.position.set(attackMissle6.position.x,attackMissle6.position.y,attackMissle6.position.z);
                attackClock6.start();
                attackExplosionStatus6 = 1.0;
                  }
               if(attackDefenceExplosionDist2 < 12){
                   score += 150;
                   attackMissle6.position.set(12.0,35.0,-2.0);
                   attackExplosion6.position.set(attackMissle6.position.x,attackMissle6.position.y,attackMissle6.position.z);
                attackClock6.start();
                attackExplosionStatus6 = 1.0;
                  }
               if(attackDefenceExplosionDist3 < 12){
                   score += 150;
                   attackMissle6.position.set(12.0,35.0,-2.0);
                   attackExplosion6.position.set(attackMissle6.position.x,attackMissle6.position.y,attackMissle6.position.z);
                attackClock6.start();
                attackExplosionStatus6 = 1.0;
                  }
               
               if(attackMissle6.position.y < -6.0){
                   cityExplosion6.position.set(attackMissle6.position.x,attackMissle6.position.y,attackMissle6.position.z);
                cityClock6.start();
                cityExplosionStatus6 = 1.0;
               attackMissle6.position.set(12.0,35.0,-2.0);
               attack6Status = 0.0;
                scene.remove(city6);
               }
        }
        
        
        
        
        
        if(defenceExplosionStatus1 == 1.0){
         if(defenceClock1.getElapsedTime() > 0.5){
             defenceExplosionStatus1 = 0.0
             defenceClock1.stop();
             defenceExplosion1.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(defenceExplosionStatus2 == 1.0){
         if(defenceClock2.getElapsedTime() > 0.5){
             defenceExplosionStatus2 = 0.0
             defenceClock2.stop();
             defenceExplosion2.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(defenceExplosionStatus3 == 1.0){
         if(defenceClock3.getElapsedTime() > 0.5){
             defenceExplosionStatus3 = 0.0
             defenceClock3.stop();
             defenceExplosion3.position.set(10.0,10.0,10.0);
            
            }
        }
        
        
        if(cityExplosionStatus1 == 1.0){
         if(cityClock1.getElapsedTime() > 0.5){
             cityExplosionStatus1 = 0.0
             cityClock1.stop();
             cityExplosion1.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(cityExplosionStatus2 == 1.0){
         if(cityClock2.getElapsedTime() > 0.5){
             cityExplosionStatus2 = 0.0
             cityClock2.stop();
             cityExplosion2.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(cityExplosionStatus3 == 1.0){
         if(cityClock3.getElapsedTime() > 0.5){
             cityExplosionStatus3 = 0.0
             cityClock3.stop();
             cityExplosion3.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(cityExplosionStatus4 == 1.0){
         if(cityClock4.getElapsedTime() > 0.5){
             cityExplosionStatus4 = 0.0
             cityClock4.stop();
             cityExplosion4.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(cityExplosionStatus5 == 1.0){
         if(cityClock5.getElapsedTime() > 0.5){
             cityExplosionStatus5 = 0.0
             cityClock5.stop();
             cityExplosion5.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(cityExplosionStatus6 == 1.0){
         if(cityClock6.getElapsedTime() > 0.5){
             cityExplosionStatus6 = 0.0
             cityClock6.stop();
             cityExplosion6.position.set(10.0,10.0,10.0);
            
            }
        }
        
        
        
        if(attackExplosionStatus1 == 1.0){
         if(attackClock1.getElapsedTime() > 0.5){
             attackExplosionStatus1 = 0.0
             attackClock1.stop();
             attackExplosion1.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(attackExplosionStatus2 == 1.0){
         if(attackClock2.getElapsedTime() > 0.5){
             attackExplosionStatus2 = 0.0
             attackClock2.stop();
             attackExplosion2.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(attackExplosionStatus3 == 1.0){
         if(attackClock3.getElapsedTime() > 0.5){
             attackExplosionStatus3 = 0.0
             attackClock3.stop();
             attackExplosion3.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(attackExplosionStatus4 == 1.0){
         if(attackClock4.getElapsedTime() > 0.5){
             attackExplosionStatus4 = 0.0
             attackClock4.stop();
             attackExplosion4.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(attackExplosionStatus5 == 1.0){
         if(attackClock5.getElapsedTime() > 0.5){
             attackExplosionStatus5 = 0.0
             attackClock5.stop();
             attackExplosion5.position.set(10.0,10.0,10.0);
            
            }
        }
        
        if(attackExplosionStatus6 == 1.0){
         if(attackClock6.getElapsedTime() > 0.5){
             attackExplosionStatus6 = 0.0
             attackClock6.stop();
             attackExplosion6.position.set(10.0,10.0,10.0);
            
            }
        }
        
        
        renderer.render(scene,camera);
    }
    
    animate();
  
} // end main
