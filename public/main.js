console.log('working?');

 var info = document.getElementById('edit')
 console.log(info)

 var nonhidden;

 info.addEventListener('click', function(e) {
   event.preventDefault()
   var info = document.getElementById('info')
   info.classList.add('editUser')
   var editInfo = document.getElementsByClassName('editUser')[1]; console.log(editInfo)
  editInfo.classList.remove('editUser');
})
  
