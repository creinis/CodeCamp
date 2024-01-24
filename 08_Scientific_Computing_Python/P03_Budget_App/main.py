# The Budget App

class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        return False

    def get_balance(self):
        return sum(item["amount"] for item in self.ledger)

    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount):
        return amount <= self.get_balance()

    def __str__(self):
        output = self.name.center(30, "*") + "\n"
        for item in self.ledger:
            output += f"{item['description'][:23].ljust(23)}{item['amount']:>7.2f}\n"
        output += f"Total: {self.get_balance():.2f}"
        return output


def create_spend_chart(categories):
    spent = [sum(item["amount"] for item in cat.ledger if item["amount"] < 0) for cat in categories]
    total = sum(spent)
    spent_percent = [int(s / total * 10) * 10 for s in spent]

    chart = "Percentage spent by category\n"

    for i in range(100, -1, -10):
        chart += str(i).rjust(3) + "| " + "".join(["o  " if j >= i else "   " for j in spent_percent]) + "\n"

    chart += "    " + "-" * (len(categories) * 3 + 1) + "\n"

    names = [cat.name for cat in categories]
    maxlen = max(len(name) for name in names)

    for i in range(maxlen):
        chart += "     " + "".join([name[i] + "  " if i < len(name) else "   " for name in names]) + "\n"

    return chart.rstrip() + "  "

