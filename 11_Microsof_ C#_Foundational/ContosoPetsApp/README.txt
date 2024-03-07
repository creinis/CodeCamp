Project overview

You're working on the Contoso Pets application, an application that helps place pets in new homes. The specifications for your application are:

    Create a C# console application.

    Store application data in a multidimensional string array named ourAnimals.

    The ourAnimals array includes the following "pet characteristics" for each animal:
        Pet ID #.
        Pet species (cat or dog).
        Pet age (years).
        A description of the pet's physical condition/characteristics.
        A description of the pet's personality.
        The pet's nickname.

    Implement a sample dataset that represents dogs and cats currently in your care.

    Display menu options to access the main features of the application.

    The main features enable the following tasks:

        List the pet information for all animals in the ourAnimals array.

        Add new animals to the ourAnimals array. The following conditions apply:
            The pet species (dog or cat) must be entered when a new animal is added to the ourAnimals array.
            A pet ID must be programmatically generated when a new animal is added to the ourAnimals array.
            Some physical characteristics for a pet may be unknown until a veterinarian's examination. For example: age, breed, and neutered/spayed status.
            An animal's nickname and personality may be unknown when a pet first arrives.

        Ensure animal ages and physical descriptions are complete. This may be required after a veterinarian's examination.

        Ensure animal nicknames and personality descriptions are complete (this action can occur after the team gets to know a pet).

        Edit an animal’s age (if a pet's birth date is known and the pet has a birthday while in our care).

        Edit an animal’s personality description (a pet may behave differently after spending more time in our care).

        Display all cats that meet user specified physical characteristics.

        Display all dogs that meet user specified physical characteristics.

An initial version of the application has already been completed. The Starter code project for this Guided project module includes a Program.cs file that provides the following code features:

    The code declares variables used to collect and process pet data and menu item selections.

    The code declares the ourAnimals array.

    The code uses a for loop around an if-elseif-else construct to populate the ourAnimals array with a sample dataset.

    The code displays the following main menu options for user selection:
        List all of our current pet information.
        Assign values to the ourAnimals array fields.
        Ensure animal ages and physical descriptions are complete.
        Ensure animal nicknames and personality descriptions are complete.
        Edit an animal’s age.
        Edit an animal’s personality description.
        Display all cats with a specified characteristic.
        Display all dogs with a specified characteristic.

    Enter menu item selection or type "Exit" to exit the program

    The code reads the user's menu item selection and displays a message echoing their selection.

Your goal is to develop the features that implement the first two menu options. To achieve this goal, you'll complete the following tasks:

    Update the code that's used to create the sample data for the app.
    Construct a loop around the main menu and create a selection statement that establishes a code branch for each menu option.
    Write the code to display all ourAnimals array data (menu option 1).
    Build a loop for entering new ourAnimals array data (menu option 2 - part 1).
    Write code to read and save new ourAnimals array data (menu option 2 - part 2).

You'll test your application at each stage of the development process.

