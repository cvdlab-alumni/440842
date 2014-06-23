function addDoors(scene){

     var door1 = mkDoor(scene);
     /*
     door1.position.x = -35;
     door1.position.y = -30;
     door1.position.z = 38;
     door1.rotation.z = Math.PI; 
  */
     return new Array(door1);
}

function mkDoor(scene){
     var height = 1.8;
     var radius = height*0.05; 
     var basis = 0.7;

     var geometry = new THREE.Geometry();
     
     var pivot1Geometry = new THREE.CylinderGeometry(radius, radius, height/8, 16, 16, false);
     translateGeometry(pivot1Geometry, new THREE.Vector3(0,height*1/8,0));
     var pivot2Geometry = new THREE.CylinderGeometry(radius, radius, height/8, 16, 16, false);
     translateGeometry(pivot2Geometry, new THREE.Vector3(0,height*4/8,0));
     var pivot3Geometry = new THREE.CylinderGeometry(radius, radius, height/8, 16, 16, false);
     translateGeometry(pivot3Geometry, new THREE.Vector3(0,height*7/8,0));
     var doorGeometry = new THREE.CubeGeometry(basis, height, radius);
     translateGeometry(doorGeometry, new THREE.Vector3(basis/2+radius,height/2,0));

     geometry.merge(pivot1Geometry);
     geometry.merge(pivot2Geometry);
     geometry.merge(pivot3Geometry);
     geometry.merge(doorGeometry);
     var material = new THREE.MeshLambertMaterial({color: 0xC48621, shading: THREE.FlatShading});
     door = new THREE.Mesh(geometry, material);
     door.rotation.x = Math.PI/2;
     door.castShadow = true;
     door.receiveShadow = true;

/*
     door.isOpen = false;
     door.onMouseDown = function() { 
       if(this.isOpen){
         this.rotation.z -= Math.PI/2;
       }else{ 
         this.rotation.z += Math.PI/2;
       }
       this.isOpen = !this.isOpen;
     }
*/
     scene.add(door);
     return door;
}

function translateGeometry (geometry, vector) {
    geometry.vertices.forEach(function (v) {
        v.add(vector);
    });
    geometry.verticesNeedUpdate.true;
}