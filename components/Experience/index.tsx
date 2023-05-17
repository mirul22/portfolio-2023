import { Container, Section } from 'components';
import { useAnimation } from 'framer-motion';
import { useMdScreen } from 'lib';
import { useTranslation } from 'next-i18next';
import React, { FC, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import { Item } from './libs/Item';

export const Experience: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const mdScreen = useMdScreen();
  const { t } = useTranslation('common');

  const experience = useMemo(
    () => [
      {
        title: 'Senior Software Developer at C-Speed',
        place: 'Kuala Lumpur, Malaysia',
        date: 'Jan 2023 - Present',
      },
      {
        title: 'Founder of Soskod Solution',
        place: 'Kuala Lumpur, Malaysia',
        date: 'Jan 2022 - Present',
      },
      {
        title: 'Programmer at Akal Aspirasi',
        place: 'Kuala Lumpur, Malaysia',
        date: 'Aug 2019 - Jan 2023',
      },
      {
        title: 'Software Engineer at Dharihaz Technologies',
        place: 'Shah Alam, Malaysia',
        date: 'Dec 2018 - Jul 2019',
      },
      {
        title: 'Analyst Programmer at EQ Soft',
        place: 'Petaling Jaya, Malaysia',
        date: 'Jun 2018 - Nov 2018',
      },
      {
        title: 'System Programmer at NRM Technology',
        place: 'Kuala Lumpur, Malaysia',
        date: 'May 2017 - May 2018',
      },
    ],
    []
  );

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section className="mt-20 mb-16 md:mt-28" title={t('experience.title')} description={t('experience.description')}>
      <Container className="mt-14">
        <div className="flex justify-between max-w-screen-sm" ref={ref}>
          {mdScreen ? (
            <>
              <div>
                {experience.slice(0, 3).map((item, i) => (
                  <Item {...item} key={i} first={i === 0} last={i === 2} controls={controls} custom={i} />
                ))}
              </div>
              <div>
                {experience.slice(3).map((item, i) => (
                  <Item {...item} key={i} first={i === 0} last={i === 2} controls={controls} custom={i} />
                ))}
              </div>
            </>
          ) : (
            <div>
              {experience.map((item, i) => (
                <Item
                  {...item}
                  key={i}
                  first={i === 0}
                  controls={controls}
                  last={i === experience.length - 1}
                  custom={i}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
