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

function increa