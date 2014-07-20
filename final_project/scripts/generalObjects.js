function addGeneralOBJs(scene){

  mkRadiator(    scene, -0.8,   0.8,    Math.PI);
  mkRadiator(    scene, -4.7,   6.5,  Math.PI/2);
  mkRadiator(    scene,  4.2,   1.3,    Math.PI);
  mkRadiator(    scene,  2.3,    -5,  Math.PI/2);
  mkBoiler(      scene,  1.2,  -4.8,          0);
  mkWardrobe(    scene,    4.5,   3.6, -Math.PI/2);
};


function mkRadiator(scene, Xaxis, Yaxis, Zrotation){

  var radiator  = new THREE.Object3D();
  radiator.name = 'Radiator';
  
  var loaderExt = new THREE.OBJMTLLoader();
  loaderExt.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objRadiator';
    obj.scale.set(0.015, 0.015, 0.015);

    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    radiator.add(obj);
  });
  loaderExt.load('assets/models/radiator.obj', 
                 'assets/models/radiator.mtl', 
                 {side: THREE.DoubleSide}
                );

  scene.add(radiator);
  return radiator;
};

function mkBoiler(scene, Xaxis, Yaxis, Zrotation){

  var boiler  = new THREE.Object3D();
  boiler.name = 'Boiler';
  
  var loaderExt = new THREE.OBJMTLLoader();
  loaderExt.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objBoiler';
    obj.scale.set(0.01, 0.01, 0.01);

    obj.position.set(Xaxis,Yaxis,3);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    boiler.add(obj);
  });
  loaderExt.load('assets/models/gaz_water_heater.obj', 
                 'assets/models/gaz_water_heater.mtl', 
                 {side: THREE.DoubleSide}
                );

  scene.add(boiler);
  return boiler;
};

function mkWardrobe(scene, Xaxis, Yaxis, Zrotation){

  var wardrobe  = new THREE.Object3D();
  wardrobe.name = 'Wardrobe';
  
  var loaderExt = new THREE.OBJMTLLoader();
  loaderExt.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objWardrobe';
    obj.scale.set(0.015, 0.01, 0.01);

    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    wardrobe.add(obj);
  });
  loaderExt.load('assets/models/mobile.obj', 
                 'assets/models/mobile.mtl', 
                 {side: THREE.DoubleSide}
                );

  scene.add(wardrobe);
  return wardrobe;
};