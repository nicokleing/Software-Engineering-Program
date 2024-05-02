// Los objetos en JavaScript contienen claves (o propiedades) con valores correspondientes

const user = {
    "nombre": "Sammy",
    "apellido": "Tiburón",
    "edad": 25,
    "seguidores": 987
  };
  
  // Podemos acceder a las propiedades con notación de punto
  
  console.log(user.nombre); // Sammy
  console.log(user.edad); // 25
  
  // O con sintaxis de corchetes de estilo de matriz
  
  console.log(user["apellido"]); // Tiburón
  console.log(user);
  
  // user.seguidores = 988; // También podemos asignar nuevos valores a las propiedades del objeto
  
  user.ubicación = "Océano Pacífico"; // O crear nuevas propiedades
  
  user.ciudadanía = "Nueva Zelanda";
  
  user ["Pasaporte"] = "Australia";
  
  console.log(user);
  