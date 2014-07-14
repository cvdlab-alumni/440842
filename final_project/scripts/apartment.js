
/*
function mkApartment(scene){
  var apartment;

  var geometry = new THREE.Geometry(); 
  geometry.merge( new THREE.BoxGeometry(100, 100, 5) );
  geometry.merge( new THREE.BoxGeometry(5, 100, 100) );
  geometry.merge( new THREE.BoxGeometry(100, 5, 100) );
  
  geometry.receiveShadow = true;
  geometry.castShadow    = true;
  apartment              = createMesh(geometry, "metal-rust.jpg");
  scene.add(apartment);
  return apartment;
}

function createMesh(geom, imageFile) {
  var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
  // var mat = new THREE.MeshBasicMaterial();
  // var mat = new THREE.MeshLambertMaterial();
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;

  var mesh = new THREE.Mesh(geom, mat);
  return mesh;
}
*/


function mkApartment(scene){
  var apartment;

  var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {

        apartment = event.content;
        apartment.castShadow = true;
        apartment.receiveShadow = true;
        apartment.children[0].castShadow = true;
        apartment.children[0].receiveShadow = true;  
        apartment.children[0].children[0].castShadow = true;
        apartment.children[0].children[0].receiveShadow = true;
        apartment.children[0].children[0].material.castShadow = true;
        apartment.children[0].children[0].material.receiveShadow = true;
       // apartment.scale.set(10, 10, 10);
        console.log(apartment);
        scene.add(apartment);
      });

      loader.load(
        'assets/models/apartment.obj', 
        'assets/models/apartment.mtl', 
        {side: THREE.DoubleSide}
      );

  return apartment;
}


/*
function mkApartment(scene){
  var apartment;

  var loader = new THREE.OBJLoader();
  loader.load('assets/models/apartment.obj', function (obj) {
    var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading});

    console.log(obj);

    obj.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });

    mesh = obj;
    obj.scale.set(10, 10, 10);
    scene.add(obj);
  });

  return apartment;
}
*/