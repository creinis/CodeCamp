/* The feature is intended to improve the renewal rate of subscriptions to the software. 
Your task is to display a renewal message when a user logs into the software system and is 
notified their subscription will soon end. 
You'll need to add a couple of decision statements to properly add branching logic to the 
application to satisfy the requirements. */

Random random = new Random();
int daysUntilExpiration = random.Next(12);

Console.Clear();
if (daysUntilExpiration <= 10) 
{
    if (daysUntilExpiration <= 5) 
    {
        if (daysUntilExpiration == 1) // Corrigido para comparação
        {
            Console.WriteLine("Your subscription expires within a day!");
            Console.WriteLine("Renew now and save 20%!");
        }
        else if (daysUntilExpiration < 1) // Condição adicional para lidar com a expiração
        {
            Console.WriteLine("Your subscription has expired.");
        }
        else
        {
            Console.WriteLine($"Your subscription expires in {daysUntilExpiration} days.");
            Console.WriteLine("Renew now and save 10%!");
        }
    }
    else
    {
        Console.WriteLine("Your subscription will expire soon. Renew now!");
    }
}




