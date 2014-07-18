function addWindows(scene){

  var wBathSmall  = mkWindow(scene,-0.63,-4.43,2.9);
  var wBathLarge  = mkWindow(scene,0.55,-4.43,2.9);

  return new Array(wBathSmall,wBathLarge); 
};

function mkWindow(scene, Xaxis, Yaxis, Zaxis){

  var Window  = new THREE.Object3D();
  Window.name = 'Window';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objWindow';
    obj.scale.set(1, 3.8, 1.3);
    //obj.rotation.x += Math.PI/2;
    obj.position.set(Xaxis,Yaxis,Zaxis);


   
    Window.add(obj);
  });
  loader.load('assets/models/bathWindow.obj', 
              'assets/models/bathWindow.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(Window);

  return Window;
};