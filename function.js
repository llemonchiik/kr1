const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){


    document.getElementsByClassName('block7')[0].innerText='female'
    document.getElementsByClassName('block9')[0].innerText='Perm'
    document.getElementsByClassName('block6')[0].innerText='Rustam kyzy'
    document.getElementsByClassName('block4')[0].innerText='Gasymzade'
    document.getElementsByClassName('block5')[0].innerText='Leman'
}
node_for_click_all.addEventListener("click",find_edit_all)


const node_for_click = document.getElementById("for_click")
function find_edit_name(){
      document.getElementsByClassName('block5')[0].innerText='Leman'

}
node_for_click.addEventListener("click",find_edit_name)



