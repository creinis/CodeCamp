--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE worldcup;
--
-- Name: worldcup; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE worldcup WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE worldcup OWNER TO freecodecamp;

\connect worldcup

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    round character varying(100) NOT NULL,
    year integer NOT NULL,
    winner_goals integer NOT NULL,
    opponent_goals integer NOT NULL,
    winner_id integer NOT NULL,
    opponent_id integer NOT NULL
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: games_opponet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_opponet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_opponet_id_seq OWNER TO freecodecamp;

--
-- Name: games_opponet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_opponet_id_seq OWNED BY public.games.opponent_id;


--
-- Name: games_winner_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_winner_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_winner_id_seq OWNER TO freecodecamp;

--
-- Name: games_winner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_winner_id_seq OWNED BY public.games.winner_id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.teams (
    team_id integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.teams OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.teams_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_team_id_seq OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.teams_team_id_seq OWNED BY public.teams.team_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: games winner_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN winner_id SET DEFAULT nextval('public.games_winner_id_seq'::regclass);


--
-- Name: games opponent_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN opponent_id SET DEFAULT nextval('public.games_opponet_id_seq'::regclass);


--
-- Name: teams team_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams ALTER COLUMN team_id SET DEFAULT nextval('public.teams_team_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (129, 'Final', 2018, 4, 2, 415, 416);
INSERT INTO public.games VALUES (130, 'Third Place', 2018, 2, 0, 417, 418);
INSERT INTO public.games VALUES (131, 'Semi-Final', 2018, 2, 1, 416, 418);
INSERT INTO public.games VALUES (132, 'Semi-Final', 2018, 1, 0, 415, 417);
INSERT INTO public.games VALUES (133, 'Quarter-Final', 2018, 3, 2, 416, 419);
INSERT INTO public.games VALUES (134, 'Quarter-Final', 2018, 2, 0, 418, 420);
INSERT INTO public.games VALUES (135, 'Quarter-Final', 2018, 2, 1, 417, 421);
INSERT INTO public.games VALUES (136, 'Quarter-Final', 2018, 2, 0, 415, 422);
INSERT INTO public.games VALUES (137, 'Eighth-Final', 2018, 2, 1, 418, 423);
INSERT INTO public.games VALUES (138, 'Eighth-Final', 2018, 1, 0, 420, 424);
INSERT INTO public.games VALUES (139, 'Eighth-Final', 2018, 3, 2, 417, 425);
INSERT INTO public.games VALUES (140, 'Eighth-Final', 2018, 2, 0, 421, 426);
INSERT INTO public.games VALUES (141, 'Eighth-Final', 2018, 2, 1, 416, 427);
INSERT INTO public.games VALUES (142, 'Eighth-Final', 2018, 2, 1, 419, 428);
INSERT INTO public.games VALUES (143, 'Eighth-Final', 2018, 2, 1, 422, 429);
INSERT INTO public.games VALUES (144, 'Eighth-Final', 2018, 4, 3, 415, 430);
INSERT INTO public.games VALUES (145, 'Final', 2014, 1, 0, 431, 430);
INSERT INTO public.games VALUES (146, 'Third Place', 2014, 3, 0, 432, 421);
INSERT INTO public.games VALUES (147, 'Semi-Final', 2014, 1, 0, 430, 432);
INSERT INTO public.games VALUES (148, 'Semi-Final', 2014, 7, 1, 431, 421);
INSERT INTO public.games VALUES (149, 'Quarter-Final', 2014, 1, 0, 432, 433);
INSERT INTO public.games VALUES (150, 'Quarter-Final', 2014, 1, 0, 430, 417);
INSERT INTO public.games VALUES (151, 'Quarter-Final', 2014, 2, 1, 421, 423);
INSERT INTO public.games VALUES (152, 'Quarter-Final', 2014, 1, 0, 431, 415);
INSERT INTO public.games VALUES (153, 'Eighth-Final', 2014, 2, 1, 421, 434);
INSERT INTO public.games VALUES (154, 'Eighth-Final', 2014, 2, 0, 423, 422);
INSERT INTO public.games VALUES (155, 'Eighth-Final', 2014, 2, 0, 415, 435);
INSERT INTO public.games VALUES (156, 'Eighth-Final', 2014, 2, 1, 431, 436);
INSERT INTO public.games VALUES (157, 'Eighth-Final', 2014, 2, 1, 432, 426);
INSERT INTO public.games VALUES (158, 'Eighth-Final', 2014, 2, 1, 433, 437);
INSERT INTO public.games VALUES (159, 'Eighth-Final', 2014, 1, 0, 430, 424);
INSERT INTO public.games VALUES (160, 'Eighth-Final', 2014, 2, 1, 417, 438);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.teams VALUES (415, 'France');
INSERT INTO public.teams VALUES (416, 'Croatia');
INSERT INTO public.teams VALUES (417, 'Belgium');
INSERT INTO public.teams VALUES (418, 'England');
INSERT INTO public.teams VALUES (419, 'Russia');
INSERT INTO public.teams VALUES (420, 'Sweden');
INSERT INTO public.teams VALUES (421, 'Brazil');
INSERT INTO public.teams VALUES (422, 'Uruguay');
INSERT INTO public.teams VALUES (423, 'Colombia');
INSERT INTO public.teams VALUES (424, 'Switzerland');
INSERT INTO public.teams VALUES (425, 'Japan');
INSERT INTO public.teams VALUES (426, 'Mexico');
INSERT INTO public.teams VALUES (427, 'Denmark');
INSERT INTO public.teams VALUES (428, 'Spain');
INSERT INTO public.teams VALUES (429, 'Portugal');
INSERT INTO public.teams VALUES (430, 'Argentina');
INSERT INTO public.teams VALUES (431, 'Germany');
INSERT INTO public.teams VALUES (432, 'Netherlands');
INSERT INTO public.teams VALUES (433, 'Costa Rica');
INSERT INTO public.teams VALUES (434, 'Chile');
INSERT INTO public.teams VALUES (435, 'Nigeria');
INSERT INTO public.teams VALUES (436, 'Algeria');
INSERT INTO public.teams VALUES (437, 'Greece');
INSERT INTO public.teams VALUES (438, 'United States');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 160, true);


--
-- Name: games_opponet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_opponet_id_seq', 32, true);


--
-- Name: games_winner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_winner_id_seq', 32, true);


--
-- Name: teams_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.teams_team_id_seq', 438, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: teams teams_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_name_key UNIQUE (name);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (team_id);


--
-- Name: games games_opponet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_opponet_id_fkey FOREIGN KEY (opponent_id) REFERENCES public.teams(team_id);


--
-- Name: games games_winner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_winner_id_fkey FOREIGN KEY (winner_id) REFERENCES public.teams(team_id);


--
-- PostgreSQL database dump complete
--

