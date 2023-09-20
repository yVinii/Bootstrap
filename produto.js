const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const conteudo = document.getElementById('conteudo');

// Adicione os ouvintes de evento de clique aos links
link1.addEventListener('click', () => {
    conteudo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/P2aiu8Dj5MQ?si=bXLBCI2QNXez1aIS" frameborder="0" allowfullscreen></iframe>';
    link2.classList.remove('active');
    link3.classList.remove('active');
    link1.classList.add('active');
});

link2.addEventListener('click', () => {
    conteudo.innerHTML = '<div class="container-fluid"><div class=row><div class=col-md-4><img src="images/carrinho1.jpg" class="img-fluid" style="height: 220px"></div><div class=col-md-4><img src="images/carrinho2.jpg" class="img-fluid" style="height: 220px"></div><div class=col-md-4><img src="images/carrinho4.jpg" class="img-fluid" style="height: 220px"></div></div></div>';
    link2.classList.add('active');
    link3.classList.remove('active');
    link1.classList.remove('active');
});

link3.addEventListener('click', () => {
    conteudo.innerHTML = '<p><font style="color:white">Enzo Felipe<font></p><p><font style="color:white">Muito bom, adoro a pista tubarão minha favorita<font></p>';
    link2.classList.remove('active');
    link3.classList.add('active');
    link1.classList.remove('active');
});