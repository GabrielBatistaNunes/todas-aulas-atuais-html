
const listagemPosts = document.querySelector('#listagemDePosts');

const dadosDosPosts = [{
    titulo: 'comecando o blog:',
    resumo: 'um blog dizendo que está começando o blog',
    urlImagem: 'img/img1.png',
    link:'http://127.0.0.1:3000/posts/20230315-comecando-o-blog.html',
    data:'14/03/2023'
}, 
{
    titulo: 'projeto do blog:',
    resumo: 'Um blog sobre um projeto de blog',
    urlImagem: 'img/img1.png',
    link:'http://127.0.0.1:3000/posts/20230315-projeto-do-blog.html',
    data:'15/03/2023'
}, 
{
    titulo: '3º post',
    resumo: 'resumo vai aqui...',
    urlImagem: 'img/img1.png',
    link:'',
    data:'data aqui'
}];

let numPosts = dadosDosPosts.length;

for(i=0; i<numPosts; i++){   

const dadosDoPost = dadosDosPosts[i];

const itemLista = document.createElement('article');
itemLista.id = 'layoutCard';
itemLista.innerHTML = `
<header><li>${dadosDoPost.titulo}</li></header>

<p>
<a href='${dadosDoPost.link}'>página do blog</a>
</p>

<img src='${dadosDoPost.urlImagem}' width=250px>
<main>${dadosDoPost.resumo}</main>
${dadosDoPost.data}
`;
listagemPosts.appendChild(itemLista);
}