console.log('You got this');
$(document).ready(onReady);

// on ready function to serve as initializing station
function onReady(){
    console.log('hello');
    showBookmarks()
    $('#submit').on('click', submitBookmark)

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
    for (let bookmark of response){
        $('#bookmarks').append(`
       <h3 id="text">Name: ${bookmark.name} <br>
           Description: <br> ${bookmark.description}<br>
           Link: <br> <a href="">${bookmark.link}</a>
       <h3>
       <img id="img" src="${bookmark.images}"">
        `)
    }
}
 // <p ><h3>name:${bookmark.name}<h3><br> Description: <br> ${bookmark.description} <br> link:<a href="">${bookmark.link}</a> </p>
        // <img id="img" src="${bookmark.images}"">
        // <div id="notes">${bookmark.notes} </div>