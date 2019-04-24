const card = (id,img,header,content,boo=true) =>{

    document.getElementById(`${id}`).innerHTML = `
      <div class="card shadow p-3 mb-5 bg-white rounded" ${id=='card-6'? 'style=" height: 100% ;"':''}>
                <div class="card-body ${boo == true ? 'card-body-row-edition':''}">
                    <img src="Image/${img}.jpg" class="img-thumbnail" alt="">
                    <div class="${boo == true ? 'ml-5':''}">
                        <h3 class="card-title">${header}</h3>
                        <p class="card-text" style="${id=='card-6' ? 'max-height: 70px;':'max-height:25px;'}overflow:hidden;">${content} </p>
                        <button type="button" onclick="modalFit('${header}','${content}','${img}')" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Read More</button>
                    </div>
                </div>
            </div>`;
  }