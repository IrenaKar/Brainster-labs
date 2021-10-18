document
  .querySelector("#filter-marketing")
  .addEventListener("change", handleMarketingFilter);
document
  .querySelector("#filter-coding")
  .addEventListener("change", handleCodingFilter);
document
  .querySelector("#filter-design")
  .addEventListener("change", handleDesignFilter);

function handleMarketingFilter() {
  var allBlocks = document.querySelectorAll(".block");
  var iterator = 0;
  while (iterator < allBlocks.length) {
    allBlocks[iterator].style.display = "none";
    iterator++;
  }

  document.querySelector("#filter-coding").checked = false;
  document.querySelector("#filter-design").checked = false;

  if (document.querySelector("#filter-marketing").checked) {
    document
      .querySelector("#filter-marketing")
      .parentElement.classList.add("check");
    document
      .querySelector("#filter-coding")
      .parentElement.classList.remove("check");
    document
      .querySelector("#filter-design")
      .parentElement.classList.remove("check");

    var marketingBlocks = document.querySelectorAll(".marketing");

    iterator = 0;

    while (iterator < marketingBlocks.length) {
      marketingBlocks[iterator].style.display = "inline-block";
      iterator++;
    }
  } else {
    document
      .querySelector("#filter-marketing")
      .parentElement.classList.remove("check");
    showAll();
  }
}

function handleCodingFilter() {
  var allBlocks = document.querySelectorAll(".block");
  var iterator = 0;
  while (iterator < allBlocks.length) {
    allBlocks[iterator].style.display = "none";
    iterator++;
  }

  document.querySelector("#filter-marketing").checked = false;
  document.querySelector("#filter-design").checked = false;

  if (document.querySelector("#filter-coding").checked) {
    document
      .querySelector("#filter-coding")
      .parentElement.classList.add("check");
    document
      .querySelector("#filter-marketing")
      .parentElement.classList.remove("check");
    document
      .querySelector("#filter-design")
      .parentElement.classList.remove("check");

    var codingBlocks = document.querySelectorAll(".coding");

    iterator = 0;

    while (iterator < codingBlocks.length) {
      codingBlocks[iterator].style.display = "inline-block";
      iterator++;
    }
  } else {
    document
      .querySelector("#filter-coding")
      .parentElement.classList.remove("check");

    showAll();
  }
}

function handleDesignFilter() {
  var allBlocks = document.querySelectorAll(".block");
  var iterator = 0;
  while (iterator < allBlocks.length) {
    allBlocks[iterator].style.display = "none";
    iterator++;
  }

  document.querySelector("#filter-marketing").checked = false;
  document.querySelector("#filter-coding").checked = false;

  if (document.querySelector("#filter-design").checked) {
    document
      .querySelector("#filter-design")
      .parentElement.classList.add("check");
    document
      .querySelector("#filter-marketing")
      .parentElement.classList.remove("check");
    document
      .querySelector("#filter-coding")
      .parentElement.classList.remove("check");

    var designBlocks = document.querySelectorAll(".design");

    iterator = 0;

    while (iterator < designBlocks.length) {
      designBlocks[iterator].style.display = "inline-block";
      iterator++;
    }
  } else {
    document
      .querySelector("#filter-design")
      .parentElement.classList.remove("check");

    showAll();
  }
}

function showAll() {
  var allBlocks = document.querySelectorAll(".block");

  iterator = 0;

  while (iterator < allBlocks.length) {
    allBlocks[iterator].style.display = "inline-block";
    iterator++;
  }
}


// document
//         .querySelector("#load-more")
//         .addEventListener("click", loadMoreBlocks);
//       function loadMoreBlocks() {
//         var allBlocks = document.querySelectorAll(".block");
//         var blocksShownAfterClick = 0;
//         allBlockss.forEach(function (block) {
//           var allCssProps = window.getComputedStyle(block);
//           if (allCssProps.display == "none") {
//             if (blocksShownAfterClick < 6) {
//               blocks.style.display = "inline-block";
//               blocksShownAfterClick = blocksShownAfterClick + 1;
//             }
//           }
//         });




// load more
// var rowslength = 20;
// size_div = document.querySelectorAll(".block").length;
// console.log(size_div)//prints 11
// var x = 6; //number of cards to be displayed
// if (rowslength <= 6) {
//    // $("#loadMoreprodDiv").hide();
//  		document.querySelector("#loadMoreprodDiv").style.display = "none";
//   }
  
  
//   if (x == 6) {
//     //alert(rowslength)
//     //$("#showlessprodDiv").hide();
//     document.querySelector("#showlessprodDiv").style.display = "none";
   
//   }
//   showOnly(document.querySelectorAll(".block"),x);
  
//   document.getElementById("loadMoreprodDiv").onclick =  function () {
//     x = (x + 20 <= size_div) ? x + 20 : size_div;
//    showOnly(document.querySelectorAll(".block"),x);
//     //$("#showlessprodDiv").show();
//     document.querySelector("#showlessprodDiv").style.display = "block";
    
//     if (x == size_div) {
//       //$("#loadMoreprodDiv").hide();
//       document.querySelector("#loadMoreprodDiv").style.display = "none";
//     }
//   }
  
  
//   document.getElementById("showlessprodDiv").onclick = function () {
//     x = (x - 20 <= 6) ? 6 : x - 20;
//     showOnly(document.querySelectorAll(".block"),x);
//     document.querySelector("#loadMoreprodDiv").style.display = "block";
//     document.querySelector("#showlessprodDiv").style.display = "block";
//     //$("#loadMoreprodDiv").show();
//     //$("#showlessprodDiv").show();
  
//     if (x == 6) {
//       document.querySelector("#showlessprodDiv").style.display = "none";
//       //$("#showlessprodDiv").hide();
      
//     }
//   }
  
//   function showOnly(nodeList, index) {
//      for (i = 0; i < nodeList.length; i++ ) {
//        nodeList[i].style.display = i<index ? "block": "none";
//      }
// 	}

