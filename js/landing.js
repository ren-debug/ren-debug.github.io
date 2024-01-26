(function() {
const list = document.getElementById('word-list');
const listItems = list.getElementsByTagName('li');
const listItemHeight = listItems[0].clientHeight;
let currentIndex = 1;

function scrollList() {
    list.style.top = `-${currentIndex * listItemHeight}px`;
    currentIndex = (currentIndex + 1) % listItems.length;
}

setInterval(scrollList, 1000); // Change word every 1 second

})();