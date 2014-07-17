function addWindows(scene){

  var wBath  = mkWindow(scene,-0.6,-4.5,3);
  return new Array(wBath); 
};

function mkWindow(scene, Xaxis, Yaxis, Zaxis){

  var Window  = new THREE.Object3D();
  Window.name = 'Window';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objWindow';
    //obj.scale.set(0.1, 0.1, 0.1);
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