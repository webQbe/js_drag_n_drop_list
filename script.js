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
}



