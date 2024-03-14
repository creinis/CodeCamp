
CC		= gcc
CFLAGS	= -Wall -Wextra -Werror -I ./include
INCS	= include
NAME	= ft_display_file
SRC		= ./src/ft_display_file.c ./src/input.c ./src/write_string.c
obj		= $(SRC:.c=.o)
dep		= $(obj:.o=.d)

$(NAME): $(obj)
	$(CC) -o $@ $^ $(LDFLAGS)

%.d: %.c
	@$(CPP) $(CFLAGS) $< >$@

.PHONY: clean
clean:
	rm -f $(obj)

.PHONY: cleandep
fclean:	clean
	rm -f $(NAME)

.PHONY: re
re:		fclean all

.PHONY: all
all:	$(NAME)
