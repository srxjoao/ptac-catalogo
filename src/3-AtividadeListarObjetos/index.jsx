    // Crie um elemento `<div>`.
    // Utilize o método `map` para listar cada objeto da `listaProdutos`
    // dentro desse `<div>`.
    import { useState } from "react";
    export default function Home() {
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

      return (
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