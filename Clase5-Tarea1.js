//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>
//yo crearia un const mesesEnElAño=12 para que sea mucho mas legible
const botonCalcular = document.querySelector('#calcular-salario-mensual')

botonCalcular.onclick = function(){
    const salarioAnualUsuario = Number(document.querySelector('#salario-anual-usuario').value)
    document.querySelector('#salario-mensual').value = salarioAnualUsuario / 12 
    return false
}




