function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
}

function nestedTarget(){
  var nestedID = document.getElementById("nested");
  var node = nestedID
  while(node){
    if(node.classList.contains("target")){
      return node
    } else {
      node = node.firstElementChild
    }
  }
}

function increaseRankBy(n) {
  // grab all the li with the parent class of rankedLists
  var rankedLists = document.querySelectorAll(".ranked-list");
  var i = 0;
  while (rankedLists[i]) {
    var sibling = rankedLists
    for (var p = 0; p < rankedLists[i].childElementCount; p++) {
      // we want it to access the child and increase by one
      rankedLists[i].children[p].innerHTML = parseInt(rankedLists[i].children[p].innerHTML) + n
    }
    i++
  }
}