import aws from '../app/assets/svg/skills/aws.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import c from '../app/assets/svg/skills/c.svg';
import css from '../app/assets/svg/skills/css.svg';
import dart from '../app/assets/svg/skills/dart.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import flutter from '../app/assets/svg/skills/flutter.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import memsql from '../app/assets/svg/skills/memsql.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import opencv from '../app/assets/svg/skills/opencv.svg';
import photoshop from '../app/assets/svg/skills/photoshop.svg';
import php from '../app/assets/svg/skills/php.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import python from '../app/assets/svg/skills/python.svg';
import pytorch from '../app/assets/svg/skills/pytorch.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import tensorflow from '../app/assets/svg/skills/tensorflow.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import vue from '../app/assets/svg/skills/vue.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';
import pandas from '../app/assets/svg/skills/pandas.svg';
import scikitlearn from '../app/assets/svg/skills/scikit-learn.svg';
import dotnet from '../app/assets/svg/skills/dotnet.svg';
import kubernetes from '../app/assets/svg/skills/kubernetes.svg';
import linux from '../app/assets/svg/skills/linux.svg';
import sqlalchemy from '../app/assets/svg/skills/sqlalchemy.svg';
import fastapi from '../app/assets/svg/skills/fastapi.svg';

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'aws':
            return aws;
        case 'bootstrap':
            return bootstrap;
        case 'c':
            return c;
        case 'css':
            return css;
        case 'dart':
            return dart;
        case 'django':
            return django;
        case 'docker':
            return docker;
        case 'figma':
            return figma;
        case 'firebase':
            return firebase;
        case 'flutter':
            return flutter;
        case 'git':
            return git;
        case 'html':
            return html;
        case 'java':
            return java;
        case 'javascript':
            return javascript;
        case 'materialui':
            return materialui;
        case 'memsql':
            return memsql;
        case 'microsoft office':
            return microsoftoffice;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'next js':
            return nextJS;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'photoshop':
            return photoshop;
        case 'php':
            return php;
        case 'postgresql':
            return postgresql;
        case 'python':
            return python;
        case 'pytorch':
            return pytorch;
        case 'react':
            return react;
        case 'tailwind':
            return tailwind;
        case 'tensorflow':
            return tensorflow;
        case 'typescript':
            return typescript;
        case 'vitejs':
            return vitejs;
        case 'vue':
            return vue;
        case 'wordpress':
            return wordpress;
        case 'pandas':
            return pandas;
        case 'sklearn':
            return scikitlearn;
        case '.net':
            return dotnet;
        case 'kubernetes':
            return kubernetes;
        case 'linux':
            return linux;
        case 'sqlalchemy':
            return sqlalchemy;
        case 'fastapi':
            return fastapi;
        default:
            return null;
    }
};