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


// $(function () {

//   function saveItem(event) {
//     // when save button is clicked what is in text area is saved in local storage
//     let saveBtnClick = $(event.target)

//   }






// }

function showDate() {

  let today = dayjs();

  // This displays the current day
  $('#currentDay').text(today.format('dddd, MMMM D'));

}
showDate();

function pastPresentFuture() {

  let hourNine = $('#hour-9');
  let hourTen = $('#hour-10');
  let hourEleven = $('#hour-11');
  let hourTwelve = $('#hour-12');
  let hourOne = $('#hour-1');
  let hourTwo = $('#hour-2');
  let hourThree = $('#hour-3');
  let hourFour = $('#hour-4');
  let hourFive = $('#hour-5');


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


  localStorage.setItem('text', JSON.stringify(textAreaTarget.val()));

}

let saveBtn = $('.saveBtn')

saveBtn.on('click', saveItem)

// classes = past, present, future

// If time is current time class = present and previous time = past and next time = future
//  .addClass()

//  .removeClass()

// function pastPresentFuture() {


// }


