# todas-aulas-atuais-html
todas as aulas de html até agora
<!--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xadrez Dinâmico</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: Arial, sans-serif;
        }

        #board-container {
            display: grid;
            grid-template-columns: repeat(8, 50px); /* 8 colunas para um tabuleiro de xadrez padrão */
            gap: 1px; /* Espaço entre os quadrados */
        }

        .square {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .white {
            background-color: white;
        }

        .black {
            background-color: blue;
            color: white;
        }

        input {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <label for="num-squares">Número de Quadrados:</label>
    <input type="number" id="num-squares" placeholder="Digite um número">

    <div id="board-container"></div>

    <script>
        function createChessBoard(numSquares) {
            const boardContainer = document.getElementById('board-container');
            boardContainer.innerHTML = '';

            for (let i = 0; i < numSquares; i++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.textContent = i + 1;

                // Adiciona a classe 'white' ou 'black' para alternar as cores
                square.classList.add(i % 2 === 0 ? 'white' : 'black');

                boardContainer.appendChild(square);
            }
        }

        const inputElement = document.getElementById('num-squares');
        inputElement.addEventListener('input', function () {
            const numSquares = parseInt(inputElement.value);
            createChessBoard(numSquares);
        });
    </script>
</body>
</html>
