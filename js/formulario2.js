let btn = document.getElementById('submit');
btn.addEventListener('click', mostrarMensaje);

function mostrarMensaje(evt){
    evt.preventDefault();

    let txtNombre = document.getElementById('nombre').value;
    
    let txtEmail = document.getElementById('email').value;
    
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
    var esValido = expReg.test(txtEmail);

    let edad = document.getElementById('edad').value;
    let pedido = document.getElementById('pedido').value;

    console.log(txtNombre);
    console.log(txtEmail);
    console.log(edad);
    console.log(pedido);

    if(edad < 18){
        document.getElementById('mensaje').innerText = "Debe ser mayor de edad para realizar una compra online con nosotros."
    } else if (esValido==false){
        document.getElementById('mensaje').innerText = "Ingrese un email válido"
    } else {
        document.getElementById('mensaje').innerText = 
    "Gracias " + txtNombre + " por confiar en nosotros.\nLe avisaremos cuando esté supedido mediante el mail de contacto: " + txtEmail;
    }
}