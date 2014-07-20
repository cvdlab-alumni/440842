function addBedroomOBJs(scene){

  mkDoubleBed(   scene, -0.4,   3, -Math.PI/2);
  mkBed(         scene,  3.9,  -5,          0);
  mkDesk(        scene,  3.4, 5.9,  Math.PI/2);
  mkOfficeChair( scene,  3.5, 5.5, -Math.PI/2);
  mkDesktopPc(   scene,  2.3, 5.5,  Math.PI/2);
  mkBookcase(    scene,  2.3, 3.3,          0);
  mkDresser(     scene, 2.45,  -3,          0);
  mkDresser(     scene,   -1.2,   5,          0);
  mkCDrack(      scene,  4.5, 2.5,  Math.PI/2);
  mkHighDresser( scene,  4.5,  -2, -Math.PI/2);
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
    obj.scale.set(0.6, 0.6, 0.6);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    desk.add(obj);
  });
  loader.load('assets/models/Desk.obj', 
              'assets/models/Desk.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(desk);
  return desk;
};

function mkOfficeChair(scene, Xaxis, Yaxis, Zrotation){

  var officeChair  = new THREE.Object3D();
  officeChair.name = 'OfficeChair';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objOfficeChair';
    obj.scale.set(0.55, 0.55, 0.55);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    officeChair.add(obj);
  });
  loader.load('assets/models/office_chair.obj', 
              'assets/models/office_chair.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(officeChair);
  return officeChair;
};

function mkDesktopPc(scene, Xaxis, Yaxis, Zrotation){

  var desktopPc  = new THREE.Object3D();
  desktopPc.name = 'iMac desktop';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objiMacDesktop';
    obj.scale.set(0.07, 0.07, 0.07);
    obj.position.set(Xaxis,Yaxis,2.23);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    desktopPc.add(obj);
  });
  loader.load('assets/models/iMac desktop.obj', 
              'assets/models/iMac desktop.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(desktopPc);
  return desktopPc;
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


function mkDresser(scene, Xaxis, Yaxis, Zrotation){

  var dresser  = new THREE.Object3D();
  dresser.name = 'Dresser';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objDresser';
    obj.scale.set(0.003, 0.003, 0.003);
    var texture = THREE.ImageUtils.loadTexture("assets/textures/Desk_wood.tga");
    for (var i = 0; i < obj.children.length; i++) {
      obj.children[i].material.map = texture;
    };
    obj.position.set(Xaxis,Yaxis,1.53);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    dresser.add(obj);
  });
  loader.load('assets/models/Dresser.obj', 
              '', 
              {side: THREE.DoubleSide}
             );

  scene.add(dresser);
  return dresser;
};

function mkCDrack(scene, Xaxis, Yaxis, Zrotation){

  var CDrack  = new THREE.Object3D();
  CDrack.name = 'CDrack';
  
  var loaderExt = new THREE.OBJMTLLoader();
  loaderExt.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objCDrack';
    obj.scale.set(0.022, 0.022, 0.022);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    CDrack.add(obj);
  });
  loaderExt.load('assets/models/CDrack.obj', 
                 'assets/models/CDrack.mtl', 
                 {side: THREE.DoubleSide}
                );

  scene.add(CDrack);
  return CDrack;
};

function mkHighDresser(scene, Xaxis, Yaxis, Zrotation){

  var highDresser  = new THREE.Object3D();
  highDresser.name = 'HighDresser';
  
  var loaderExt = new THREE.OBJMTLLoader();
  loaderExt.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objHighDresser';
    obj.scale.set(0.5, 0.5, 0.5);

    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    highDresser.add(obj);
  });
  loaderExt.load('assets/models/highDresser.obj', 
                 'assets/models/highDresser.mtl', 
                 {side: THREE.DoubleSide}
                );

  scene.add(highDresser);
  return highDresser;
};