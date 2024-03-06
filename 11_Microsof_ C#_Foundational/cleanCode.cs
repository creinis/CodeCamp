/*
   This code reverses a message, counts the number of times 
   a particular character appears, then prints the results
   to the console window.
 */

   string originalMessage = "The quick brown fox jumps over the lazy dog.";

   char[] message = originalMessage.ToCharArray();
   Array.Reverse(message);
   
   int letterCount = 0;
   
   foreach (char letter in message)
   {
       if (letter == 'o')
       {
           letterCount++;
       }
   }
   
   string newMessage = new String(message);
   
   Console.WriteLine(newMessage);
   Console.WriteLine($"'o' appears {letterCount} times.");