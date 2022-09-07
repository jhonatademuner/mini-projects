# Versão diretamente interativa do "ex_25_1" - Robo Colecionador (Maratona de programacao 2009)

# Instrucoes:
# Objetivo: Pegar todas as figurinhas da copa, para finalizar a arena deve se inserir qualquer comando diferente dos citados abaixo:
# "D" -> girar o robo 90 graus para a direita
# "E" -> girar o robo 90 graus para a esquerda
# "F" -> andar para frente
# "." -> celula normal;
# "*" -> celula que contem uma figurinha da Copa;
# "#" -> celula que contem uma pilastra;

import msvcrt
import os

def clear():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')

def imprimirArena(arena):
    clear()
    print("||", "===" * len(arena), "||")
    for linha in arena:
        print("||", end="  ")
        for elemento in linha:
            print(elemento, end="  ")
        print("||")
    print("||", "===" * len(arena), "||")

def ocorrencias(lista, elementoDesejado):
    ocorrencia = 0
    for elemento in lista:
        if elemento == elementoDesejado:
            ocorrencia += 1
    return ocorrencia

def roboColecionador(arena):
    orientacao = ["^",">","v","<"]
    figurinhasTotais = 0
    figurinhasRestantes = 0
    contadorMovimentos = 0
    key = 0

    print("Arena a ser usada: ")
    imprimirArena(arena)

    #% Posicao Inicial da Peca
    for linha in arena: 
        for coluna in linha:
            if (coluna != ".") and (coluna != "*") and (coluna != "#"):
                posicaoY = arena.index(linha)
                posicaoX = linha.index(coluna)

    #% Figurinhas Totais na Arena
    for linha in arena:
        figurinhasTotais += ocorrencias(linha, "*")

    #% Entrada dos Comandos do Usuario
    while key != b'\x1b':
        key = msvcrt.getch()

        #% Validacao/Movimentacao da Peca
        if key == b'H':
            contadorMovimentos += 1
            if posicaoY - 1 in range(len(arena)) and posicaoX in range(len(arena)):
                if arena[posicaoY - 1][posicaoX] != "#":
                    arena[posicaoY][posicaoX], arena[posicaoY - 1][posicaoX] = ".", orientacao[0]
                    posicaoY -= 1
        elif key == b'M':
            contadorMovimentos += 1
            if posicaoY in range(len(arena)) and posicaoX + 1 in range(len(arena)):
                if arena[posicaoY][posicaoX + 1] != "#":
                    arena[posicaoY][posicaoX], arena[posicaoY][posicaoX + 1] = ".", orientacao[1]
                    posicaoX += 1
        elif key == b'P':
            contadorMovimentos += 1
            if posicaoY + 1 in range(len(arena)) and posicaoX in range(len(arena)):
                if arena[posicaoY + 1][posicaoX] != "#":
                    arena[posicaoY][posicaoX], arena[posicaoY + 1][posicaoX] = ".", orientacao[2]
                    posicaoY += 1
        elif key == b'K':
            contadorMovimentos += 1
            if posicaoY in range(len(arena)) and posicaoX - 1 in range(len(arena)):
                if arena[posicaoY][posicaoX - 1] != "#":
                    arena[posicaoY][posicaoX], arena[posicaoY][posicaoX - 1] = ".", orientacao[3]
                    posicaoX -= 1

        imprimirArena(arena)
    
    #% Figurinhas Restantes na Arena
    for linha in arena:
        figurinhasRestantes += ocorrencias(linha, "*")

    figurinhasColetadas = figurinhasTotais - figurinhasRestantes
    print(f'\nFigurinhas coletadas = {figurinhasColetadas}')
    print(f'Movimentos usados = {contadorMovimentos}')


# Algumas arenas para teste:

# arena1 = [["*","*","*"],["*","v","*"],["*","*","*"]]
# roboColecionador(arena1)

# arena2 = [[".",".",".","#"],["*","#","<","."],["*",".","*","."],["*",".","#","."]]
# roboColecionador(arena2)

arena3 = [[".",".",".",".","*",".",".",".",".","."],[".",".",".",".",".",".",".","*",".","."],[".",".",".",".",".","*",".",".",".","."],[".",".","*",".","#",".",".",".",".","."],[".",".",".","#","^",".","*",".",".","*"],[".",".",".","*",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."]]
roboColecionador(arena3)