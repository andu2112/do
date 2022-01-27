const navn= document.getElementById("navnekriver");
const button= document.getElementById("enter");
const outputw= document.getElementById("output");
const etternavn= document.getElementById("etternavn");
const list=document.querySelector(`ul`);
const vs=document.querySelector(`p1`);

button.addEventListener("click", function() {
    const value=navn.value;
    const value2=etternavn.value;
    console.log(value);
    console.log(value2);
    if (value&&value2){
        localStorage.setItem(value, value2)
        sessionStorage.setItem(value, value2);
        
    let html =`
        <li>
            <div>${value}</div>  <div>${value2}</div>
        </li>
      `;
      list.innerHTML +=html;
      }


      let v =`
      <h1>
          <div>Velkommen, vi ønsker deg alt som er god ${value} ${value2} </div> 
      </h1>
    `;
    vs.innerHTML =v;
    
    

  });











 