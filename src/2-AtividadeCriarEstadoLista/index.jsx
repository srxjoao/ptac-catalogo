// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";
import acessorio1 from "../image/acessorio1.jpg";
import acessorio2 from "../image/acessorio2.jpg";
import acessorio3 from "../image/acessorio3.jpg";
const [listaProdutos,setProdutos] = useState (
    [
        {
            id: 1,
            item: "HambúAlto-falante Bluetooth Divoom Ditoo Pixel Art",
            imagem: {acessorio1},
            preco: "R$ 550,50"
        },
        {
            id: 2,
            item: "Teclado Com Fio Oex Tc401 Pop In Apoio De Punho",
            imagem: {acessorio2},
            preco: "R$ 99,50"
        },
        {
            id: 3,
            item: "Headset Gamer Sem Fio Logitech",
            imagem: {acessorio3},
            preco: "R$ 1.231,88"
        },
    ]
)
