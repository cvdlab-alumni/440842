function addBathroomOBJs(scene){

  mkWC(scene, -0.3, -3.5, Math.PI);
  mkTub(scene, 1.85, -4.3, Math.PI);
  mkMirror(scene, -2, -3, Math.PI);
};

function mkWC(scene, Xaxis, Yaxis, Zrotation){

  var wc  = new THREE.Object3D();
  wc.name = 'WC';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objWC';
    //obj.scale.set(0.1, 0.1, 0.1);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    wc.add(obj);
  });
  loader.load('assets/models/WC.obj', 
              'assets/models/WC.mtl', 
              {side: THREE.DoubleSide}
             );
  
  scene.add(wc);
  return wc;
};

function mkTub(scene, Xaxis, Yaxis, Zrotation){

  var tub  = new THREE.Object3D();
  tub.name = 'Tub';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objTub';
    //obj.scale.set(0.1, 0.1, 0.1);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    tub.add(obj);
  });
  loader.load('assets/models/Tub.obj', 
              'assets/models/Tub.mtl', 
              {side: THREE.DoubleSide}
             );
  
  scene.add(tub);
  return tub;
};

function mkMirror(scene, Xaxis, Yaxis, Zrotation){

  var mirror  = new THREE.Object3D();
  mirror.name = 'Mirror';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objTub';
    //obj.scale.set(0.1, 0.1, 0.1);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    mirror.add(obj);
  });
  loader.load('assets/models/Mirror.obj', 
              'assets/models/Mirror.mtl', 
              {side: THREE.DoubleSide}
             );
  
  scene.add(mirror);
  return mirror;
};