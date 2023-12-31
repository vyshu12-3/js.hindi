#project related to dom

##project link


[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)



#solution code



##project 1



'''javascript
const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white'){
     body.style.backgroundColor=e.target.id
   }
   if(e.target.id==='blue'){
     body.style.backgroundColor=e.target.id
   }
   if(e.target.id==='yellow'){
     body.style.backgroundColor=e.target.id
   }
   if(e.target.id==='purple'){
    body.style.backgroundColor=e.target.id
  }
  
  if(e.target.id==='red'){
    body.style.backgroundColor=e.target.id
  }
  })
})

'''

#project 2



'''javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

'''

#project keydown

```javascript

const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " "?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>

  </div>`
  
});

```

#project of bgcol change

```javascript

const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " "?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>

  </div>`
  
});


```
