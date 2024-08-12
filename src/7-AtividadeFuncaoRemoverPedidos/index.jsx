// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`
// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

import { useState } from "react";
export default function Home(){
  const [listaProdutos, setProdutos] = useState([
    {
      id: 1,
      item: "HambúAlto-falante Bluetooth Divoom Ditoo Pixel Art",
      imagem: "/acessorio1.jpg",
      preco: "R$ 550,50"
  },
  {
      id: 2,
      item: "Teclado Com Fio Oex Tc401 Pop In Apoio De Punho",
      imagem: "/acessorio2.jpg",
      preco: "R$ 99,50"
  },
  {
      id: 3,
      item: "Headset Gamer Sem Fio Logitech",
      imagem:"/acessorio3.jpg",
      preco: "R$ 1.231,88"
  },
  ]);
      const [listaPedidos,setListaPedidos] = useState([]);

      const adicionarItemPedidos = (objeto) => {
        setListaPedidos([...listaPedidos,objeto])
      }

      const RemoverPedido = (id) =>{
        let listaAux = listaPedidos.filter(
            (pedidos,index) =>{
                if(index !== id){
                    return pedidos
                }else{
                    return null; 
                }
            }
        );
        setlistaPedidos(listaAux);
    }

      return(
<div>
         <h1>Itens para o seu Setup</h1>

         {
          listaProdutos.map((produto) =>
            <div key={produto.id}>
          <img src={produto.imagem}/>
          <p key={produto.item} ></p>
          <p key={produto.preco} ></p>
              <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
            </div>
          )
          }

            {
          listaPedidos.map((produto) =>
            <div key={produto.id}>
                <img src={produto.imagem}/>
                <p key={produto.item} ></p>
                <p key={produto.preco} ></p>
            </div>
          )
          }
    </div>
      );
}
