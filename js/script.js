  AOS.init();



let alu = document.querySelector('.t1h1')
let alu2 = document.querySelector('.t1b1')

alu2.addEventListener('click',()=>{
    alu.style='color:red;background:Yellow'

    console.log("I am clicked")
})


// let t1h = document.querySelector('.t1h1')
// let t1b = document.querySelector('.t1b1')

// t1b.addEventListener('click',()=>{
//   t1h.style= 'color:yellow'
// })


// let alu = document.querySelector('.t1h1')
// let alu2 = document.querySelector('.t1b1')

// alu2.addEventListener('click',()=>{
//   alu.style='color:green'
//   console.log("I am clicked")
// })


// Get the input element
const imageUpload = document.getElementById('imageUpload');

// Add an event listener to detect file upload
imageUpload.addEventListener('change', function() {
  // Get the selected file
   const file = imageUpload.files[0];

  // Create a FileReader object
  const reader = new FileReader();

  // Set up the reader's onload event handler
  reader.onload = function(e) {
    // Get the image data URL
    const imageDataUrl = e.target.result;

    // Display the uploaded image
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.src = imageDataUrl;
  };

  // Read the selected file as Data URL
  reader.readAsDataURL(file);
});