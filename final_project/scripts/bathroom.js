function addBathroomOBJs(scene){
  mkTub(               scene, 1.85,  -4.3,    Math.PI);
  mkWater(             scene, -0.5,  -3.3, -Math.PI/2);
  mkWater(             scene,  0.3,  -2.9,  Math.PI/2);
  mkBidet(             scene, -1.3,  -3.5,  Math.PI/2);
  mkWashbasin(         scene,    0,  -2.2,  Math.PI/2);
  mkWashbasin(         scene, -1.6,  -2.5,  Math.PI/2);
};


function mkTub(scene, Xaxis, Yaxis, Zrotation){

  var tub  = new THREE.Object3D();
  tub.name = 'Tub';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objTub';

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


function mkWater(scene, Xaxis, Yaxis, Zrotation){

  var wc  = new THREE.Object3D();
  wc.name = 'WC';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objWC';
    obj.scale.set(0.01, 0.01, 0.01);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    wc.add(obj);
  });
  loader.load('assets/models/water.obj', 
              'assets/models/water.mtl', 
              {side: THREE.DoubleSide}
             );
  
  scene.add(wc);
  return wc;
};


function mkBidet(scene, Xaxis, Yaxis, Zrotation){

  var bidet  = new THREE.Object3D();
  bidet.name = 'Bidet';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objBidet';
    obj.scale.set(0.01, 0.01, 0.01);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    bidet.add(obj);
  });
  loader.load('assets/models/bidet.obj', 
              'assets/models/bidet.mtl', 
              {side: THREE.DoubleSide}
             );
  
  scene.add(bidet);
  return bidet;
};

function mkWashbasin(scene, Xaxis, Yaxis, Zrotation){
  var washbasin  = new THREE.Object3D();
  washbasin.name = 'Washbasin';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objWashbasin';
    obj.scale.set(0.012, 0.012, 0.012);
    obj.position.set(Xaxis,Yaxis,1.201);
    obj.rotation.set(Math.PI/2,Zrotation,0);
    washbasin.add(obj);
  });
  loader.load('assets/models/washbasin.obj', 
              'assets/models/washbasin.mtl', 
              {side: THREE.DoubleSide}
             );
  
  scene.add(washbasin);
  return washbasin;
}