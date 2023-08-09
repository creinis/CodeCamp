
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

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

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
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(40),
    description integer,
    age numeric(100,0),
    type integer,
    has_life boolean,
    data_01 integer NOT NULL,
    data_02 text,
    data_04 boolean,
    data integer
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(40),
    description integer,
    age numeric(100,0),
    type integer,
    has_life boolean,
    data_01 integer NOT NULL,
    data_02 text,
    data_04 boolean,
    planet_id integer NOT NULL,
    data integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(40),
    description integer,
    age numeric(100,0),
    type integer,
    has_life boolean,
    data_01 integer NOT NULL,
    data_02 text,
    data_04 boolean,
    star_id integer NOT NULL,
    data integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: solar_system; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.solar_system (
    solar_system_id integer NOT NULL,
    name character varying(40),
    description integer,
    age numeric(100,0),
    type integer,
    has_life boolean,
    data_01 integer NOT NULL,
    data_02 text,
    data_04 boolean,
    data integer
);


ALTER TABLE public.solar_system OWNER TO freecodecamp;

--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(40),
    description integer,
    age numeric(100,0),
    type integer,
    has_life boolean,
    data_01 integer NOT NULL,
    data_02 text,
    data_04 boolean,
    galaxy_id integer NOT NULL,
    data integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (2, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (3, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (4, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (5, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (6, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (7, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (8, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (9, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (10, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (11, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (12, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (13, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (14, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (15, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (16, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (17, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (18, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (19, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.galaxy VALUES (20, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 1, NULL);
INSERT INTO public.moon VALUES (2, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 2, NULL);
INSERT INTO public.moon VALUES (3, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 3, NULL);
INSERT INTO public.moon VALUES (4, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 4, NULL);
INSERT INTO public.moon VALUES (5, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 5, NULL);
INSERT INTO public.moon VALUES (6, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 6, NULL);
INSERT INTO public.moon VALUES (7, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 7, NULL);
INSERT INTO public.moon VALUES (8, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 8, NULL);
INSERT INTO public.moon VALUES (9, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 9, NULL);
INSERT INTO public.moon VALUES (10, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 10, NULL);
INSERT INTO public.moon VALUES (11, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 11, NULL);
INSERT INTO public.moon VALUES (12, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 12, NULL);
INSERT INTO public.moon VALUES (13, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 13, NULL);
INSERT INTO public.moon VALUES (14, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 14, NULL);
INSERT INTO public.moon VALUES (15, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 15, NULL);
INSERT INTO public.moon VALUES (16, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 16, NULL);
INSERT INTO public.moon VALUES (17, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 17, NULL);
INSERT INTO public.moon VALUES (18, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 18, NULL);
INSERT INTO public.moon VALUES (19, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 19, NULL);
INSERT INTO public.moon VALUES (20, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 20, NULL);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 1, NULL);
INSERT INTO public.planet VALUES (2, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 2, NULL);
INSERT INTO public.planet VALUES (3, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 3, NULL);
INSERT INTO public.planet VALUES (4, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 4, NULL);
INSERT INTO public.planet VALUES (5, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 5, NULL);
INSERT INTO public.planet VALUES (6, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 6, NULL);
INSERT INTO public.planet VALUES (7, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 7, NULL);
INSERT INTO public.planet VALUES (8, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 8, NULL);
INSERT INTO public.planet VALUES (9, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 9, NULL);
INSERT INTO public.planet VALUES (10, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 10, NULL);
INSERT INTO public.planet VALUES (11, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 11, NULL);
INSERT INTO public.planet VALUES (12, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 12, NULL);
INSERT INTO public.planet VALUES (13, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 13, NULL);
INSERT INTO public.planet VALUES (14, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 14, NULL);
INSERT INTO public.planet VALUES (15, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 15, NULL);
INSERT INTO public.planet VALUES (16, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 16, NULL);
INSERT INTO public.planet VALUES (17, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 17, NULL);
INSERT INTO public.planet VALUES (18, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 18, NULL);
INSERT INTO public.planet VALUES (19, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 19, NULL);
INSERT INTO public.planet VALUES (20, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 20, NULL);


--
-- Data for Name: solar_system; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.solar_system VALUES (1, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.solar_system VALUES (2, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.solar_system VALUES (3, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.solar_system VALUES (4, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.solar_system VALUES (5, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);
INSERT INTO public.solar_system VALUES (6, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, NULL);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (6, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 6, NULL);
INSERT INTO public.star VALUES (5, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 5, NULL);
INSERT INTO public.star VALUES (4, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 4, NULL);
INSERT INTO public.star VALUES (3, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 3, NULL);
INSERT INTO public.star VALUES (2, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 2, NULL);
INSERT INTO public.star VALUES (1, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 1, NULL);
INSERT INTO public.star VALUES (7, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 7, NULL);
INSERT INTO public.star VALUES (8, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 8, NULL);
INSERT INTO public.star VALUES (9, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 9, NULL);
INSERT INTO public.star VALUES (10, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 10, NULL);
INSERT INTO public.star VALUES (11, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 11, NULL);
INSERT INTO public.star VALUES (12, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 12, NULL);
INSERT INTO public.star VALUES (13, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 13, NULL);
INSERT INTO public.star VALUES (14, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 14, NULL);
INSERT INTO public.star VALUES (15, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 15, NULL);
INSERT INTO public.star VALUES (16, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 16, NULL);
INSERT INTO public.star VALUES (17, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 17, NULL);
INSERT INTO public.star VALUES (18, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 18, NULL);
INSERT INTO public.star VALUES (19, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 19, NULL);
INSERT INTO public.star VALUES (20, 'glx I', 123, 100000000, 456, true, 1, 'data II', false, 20, NULL);


--
-- Name: galaxy galaxy_data_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_data_key UNIQUE (data);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_data_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_data_key UNIQUE (data);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: moon moon_planet_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_key UNIQUE (planet_id);


--
-- Name: planet planet_data_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_data_key UNIQUE (data);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: planet planet_star_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_key UNIQUE (star_id);


--
-- Name: solar_system solar_system_data_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.solar_system
    ADD CONSTRAINT solar_system_data_key UNIQUE (data);


--
-- Name: solar_system solar_system_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.solar_system
    ADD CONSTRAINT solar_system_pkey PRIMARY KEY (solar_system_id);


--
-- Name: star star_data_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_data_key UNIQUE (data);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: star star_register_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_register_key UNIQUE (galaxy_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_register_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_register_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

