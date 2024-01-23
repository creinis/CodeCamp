# Time Calculator Project

def add_time(start, duration, day_of_week=None):
    # Convert start time to minutes
    start_hour, start_minute = map(int, start[:-3].split(":"))
    if start[-2:] == "PM":
        start_hour += 12
    start_minutes = start_hour * 60 + start_minute

    # Convert duration to minutes
    duration_hour, duration_minute = map(int, duration.split(":"))
    duration_minutes = duration_hour * 60 + duration_minute

    # Calculate end time in minutes and convert back to hours and minutes
    end_minutes = start_minutes + duration_minutes
    end_hour, end_minute = divmod(end_minutes, 60)
    end_hour %= 24

    # Determine AM or PM
    end_am_pm = "AM" if end_hour < 12 else "PM"
    if end_hour > 12:
        end_hour -= 12
    elif end_hour == 0:
        end_hour = 12

    # Calculate the number of days later
    days_later = end_minutes // (24 * 60)
    days_later_str = ""
    if days_later == 1:
        days_later_str = " (next day)"
    elif days_later > 1:
        days_later_str = " ({} days later)".format(days_later)

    # If day of week is given, calculate the end day of week
    if day_of_week is not None:
        days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        day_of_week_index = days_of_week.index(day_of_week.title())
        end_day_of_week_index = (day_of_week_index + days_later) % 7
        end_day_of_week = days_of_week[end_day_of_week_index]
        return "{}:{:02d} {}, {}{}".format(end_hour, end_minute, end_am_pm, end_day_of_week, days_later_str)
    else:
        return "{}:{:02d} {}{}".format(end_hour, end_minute, end_am_pm, days_later_str)


# Examples
print(add_time("3:00 PM", "3:10"))
print(add_time("11:30 AM", "2:32", "Monday"))
print(add_time("11:43 AM", "00:20"))
print(add_time("10:10 PM", "3:30"))
print(add_time("11:43 PM", "24:20", "tueSday"))
print(add_time("6:30 PM", "205:12"))

print(add_time("11:06 PM", "2:02"))
print(add_time("11:59 PM", "24:05"))
print(add_time("2:59 AM", "24:00"))
print(add_time("8:16 PM", "466:02"))