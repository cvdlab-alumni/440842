function addMirrors(scene, renderer, camera){

  var mirrors = [];
  mirrors.push(mkRectangularMirror( scene, renderer, camera, -1.5,  -2.5, 3, Math.PI/2));
  mirrors.push(mkRectangularMirror( scene, renderer, camera, 0.05,  -2.2, 3, Math.PI/2));

  return mirrors;
}

function mkRectangularMirror(scene, renderer, camera, Xaxis, Yaxis, Zaxis, Zrotation){
  var mirror  = new THREE.Object3D();
  mirror.name = 'RectangularMirror';
  
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) 
  {  
    var obj = event.content;
    obj.name = 'objRectangularMirror';
    obj.scale.set(0.02, 0.015, 0.02);
    obj.position.set(Xaxis, Yaxis, Zaxis);
    obj.rotation.set(Math.PI/2, Zrotation, 0);
    mirror.add(obj);
  });
  loader.load('assets/models/rectangularMirror.obj', 
              'assets/models/rectangularMirror.mtl', 
              {side: THREE.DoubleSide}
             );
  
  mirror.add(getMirrorReflection(renderer, camera, Xaxis+0.009, Yaxis, Zaxis, Zrotation,  0.8, 0.9));
  scene.add(mirror);
  return mirror;
}


function getMirrorReflection(renderer, camera, Xaxis, Yaxis, Zaxis, Zrotation, width, height){
	var mirror = new THREE.Mirror( renderer, camera, { clipBias: 0.001, textureWidth: window.innerWidth, textureHeight: window.innerHeight, color:0x999999 } );

	var geometry = new THREE.PlaneGeometry( width, height);

	var MirrorMesh = new THREE.Mesh( geometry , mirror.material );
  MirrorMesh.name = 'Reflection';
	MirrorMesh.mirror = mirror;
	MirrorMesh.add( mirror );
	MirrorMesh.rotation.set(Math.PI/2, Zrotation, 0);
	MirrorMesh.position.set(Xaxis, Yaxis, Zaxis);

	return MirrorMesh;
}  