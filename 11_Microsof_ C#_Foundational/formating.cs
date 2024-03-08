using System;
using System.Globalization;

Console.Clear();

Console.WriteLine("Por favor, escolha o tipo de moeda que deseja usar:");
Console.WriteLine("1. Euro");
Console.WriteLine("2. Dólar Americano");
Console.WriteLine("3. Dólar Canadense");
Console.WriteLine("4. Yene");
Console.WriteLine("5. Libras");
int choice = Convert.ToInt32(Console.ReadLine());

decimal price = 123.45m;
int discount = 50;

CultureInfo culture;
switch (choice)
{
    case 1:
        culture = new CultureInfo("fr-FR");
        break;
    case 2:
        culture = new CultureInfo("en-US");
        break;
    case 3:
        culture = new CultureInfo("en-CA");
        break;
    case 4:
        culture = new CultureInfo("ja-JP");
        break;
    case 5:
        culture = new CultureInfo("en-GB");
        break;
    default:
        Console.WriteLine("Opção inválida. Usando Euro como padrão.");
        culture = new CultureInfo("fr-FR");
        break;
}

Console.WriteLine($"Preço: {price.ToString("C", culture)} (Economize {discount.ToString("C", culture)})");


// units
decimal measurement = 123456.78912m;
Console.WriteLine($"Measurement: {measurement:N} units");

//percentages
decimal tax = .36785m;
Console.WriteLine($"Tax rate: {tax:P2}");

//combinations
decimal salePrice = 59.99m;

string yourDiscount = String.Format("You saved {0:C2} off the regular {1:C2} price. ", (price - salePrice), price);

Console.WriteLine(yourDiscount);


