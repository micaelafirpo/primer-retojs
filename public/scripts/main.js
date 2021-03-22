
// DECLARACION DE VARIABLES
let agregar = document.getElementById('botonAgregar2')
let lista = document.getElementById('ventanaListadoLista')
let ventanaInicio = document.getElementById('ventanaInicio')
let ventanaListado = document.getElementById('ventanaListado')
let ventanaDescripcion = document.getElementById('ventanaDescripcion')
let detalle = document.getElementById('ventanaListadoLista')
let desktop = document.getElementById('desktop')
let botondesktop = document.getElementById('botondesktop')

// HAGO QUE MI MODAL SE CIERRE DESPUES DE AGREGAR 1 ITEM
var agregarALista = new bootstrap.Modal(document.getElementById('agregarALista'), {})

//VIDA DE MIS BOTONES
agregar.addEventListener('click', agregarenLista)
botondesktop.addEventListener('click',agregarenListaDesktop)


// FUNCION PARA AGREGAR EN MI LISTA CELU
function agregarenLista(){
// DECLARACION DE VARIABLES QUE USAN EL INPUT DEL USER
let producto = document.getElementById('agregarAListaProducto').value
let icono = document.getElementById('agregarAListaIcono').value
let descripcion = document.getElementById('agregarAListaDescripcion').value
  // VALIDACION
  if(producto == '' || icono == '')
  {
      alert('guacho llena el formulario')
      //validar.style.display = 'block'
      ventanaListado.style.display = 'none'
      return;
    }
  else{
    // HIJE DEL LISTADO (LO DEL BLITZ)
    let modelo = `<li class="list-group-item" data-producto="${producto}" data-icono="${icono}" data-descripcion="${descripcion}" ><img src="${icono}" alt="${producto}" class="ventanaListado__icono">${producto}</li>`
    // CONECTO MI LISTITA JS CON HTML
    lista.innerHTML += modelo
          // LIMPIO MI FORMS
          document.getElementById('agregarAListaProducto').value = ""
          document.getElementById('agregarAListaIcono').value = ""
          document.getElementById('agregarAListaDescripcion').value = ""
    // DISPLAYS DE LAS PANTALLITAS CUANDO ESTAMOS CARGANDO PRODUCTOS
    ventanaInicio.style.display = 'none'
    ventanaListado.style.display = 'block'
  }
    //CIERRO MI MODAL
        agregarALista.hide()
}
function agregarenListaDesktop(){
  // DECLARACION DE VARIABLES QUE USAN EL INPUT DEL USER
  let producto = document.getElementById('agregarAListaProductoD').value
  let icono = document.getElementById('agregarAListaIconoD').value
  let descripcion = document.getElementById('agregarAListaDescripcionD').value
    // VALIDACION
    if(producto == '' || icono == '')
    {
        alert('llena el formulario o los unicornios del mundo sufren :(')
        //validar.style.display = 'block'
        ventanaListado.style.display = 'none'
        return;
      }
    else{
      // HIJE DEL LISTADO (LO DEL BLITZ)
      let modelo = `<li class="list-group-item" data-producto="${producto}" data-icono="${icono}" data-descripcion="${descripcion}" ><img src="${icono}" alt="${producto}" class="ventanaListado__icono">${producto}</li>`
      // CONECTO MI LISTITA JS CON HTML
      lista.innerHTML += modelo
            // LIMPIO MI FORMS
            document.getElementById('agregarAListaProductoD').value = ""
            document.getElementById('agregarAListaIconoD').value = ""
            document.getElementById('agregarAListaDescripcionD').value = ""
      // DISPLAYS DE LAS PANTALLITAS CUANDO ESTAMOS CARGANDO PRODUCTOS
      ventanaInicio.style.display = 'none'
      ventanaListado.style.display = 'block'
    }
  }

detalle.addEventListener('click',verDetalle)
// FUNCION PARA VER DESCRIPCION EN DETALLE
function verDetalle(e){
    //DISPLAY DE LAS PANTALLITAS PARA LA DESCRIPCION
    ventanaListado.style.display = 'none'
    ventanaDescripcion.style.display = 'block'
    desktop.style.display = 'none'
    //OCULTO EL BOTON DE AGREGAR
    agregar.style.display = 'none'
    document.getElementById('ventanaDescripcionIcono').src = e.target.getAttribute('data-icono') 
    document.getElementById('ventanaDescripcionProducto').innerHTML = e.target.getAttribute('data-producto')
    document.getElementById('ventanaDescripcionData').innerHTML = e.target.getAttribute('data-descripcion')
}
// CIERRO EL DETALLE Y VUELVO A LA LISTA
let ventanaDescripcionCerrar = document.getElementById('ventanaDescripcionCerrar')
ventanaDescripcionCerrar.addEventListener('click',()=>{
  ventanaListado.style.display = 'block'
  ventanaDescripcion.style.display = 'none'
  desktop.style.display = 'block'
})