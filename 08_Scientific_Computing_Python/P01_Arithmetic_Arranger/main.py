# arithmetic_arranger

def arithmetic_arranger(problems, show_answers=False):
    # Check the number of problems
    if len(problems) > 5:
        return "Error: Too many problems."

    arranged_problems = ""
    line1 = ""
    line2 = ""
    dashes = ""
    answers = ""

    for problem in problems:
        # Split the problem into operands and operator
        operand1, operator, operand2 = problem.split()

        # Check the operator
        if operator not in ['+', '-']:
            return "Error: Operator must be '+' or '-'."

        # Check if operands are digits
        if not operand1.isdigit() or not operand2.isdigit():
            return "Error: Numbers must only contain digits."

        # Check the length of operands
        if len(operand1) > 4 or len(operand2) > 4:
            return "Error: Numbers cannot be more than four digits."

        # Calculate the width of the row for the current problem
        row_width = max(len(operand1), len(operand2)) + 2

        # Create the formatted rows
        line1 += operand1.rjust(row_width) + "    "
        line2 += operator + operand2.rjust(row_width - 1) + "    "
        dashes += "-" * row_width + "    "

        # Calculate the answer if needed
        if show_answers:
            result = str(eval(problem))
            answers += result.rjust(row_width) + "    "

    # Combine the rows and add a newline
    arranged_problems = "\n" + line1.rstrip() + "\n" + line2.rstrip() + "\n" + dashes.rstrip()

    # Add answers if needed
    if show_answers:
        arranged_problems += "\n" + answers.rstrip() + "\n"

    return arranged_problems

# Example usage:
problems1 = ["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]
print(arithmetic_arranger(problems1))

problems2 = ["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"]
print(arithmetic_arranger(problems2, True))
