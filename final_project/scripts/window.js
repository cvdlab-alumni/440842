function addWindows(scene){

  mkWindow(      scene, -0.63, -4.43, 2.9);
  mkWindow(      scene,  0.55, -4.43, 2.9);

  mkDianaWindow( scene,  -2.59,  6.39, 2.857, 0.235,          0);
  mkDianaWindow( scene,  -2.59, -6.75, 2.857, 0.235,          0);

  mkDianaWindow( scene,  4.24,   6.2, 2.857, 0.34, -Math.PI/2);
  mkDianaWindow( scene,  4.24, -4.75, 2.857, 0.34, -Math.PI/2);
  mkDianaWindow( scene,  3.87,  6.39, 2.857, 0.34,          0);
  mkDianaWindow( scene,  3.87, -6.75, 2.857, 0.34,          0);
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

function mkDianaWindow(scene, Xaxis, Yaxis, Zaxis, Xscale, Zrotation){

  var dianaWindow  = new THREE.Object3D();
  dianaWindow.name = 'DianaWindow';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objDianaWindow';
    obj.scale.set(Xscale, 0.38, 1.1);
    obj.rotation.set(Math.PI/2, Zrotation, 0);
    obj.position.set(Xaxis,Yaxis,Zaxis);

    dianaWindow.add(obj);
  });
  loader.load('assets/models/DianaWindow.obj', 
              'assets/models/DianaWindow.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(dianaWindow);

  return dianaWindow;
};