function addWallpapers(scene){

  var fBaths         = mkFloorpaper(scene,3.5,3.32,0.1,-2.7,"bathroomFloor");
  var fLiving        = mkFloorpaper(scene,3.3,13.1,-3.35,0.6,"livingFloor");
  var fCorridor      = mkFloorpaper(scene,3.8,1.72,0.2,-0.18,"livingFloor");
  var fCorridorBis   = mkFloorpaper(scene,1.15,2.3,2.67,0.05,"livingFloor");
  var fCollect       = mkFloorpaper(scene,2.01,2,4.25,0,"collectFloor");
  var fBalconyTop    = mkFloorpaper(scene,3.6,2.7,0.1,7.3,"balconyFloor");
  var fBalconyBottom = mkFloorpaper(scene,3.6,2.7,0.1,-5.9,"balconyFloor");
  var fRoomBig       = mkFloorpaper(scene,3.4,5.28,0.15,3.32,"roomFloor");
  var fRoomTop       = mkFloorpaper(scene,3.15,6,3.42,4.2,"roomFloor");
  var fRoomBottom    = mkFloorpaper(scene,3.15,4.6,3.5,-3.4,"roomFloor");


  return new Array(fBaths,fLiving,fCorridor,fCorridorBis,fCollect,fBalconyTop,fBalconyBottom,
                   fRoomBig,fRoomTop,fRoomBottom);
}

function mkFloorpaper(scene, width, height, Xaxis, Yaxis, name){
  
  var geomPlane   = new THREE.PlaneGeometry(width, height, 4, 4);
  var wall        = createMesh(geomPlane, name+".jpg");
  wall.position.x = Xaxis;
  wall.position.y = Yaxis;
  wall.position.z = 1.21;
  scene.add(wall);
  return wall;
}



function createMesh(geom, imageFile) {
  var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
  // var mat = new THREE.MeshLambertMaterial();
  //texture.wrapS = THREE.RepeatWrapping;
  //texture.wrapT = THREE.RepeatWrapping;
  //geom.computeVertexNormals();
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;


  var mesh = new THREE.Mesh(geom, mat);
  //mesh.material.map.repeat.set(2, 2);
  //mesh.material.map.wrapS = THREE.RepeatWrapping;
  //mesh.material.map.wrapT = THREE.RepeatWrapping;
  


  return mesh;
}
