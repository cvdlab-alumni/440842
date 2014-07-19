function addWallpapers(scene){

  //Load Textures
  var texturePath    = "assets/textures/";
  var tBathroomFloor = THREE.ImageUtils.loadTexture(texturePath+"bathroomFloor.jpg");
  var tLivingFloor   = THREE.ImageUtils.loadTexture(texturePath+"livingFloor.jpg");
  var tCollectFloor  = THREE.ImageUtils.loadTexture(texturePath+"collectFloor.jpg");
  var tBalconyFloor  = THREE.ImageUtils.loadTexture(texturePath+"balconyFloor.jpg");
  var tRoomFloor     = THREE.ImageUtils.loadTexture(texturePath+"roomFloor.jpg");
  var tWhiteWall     = THREE.ImageUtils.loadTexture(texturePath+"whiteWall.jpg");
  var tBathWall      = THREE.ImageUtils.loadTexture(texturePath+"bathWall.jpg");
  var tBalconyWall   = THREE.ImageUtils.loadTexture(texturePath+"balconyWall.jpg");
  var tCollectWall   = THREE.ImageUtils.loadTexture(texturePath+"collectWall.jpg");
  var tBigRoomWall   = THREE.ImageUtils.loadTexture(texturePath+"bigroomWall.jpg");
  var tRoomWall      = THREE.ImageUtils.loadTexture(texturePath+"roomWall.jpg");
  var tExternalWall  = THREE.ImageUtils.loadTexture(texturePath+"externalWall.jpg");

  //Floor
  scene.add(mkFloorpaper(tBathroomFloor,   0.1,  -2.7, 0,  3.5, 3.32));
  scene.add(mkFloorpaper(  tLivingFloor, -3.35,   0.6, 0,  3.3, 13.1));
  scene.add(mkFloorpaper(  tLivingFloor,   0.2, -0.18, 0,  3.8, 1.72));
  scene.add(mkFloorpaper(  tLivingFloor,  2.67,  0.05, 0, 1.15,  2.3));
  scene.add(mkFloorpaper( tCollectFloor,  4.25,     0, 0, 2.01,    2));
  scene.add(mkFloorpaper( tBalconyFloor,   0.1,   7.3, 0,  3.6,  2.7));
  scene.add(mkFloorpaper( tBalconyFloor,   0.1,  -5.9, 0,  3.6,  2.7));
  scene.add(mkFloorpaper(    tRoomFloor,  0.15,  3.32, 0,  3.4, 5.28));
  scene.add(mkFloorpaper(    tRoomFloor,  3.42,   4.2, 0, 3.15,    6));
  scene.add(mkFloorpaper(    tRoomFloor,   3.5,  -3.4, 0, 3.15,  4.6));

  //External
  
  scene.add(mkShapeWallpaper(tExternalWall,     -5, -6.001, -1.201,  3.44, 4,          0,     1.9, 2.45,        1,      0.9));
  scene.add(mkShapeWallpaper(tExternalWall,   1.84, -6.001, -1.201,  3.44, 4,          0,     1.3, 2.45,      1.5,      0.9));
  scene.add(mkShapeWallpaper(tExternalWall, -5.001,  7.431, -1.201, 6.717, 4, -Math.PI/2,     5.9,  1.2, 0.816999, 2.799999));
  scene.add(mkShapeWallpaper(tExternalWall, -5.001,  0.714, -1.201, 6.717, 4, -Math.PI/2, 0.00001,  1.2,    1.183, 2.799999));
  scene.add(mkShapeWallpaper(tExternalWall,  -1.56,  7.431, -1.201,  3.44, 4,    Math.PI,     0.5, 2.45,        1,      0.9));
  scene.add(mkShapeWallpaper(tExternalWall,   5.28,  7.431, -1.201,  3.44, 4,    Math.PI,    0.64, 2.45,      1.5,      0.9));
  scene.add(mkShapeWallpaper(tExternalWall,  5.281, -6.001, -1.201, 6.717, 4,  Math.PI/2,     0.5, 2.45,      1.5,      0.9));
  scene.add(mkShapeWallpaper(tExternalWall,  5.281,  0.716, -1.201, 6.717, 4,  Math.PI/2,   4.715, 2.45,      1.5,      0.9));


  //Bathroom 
  scene.add(mkShapeWallpaper(tBathWall, 1.835, -4.3, 0, 1.9,  2.8, Math.PI, 1.07, 1.242, 0.415, 0.936));
  scene.add(mkShapeWallpaper(tBathWall,  -0.2, -4.3, 0, 1.4,  2.8, Math.PI, 0.23, 1.242, 0.415, 0.936));

  scene.add(mkWallpaper(tBathWall,  -1.555,  -2.56, 0,  3.51, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tBathWall,   -0.28,  -2.56, 0,  3.51, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tBathWall,    0.05,  -2.56, 0,  3.51, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tBathWall,   1.835,  -2.56, 0,  3.51, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tBathWall,  -0.024, -1.125, 0, 0.876, 2.8,          0));
  scene.add(mkWallpaper(tBathWall,   1.675, -1.125, 0,  0.33, 2.8,          0));
  scene.add(mkWallpaper(tBathWall, -0.4634, -0.966, 0, 0.318, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tBathWall,   0.415, -0.966, 0, 0.318, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tBathWall,    1.51, -0.966, 0, 0.318, 2.8, -Math.PI/2));

  //Living 

  scene.add(mkShapeWallpaper(tWhiteWall, -1.85, -5.699, 0, 3, 2.8, Math.PI, 0.209, 1.24, 1.04, 0.94));
  scene.add(mkShapeWallpaper(tWhiteWall, -4.72,  7.129, 0, 3, 2.8,       0, 1.619, 1.24, 1.04, 0.94));

  scene.add(mkWallpaper(tWhiteWall,  -4.85, -0.465, 0,   0.3, 2.8,    Math.PI));
  scene.add(mkWallpaper(tWhiteWall,  -4.85,  1.529, 0,   0.3, 2.8,          0));
  scene.add(mkWallpaper(tWhiteWall,  -1.86, -5.605, 0, 0.191, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall,  -1.86,  -2.82, 0,  4.04, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall,  -1.86,  3.343, 0, 5.972, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall,  -1.86,   7.07, 0,  0.12, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, -4.699,   -3.1, 0,  5.23, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall, -4.699,  4.375, 0,   5.7, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall,  -1.71,  -4.83, 0,   0.3, 2.8,          0));
  scene.add(mkWallpaper(tWhiteWall,  -1.71,  -5.51, 0,   0.3, 2.8,    Math.PI));
  scene.add(mkWallpaper(tWhiteWall,  -1.71,   7.01, 0,   0.3, 2.8,          0));
  scene.add(mkWallpaper(tWhiteWall,  -1.71,   6.33, 0,   0.3, 2.8,    Math.PI));

  //Corridor
  scene.add(mkWallpaper(tWhiteWall,  -1.71, -0.805, 0,   0.3, 2.8,    Math.PI));
  scene.add(mkWallpaper(tWhiteWall, -0.024, -0.805, 0, 0.876, 2.8,    Math.PI));
  scene.add(mkWallpaper(tWhiteWall,  1.865, -0.805, 0,  0.71, 2.8,    Math.PI));
  scene.add(mkWallpaper(tWhiteWall,  -0.71,  0.355, 0,   2.3, 2.8,          0));
  scene.add(mkWallpaper(tWhiteWall,   1.79,  0.355, 0,   0.7, 2.8,          0));
  scene.add(mkWallpaper(tWhiteWall,   2.14,  0.633, 0,  0.55, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall,   2.18, -0.799, 0,  0.08, 2.8,    Math.PI)); 
  scene.add(mkWallpaper(tWhiteWall,   2.18,  0.899, 0,  0.08, 2.8,          0));
  scene.add(mkWallpaper(tWhiteWall,    2.9, -0.799, 0,  0.08, 2.8,    Math.PI)); 
  scene.add(mkWallpaper(tWhiteWall,    2.9,  0.899, 0,  0.08, 2.8,          0));
  scene.add(mkWallpaper(tWhiteWall,  2.939,  0.725, 0,  0.35, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tWhiteWall,  2.939, -0.626, 0,  0.35, 2.8, -Math.PI/2));

  //Big Room 
  scene.add(mkWallpaper(tBigRoomWall, -1.555,   3.2, 0,   5.1, 2.8,    Math.PI/2));
  scene.add(mkWallpaper(tBigRoomWall,  1.835,   3.2, 0,   5.1, 2.8,   -Math.PI/2));
  scene.add(mkWallpaper(tBigRoomWall,  0.441, 0.518, 0, 0.318, 2.8,    Math.PI/2));
  scene.add(mkWallpaper(tBigRoomWall,  1.439, 0.518, 0, 0.318, 2.8,   -Math.PI/2));
  scene.add(mkWallpaper(tBigRoomWall,  -0.71,  0.68, 0,   2.3, 2.8,      Math.PI));
  scene.add(mkWallpaper(tBigRoomWall,  1.638,  0.68, 0,   0.4, 2.8,      Math.PI));
  scene.add(mkWallpaper(tBigRoomWall,  -0.81,  5.73, 0,   1.5, 2.8,            0));
  scene.add(mkWallpaper(tBigRoomWall,   1.64,  5.73, 0,   0.4, 2.8,            0));
  scene.add(mkWallpaper(tBigRoomWall,   1.64,  5.73, 0,   0.4, 2.8,            0));
  scene.add(mkWallpaper(tBigRoomWall, -0.055, 5.895, 0,  0.32, 2.8,    Math.PI/2));
  scene.add(mkWallpaper(tBigRoomWall,  1.439, 5.895, 0,  0.32, 2.8,   -Math.PI/2));

  //Balcony Bottom
  scene.add(mkShapeWallpaper(tWhiteWall, -1.555, -4.623, 0, 1.6, 2.8, 0, 0.715, 1.242, 0.415, 0.936));
  scene.add(mkShapeWallpaper(tWhiteWall,  0.045, -4.623, 0, 1.8, 2.8, 0,   0.3, 1.242, 0.415, 0.936));

  scene.add(mkWallpaper(  tWhiteWall, -1.555, -4.725,      0, 0.204,  2.8,  Math.PI/2)); 
  scene.add(mkWallpaper(  tWhiteWall, -1.555, -5.758,      0, 0.485,  2.8,  Math.PI/2));
  scene.add(mkWallpaper(  tWhiteWall,  1.835, -5.301,      0,   1.4,  2.8, -Math.PI/2));
  scene.add(mkWallpaper(tBalconyWall, -1.555,   -6.6,      0,   1.2,  1.4,  Math.PI/2));
  scene.add(mkWallpaper(tBalconyWall,   0.15,  -7.19,      0,  3.42,  1.4,    Math.PI));
  scene.add(mkWallpaper(tBalconyWall,  1.835,   -6.6,      0,   1.2,  1.4, -Math.PI/2));
  scene.add(mkWallpaper(tBalconyWall, -1.861,  -6.76, -1.201,  1.52,  2.6, -Math.PI/2));
  scene.add(mkWallpaper(tBalconyWall,   0.14,  -7.51, -1.201,     4,  2.6,          0));
  scene.add(mkWallpaper(tBalconyWall,  2.141,  -6.76, -1.201,  1.52,  2.6,  Math.PI/2));

  scene.add(mkFloorpaper(tBalconyWall, -1.709, -6.552,   1.4,     0.3,  1.3));
  scene.add(mkFloorpaper(tBalconyWall,   0.14, -7.351,   1.4,       4,  0.3));
  scene.add(mkFloorpaper(tBalconyWall,   1.99, -6.552,   1.4,     0.3,  1.3));

  //Balcony Top
  scene.add(mkWallpaper(  tWhiteWall, -1.555,  6.19,      0,   0.3,  2.8,  Math.PI/2));
  scene.add(mkWallpaper(  tWhiteWall, -1.555, 7.218,      0, 0.419,  2.8,  Math.PI/2));
  scene.add(mkWallpaper(  tWhiteWall,  1.835,  6.73,      0,   1.4,  2.8, -Math.PI/2));
  scene.add(mkWallpaper(  tWhiteWall,  -0.81,  6.06,      0,   1.5,  2.8,    Math.PI));
  scene.add(mkWallpaper(  tWhiteWall,   1.64,  6.06,      0,   0.4,  2.8,    Math.PI));
  scene.add(mkWallpaper(tBalconyWall, -1.555,  8.03,      0,   1.2,  1.4,  Math.PI/2));
  scene.add(mkWallpaper(tBalconyWall,   0.15,  8.62,      0,  3.42,  1.4,          0));
  scene.add(mkWallpaper(tBalconyWall,  1.835,  8.03,      0,   1.2,  1.4, -Math.PI/2));
  scene.add(mkWallpaper(tBalconyWall, -1.861,  8.19, -1.201,  1.52,  2.6, -Math.PI/2));
  scene.add(mkWallpaper(tBalconyWall,   0.14,  8.95, -1.201,     4,  2.6,    Math.PI));
  scene.add(mkWallpaper(tBalconyWall,  2.141,  8.19, -1.201,  1.52,  2.6,  Math.PI/2));

  scene.add(mkFloorpaper(tBalconyWall, -1.709,      8,   1.4,     0.3,  1.3));
  scene.add(mkFloorpaper(tBalconyWall,   0.14,   8.78,   1.4,       4,  0.3));
  scene.add(mkFloorpaper(tBalconyWall,   1.99,      8,   1.4,     0.3,  1.3));

  //Top Room
  scene.add(mkShapeWallpaper(tRoomWall,  2.08, 7.129, 0,   3, 2.8,          0, 1.059, 1.238, 1.502, 0.94));
  scene.add(mkShapeWallpaper(tRoomWall, 4.979, 7.129, 0, 6.2, 2.8, -Math.PI/2, 0.197, 1.238, 1.502, 0.94));

  scene.add(mkWallpaper(tRoomWall, 2.221,  1.05, 0,  0.3, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tRoomWall, 2.859,  1.05, 0,  0.3, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tRoomWall,  2.14,  4.03, 0, 6.24, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tRoomWall,  2.18, 1.201, 0, 0.08, 2.8,    Math.PI)); 
  scene.add(mkWallpaper(tRoomWall, 3.932, 1.201, 0, 2.15, 2.8,    Math.PI));

  //Bottom Room 
  scene.add(mkShapeWallpaper(tRoomWall,     5, -5.699, 0,   3, 2.8,    Math.PI, 0.354, 1.238, 1.502, 0.94));
  scene.add(mkShapeWallpaper(tRoomWall, 4.979, -1.101, 0, 4.7, 2.8, -Math.PI/2,   2.9, 1.238, 1.502, 0.94));

  scene.add(mkWallpaper(tRoomWall, 2.221, -0.952, 0,  0.3, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tRoomWall, 2.859, -0.952, 0,  0.3, 2.8, -Math.PI/2));
  scene.add(mkWallpaper(tRoomWall,  2.18, -1.101, 0, 0.08, 2.8,          0));
  scene.add(mkWallpaper(tRoomWall, 3.932, -1.101, 0, 2.15, 2.8,          0));
  scene.add(mkWallpaper(tRoomWall,  2.14,  -3.37, 0,  4.7, 2.8,  Math.PI/2));

  //Collect 
  scene.add(mkWallpaper(tCollectWall,  3.09,  0.549, 0,  0.3, 2.8,          0));
  scene.add(mkWallpaper(tCollectWall,  3.09, -0.449, 0,  0.3, 2.8,    Math.PI));
  scene.add(mkWallpaper(tCollectWall, 3.241,  0.725, 0, 0.35, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tCollectWall, 3.241, -0.626, 0, 0.35, 2.8,  Math.PI/2));
  scene.add(mkWallpaper(tCollectWall,   4.1,  0.899, 0,  1.8, 2.8,          0));
  scene.add(mkWallpaper(tCollectWall,   4.1, -0.799, 0,  1.8, 2.8,    Math.PI));
  scene.add(mkWallpaper(tCollectWall, 4.979,   0.05, 0,  1.7, 2.8, -Math.PI/2));
}

function mkWallpaper(texture, Xaxis, Yaxis, Zaxis, width, height, Zrotation){
  
  var geomPlane   = new THREE.PlaneGeometry(width, height, 4, 4);
  var wall        = createMesh(geomPlane, texture);
  wall.position.set(Xaxis, Yaxis, 1.201 + height/2. + Zaxis);
  wall.rotation.set(Math.PI/2. , Zrotation, 0);
  return wall;
}
function mkShapeWallpaper(texture, Xaxis, Yaxis, Zaxis, width, height, Zrotation, deltaX, deltaY, basisInt, heightInt){
  
  var geomPlane = new THREE.ShapeGeometry(drawShape(width/7., height/7., deltaX/7., deltaY/7., basisInt/7., heightInt/7.));
  var wall      = createMesh(geomPlane, texture);
  wall.scale.set(7,7,7);
  wall.position.set(Xaxis, Yaxis, 1.201 + Zaxis);
  wall.rotation.set(Math.PI/2. , Zrotation, 0);
  return wall;
}

function mkFloorpaper(texture, Xaxis, Yaxis, Zaxis, width, height){
  
  var geomPlane    = new THREE.PlaneGeometry(width, height, 4, 4);
  var floor        = createMesh(geomPlane, texture);
  floor.position.set(Xaxis,Yaxis,1.201 + Zaxis);
  return floor;
}

function createMesh(geom, texture) {
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;
  mat.castShadow     = true;
  mat.receivedShadow = true;
//var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [mat]);
  var mesh = new THREE.Mesh(geom, mat);
  mesh.castShadow     = true;
  mesh.receivedShadow = true;
  return mesh;
}

function drawShape(basisExt, heightExt, deltaX, deltaY, basisInt, heightInt) {

  var shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(basisExt, 0);
  shape.lineTo(basisExt, heightExt);
  shape.lineTo(0, heightExt);
  shape.lineTo(0, 0);

  var hole = new THREE.Path();
  hole.moveTo(deltaX, deltaY);
  hole.lineTo(deltaX+basisInt, deltaY);
  hole.lineTo(deltaX+basisInt, deltaY+heightInt);
  hole.lineTo(deltaX, deltaY+heightInt);
  hole.lineTo(deltaX, deltaY);
  shape.holes.push(hole);

  return shape;
}
