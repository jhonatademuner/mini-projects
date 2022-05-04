from characters_tg import fisherman, sadfisherman, cat, dog, bird

def main():

    welcome_msg = 'Welcome to my text game.'
    game_introduction_up = '  This game works like a dialogue game, you will need choose your own way,  '

    print(' ' * 26, welcome_msg)
    print('~' * len(game_introduction_up))
    print('  This game works like a dialogue game, you will need choose your own way,\n        and all your chooses will make difference in your adventure.\n',
        ' ' * 23, 'Have fun and enjoy the game.')
    print('~' * len(game_introduction_up))
    print('\n' * 3)

    username = input("Insert your name to start the game: ")

    #! ======================================

    print('\n' * 50)

    fisherman()
    print("\nF I S H E R M A N:", "\nGood morning", username,
        ", you slept for a long time, you can call me FISHERMAN.")

    print('~' * 80)
    print("1 -> Where i am?")
    print("2 -> Wait, how you know me?")
    print("3 -> FISHERMAN? That's is your name?")
    print('~' * 80)

    choose1 = int(input("Choose your option: "))

    #! ======================================

    print("\n" * 50)

    fisherman()
    if choose1 == 1:
        print("\nYou are inside of text_game.py.")
    if choose1 == 2:
        print("\nYou type your name 5 lines ago.")
    if choose1 == 3:
        print("\nYes, that's what are write in my identity.")

    print('~' * 80)
    print("1 -> How i can go back to GitHub?")
    print("2 -> Can you teach me how to fish?")
    print("3 -> Wait, hahaha, you are kidding with me.")
    print('~' * 80)

    choose2 = int(input("Choose your option: "))

    #! ======================================

    print("\n" * 50)

    fisherman()
    if choose2 == 1:
        print("\nYou can realize in your mind: https://github.com/jhonataplt.")
    if choose2 == 2:
        print("\nThis depend how much you will pay me.")
    if choose2 == 3:
        print("\nNo, im serious.")

    print('~' * 80)
    print("1 -> *You don't know what to say.* ...")
    print('~' * 80)

    choose3 = int(input("Choose your option: "))

    #! ======================================

    print("\n" * 50)

    sadfisherman()

    print("Anyway, you want to know my pets?")

    print('~' * 80)
    print("1 -> Yes, for sure.")
    print("2 -> No, i do not.")
    print('~' * 80)

    choose4 = int(input("Choose your option: "))

    #! ======================================

    print('\n' * 50)

    if choose4 == 1:
        fisherman()
        choosen_way = 1
        print("Okay, you have any pet?")
    if choose4 == 2:
        sadfisherman()
        choosen_way = 2
        print("Okay, i will kick you back to GitHub now.")
        exit()

    print("~" * 80)
    print("1 -> Oh, i have a cat.")
    print("2 -> Yep, i am dog team.")
    print("3 -> Cats are cool, but i prefer birds.")
    print("~" * 80)

    choose5 = int(input("Choose your option: "))

    #! ======================================

    print('\n' * 50)

    if choose5 == 1:
        print("Really? I have a cat too.")
        cat()
    if choose5 == 2:
        print("Really? I have a dog too.")
        dog()
    if choose5 == 3:
        print("Really? Ihave a bird too.")
        bird()

    #! ======================================

    print('\n' * 5)
    print("~" * 63)
    print("  Thanks for playing my text_game, the target of this program")
    print("   was to shown the use of the conditionals working together")
    print(" " * 15, "with the user decisions in Python.")
    print("~" * 63)

if __name__ == '__main__':
    main()