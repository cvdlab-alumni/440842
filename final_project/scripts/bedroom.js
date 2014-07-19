function addBedroomOBJs(scene){

  mkDoubleBed(scene, -0.4, 3, -Math.PI/2);
  mkBed(scene, 3.9, -5, 0);
  mkDesk(scene, 2.6, 5, Math.PI/2);
  //mkBookcase(scene, 2.6, 3.3, 0);

};

function mkDoubleBed(scene, Xaxis, Yaxis, Zrotation){

  var doubleBed  = new THREE.Object3D();
  doubleBed.name = 'DoubleBed';
  
  var loaderExt = new THREE.OBJMTLLoader();
  loaderExt.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objDoubleBed';
    obj.children[0].material.map = THREE.ImageUtils.loadTexture("assets/textures/doubleBed.tga");
    obj.children[1].material.map = THREE.ImageUtils.loadTexture("assets/textures/doubleBed.tga");
    obj.scale.set(0.01, 0.01, 0.008);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    doubleBed.add(obj);
  });
  loaderExt.load('assets/models/DoubleBed.obj', 
                 '', 
                 {side: THREE.DoubleSide}
                );

  scene.add(doubleBed);
  return doubleBed;
};


function mkBed(scene, Xaxis, Yaxis, Zrotation){

  var bed  = new THREE.Object3D();
  bed.name = 'Bed';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objBed';
    obj.scale.set(0.5, 0.5, 0.5);
    
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    bed.add(obj);
  });
  loader.load('assets/models/bed.obj', 
              'assets/models/bed.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(bed);
  return bed;
};

function mkDesk(scene, Xaxis, Yaxis, Zrotation){

  var desk  = new THREE.Object3D();
  desk.name = 'Desk';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objDesk';
    obj.scale.set(0.004, 0.004, 0.004);
    
    var tDarkWood = THREE.ImageUtils.loadTexture("assets/textures/dark-wood-texture.jpg");
    var tLightWood = THREE.ImageUtils.loadTexture("assets/textures/light-wood-texture.jpg");
    /*
    obj.children[0].material.map = texture;
    obj.children[1].material.map = texture;
    obj.children[2].material.map = texture;
    obj.children[3].material.map = texture;
    obj.children[4].material.map = texture;
    obj.children[5].material.map = texture;
    */
    obj.children[6].material.map = tLightWood;
    obj.children[7].material.map = tLightWood;
    obj.children[8].material.map = tLightWood;
    obj.children[9].material.map = tLightWood;

    obj.children[10].material.map = tLightWood;
    obj.children[11].material.map = tLightWood;
    
    obj.children[12].material.map = tDarkWood;
    obj.children[13].material.map = tDarkWood;
    obj.children[14].material.map = tDarkWood;
    obj.children[15].material.map = tDarkWood;
    obj.children[16].material.map = tDarkWood;
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    desk.add(obj);
  });
  loader.load('assets/models/Desk.obj', 
              '', 
              {side: THREE.DoubleSide}
             );

  scene.add(desk);
  return desk;
};

function mkBookcase(scene, Xaxis, Yaxis, Zrotation){

  var bookcase  = new THREE.Object3D();
  bookcase.name = 'Bookcase';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objBookcase';
    obj.scale.set(0.0014, 0.0014, 0.0014);
    
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    bookcase.add(obj);
  });
  loader.load('assets/models/Bookcase.obj', 
              'assets/models/Bookcase.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(bookcase);
  return bookcase;
};