Console.Clear();
Console.WriteLine("Data types:\n");
Console.WriteLine("Signed integral types:");

Console.WriteLine($"sbyte  : \t\t{sbyte.MinValue} to {sbyte.MaxValue}");
Console.WriteLine($"short  : \t\t{short.MinValue} to {short.MaxValue}");
Console.WriteLine($"int    : \t\t{int.MinValue} to {int.MaxValue}");
Console.WriteLine($"long   : \t\t{long.MinValue} to {long.MaxValue}\n");

Console.WriteLine("Unsigned integral types:");

Console.WriteLine($"byte   : \t\t{byte.MinValue} to {byte.MaxValue}");
Console.WriteLine($"ushort : \t\t{ushort.MinValue} to {ushort.MaxValue}");
Console.WriteLine($"uint   : \t\t{uint.MinValue} to {uint.MaxValue}");
Console.WriteLine($"ulong  : \t\t{ulong.MinValue} to {ulong.MaxValue}\n");

Console.WriteLine("Floating point types:");
Console.WriteLine($"float  : \t\t{float.MinValue} to {float.MaxValue} ");
Console.WriteLine("\t\t\twith ~6-9 digits of precision\n");
Console.WriteLine($"double : \t\t{double.MinValue} to {double.MaxValue}");
Console.WriteLine("\t\t\twith ~15-17 digits of precision\n");
Console.WriteLine($"decimal: \t\t{decimal.MinValue} to {decimal.MaxValue}");
Console.WriteLine("\t\t\twith 28-29 digits of precision\n");
