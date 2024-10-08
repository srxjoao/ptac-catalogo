    // Crie o estado `listaPedidos`.
    // Dentro do componente, crie a função `adicionarItemPedidos`.
    // A função recebe um parâmetro, que pode ser nomeado como `objeto`.
    // Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
    // Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

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
          </div>
            )
            }
        </div>
        );
        
    }
