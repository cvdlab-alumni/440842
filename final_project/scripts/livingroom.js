function addLivingroomOBJs(scene){

  mkCouch(scene, -4.2, 4, Math.PI/2);

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
