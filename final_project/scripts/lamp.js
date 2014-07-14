function addCeilingLamps(scene){

      var cLamp1 = mkCeilingLamp(scene);
      cLamp1.position.x = -3.5;
      cLamp1.position.y = -3;
      cLamp1.position.z = 3.8;
      cLamp1.rotation.z = Math.PI; 
   
      var cLamp2 = mkCeilingLamp(scene);
      cLamp2.position.x = 3.5;
      cLamp2.position.y = 4;
      cLamp2.position.z = 3.8;
      cLamp2.rotation.z = Math.PI;

      var cLamp3 = mkCeilingLamp(scene);
      cLamp3.position.x = 0;
      cLamp3.position.y = 3;
      cLamp3.position.z = 3.8;
      cLamp3.rotation.z = Math.PI;

      var cLamp4 = mkCeilingLamp(scene);
      cLamp4.position.x = -3.5;
      cLamp4.position.y = 4;
      cLamp4.position.z = 3.8;
      cLamp4.rotation.z = Math.PI;

      var cLamp5 = mkCeilingLamp(scene);
      cLamp5.position.x = 0;
      cLamp5.position.y = 7.5;
      cLamp5.position.z = 3.8;
      cLamp5.rotation.z = Math.PI;

      var cLamp6 = mkCeilingLamp(scene);
      cLamp6.position.x = 0;
      cLamp6.position.y = -6;
      cLamp6.position.z = 3.8;
      cLamp6.rotation.z = Math.PI;

      var cLamp7 = mkCeilingLamp(scene);
      cLamp7.position.x = 3.5;
      cLamp7.position.y = -3.5;
      cLamp7.position.z = 3.8;
      cLamp7.rotation.z = Math.PI;

      var cLamp8 = mkCeilingLamp(scene);
      cLamp8.position.x = 4;
      cLamp8.position.y = 0.2;
      cLamp8.position.z = 3.8;
      cLamp8.rotation.z = Math.PI;
      
      var cLamp9 = mkCeilingLamp(scene);
      cLamp9.position.x = -1;
      cLamp9.position.y = -2.5;
      cLamp9.position.z = 3.8;
      cLamp9.rotation.z = Math.PI;

      var cLamp10 = mkCeilingLamp(scene);
      cLamp10.position.x = 1;
      cLamp10.position.y = -2.5;
      cLamp10.position.z = 3.8;
      cLamp10.rotation.z = Math.PI;

      return new Array(cLamp1,cLamp2,cLamp3,cLamp4,cLamp5,cLamp6,cLamp7,cLamp8,cLamp9,cLamp10);

}


function mkCeilingLamp(scene){
     
     var radius = 0.3; 
     var height = radius*0.3;

     var geometry = new THREE.Geometry();
     var cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 8, 8, false);
     geometry.merge(cylinderGeometry);
     var material = new THREE.MeshLambertMaterial({color: 0xcccccc, shading: THREE.FlatShading});
     lamp = new THREE.Mesh(geometry, material);
     lamp.rotation.x = Math.PI/2;
     lamp.castShadow = false;
     lamp.receiveShadow = false;

     var targetGeometry = new THREE.SphereGeometry(6/7*radius, 8, 8, 0, 6.3, Math.PI/2);
     var targetMaterial = new THREE.MeshPhongMaterial( { ambient: 0xF7F25E, color: 0xF7F25E, specular: 0xF7F25E, shininess: 100, shading: THREE.FlatShading } );
     targetMaterial.transparent = true;
     targetMaterial.opacity = 0.8;
     var target = new THREE.Mesh(targetGeometry, targetMaterial);
     target.rotation.x = -Math.PI;
     target.position.set(0, -height/2, 0);
     target.castShadow = false;
     target.receiveShadow = false;

     var pointColor = "#ffffff";
     var spotLight = new THREE.SpotLight(pointColor);
     spotLight.castShadow = true;
     spotLight.distance = 3.8;
     spotLight.position.set(0, 0, height);
     spotLight.exponent = 0.2;
     spotLight.intensity = 2;
     spotLight.angle = Math.PI;
     spotLight.position.set(0, -radius-2, 0);
//    spotLight.shadowCameraVisible = true;
//    spotLight.shadowCameraNear = 1;
//    spotLight.shadowCameraFar = 20;
//    spotLight.shadowCameraFov = 50;
     spotLight.target = target;
     spotLight.target.rotation.x = Math.PI;


     lamp.add(target);
     target.add(spotLight);

     lamp.spotLight = spotLight;
     lamp.onMouseDown = function() { 
        this.spotLight.visible = !this.spotLight.visible;
      }

     scene.add(lamp);
     return lamp;
}

/*
function mkCeilingLamp(scene){
     
     var radius = 3; 
     var height = radius*0.3;

     var geometry = new THREE.Geometry();
     var cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 8, 8, false);
     geometry.merge(cylinderGeometry);
     var material = new THREE.MeshLambertMaterial({color: 0xcccccc, shading: THREE.FlatShading});
     lamp = new THREE.Mesh(geometry, material);
     lamp.rotation.x = Math.PI/2;
     lamp.castShadow = true;
     lamp.receiveShadow = true;

     var hook = new THREE.Object3D();
     hook.position.set(0, 0,0);
     hook.rotation.x = -Math.PI/2;

     var pointColor = "#ffffff";
     var spotLight = new THREE.SpotLight(pointColor);
     spotLight.castShadow = true;
     spotLight.distance = 40;
     spotLight.position.set(0, 0, height);
     spotLight.exponent = 1;
     spotLight.intensity = 3;
     spotLight.angle = Math.PI/2;
//    spotLight.shadowCameraVisible = true;
//    spotLight.shadowCameraNear = 1;
//    spotLight.shadowCameraFar = 20;
//    spotLight.shadowCameraFov = 50;

     var sphereGeometry = new THREE.SphereGeometry(2/3*radius, 8, 8);
     var sphereMaterial = new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0xffffff, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } );
     sphereMaterial.transparent = true;
     sphereMaterial.opacity = 0.6;
     var target = new THREE.Mesh(sphereGeometry, sphereMaterial);
     target.position.set(0, 0, height);
     target.castShadow = false;
     target.receiveShadow = false;

     spotLight.target = target;

     lamp.add(hook);
     hook.add(spotLight);
     spotLight.add(target);

     lamp.spotLight = spotLight;
     lamp.onMouseDown = function() { 
        this.spotLight.visible = !this.spotLight.visible;
      }

     scene.add(lamp);
     return lamp;
}*/