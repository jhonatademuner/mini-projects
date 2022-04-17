import random

#! Input
user_msg = input("What you want to the program decide for you:\n")

#! Variables Declaration
msg1 = "\nYes, for sure!"
msg2 = "\nNo, you do not!"
msg3 = "\nI think that is a good idea."
msg4 = "\nMaybe you need to think better about that."
msg5 = "\nSorry, i can't opinate things like that."
msg_library = [msg1, msg2, msg3, msg4, msg5]

#! Output
print (random.choice(msg_library))

#! End