import copy
import random

class Hat:
    def __init__(self, **kwargs):
        self.contents = [k for k, v in kwargs.items() for _ in range(v)]

    def draw(self, num):
        balls = []

        for _ in range(num):
            try:
                ball = random.choice(self.contents)
                self.contents.remove(ball)
                balls.append(ball)
            except IndexError:
                break

        return balls

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    count = 0

    for _ in range(num_experiments):
        hat_copy = copy.deepcopy(hat)
        balls_drawn = hat_copy.draw(num_balls_drawn)

        if all(balls_drawn.count(ball) >= num for ball, num in expected_balls.items()):
            count += 1

    return count / num_experiments
