const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const billboardTopTen = [
  "Hurts 2B Human",
  "People",
  "CrasH Talk",
  "When We All Fall Asleep, Where Do We Go?",
  "Free Spirit",
  "Thank U, Next",
  "Map Of The Soul: PERSONA",
  "Neotheater",
  "HOMECOMING: THE LIVE ALBUM",
  "Victory Lap",
];

//Store list items
const listItems = [];

let dragStartIndex;

createList();

//Insert List Items into DOM
function createList() {
  [...billboardTopTen]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((album, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `<span class="number">${index + 1}</span>
        <div className="draggable" draggable="true">
          <p class="album-name">${album}</p>
          <i class="fas fa-grip-lines"></i>
        </div>`;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
