import random

#! Randomizer
choosen_num = random.randint(0, 1000)

#! Initial Input
print("This program is a guess game, you will try to guess wich number the program will choose.\nThe number range is from 0 to 1000")
num = int(input("\nInsert you first try: "))

#! Process + Midgame Output
while num != choosen_num:
    if num > choosen_num:
        print("\nClose one, the right is a bit lower.")
    if num < choosen_num:
        print("\nYou are close, the right number is a bit higher.")
    num = int(input("Lets'go, one more try: "))

#! Final Output
print("~" * 45)
print("| Congratulations, you guess the number !!! |")
print("|         The right number was:", choosen_num, "        |")
print("~" * 45)

#! End
