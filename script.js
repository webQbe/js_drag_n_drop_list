// Define DOM Elements
const draggable_list = document.getElementById('draggable-list');
const checkBtn = document.getElementById('check'); 

// Define correctly ordered array
const richestPeople = [
    'Elon Musk',
    'Jeff Bezos',
    'Larry Ellison ',
    'Bernard Arnault & Family ',
    'Mark Zuckerberg',
    'Warren Buffett',
    'Bill Gates',
    'Larry Page ',
    'Sergey Brin',
    'Amancio Ortega'
];

// Define Globals
const listItems = []; // Store list items
let dragStartIndex; // Keep track of each list item's index

createList(); // Generate list items

function createList(){
    [...richestPeople] // Make a copy of the array without scrambling its order
     .map(a => ({ value: a, sort: Math.random() })) // Generate a random decimal for each item
     .sort((a,b) => a.sort - b.sort) // Take random decimal numbers to sort items in ascending order
     .map(a => a.value) // Get values from shuffled array
     .forEach((person, index) => {

        // Create <li> element for current person
        const listItem = document.createElement('li');

        // Set current index as <li> element's data-index
        listItem.setAttribute('data-index', index);

        // Add index + 1 & person to <li> element 
        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>`;

        // Add current item to listItems array     
        listItems.push(listItem);

        // Append current item to draggable_list element
        draggable_list.appendChild(listItem);

     });

     addEventListeners();
}



function addEventListeners(){

    // Select draggable <div> elements
    const draggables = document.querySelectorAll('.draggable');
    // Select <li> elements
    const dragListItems = document.querySelectorAll('.draggable-list li');

    // Loop Through draggables
    draggables.forEach(draggable => {

        // Listen for dragstart in current draggable <div> 
        draggable.addEventListener('dragstart', dragStart);
        
    });

    // Loop Through dragListItems
    dragListItems.forEach(item => {

        // Listen for events in current <li> 
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
        
    });
}

function dragStart(){console.log('Event: ', 'dragstart')}

function dragEnter(){console.log('Event: ', 'dragenter')}

function dragOver(){console.log('Event: ', 'dragover')}

function dragLeave(){console.log('Event: ', 'dragleave')}

function dragDrop(){console.log('Event: ', 'drop')}

