using System;
using System.Globalization;

int invoiceNumber = 1201;
decimal productShares = 25.4568m;
decimal subtotal = 2750.00m;
decimal taxPercentage = .15825m;
decimal total = 3185.19m;
string companyName = "Nome da Sua Empresa";
int receiptWidth = 50;

string border = new string('*', receiptWidth);
string emptyLine = "*" + new string(' ', receiptWidth - 2) + "*";

int padding = (receiptWidth - companyName.Length) / 2;
string companyLine = "*" + new string(' ', padding) + companyName + new string(' ', receiptWidth - padding - companyName.Length - 2) + "*";

Console.Clear();
Console.WriteLine(emptyLine);
Console.WriteLine(border);
Console.WriteLine(emptyLine);
Console.WriteLine(companyLine);
Console.WriteLine(emptyLine);
Console.WriteLine($"* Número da Fatura: {invoiceNumber,-28} *");
Console.WriteLine($"* Ações: {productShares.ToString("N3"),-31} Produto *");
Console.WriteLine($"* Subtotal: {subtotal.ToString("C"),-36} *");
Console.WriteLine($"* Imposto: {taxPercentage.ToString("P2"),-37} *");
Console.WriteLine(emptyLine);
Console.WriteLine($"* Total Faturado: {total.ToString("C"),-30} *");
Console.WriteLine(emptyLine);
Console.WriteLine(border);
Console.WriteLine(emptyLine);




