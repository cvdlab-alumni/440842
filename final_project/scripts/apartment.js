function addApartment(scene){
  return mkApartment(scene); 
}

function mkApartment(scene){

  var apartment  = new THREE.Object3D();
  apartment.name = 'Apartment';

  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    obj = event.content;
    obj.name = 'objApartment';
    apartment.add(obj);
  });
  loader.load('assets/models/apartment.obj', 
              'assets/models/apartment.mtl', 
              {side: THREE.DoubleSide}
             );

  scene.add(apartment);
  return apartment;
}