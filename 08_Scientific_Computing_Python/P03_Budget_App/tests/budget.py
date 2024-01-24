class Category:

  def __init__(self, name):
    self.name = name
    self.ledger = []
    self.balance = 0

  def __str__(self):
    title = self.name.center(30, '*') + '\n'
    items = ''
    total = 0
    for item in self.ledger:
      items += f"{item['description'][0:23]:23}" + f"{item['amount']:>7.2f}" + '\n'
      total += item['amount']
    output = title + items + "Total: " + str(total)
    return output

  # Deposit
  def deposit(self, amount, description=''):
    self.ledger.append({"amount": amount, "description": description})
    self.balance += amount

  # Withdraw
  def withdraw(self, amount, description=''):
    if self.check_funds(amount):
      self.ledger.append({"amount": -amount, "description": description})
      self.balance -= amount
      return True
    else:
      return False

  # Get Balance
  def get_balance(self):
    return self.balance

  # Transfer
  def transfer(self, amount, category):
    if self.check_funds(amount):
      self.withdraw(amount, "Transfer to " + category.name)
      category.deposit(amount, "Transfer from " + self.name)
      return True
    return False

  # Check Funds
  def check_funds(self, amount):
    return amount <= self.balance


def create_spend_chart(categories):
  # Calculate total withdrawals
  total_withdrawals = 0
  withdrawals = []
  for category in categories:
    withdrawal = 0
    for item in category.ledger:
      if item['amount'] < 0:
        withdrawal += abs(item['amount'])
    withdrawals.append(withdrawal)
    total_withdrawals += withdrawal

  # Calculate percentages
  percentages = []
  for withdrawal in withdrawals:
    percentage = (withdrawal / total_withdrawals) * 100
    percentages.append(percentage)

  # Create chart
  chart = "Percentage spent by category\n"
  for i in range(100, -1, -10):
    chart += str(i).rjust(3) + "| "
    for percentage in percentages:
      if percentage >= i:
        chart += "o  "
      else:
        chart += "   "
    chart += "\n"
  chart += "    " + "-" * (len(categories) * 3 + 1) + "\n"

  # Add category names
  max_length = max(len(category.name) for category in categories)
  for i in range(max_length):
    chart += "     "
    for category in categories:
      if i < len(category.name):
        chart += category.name[i] + "  "
      else:
        chart += "   "
    if i < max_length - 1:
      chart += "\n"
  return chart
