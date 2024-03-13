function Rendernav(data,spam) {
   let arr =  spam.filter(pro=>{
       return  pro.type === data[0].type
    })
   
        
   
  let content = `
    <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-${ data[0].tabName}-tab"
            data-toggle="pill"
            data-target="#pills-${ data[0].tabName}"
            type="button"
            role="tab"
            aria-controls="pill-${ data[0].tabName}"
            aria-selected="true"
          >
            ${ data[0].showName}
          </button>
        </li>
    `;
  let content1 =  `
  <div class="tab-pane fade show active" id="pills-${data[0].tabName}" role="tabpanel" aria-labelledby="pills-${data[0].tabName}-tab">
  <div class="row">${renderlistitem(arr)}</div>
  </div>
  `;
 
  for (let i = 1; i < data.length; i++) {
    let product = data[i];
    let arr =  spam.filter(pro=>{
        return  pro.type === product.type
     })
    content += `
        <li class="nav-item" role="presentation">
              <button
                class="nav-link "
                id="pills-${product.tabName}-tab"
                data-toggle="pill"
                data-target="#pills-${product.tabName}"
                type="button"
                role="tab"
                aria-controls="pill-${product.tabName}"
                aria-selected="false"
              >
                ${product.showName}
              </button>
            </li>
        `;
    content1 += `
        <div class="tab-pane fade " id="pills-${product.tabName}" role="tabpanel" aria-labelledby="pills-${product.tabName}-tab">
        <div class="row">${renderlistitem(arr)}</div>
        </div>
        `;
  }
  
  document.getElementById("pills-tab").innerHTML = content;
 document.getElementById('pills-tabContent').innerHTML =content1;
 
  
}
