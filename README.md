# todas-aulas-atuais-html
todas as aulas de html até agora
<!--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        composicao {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            color: aqua;
            background-color: rgb(226, 43, 43);
            padding: 0.6%;
        }
        quadradop {
            width: 100px;
            height: 100px;
            background-color: rgb(0, 0, 0);
        }
        quadradob {
            width: 100px;
            height: 100px;
            background-color: rgb(255, 255, 255);
        }
    </style>
</head>
<body>
    <composicao>
        <script>
            function tabuleiro(quadrados) {
                const composicao = document.querySelector('composicao');
                composicao.innerHTML = '';

                for (let i = 0; i < quadrados; i++) {
                    const quadrado = document.createElement(i % 2 === 0 ? 'quadradop' : 'quadradob');
                    composicao.appendChild(quadrado);
                }
            }

            // Chamando a função com 25 quadrados como exemplo
            tabuleiro(25);
        </script>
    </composicao>
</body>
</html>
