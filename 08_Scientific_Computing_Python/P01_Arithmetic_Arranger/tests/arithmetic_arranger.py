def arithmetic_arranger(problems, show_answers=False):
  # error max number of problems is 5
  if len(problems) > 5:
    return "Error: Too many problems."

  # visual formatation
  arranged_problems = ""
  line1 = ""
  line2 = ""
  dashes = ""
  answer = ""

  for problem in problems:
    # split problem into operands and operator - ok
    operand1, operator, operand2 = problem.split()

    # error: check operators - ok
    if operator not in ['+', '-']:
      return "Error: Operator must be '+' or '-'."

    # error: check operands are digits - ok
    if not operand1.isdigit() or not operand2.isdigit():
      return "Error: Numbers must only contain digits."

    # error: check operand length - ok
    if len(operand1) > 4 or len(operand2) > 4:
      return "Error: Numbers cannot be more than four digits."

    # calculate the width of the current problem
    row_width = max(len(operand1), len(operand2)) + 2

    # create the formated rows
    line1 += operand1.rjust(row_width) + "    "
    line2 += operator + operand2.rjust(row_width - 1) + "    "
    dashes += "-" * row_width + "    "

    # calculate answer
    if show_answers:
      result = str(eval(problem))
      answer += result.rjust(row_width) + "    "

  # combine rows
  arranged_problems = line1.rstrip() + "\n" + line2.rstrip(
  ) + "\n" + dashes.rstrip()

  # add answer if asked
  if show_answers:
    arranged_problems += "\n" + answer.rstrip()

  return arranged_problems
