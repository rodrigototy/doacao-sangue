function createHeader() {
    const header = document.createElement('header');

    const aTitle = document.createElement('a');
    aTitle.setAttribute('href', './index.html');
    aTitle.setAttribute('id', 'titulo-cabecalho');
    aTitle.textContent = '💔 Fundação Doe Sangue';

    const nav = document.createElement('nav');
    nav.setAttribute('class', 'menu');

    const aServico = document.createElement('a');
    aServico.setAttribute('href', './servico.html');
    aServico.setAttribute('class', 'item-menu');
    aServico.textContent = 'Serviços';

    const aContato = document.createElement('a');
    aContato.setAttribute('href', './contato.html');
    aContato.setAttribute('class', 'item-menu');
    aContato.textContent = 'Contato';

    const aInformacoes = document.createElement('a');
    aInformacoes.setAttribute('href', './informacoes.html');
    aInformacoes.setAttribute('class', 'item-menu');
    aInformacoes.textContent = 'Informações';

    const aProtecaoDados = document.createElement('a');
    aProtecaoDados.setAttribute('href', './protecao_dados.html');
    aProtecaoDados.setAttribute('class', 'item-menu');
    aProtecaoDados.textContent = 'Proteção de Dados';

    const aLogin = document.createElement('a');
    aLogin.setAttribute('href', './login.html');
    aLogin.setAttribute('class', 'item-menu');
    aLogin.textContent = 'Entrar';

    const aRegister = document.createElement('a');
    aRegister.setAttribute('href', './cadastro.html');
    aRegister.setAttribute('class', 'item-menu');
    aRegister.textContent = 'Cadastre-se';

    nav.appendChild(aServico);
    nav.appendChild(aContato);
    nav.appendChild(aInformacoes);
    nav.appendChild(aProtecaoDados);

    nav.appendChild(aLogin);
    nav.appendChild(aRegister);

    header.appendChild(aTitle);
    header.appendChild(nav);

    document.body.insertBefore(header, document.body.firstChild);

}

function createFooter() {
    const footer = document.createElement('footer');

    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'heart-rodape');
    h1.textContent = '💔';

    const p = document.createElement('p');
    p.setAttribute('id', 'texto-rodape');
    p.textContent = 'Fundação Doe Sangue';

    footer.appendChild(h1);
    footer.appendChild(p);

    document.body.appendChild(footer);
}

createHeader();
createFooter();