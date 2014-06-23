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
        apartment.scale.set(10, 10, 10);
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

