function addCeilingLamps(scene){

      var cLamp1 = mkCeilingLamp(scene);
      cLamp1.position.x = -35;
      cLamp1.position.y = -30;
      cLamp1.position.z = 38;
      cLamp1.rotation.z = Math.PI; 
    
      var cLamp2 = mkCeilingLamp(scene);
      cLamp2.position.x = 35;
      cLamp2.position.y = 40;
      cLamp2.position.z = 38;
      cLamp2.rotation.z = Math.PI;

      var cLamp3 = mkCeilingLamp(scene);
      cLamp3.position.x = 0;
      cLamp3.position.y = 30;
      cLamp3.position.z = 38;
      cLamp3.rotation.z = Math.PI;

      var cLamp4 = mkCeilingLamp(scene);
      cLamp4.position.x = -35;
      cLamp4.position.y = 40;
      cLamp4.position.z = 38;
      cLamp4.rotation.z = Math.PI;

      var cLamp5 = mkCeilingLamp(scene);
      cLamp5.position.x = 0;
      cLamp5.position.y = 75;
      cLamp5.position.z = 38;
      cLamp5.rotation.z = Math.PI;

      var cLamp6 = mkCeilingLamp(scene);
      cLamp6.position.x = 0;
      cLamp6.position.y = -60;
      cLamp6.position.z = 38;
      cLamp6.rotation.z = Math.PI;

      var cLamp7 = mkCeilingLamp(scene);
      cLamp7.position.x = 35;
      cLamp7.position.y = -35;
      cLamp7.position.z = 38;
      cLamp7.rotation.z = Math.PI;

      var cLamp8 = mkCeilingLamp(scene);
      cLamp8.position.x = 40;
      cLamp8.position.y = 2;
      cLamp8.position.z = 38;
      cLamp8.rotation.z = Math.PI;
      
      var cLamp9 = mkCeilingLamp(scene);
      cLamp9.position.x = -10;
      cLamp9.position.y = -25;
      cLamp9.position.z = 38;
      cLamp9.rotation.z = Math.PI;

      var cLamp10 = mkCeilingLamp(scene);
      cLamp10.position.x = 10;
      cLamp10.position.y = -25;
      cLamp10.position.z = 38;
      cLamp10.rotation.z = Math.PI;

      return new Array(cLamp1,cLamp2,cLamp3,cLamp4,cLamp5,cLamp6,cLamp7,cLamp8,cLamp9,cLamp10);
}


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
     spotLight.shadowCameraVisible = false;
     spotLight.castShadow = true;
     spotLight.distance = 50;
     spotLight.shadowCameraNear = 1;
     spotLight.shadowCameraFar = 20;
     spotLight.shadowCameraFov = 50;
     spotLight.position.set(0, 0, height);
     spotLight.exponent = 1;
     spotLight.intensity = 3;
     spotLight.angle = Math.PI/2;

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
}