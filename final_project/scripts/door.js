function addDoors(scene){

  var door1  = mkDoor(scene,0.42,0.65,1.05,1,0);
  var door2  = mkDoor(scene,1.45,5.75,1.55,1,Math.PI);
  var door3  = mkDoor(scene,-1.8,6.3,0.72,1,Math.PI/2.);
  var door4  = mkDoor(scene,-4.75,1.55,2.1,1,Math.PI*3/2);
  var door5  = mkDoor(scene,-1.8,-5.55,0.72,1,Math.PI/2.);
  var door6  = mkDoor(scene,-0.44,-1.08,1.16,1,Math.PI);
  var door7  = mkDoor(scene,1.55,-1.08,1.16,1,Math.PI);
  var door8  = mkDoor(scene,2.9,-1.08,0.69,1,Math.PI);
  var door9  = mkDoor(scene,2.22,1.15,0.65,1,0);
  var door10  = mkDoor(scene,3.2,0.55,1.02,1,Math.PI*3/2);
  
  return new Array(door1,door2,door3,door4,door5,door6,door7,door8,door9,door10);
};

function mkDoor(scene, Xassis, Yassis, Xscale, Yscale, Zrotation){
    var door  = new THREE.Object3D();
    door.name = 'door';

    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) 
    {
        var obj = event.content; 
        obj.name = 'objDoor';
        obj.scale.set(Xscale, Yscale, 1);
        obj.castShadow = true;
        obj.receiveShadow = true;
        obj.isOpen = false;
        obj.onMouseDown = function() { 
            if(this.isOpen){
                this.rotation.z -= Math.PI/2;
            }else{ 
                this.rotation.z += Math.PI/2;
            }
            this.isOpen = !this.isOpen;
        }
        door.add(obj);
        door.position.x = Xassis;
        door.position.y = Yassis;
        door.position.z = 1.2;
        door.rotation.z = Zrotation
    });

    loader.load('assets/models/door.obj', 
                'assets/models/door.mtl', 
                {side: THREE.DoubleSide}
               );

    scene.add(door);
    return door;
}