import { Container, Section } from 'components';
import { useAnimation } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import React, { FC, useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

import {
  FigmaIcon,
  FirebaseIcon,
  FlutterIcon,
  LaravelIcon,
  MongoIcon,
  MySQLIcon,
  NextIcon,
  NodeIcon,
  PostgresIcon,
  PostmanIcon,
  PrismaIcon,
  TailwindIcon,
  TsIcon,
  ViteIcon,
} from './libs/Icons';
import { Skill } from './libs/Skill';

const skills = [
  {
    name: 'NextJS',
    href: 'https://nextjs.org/',
    icon: <NextIcon />,
  },
  {
    name: 'React',
    href: 'https://reactjs.org/',
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: 'Tailwind',
    href: 'https://tailwindcss.com/',
    icon: <TailwindIcon />,
  },
  {
    name: 'Typescript',
    href: 'https://www.typescriptlang.org/',
    icon: <TsIcon />,
  },
  {
    name: 'Prisma',
    href: 'https://www.prisma.io/',
    icon: <PrismaIcon />,
  },
  {
    name: 'NodeJS',
    href: 'https://nodejs.org/en',
    icon: <NodeIcon />,
  },
  {
    name: 'MongoDB',
    href: 'https://www.mongodb.com/',
    icon: <MongoIcon />,
  },
  {
    name: 'Postgres',
    href: 'https://www.postgresql.org/',
    icon: <PostgresIcon />,
  },
  {
    name: 'Firebase',
    href: 'https://firebase.google.com/',
    icon: <FirebaseIcon />,
  },
  {
    name: 'MySQL',
    href: 'mysql.com',
    icon: <MySQLIcon />,
  },
  {
    name: 'Vite',
    href: 'https://vitejs.dev/',
    icon: <ViteIcon />,
  },
  {
    name: 'Laravel',
    href: 'https://laravel.com/',
    icon: <LaravelIcon />,
  },
  {
    name: 'Flutter',
    href: 'https://flutter.dev/',
    icon: <FlutterIcon />,
  },
  {
    name: 'Figma',
    href: 'https://www.figma.com/',
    icon: <FigmaIcon />,
  },
  {
    name: 'PostMan',
    href: 'https://www.postman.com/',
    icon: <PostmanIcon />,
  },
];

export const Skills: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t } = useTranslation('common');

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section className="md:mt-20 mt-14" title={t('skills.title')} description={t('skills.description')}>
      <Container>
        <div className="max-w-lg mt-8 grid grid-cols-2 lg:grid-cols-5 gap-6" ref={ref}>
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} custom={i} controls={controls} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
