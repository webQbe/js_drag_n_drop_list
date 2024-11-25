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




