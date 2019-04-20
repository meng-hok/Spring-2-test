const modalFit = (title="heheh",paragraph="hehehe",image="3") => {
    console.log(paragraph);
    document.getElementsByClassName('modal-content')[0].innerHTML = `
        <div class="modal-header">
            <h4 class="modal-title">${title}</h4>
        </div>
        <div class="modal-body">
            <center>
                <img src="Image/${image}.jpg" width="25%" height="50%" alt="">
            </center>
            <br>
            <p>
                ${paragraph}                   
            </p>
        </div>
    `;
}