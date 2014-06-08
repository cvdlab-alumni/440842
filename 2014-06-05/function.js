function mkBasis (radius, height) {
     var joint = new THREE.Object3D();

     var cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 8, 8, false);
     var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x706565, shading: THREE.FlatShading});
     var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
     cylinder.castShadow = true;
     cylinder.receiveShadow = true;
     cylinder.position.set(0, 0, 0);
     cylinder.rotation.x = Math.PI/2;

     var hook = new THREE.Object3D();
     hook.position.set(0, height, 0);
     hook.rotation.x = -Math.PI/2;

     joint.add(cylinder);
     cylinder.add(hook);

     joint.radius = radius;
     joint.height = height;
     joint.cylinder = cylinder;
     joint.hook = hook;

     return joint;
}

function mkJoint (radius, height) {
     var joint = new THREE.Object3D();

     var sphereGeometry = new THREE.SphereGeometry(radius, 8, 8);
     var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xdddd33, shading: THREE.FlatShading});
     var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
     sphere.position.set(0, 0, 0);
     sphere.castShadow = true;
     sphere.receiveShadow = true;

     var cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 8, 8, false);
     var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc, shading: THREE.FlatShading});
     var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
     cylinder.position.set(0, 0, height / 2 + radius);
     cylinder.rotation.x = Math.PI/2;
     cylinder.castShadow = true;
     cylinder.receiveShadow = true;

     var hook = new THREE.Object3D();
     hook.position.set(0, height/2+radius,0);
     hook.rotation.x = -Math.PI/2;

     joint.add(sphere);
     sphere.add(cylinder);
     cylinder.add(hook);

     joint.sphere = sphere;
     joint.cylinder = cylinder;
     joint.hook = hook;

     return joint;
}

function mkLamp (radius, height) {
     var joint = new THREE.Object3D();          

     var sphereGeometry = new THREE.SphereGeometry(radius, 8, 8);
     var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xdddd33, shading: THREE.FlatShading});
     var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
     sphere.position.set(0, 0, 0);
     sphere.castShadow = true;
     sphere.receiveShadow = true;

     var sphereGeometry = new THREE.SphereGeometry(3*radius, 8, 8, 0, 6.3, Math.PI/2);
     var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xdddd33, shading: THREE.FlatShading});
     var halfSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
     halfSphere.rotation.x = Math.PI/2;
     halfSphere.position.set(0, 0, 4*radius);
     halfSphere.castShadow = false;

     var hook = new THREE.Object3D();
     hook.position.set(0, -radius, 0);
     hook.rotation.x = -Math.PI/2;

     var pointColor = "#ffffff";
     var spotLight = new THREE.SpotLight(pointColor);
     spotLight.castShadow = true;
     spotLight.distance = 0;
     spotLight.shadowCameraNear = 1;
     spotLight.shadowCameraFar = 100;
     spotLight.shadowCameraFov = 130;
     spotLight.position.set(0, 0, -3/2*radius);
     spotLight.exponent = 1;
     spotLight.intensity = 6;
     spotLight.shadowCameraVisible = true;

     var target = new THREE.Object3D();
     target.position = new THREE.Vector3(0,0,100);
     spotLight.target = target;

     joint.add(sphere);
     sphere.add(halfSphere);
     halfSphere.add(hook);
     hook.add(spotLight);
     spotLight.add(target);

     joint.sphere = sphere;
     joint.halfSphere = halfSphere;
     joint.spotLight = spotLight;

     return joint;
}