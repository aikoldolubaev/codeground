import random
from wonderwords import RandomWord

SNOWMAN_MIN_WORD_LENGTH = 5
SNOWMAN_MAX_WORD_LENGTH = 8
SNOWMAN_MAX_WRONG_GUESSES = 7

SNOWMAN_GRAPHIC = [
    '*   *   *  ',
    ' *   _ *   ',
    '   _[_]_ * ',
    '  * (")    ',
    '  \\( : )/ *',
    '* (_ : _)  ',
    '-----------'
]

def print_snowman(wrong_guesses_count):
    """Prints the snowman graphic based on wrong guesses."""
    for i in range(SNOWMAN_MAX_WRONG_GUESSES - wrong_guesses_count, SNOWMAN_MAX_WRONG_GUESSES):
        print(SNOWMAN_GRAPHIC[i])
    
def snowman(snowman_word=None):
    """Complete the snowman function
    replace "pass" below with your own code
    It should print 'Congratulations, you win!'
    If the player wins and, 
    'Sorry, you lose! The word was {snowman_word}' if the player loses
    """
    # Generate a random word if snowman_word is not provided
    if snowman_word is None:
        random_word_generator = RandomWord()
        snowman_word = random_word_generator.word(
            word_min_length=SNOWMAN_MIN_WORD_LENGTH, 
            word_max_length=SNOWMAN_MAX_WORD_LENGTH
        ).lower()

    # Initialize the correct_letter_guess_statuses dictionary
    correct_letter_guess_statuses = build_letter_status_dict(snowman_word)
    wrong_guesses_list = []

    # Loop until the player wins or loses
    while len(wrong_guesses_list) < SNOWMAN_MAX_WRONG_GUESSES:
        print("\nWord: " + generate_word_progress_string(snowman_word, correct_letter_guess_statuses))
        print("Wrong guesses:", " ".join(sorted(wrong_guesses_list)))
        # Get a letter from the user
        user_input = get_letter_from_user(correct_letter_guess_statuses, wrong_guesses_list)
        # Check if the user input is in the word
        if user_input in correct_letter_guess_statuses:
            print("You guessed a letter that's in the word!")
            correct_letter_guess_statuses[user_input] = True
        # If the user input is not in the word
        else:
            print(f"The letter {user_input} is not in the word")
            wrong_guesses_list.append(user_input)
        # Print the snowman graphic
        print_snowman(len(wrong_guesses_list))

        # If the player wins
        if is_word_guessed(snowman_word, correct_letter_guess_statuses):
            print("Congratulations, you win!")
            return
    
    # If the player loses
    print(f"\nSorry, you lose! The word was {snowman_word}")


def print_snowman_graphic(wrong_guesses_count):
    """This function prints out the appropriate snowman image 
    depending on the number of wrong guesses the player has made.
    """
    
    for i in range(SNOWMAN_MAX_WRONG_GUESSES - wrong_guesses_count, SNOWMAN_MAX_WRONG_GUESSES):
        print(SNOWMAN_GRAPHIC[i])


def get_letter_from_user(correct_letter_guess_statuses, wrong_guesses_list):
    """This function takes the snowman_word_dict and the list of characters 
    that have been guessed incorrectly (wrong_guesses_list) as input.
    It asks for input from the user of a single character until 
    a valid character is provided and then returns this character.
    """

    valid_input = False
    user_input_string = None

    while not valid_input:
        user_input_string = input("Guess a letter: ")
        if not user_input_string.isalpha():
            print("You must input a letter!")
        elif len(user_input_string) > 1:
            print("You can only input one letter at a time!")
        elif (user_input_string in correct_letter_guess_statuses       
                and correct_letter_guess_statuses[user_input_string]): 
            print("You already guessed that letter and it's in the word!")
        elif user_input_string in wrong_guesses_list:
            print("You already guessed that letter and it's not in the word!")
        else:
            valid_input = True

    return user_input_string
    

def build_letter_status_dict(snowman_word):
    """This function takes snowman_word as input and returns 
    a dictionary with a key-value pair for each letter in 
    snowman_word where the key is the letter and the value is `False`.
    """

    letter_status_dict = {}
    for letter in snowman_word:
        letter_status_dict[letter] = False
    return  letter_status_dict
    

def print_word_progress_string(snowman_word, correct_letter_guess_statuses):
    """
    This function takes the snowman_word and snowman_word_dict as input.
    It calls another function to generate a string representation of the  
    user's progress towards guessing snowman_word and prints this string.
    """

    progress_string = generate_word_progress_string(snowman_word, correct_letter_guess_statuses)
    print(progress_string)


def generate_word_progress_string(snowman_word, correct_letter_guess_statuses):
    """
    This function takes the snowman_word and snowman_word_dict as input.
    It creates and returns an output string that shows the correct letter 
    guess placements as well as the placements for the letters yet to be 
    guessed.
    """

    output_string = ""
    is_not_first_letter = False

    for letter in snowman_word:
        if is_not_first_letter:
            output_string += " "

        if correct_letter_guess_statuses[letter]:
            output_string += letter
        else:
            output_string += "_"

        is_not_first_letter = True

    return output_string


def is_word_guessed(snowman_word, correct_letter_guess_statuses):
    """
    This function takes the snowman_word and snowman_word_dict as input.
    It returns True if all the letters of the word have been guessed, and False otherwise.
    """

    for letter in snowman_word:
        if not correct_letter_guess_statuses[letter]:
            return False
    return True