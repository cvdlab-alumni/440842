function addLivingroomOBJs(scene){

  mkCouch(        scene, -4.2,    4,  Math.PI/2);
  mkTV(           scene,   -2,    4, -Math.PI/2);
  mkKitchenTable( scene, -3.8,   -2, -Math.PI/2);
  mkCocker(       scene, -3.8, -4.5,  Math.PI/2);
  mkRefrigerator( scene, -0.7,  2.3, -Math.PI/2);
  mkSink(         scene, -1.7, -4.5,  Math.PI/2);
  mkUpperCabinet( scene, -3.8, -5.3,  Math.PI/2);
  
};

function mkCouch(scene, Xaxis, Yaxis, Zrotation){

  var couch  = new THREE.Object3D();
  couch.name = 'Couch';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objCouch';
    obj.scale.set(0.5, 0.5, 0.5);
    
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    couch.add(obj);
  });
  loader.load('assets/models/Couch.obj', 
              'assets/models/Couch.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(couch);
  return couch;
};

function mkTV(scene, Xaxis, Yaxis, Zrotation){

  var tv  = new THREE.Object3D();
  tv.name = 'TV';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objTv';
    obj.scale.set(0.4, 0.4, 0.4);
    
    obj.position.set(Xaxis,Yaxis,3);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    tv.add(obj);
  });
  loader.load('assets/models/TV.obj', 
              'assets/models/TV.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(tv);
  return tv;
};


function mkKitchenTable(scene, Xaxis, Yaxis, Zrotation){

  var kitchenTable  = new THREE.Object3D();
  kitchenTable.name = 'KitchenTable';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objKitchenTable';
    obj.scale.set(0.012, 0.012, 0.012);
    
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    kitchenTable.add(obj);
  });
  loader.load('assets/models/kitchenTable.obj', 
              '', 
              {side: THREE.DoubleSide}
             );

  scene.add(kitchenTable);
  return kitchenTable;
};

function mkCocker(scene, Xaxis, Yaxis, Zrotation){

  var cocker  = new THREE.Object3D();
  cocker.name = 'Cocker';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objCocker';
    obj.scale.set(0.015, 0.015, 0.015);
    
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    cocker.add(obj);
  });
  loader.load('assets/models/Cocker.obj', 
              '', 
              {side: THREE.DoubleSide}
             );

  scene.add(cocker);
  return cocker;
};


function mkRefrigerator(scene, Xaxis, Yaxis, Zrotation){

  var refrigerator  = new THREE.Object3D();
  refrigerator.name = 'Refrigerator';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objRefrigerator';
    obj.scale.set(0.013, 0.013, 0.013);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    refrigerator.add(obj);
  });
  loader.load('assets/models/frigo.obj', 
              'assets/models/frigo.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(refrigerator);
  return refrigerator;
};


function mkSink(scene, Xaxis, Yaxis, Zrotation){

  var sink  = new THREE.Object3D();
  sink.name = 'Sink';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objSink';
    obj.scale.set(0.015, 0.015, 0.015);
    
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    sink.add(obj);
  });
  loader.load('assets/models/lavello.obj', 
              'assets/models/lavello.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(sink);
  return sink;
};


function mkUpperCabinet(scene, Xaxis, Yaxis, Zrotation){

  var cabinet  = new THREE.Object3D();
  cabinet.name = 'Cabinet';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objCabinet';
    obj.scale.set(0.015, 0.015, 0.015);
    
    obj.position.set(Xaxis,Yaxis,0.8);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    cabinet.add(obj);
  });
  loader.load('assets/models/pensileDoppio.obj', 
              'assets/models/pensileDoppio.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(cabinet);
  return cabinet;
};