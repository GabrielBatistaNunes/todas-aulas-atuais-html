# todas-aulas-atuais-html
todas as aulas de html até agora
<!--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabuleiro de Xadrez</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .chessboard {
            display: grid;
            grid-template-columns: repeat(8, 30px); /* Reduzi o tamanho para 30px */
            grid-template-rows: repeat(8, 30px); /* Reduzi o tamanho para 30px */
        }

        .square {
            width: 30px; /* Reduzi o tamanho para 30px */
            height: 30px; /* Reduzi o tamanho para 30px */
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px; /* Reduzi o tamanho da fonte */
        }

        .white {
            background-color: #fff;
            color: #000;
        }

        .black {
            background-color: #000;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="chessboard">
        <!-- Conteúdo do tabuleiro aqui -->
    </div>
</body>
</html>
