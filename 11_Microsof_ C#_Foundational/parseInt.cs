string value = "102";
int result = 0;
Console.Clear();
Console.WriteLine("Ex 01:\n");
if (int.TryParse(value, out result))
{
   Console.WriteLine($"Measurement: {result}");
}
else
{
   Console.WriteLine("Unable to report the measurement.");
}
Console.WriteLine($"Measurement (w/ offset): {50 + result}\n");

// The int.TryParse() method returns true if it successfully converted the string variable value into an int; 
// otherwise, it returns false. So, surround the statement in an if statement, and then perform the decision logic, accordingly.


string[] values = { "12.3", "45", "ABC", "11", "DEF" };

decimal total = 0m;
string message = "";
Console.WriteLine("Ex 02:\n");
foreach (var value in values)
{
    decimal number; // stores the TryParse "out" value
    if (decimal.TryParse(value, out number))
    {
        total += number;
    } else
    {
        message += value;
    }
}

Console.WriteLine($"Message: {message}");
Console.WriteLine($"Total: {total}");

