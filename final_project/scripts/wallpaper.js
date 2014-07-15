function addWallpapers(scene){

  //Load Textures
  var texturePath    = "assets/textures/";
  var tBathroomFloor = THREE.ImageUtils.loadTexture(texturePath+"bathroomFloor.jpg");
  var tLivingFloor   = THREE.ImageUtils.loadTexture(texturePath+"livingFloor.jpg");
  var tCollectFloor  = THREE.ImageUtils.loadTexture(texturePath+"collectFloor.jpg");
  var tBalconyFloor  = THREE.ImageUtils.loadTexture(texturePath+"balconyFloor.jpg");
  var tRoomFloor     = THREE.ImageUtils.loadTexture(texturePath+"roomFloor.jpg");
  var tWhiteWall     = THREE.ImageUtils.loadTexture(texturePath+"whiteWall.jpg");

  //Floor
  scene.add(mkFloorpaper(tBathroomFloor,0.1,-2.7,3.5,3.32));
  scene.add(mkFloorpaper(tLivingFloor,-3.35,0.6,3.3,13.1));
  scene.add(mkFloorpaper(tLivingFloor,0.2,-0.18,3.8,1.72));
  scene.add(mkFloorpaper(tLivingFloor,2.67,0.05,1.15,2.3));
  scene.add(mkFloorpaper(tCollectFloor,4.25,0,2.01,2));
  scene.add(mkFloorpaper(tBalconyFloor,0.1,7.3,3.6,2.7));
  scene.add(mkFloorpaper(tBalconyFloor,0.1,-5.9,3.6,2.7));
  scene.add(mkFloorpaper(tRoomFloor,0.15,3.32,3.4,5.28));
  scene.add(mkFloorpaper(tRoomFloor,3.42,4.2,3.15,6));
  scene.add(mkFloorpaper(tRoomFloor,3.5,-3.4,3.15,4.6));

  //Bathroom Wall
  scene.add(mkWallpaper(tWhiteWall, -1.555, -2.56, 3.5, 2.8, Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, -0.28, -2.56, 3.5, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, 0.05, -2.56, 3.5, 2.8, Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, 1.835, -2.56, 3.5, 2.8, -Math.PI/2));

  scene.add(mkWallpaper(tWhiteWall, -0.024, -1.125, 0.876, 2.8, 0));

  //Living Wall
  scene.add(mkWallpaper(tWhiteWall, -1.87, -5.605, 0.2, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, -1.87, -2.82, 4.04, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, -1.87, 3.34, 5.97, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, -1.87, 7.1, 0.2, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, -4.69, -3.07, 5.2, 2.8, Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, -4.69, 4.4, 5.7, 2.8, Math.PI/2));


  //Big Room Wall
  scene.add(mkWallpaper(tWhiteWall, -1.555, 3.2, 5.1, 2.8, Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, 1.835, 3.2, 5.1, 2.8, -Math.PI/2));

  //Balcony Wall Bottom
  scene.add(mkWallpaper(tWhiteWall, -1.555, -4.725, 0.204, 2.8, Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, -1.555, -5.758, 0.485, 2.8, Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, 1.835, -5.301, 1.4, 2.8, -Math.PI/2));

  //Balcony Wall Top
  scene.add(mkWallpaper(tWhiteWall, -1.555, 6.19, 0.3, 2.8, Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, -1.555, 7.218, 0.419, 2.8, Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, 1.835, 6.73, 1.4, 2.8, -Math.PI/2));
}

function mkWallpaper(texture, Xaxis, Yaxis, width, height, Zrotation){
  
  var geomPlane   = new THREE.PlaneGeometry(width, height, 4, 4);
  var wall        = createMesh(geomPlane, texture);
  wall.position.x = Xaxis;
  wall.position.y = Yaxis;
  wall.rotation.x = Math.PI/2.;
  wall.position.z = 1.21 + height/2.;
  wall.rotation.y = Zrotation;
  return wall;
}

function mkFloorpaper(texture, Xaxis, Yaxis, width, height){
  
  var geomPlane    = new THREE.PlaneGeometry(width, height, 4, 4);
  var floor        = createMesh(geomPlane, texture);
  floor.position.x = Xaxis;
  floor.position.y = Yaxis;
  floor.position.z = 1.21;
  return floor;
}

function createMesh(geom, texture) {
  //texture.wrapS = THREE.RepeatWrapping;
  //texture.wrapT = THREE.RepeatWrapping;
  //geom.computeVertexNormals();
  //var mat = new THREE.MeshLambertMaterial();
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;
  //mat.receivedShadow = true;

  var mesh = new THREE.Mesh(geom, mat);
  //mesh.material.map.repeat.set(2, 2);
  //mesh.material.map.wrapS = THREE.RepeatWrapping;
  //mesh.material.map.wrapT = THREE.RepeatWrapping;
  


  return mesh;
}
