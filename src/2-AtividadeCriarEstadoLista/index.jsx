// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

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

    return (
        <div>
            <h1>Jottape's Tech Hub | Itens para o seu Setup</h1>
        </div>
    );
}
