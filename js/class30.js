// fetch('https://jsonplaceholder.typicode.com/users')
// .then((alu)=>alu.json())
// .then((data)=>{
//       data.map((item)=>{
//             console.log(item)
//       })
// })

let results=document.querySelector('.results')

fetch('https://jsonplaceholder.typicode.com/users')
.then((alu)=>alu.json())
.then((data)=>{
data.map((item)=>{

      // -------------create tag
      let div=document.createElement('div')
      let h2=document.createElement('h2')
      let h3=document.createElement('h3')
      let p=document.createElement('p')



      // ------------append child
      results.appendChild(div)
      div.appendChild(h2)
      div.appendChild(h3)
      div.appendChild(p)


      //////add class
      div.classList.add('result1')

      // add contents
      h2.innerHTML='User name:'+item.name
      h3.innerHTML='User email:'+item.email
      p.innerHTML='website:'+item.website

})
})