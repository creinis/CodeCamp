Random dice = new Random();
int roll1 = dice.Next();
int roll2 = dice.Next(101);
int roll3 = dice.Next(50, 101);

Console.Clear();
Console.WriteLine($"First roll: {roll1}");
Console.WriteLine($"Second roll: {roll2}");
Console.WriteLine($"Third roll: {roll3}");

Random dice2 = new Random();

// if statement exemple
int roll4 = dice2.Next(1, 7);
int roll5 = dice2.Next(1, 7);
int roll6 = dice2.Next(1, 7);

int total = roll4 + roll5 + roll6;

if (total > 14)
{
    Console.WriteLine("You win!");
}

if (total < 15)
{
    Console.WriteLine("Sorry, you lose.");
}
if ((roll4 == roll5) || (roll5 == roll6) || (roll4 == roll6))
{
    Console.WriteLine("You rolled doubles! +2 bonus to total!");
    total += 2;
}
Console.WriteLine($"Dice roll: {roll4} + {roll5} + {roll6} = {total}");

// boolean exemple
string message = "The quick brown fox jumps over the lazy dog.";
bool result = message.Contains("dog");
Console.WriteLine(result);

if (message.Contains("fox"))
{
    Console.WriteLine("What does the fox say?");
}