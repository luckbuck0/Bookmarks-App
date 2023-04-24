console.log('You got this');
$(document).ready(onReady);

// on ready function to serve as initializing station
function onReady(){
    console.log('hello');
    showBookmarks()
    $('#submit').on('click', submitBookmark)
    $('#bookmarks').on('click' , '.deleteButton',deleteBookmark)
}

function showBookmarks(){
    console.log('in showBookmarks');
     $('#name').val('')
     $('#description').val('')
     $('#link').val('')
     $('#notes').val('')
     $('#image_url').val('')

     $.ajax({
        method:'GET',
        url: '/bookmarks'
     }).then(function(response){
        showall(response)
     })
}

// post route for bookmarks
function submitBookmark(){
    event.preventDefault()
    console.log('in submitBookmark');
    let name= $('#name').val()
    let description= $('#description').val()
    let link= $('#link').val()
    let notes= $('#notes').val()
    let image_URL= $('#image_url').val()
    let bookmark={
        name:name,
        description:description,
        link: link,
        notes: notes,
        image_URL:image_URL
    }

    $.ajax({
        method: 'POST',
        url: '/bookmarks',
        data:bookmark
    }).then(function(response){
        showBookmarks()
    })
    console.log(name,description,link,notes,image_URL);

}

function showall(response){
    $('#bookmarks').empty()
    console.log('hello',response);
    for (let bookmark of response)
    appendBookmarks(bookmark)
}

function deleteBookmark(){
    console.log('in delete bookmark');
    console.log($(this).parent().parent().parent().data('id'));
//     // identifying the id to delete
    let idToDelete=$(this).parent().parent().parent().data('id')

    $.ajax({
        method: 'DELETE',
        url: `/bookmarks/${idToDelete}`
    }).then(function(response){
        showBookmarks()
    }).catch(function(error){
        alert('the delete button broke--->',error)
    }
)
}

function appendBookmarks(bookmark){
    {
        
        $('#bookmarks').append(`
        <div class="contain" data-id=${bookmark.id}>
        <img id="img" src="${bookmark.images}""> 
        <h3 id="text">
             Name: ${bookmark.name} <br>
            Description: <br> ${bookmark.description}<br>
            <div class="tools">
            <form action=${bookmark.link}">
            <button id="linkButton">link</button> 
            </form>
            <button id="editButton">Edit</button> 
           <button class="deleteButton" >Delete</button>
            <div>
        <h3>
        <div>
       
       
        `)
    }
}