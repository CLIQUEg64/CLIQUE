 var info = document.getElementById('edit')
 console.log(info)

 info.addEventListener('click', function(e) {
   event.preventDefault()
   var info = document.getElementById('info')
   info.classList.add('editUser')
   var editInfo = document.getElementsByClassName('editUser')[1]
  editInfo.classList.remove('editUser');
})
