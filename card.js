const card = (id,img,header,content,boo=true) =>{
    document.getElementById(`${id}`).innerHTML = `
      <div class="card shadow p-3 mb-5 bg-white rounded">
                <div class="card-body ${boo == true ? 'card-body-row-edition':''}">
                    <img src="Image/${img}.jpg" class="img-thumbnail" alt="">
                    <div class="${boo == true ? 'ml-5':''}">
                        <h3 class="card-title">${header}</h3>
                        <p class="card-text" style="max-height:25px;overflow:hidden;">${content} </p>
                        <a href="#">Read More...</a>
                    </div>
                    
                </div>
               
            </div>`;
  }