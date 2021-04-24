// ------------------ navbar javascript ------------
const toggleButton = document.getElementsByClassName('square-menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
//  ---------------choose file javascript--------------------
const realFileBtn = document.getElementById("image-file") // pointer is also used in image preview
const customBtn = document.getElementsByClassName("custom-button")
const customTxt = document.getElementsByClassName("custom-text")

console.log(customBtn[0])
console.log(customTxt)

customBtn[0].addEventListener("click", () =>{
  realFileBtn.click()
})

realFileBtn.addEventListener("change", function() {
  if(realFileBtn.value){
    customTxt[0].innerHTML = realFileBtn.value.match(/[^\\/]*$/)[0];
  }else{
    customTxt[0].innerHTML = "No file chosen";
  }
})

// --------------------image preview ---------------------------
const previewContainer = document.getElementById('imagePreview')
const previewImage = previewContainer.querySelector(".image-preview-image")
const previewDefaultText = previewContainer.querySelector(".image-preview-default-text")


console.log(realFileBtn)
realFileBtn.addEventListener("change", () => {
  const file = document.getElementById("image-file").files[0]
  
  if(file){
    const reader = new FileReader()

    previewDefaultText.style.display = "none";
    previewImage.style.display = "block";

    reader.addEventListener("load", function() {
      console.log(this);
      previewImage.setAttribute("src", this.result)
    })

    reader.readAsDataURL(file)
    
  }
})

const realSubmitBtn = document.getElementById("real-submit")
const customSubmitBtn = document.getElementById("custom-submit")


customSubmitBtn.addEventListener("click", () => {
  realSubmitBtn.click()
})
