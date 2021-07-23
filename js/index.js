
riot.tag('todo', '<div class="add" onclick="{ showAdd }"><i class="fa fa-plus"></i></div> <div class="title"><h1>{ opts.title }</h1></div> <div class="new-task"><a href="#" class="add-new" onclick="{ add }"><i class="fa fa-plus"></i></a> <input name="input" placeholder="New task"  onkeyup="{ edit }"/> </div> <ul> <li class="row { done: done }" each="{ items.filter(filter) }"> <a class="remove" onclick="{ parent.removeItem }"><i class="fa fa-trash-o"></i></a><a class="completed" onclick="{ parent.toggle }"><i class="fa fa-check"></i></a><span>{ title }</span> </li> </ul>', function(opts) {
  this.items = opts.items

  this.edit = function(e) {
    this.text = e.target.value
    if (e.which == 13)
      this.add()
  }.bind(this)

  this.add = function(e) {
    if (this.text) {
      this.items.push({ title: this.text, done: false })
      this.text = this.input.value = ''
      this.update()
    }
  }.bind(this)

  this.filter = function(item) {
    return !item.hidden
  }.bind(this)

  this.toggle = function(e) {
    var item = e.item
    item.done = !item.done
    return true
  }.bind(this)

  this.removeItem = function(e) {
    var item = e.item
    item.hidden = true
    this.update()
    return true
  }.bind(this)

  this.showAdd = function(e) {
    $(".new-task").slideToggle();
      $("#todo-text").focus();
    return true
  }.bind(this)

})

riot.mount('todo', {
  title: "Tareas - Paso a Producción - Pipelines",
  items: [
    { title: 'Validación de pruebas de performance en Jmeter de manera local', done: false },
    { title: 'Validación de pruebas de aceptación en SOAPUI de manera local', done: false },
    { title: 'Validación de certificados en el truststore.jks', done: false },
    { title: 'Se realizo un release hasta las pruebas e2e, antes de crear el release productivo', done: false },
    { title: 'Revisar las variables del configmap esten correctas y completas', done: false },
    { title: 'Revisar las variables del pipeline y del release', done: false },
    { title: 'Validación de los diferentes consumos en Postman y que estos respondan', done: false },
    { title: 'Se generaron ya todas las OCS correspondientes', done: false },
    { title: 'Aprobación de las OCS correspondientes', done: false },
    { title: 'Creación de las habilitadoras', done: false },
    { title: 'Las personas que tienen asignadas las habiltadoras si estáran durante el paso a producción', done: false },
    { title: 'Validar que el aprobador de Creación de OC, si cuente con el tiempo y si tenga el permiso', done: false },
    { title: 'Tener los diferentes mecanismos que permitan validar que la salidad a producción fue exitosa', done: false },
    { title: 'Validad que los diferentes recursos de AWS estén creados', done: false }
  ]
});

$( "ul" ).sortable();