import { ExperienceProps } from './types';

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
};
const getExperienceDateString = (
  startDate: Date,
  endDate: Date | 'Present',
) => {
  const sd = startDate.toLocaleDateString(undefined, dateOptions);
  const ed =
    endDate === 'Present'
      ? endDate
      : endDate.toLocaleDateString(undefined, dateOptions);

  return `${sd} - ${ed}`;
};

const composecure: ExperienceProps = {
  date: getExperienceDateString(new Date('04/23/2023'), 'Present'),
  summary:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium itaque doloribus repellendus! Aperiam placeat aspernatur cum quam, enim obcaecati, corrupti impedit doloribus exercitationem dignissimos reprehenderit laudantium, quod molestias assumenda! Ipsam.',
  achievements: ['achievement 1', 'achievement 2', 'achievement 3'],
  projects: ['project 1', 'project 2', 'project 3'],
};

const dcs: ExperienceProps = {
  date: getExperienceDateString(new Date('05/19/2019'), new Date('04/23/2023')),
  summary:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium itaque doloribus repellendus! Aperiam placeat aspernatur cum quam, enim obcaecati, corrupti impedit doloribus exercitationem dignissimos reprehenderit laudantium, quod molestias assumenda! Ipsam.',
  achievements: ['achievement 1', 'achievement 2', 'achievement 3'],
  projects: ['project 1', 'project 2', 'project 3'],
};

const oit: ExperienceProps = {
  date: getExperienceDateString(new Date('01/03/2018'), new Date('05/12/2019')),
  summary:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium itaque doloribus repellendus! Aperiam placeat aspernatur cum quam, enim obcaecati, corrupti impedit doloribus exercitationem dignissimos reprehenderit laudantium, quod molestias assumenda! Ipsam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium itaque doloribus repellendus! Aperiam placeat aspernatur cum quam, enim obcaecati, corrupti impedit doloribus exercitationem dignissimos reprehenderit laudantium, quod molestias assumenda! Ipsam.',
  achievements: ['achievement 1', 'achievement 2', 'achievement 3'],
  projects: ['project 1', 'project 2', 'project 3'],
};

export { composecure, dcs, oit };
