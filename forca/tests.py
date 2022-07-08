palavraChave = 'lampada'
palavraDescoberta = 'lap'
erroParcial = int(0)
output = str('')

letra = input()

for i in range(len(palavraChave)):
    for j in range (len(palavraDescoberta)):
        if palavraDescoberta[j] != palavraChave[i]:
            erroParcial += 1
    if erroParcial == len(palavraDescoberta):
        output += '_'
    else:
        output += letra

print(output)