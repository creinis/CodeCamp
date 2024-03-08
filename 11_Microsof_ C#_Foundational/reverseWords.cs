Console.WriteLine("Por favor, digite uma frase para ser escrita no reverso:");
string pangram = Console.ReadLine();

// Passo 1
string[] message = pangram.Split(' ');

// Passo 2
string[] newMessage = new string[message.Length];

// Passo 3
for (int i = 0; i < message.Length; i++)
{
    char[] letters = message[i].ToCharArray();
    Array.Reverse(letters);
    newMessage[i] = new string(letters);
}

// Passo 4
string result = String.Join(" ", newMessage);
Console.WriteLine(result);
