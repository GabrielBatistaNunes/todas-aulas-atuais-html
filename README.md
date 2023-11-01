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
            grid-template-columns: repeat(8, 50px);
            grid-template-rows: repeat(8, 50px);
        }

        .square {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .white {
            background-color: #f0d9b5;
            color: #654321;
        }

        .black {
            background-color: #b58863;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="chessboard">
        <!-- Criando as 64 casas do tabuleiro -->
        <!-- Alternância entre classes 'white' e 'black' para as cores -->
        <!-- As casas escuras começam com a classe 'black' -->
        <!-- Você pode adicionar peças de xadrez ou outros elementos dentro das casas se desejar -->
        <!-- Neste exemplo, as casas exibem apenas os números de 1 a 64 -->
        <!-- Poderia ser substituído por peças de xadrez ou outros elementos conforme necessário -->
        <!-- Lembre-se de que isso é apenas a estrutura básica do tabuleiro. Personalize conforme sua necessidade -->
        <div class="square white">1</div>
        <div class="square black">2</div>
        <div class="square white">3</div>
        <div class="square black">4</div>
        <div class="square white">5</div>
        <div class="square black">6</div>
        <div class="square white">7</div>
        <div class="square black">8</div>
        
        <div class="square black">9</div>
        <div class="square white">10</div>
        <div class="square black">11</div>
        <div class="square white">12</div>
        <div class="square black">13</div>
        <div class="square white">14</div>
        <div class="square black">15</div>
        <div class="square white">16</div>

        <!-- Repita o padrão para as próximas linhas -->
        <!-- Lembre-se de que essa estrutura básica pode ser adaptada para suas necessidades específicas -->
    </div>
</body>
</html>
