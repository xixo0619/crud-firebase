// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBPPGompr4aipNl5EZrn3dasScRVKnzkNE",
    authDomain: "tutorial-crud-576c0.firebaseapp.com",
    projectId: "tutorial-crud-576c0",
  });
  
  var db = firebase.firestore();

  //Agregar documentos
  
function guardar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var fecha = document.getElementById('fecha').value;

    db.collection("users").add({
    first: nombre,
    last: apellido,
    born: fecha
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
    document.getElementById('fecha').value='';
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}


//Leer Documentos
var tabla = document.getElementById('tbl');

db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML +=`
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().first}</td>
        <td>${doc.data().last}</td>
        <td>${doc.data().born}</td>
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">BORRAR SAPEEE!!!</button>
        <td><button class="btn btn-primary" onclick="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">EDITAR SAPEEE!!!</button>
      </tr>
        `
    });
});

//Borrar Documentos
function eliminar(id){
    db.collection("users").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

//Actualizar Documentos
function editar(id, nombre, apellido,fecha){

    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    document.getElementById('fecha').value = fecha;

    var boton = document.getElementById('boton');
    boton.innerHTML = `EDITAR SAPE!!!`;

    boton.onclick = function(){
        var washingtonRef = db.collection("users").doc(id);
    // Set the "capital" field of the city 'DC'
    
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var fecha = document.getElementById('fecha').value;

return washingtonRef.update({
    first: nombre,
    last: apellido,
    born: fecha
})
.then(function() {
    console.log("Document successfully updated!");
    boton.innerHTML = `GUARDAR!!!`
    document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
    document.getElementById('fecha').value='';
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
    }

}























  /*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBPPGompr4aipNl5EZrn3dasScRVKnzkNE",
    authDomain: "tutorial-crud-576c0.firebaseapp.com",
    databaseURL: "https://tutorial-crud-576c0.firebaseio.com",
    projectId: "tutorial-crud-576c0",
    storageBucket: "tutorial-crud-576c0.appspot.com",
    messagingSenderId: "905256756277",
    appId: "1:905256756277:web:04e243e36ee900a0c0fd7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>*/ 