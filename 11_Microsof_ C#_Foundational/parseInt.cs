string value = "102";
int result = 0;
if (int.TryParse(value, out result))
{
   Console.WriteLine($"Measurement: {result}");
}
else
{
   Console.WriteLine("Unable to report the measurement.");
}
Console.WriteLine($"Measurement (w/ offset): {50 + result}");

// The int.TryParse() method returns true if it successfully converted the string variable value into an int; 
// otherwise, it returns false. So, surround the statement in an if statement, and then perform the decision logic, accordingly.
