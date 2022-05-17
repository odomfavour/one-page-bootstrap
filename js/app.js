// filterSelection("all")
// function filterSelection(c) {
//     var x, i;
//     x = document.getElementsByClassName("filterDiv");
//     if (c == "all") c = "";
//     // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//     for (i = 0; i < x.length; i++) {
//         w3RemoveClass(x[i], "show");
//         if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//     }
// }

// // Show filtered elements
// function w3AddClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         while (arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
// }

// // Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("portfolio-filters");
// var btns = btnContainer.getElementsByClassName("btn");
// console.log(btns);
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

// const btns = document.querySelectorAll('.btn');
// const portfolios = document.querySelectorAll('.filterDiv');

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function (e) {
//         e.preventDefault();
//         const filter = e.target.dataset.filter;
//         console.log(filter);
//         portfolios.forEach(portfolio => {
//             if (filter === '*') {
//                 console.log(filter)
//                 portfolio.style.display = 'block';
//             } else {
//                 if (portfolio.classList.contains(filter)) {
//                     console.log(portfolio)
//                     // portfolio.style.display = 'block';
//                     portfolio.classList.remove('hide');
//                     portfolio.classList.add('show');

                    

//                 } else {
//                     portfolio.classList.remove('show');
//                     portfolio.classList.add('hide');
//                     // portfolio.style.display = 'none';
//                 }
//             }
//         }
//         )
//     });
// }

// init Isotope
var $grid = $('#portfolio-items').isotope({
    // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', '.btn', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
});