function mkCeilingLamp(scene){
     
     var radius = 3; 
     var height = radius*0.3;

     var geometry = new THREE.Geometry();
     var cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 16, 16, false);
     THREE.GeometryUtils.merge(geometry, cylinderGeometry);
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
     spotLight.shadowCameraVisible = true;
     spotLight.castShadow = true;
     spotLight.distance = 50;
     spotLight.shadowCameraNear = 1;
     spotLight.shadowCameraFar = 20;
     spotLight.shadowCameraFov = 50;
     spotLight.position.set(0, 0, height);
     spotLight.exponent = 1;
     spotLight.intensity = 3;
     spotLight.angle = Math.PI/2;

     var sphereGeometry = new THREE.SphereGeometry(2/3*radius, 32, 32);
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