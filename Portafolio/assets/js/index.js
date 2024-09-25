const Responsive = (html) => {
    let elementosImg = document.getElementsByClassName('imagen');
    let panelesBTN = document.getElementsByClassName('panelBtns');
    //Modificaciones en resolucion pantalla pequeña
    if (html.matches) 
    {
        //Remueve las imágenes
        for(let i = 0; i < elementosImg.length; i++)
            elementosImg[i].style.display = 'none';
        //Acomoda los botones horizontalmente
        for(let i = 0; i < panelesBTN.length; i++)
            panelesBTN[i].style.display = 'block';
    }
    //Resolucion pantalla grande
    else 
    {
        //Agrega las imágenes
        for(let i = 0; i < elementosImg.length; i++)
            elementosImg[i].style.display = 'block';
        //Acomoda verticalmente los botones
        for(let i = 0; i < panelesBTN.length; i++)
            panelesBTN[i].style.display = 'flex';
    }
  }
  var html = window.matchMedia("(max-width: 700px)")
  Responsive(html);
  html.addEventListener("change", function() {
    Responsive(html);
  }); 