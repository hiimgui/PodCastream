function mudar_login() {
    var divs = document.getElementsByTagName("div");
    var tcadastro = document.getElementById("tenho_cadastro");

    divs[5].classList.toggle('mudar_login');
    divs[8].classList.toggle('mudar_login');
    divs[9].classList.toggle('mudar_login');
    divs[10].classList.toggle('mudar_login');
    tcadastro.classList.toggle("mudar_login");
    
    document.getElementById('check_cad').checked = true;

    document.querySelector('title').text = "PodCastream | Entrar"
}