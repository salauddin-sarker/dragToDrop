const sortableList = document.querySelector(".sortable_list");
const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        // Adding dragging class to item after delay
        setTimeout(() => item.classList.add("dragging"),0);
    });
    // Removing dragging class item on dragend event
    item.addEventListener("dragend", () => item.classList.remove("dragging"))
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = sortableList.querySelector(".dragging");
   // Getting all items except currently dragging and making array of them
   const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

   // Finding to the sibiling after which the dragging item should be placesd
   let nextSibling = siblings.find(sibling => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
   });

   // Insertting the dragging item before the found sibling
   sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());