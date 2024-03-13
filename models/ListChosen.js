function renderlistitem(data){
    let content= "";
    
        data.forEach(product =>{
           
            content += `
            <div class="col-3">
            <div class="card">
              <img class="img-fluid" src="${product.imgSrc_jpg}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <button type="button" data-button-id="${product.id}" class="btn btn-primary">Thử Ngay</button>
              </div>
            </div>
          </div>
            `
           })
           
          
      
    
    
   return content;
}













