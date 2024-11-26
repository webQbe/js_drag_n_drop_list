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

function dragStart(){

    // Get start position's data-index
    // To update dragStartIndex
    dragStartIndex = +this // + sign converts string to int
                    .closest('li').getAttribute('data-index'); /* Why .closest() is used:

                        Find the relevant ancestor: 
                        The draggable element itself does not have the data-index attribute, but its nearest ancestor <li> does. .closest('li') ensures the method looks upward in the DOM hierarchy to find that <li> element.
                        
                        Dynamic structure: 
                        In many drag-and-drop implementations, draggable elements are wrapped in containers like <li>. The .closest() method dynamically identifies the appropriate parent container, making the code more adaptable to structural changes.
                        
                        Context for operation: 
                        The data-index attribute is essential for identifying the order or position of the item being dragged. By retrieving it from the <li>, the code can track and manipulate the correct item during the drag-and-drop process. */
                    
    console.log(dragStartIndex);

    // console.log('Event: ', 'dragstart');

}


function dragEnter(){

    // Add .over class to <li> element
    this.classList.add('over');

    // console.log('Event: ', 'dragenter')

}

function dragOver(e){

    e.preventDefault(); // Otherwise swapPositions() will not run

    //console.log('Event: ', 'dragover')
    
}


function dragLeave(){

    // Remove .over class from <li> element
    this.classList.remove('over');

    // console.log('Event: ', 'dragleave')

}


function dragDrop(){

    // Get dropped position index
    const dragEndIndex = +this.getAttribute('data-index'); /* .closest() method is not used in the dragDrop() function because the code already targets the appropriate element (this) on which the drop event is triggered.  
    Since the required data-index attribute is already on the element itself (e.g., <li data-index="2">), there is no need to navigate up the DOM hierarchy using .closest(). */

    // Swap item postions on drop
    swapPositions(dragStartIndex, dragEndIndex);

    // Remove .over class
    this.classList.remove('over');

    //console.log('Event: ', 'drop')
}


function swapPositions(fromIndex, toIndex){

    // Get item in source
    const srcItem = listItems[fromIndex].querySelector('.draggable').innerText;

    // Get item in destination
    const destItem = listItems[toIndex].querySelector('.draggable').innerText;

    console.log(srcItem," with ", destItem);

}