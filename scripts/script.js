// JavaScript Document
console.log("hi");
var toonSidebar = document.querySelector("header nav ul:nth-of-type(2) li:first-child button");

toonSidebar.addEventListener("click", function(){
    const sidebar = document.querySelector("header nav ul:nth-of-type(1)")
    sidebar.style.display = 'flex'
});

var verbergSidebar = document.querySelector("header nav ul:nth-of-type(1) li:first-child button");

verbergSidebar.addEventListener("click", function(){
    const sidebar = document.querySelector("header nav ul:nth-of-type(1)")
    sidebar.style.display = 'none'
});
const completeLookButton= document.querySelector(".aslanp article:nth-of-type(4) button:nth-of-type(1)");
const completeLookDialog= document.querySelector(".aslanp article:nth-of-type(4) dialog");

completeLookButton.addEventListener("click", ()=>{
    completeLookDialog.showModal()
})
