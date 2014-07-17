function addCeilingLamps(scene){

  var cLamp1  = mkCeilingLamp(scene,-3.5,-3);
  var cLamp2  = mkCeilingLamp(scene,3.5 ,4);
  var cLamp3  = mkCeilingLamp(scene,0   ,3);
  var cLamp4  = mkCeilingLamp(scene,-3.5,4);
  var cLamp5  = mkCeilingLamp(scene,0   ,7.5);
  var cLamp6  = mkCeilingLamp(scene,0   ,-6);
  var cLamp7  = mkCeilingLamp(scene,3.5 ,-3.5);
  var cLamp8  = mkCeilingLamp(scene,4   ,0.2);
  var cLamp9  = mkCeilingLamp(scene,-1  ,-2.5);
  var cLamp10 = mkCeilingLamp(scene,1   ,-2.5);
  return new Array(cLamp1,cLamp2,cLamp3,cLamp4,cLamp5,cLamp6,cLamp7,cLamp8,cLamp9,cLamp10); 
};

function mkCeilingLamp(scene, Xaxis, Yaxis){

  var lamp  = new THREE.Object3D();
  lamp.name = 'Lamp';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objLamp';
    obj.scale.set(0.1, 0.1, 0.1);
    obj.rotation.x += Math.PI/2;
    obj.position.set(Xaxis,Yaxis,4);

    var radius = 0.3; 
    var height = radius*0.3;
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.distance = 5;
    spotLight.position.set(0, 0, height);
    spotLight.exponent = 1;
    spotLight.intensity = 5;
    spotLight.angle = Math.PI/2;
    //spotLight.position.set(0, -radius-2, 0);
    spotLight.position.set(Xaxis, Yaxis, 4);
    spotLight.shadowCameraVisible = true;
    spotLight.target.position.set( Xaxis, Yaxis, -100 );
    spotLight.shadowCameraNear = 1;
    spotLight.shadowCameraFar = 100;
    spotLight.shadowCameraFov = 2;
    spotLight.target.rotation.x = Math.PI;

    obj.spotLight = spotLight;
    obj.onMouseDown = function() { 
      this.spotLight.visible = !this.spotLight.visible;
    }

    scene.add(spotLight);
    lamp.add(obj);
  });
  loader.load('assets/models/lamp.obj', 
              'assets/models/lamp.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(lamp);

  return lamp;
};