// var posts = [
//     { id: 1, title: 'daily js news' },
//     { id: 2, title: 'daily python news' },
//     { id: 3, title: 'daily java news' },
//     { id: 4, title: 'daily html news' },
// ];

// var tablebody = document.querySelector('tbody');

// posts.forEach(post => {
//     tablebody.innerHTML += `<tr>
//                 <td>${post.id}</td>
//                 <td>${post.title}</td>
//             </tr>`
// });


// var addbutton = document.querySelector('.add');

// addbutton.addEventListener('click', () => {
//     location.href = 'form.html';
// });

// var submitbutton = document.querySelector('.submit');

// submitbutton.addEventListener('click', () => {
//     location.href = 'index.html';

// });

// function addDetails() {
//     var id = document.querySelector('.idnumber').value;
//     var title = document.querySelector('.titletext').textContent;

//     posts.push({id: id, title: title});
//     location.href = 'index.html';
// }JSON.parse(localStorage.getItem('posts')) || 

// Function to add details from form.htmlJSON.parse(localStorage.getItem('posts')) || 
function addDetails() {
    var id = document.querySelector('.idnumber').value;
    var title = document.querySelector('.titletext').value;

        var posts = [{ id: 1, title: 'daily js news' }, { id: 2, title: 'daily python news' }, { id: 3, title: 'daily java news' }, { id: 4, title: 'daily html news' }];
        posts.push({ id: id, title: title });
        localStorage.setItem('posts', JSON.stringify(posts));

        location.href = 'index.html'; // Redirect to index.html
}

// Function to render table data in index.html
function renderTable() {
    var posts = JSON.parse(localStorage.getItem('posts')) ||[
        { id: 1, title: 'daily js news' },
        { id: 2, title: 'daily python news' },
        { id: 3, title: 'daily java news' },
        { id: 4, title: 'daily html news' }
    ];

    var tablebody = document.querySelector('tbody');
        tablebody.innerHTML = ""; // Clear existing rows
        posts.forEach(post => {
            tablebody.innerHTML += `<tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
            </tr>`;
        });
}

// Redirect to form.html when clicking "Add New Data" (Only on index.html)
var addbutton = document.querySelector('.add');
if (addbutton) {
    addbutton.addEventListener('click', () => {
        location.href = 'form.html';
    });
}

// Call renderTable() only on index.html
if (document.body.contains(document.querySelector('table'))) {
    renderTable();
}

// Assign event listener for form.html submit button
var submitbutton = document.querySelector('.submit');
if (submitbutton) {
    submitbutton.addEventListener('click', addDetails);
}
