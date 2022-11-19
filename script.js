// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.




function showDate() {

  let today = dayjs();

  // This displays the current day
  $('#currentDay').text(today.format('dddd, MMMM D'));

}
showDate();



let hourNine = $('#hour-9');
let hourTen = $('#hour-10');
let hourEleven = $('#hour-11');
let hourTwelve = $('#hour-12');
let hourOne = $('#hour-13');
let hourTwo = $('#hour-14');
let hourThree = $('#hour-15');
let hourFour = $('#hour-16');
let hourFive = $('#hour-17');


const hoursArray = [
  { elem: hourNine, hour: 9 },
  { elem: hourTen, hour: 10 },
  { elem: hourEleven, hour: 11 },
  { elem: hourTwelve, hour: 12 },
  { elem: hourOne, hour: 13 },
  { elem: hourTwo, hour: 14 },
  { elem: hourThree, hour: 15 },
  { elem: hourFour, hour: 16 },
  { elem: hourFive, hour: 17 },
]

function pastPresentFuture() {


  for (let i = 0; i < hoursArray.length; i++) {
    let timeNow = dayjs().hour();



    if (timeNow < hoursArray[i].hour) {
      hoursArray[i].elem.addClass('future');
    } else if (timeNow > hoursArray[i].hour) {
      hoursArray[i].elem.addClass('past');
    } else {
      hoursArray[i].elem.addClass('present');
    }
  }
}
pastPresentFuture();


function saveItem(event) {
  let saveBtnClick = $(event.currentTarget);
  let textAreaTarget = saveBtnClick.siblings('textarea')
  console.log(saveBtnClick);
  console.log(textAreaTarget);
  console.log(textAreaTarget.val());

  let textObj = JSON.parse(localStorage.getItem('text')) || {};
  let hourId = textAreaTarget.parent().attr('id');
  console.log(hourId);
  textObj[hourId] = textAreaTarget.val().trim();
  console.log(textObj);


  localStorage.setItem('text', JSON.stringify(textObj));

}

let saveBtn = $('.saveBtn')

saveBtn.on('click', saveItem)

function getItem() {
  const items = JSON.parse(localStorage.getItem('text'));


  for (let i = 0; i < hoursArray.length; i++) {
    let hourConfig = hoursArray[i]
    let textElem = hourConfig.elem.find('textarea');
    let id = 'hour-' + hourConfig.hour;
    const value = items[id]
    textElem.val(value);

  }
}


getItem()