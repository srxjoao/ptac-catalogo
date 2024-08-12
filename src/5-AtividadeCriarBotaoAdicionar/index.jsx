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

    </div>
      );
}
