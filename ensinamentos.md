# Projeto

Objetivo desse projeto é realizar a criação de um feed de rede social

# Conteúdos das aulas
## Bundlers & Compilers

Aula 3 - Com o mundo de desenvolvimento evoluindo à todo momento, nem sempre todos os browsers conseguem acompanhar a evolução da tecnologia para dar suporte à sintaxe mais moderna.

Para isso existem os compilers, como o <a href="https://babeljs.io/">Babel</a> que convertem o código moderno para uma sintaxe mais antiga que os browsers reconhecem, e os bundlers como o <a href="https://webpack.js.org/">webpack</a> que faz um bundling de todos os arquivos da nossa aplicação de uma forma que todos os browsers reconheçam.

Nessa aula vamos aprender a diferença entre compilers e bundlers, e também sobre as novas features que já existem nos navegadores mais modernos, que é a feature de ESModules.

Vamos também ter uma introdução ao <a href="https://vitejs.dev/">Vite</a> que irá substituir os bundlers e compilers tradicionais (como babel e webpack) e entender como ele tira proveito das funcionalidades mais modernas dos navegadores para ter uma melhor performance de compilação e execução. O Vite trabalha com fast refresh, ou seja, a atualização é carregada instantâneamente

## Comandos iniciais do projeto

Aula 4 - Para iniciar o projeto iniciaremos um projeto com o Vite. Framework: React. Variante: JavaScript

    npm create vite@latest

Para instalar as depemdências do projeto com Vite

    npm i

Para rodar o projeto na máquina

    npm run dev

## Componentes

Aula 5 - Componentes são pequenas partes do projeto que podem ser criadas separadamente e incorporadas. Duas maneiras de exportar:

* Default Exports:

```jsx
//Componente
function Post(){
    return <p>post</p>
}
export default Post
//pai do componente... pode ser com qualquer nome
import Postcomponente from './Post'
```

* Named Exports:

```jsx
//Componente
export function Post(){
    return <p>post</p>
}
//pai do componente... Tem que ser o nome da função
import { Post } from './Post'
```

## Propriedades

Aula 6 - Passando atributos para componentes

```jsx
//Componente
export function Post(props){
    return <p>{props.content}</p> 
}
//pai do componente...
<Post
    content="coautor"
/>
```

## Importando estilos CSS

Aula 7 CSS Modules - É feito totalmente por meio do javascript

CSS modules - O css é feito em módulos para não afetar outros componentes. Para isso o nome do arquivo css deve ter o formato 
* nomeDoArquivo.modules.css
E para importar
```jsx
import styles from './nomeDoArquivo.module.css';
```


## CSS global

Aula 8 CSS global - É bom ter uma estilização global de cores, fundo tipo de fonte e tamanhos, assim será mais fácil alterar caso seja preciso

## Importando imagens

Aula 9 Componente: Header - a forma de importar imagens é da seguinte forma:
```jsx
import igniteLogo from '../assets/ignitelogo.svg';
//Se usa da seguinte forma:
<img src={igniteLogo} alt="Símbolo do ignite"/>
```

## Biblioteca de icones

Aula 11 Finalizando Sidebar - A biblioteca de imagens é a https://phosphoricons.com/

    nom i phosphor-react

## Escrita de atributos HTML no React

Aula 12 Componente: Post - utilizamos a estilização cameelcase

```jsx
<div className={styles.author}>
```

## Aplicando desestruturação nos atributos de um componente

Aula 16 Componente: Avatar - para aplicar a desestruturação nos atributos de um componente

```jsx
//Antes
export function Avatar(props) {
//Depois
export function Avatar({ hasBorder = true, src }) {
```

## Formatação de horario

Aula 19 Propriedades do post - Formatação de data é feita da seguinte forma

     npm i date-fns


```jsx
//criação
publishedAt: new Date('2023-03-09 20:00:00')
//Para deixar a data no dormato "9 de março às 20:00h"
const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
//Para deixar no formato de "cerca de 10 dias atrás"
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });
```

## Percorrer um objeto

Aula 19 Propriedades do post - Como funciona a iteração de um array

```jsx
//criação do array
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasharosa.png',
      name: 'Lucas Henrique',
      role: 'Aluno @Rocketseat'
    },
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
  }
];

//Uso do array com o map
// No map o primeiro atributo é o elemento 1 do array

{posts.map(post =>{
    return (
        <Post
            key={post.id} 
            author={post.author}
        />
    )
})}
```
## useState

aula 20 - Estado(useState) - Nessa aula vemos como fazer o uso do useState, que avisa que houve uma mudança de variável

```jsx
//criação do useState
const [newCommentText, setNewCommentText] = useState('');

// Função que irá mudar o valor do useState
function handleNewCommentChange() {
    setNewCommentText(event.target.value);
}

//Função onChange irá acionar a função de mudança da variável
<textarea
    name="comment"
    placeholder="Deixe um comentário"
    value={newCommentText}
    onChange={handleNewCommentChange}
/>
```

## Key

aula 21 - Entendendo a key - Nessa aula vemos como fazer o uso da key. Cada map que for dado no react é preciso de uma key para cada elemento renderizado no map. Esse valor deve ser único dentro do map para que ele não renderize todos os os elementos novamente. Não pode ser o ídice do map, pois esse nçao muda de acordo com a ordem dos elementos

```jsx
//criação do useState
{comments.map(comment => {
    return <Comment key={comment} content={comment} />
})}
```

## Comunicação de componentes

Aula 22 - Comunicação entre componentes - É possível comunicar componentes passando variáveis e funções como atributos. Por exemplo:

```jsx
//No arquivo que a função será executada será criada a função
function deleteComment(comment) {
    console.log(`Deletar comentário ${comment}`)
}

//Essa função será pasada ao componente da seguinte forma
<Comment 
    content={comment} 
    onDeleteComment={deleteComment} 
/>
```
No outro arquivo onde a função será chamada temos então a chamada dessa função:
 ```jsx
//No arquivo que a função será chamada será criada a função
function handleDeleteComment() {
    onDeleteComment(content);
}

//A função será acionada por algu acionador de ação
<button onClick={handleDeleteComment} title="Deletar comentário">
    <Trash size={24} />
</button>
```