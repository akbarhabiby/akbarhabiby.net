import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'AkbarHabiby | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hi, welcome to my personal website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Akbar Habiby',
  subtitle: '',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `My full name is Muhammad Akbar Habiby Khalid.`,
  paragraphTwo: `I'm extremely loves to learn new technologies. I've been start coding since I was High School, I wrote my first code with HTML and PHP. I'm a Software Developer, Filmmaker, Photographer, and Gamer.`,
  paragraphThree: `When I'm not coding, I'm probably watchng YouTube, hanging out with my family, or playing games.`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'traveRent.png',
    title: 'TraveRent',
    info: 'Full Stack Developer',
    info2:
      'TraveRent is a platform that you can use to rent or lend a vehicle for your travel needs.',
    url: '',
    repo: 'https://github.com/TraveRent',
  },
  {
    id: nanoid(),
    img: 'entertainme.png',
    title: 'Entertainme',
    info: 'Full Stack Developer',
    info2: 'A simple website for showing latest featured Movies and TV Series.',
    url: '',
    repo: 'https://github.com/akbarhabiby/entertain',
  },
  {
    id: nanoid(),
    img: 'sugoku.png',
    title: 'Sugoku',
    info: 'Full Stack Developer',
    info2: 'A simple mobile sudoku game 9x9.',
    url: '',
    repo: 'https://github.com/akbarhabiby/sugoku',
  },
  {
    id: nanoid(),
    img: 'pokelist.png',
    title: 'PokéList',
    info: 'Full Stack Developer',
    info2: 'A simple website to list all of Pokémons.',
    url: 'https://pokemon-list-akbarhabiby.web.app',
    repo: 'https://github.com/akbarhabiby/pokelist',
  },
  {
    id: nanoid(),
    img: 'storepedia.png',
    title: 'CMS H8 Store',
    info: 'Full Stack Developer',
    info2: 'A simple marketplace CMS.',
    url: 'https://storepedia-akbarhabiby.web.app',
    repo: 'https://linktr.ee/akbarhabiby_cms',
  },
  {
    id: nanoid(),
    img: 'kanban.png',
    title: 'Kanban',
    info: 'Full Stack Developer',
    info2: 'A kanban board for project management.',
    url: 'https://kanban-app-akbarhabiby.web.app',
    repo: 'https://github.com/akbarhabiby/kanban',
  },
  {
    id: nanoid(),
    img: 'fancyTodo.png',
    title: 'FancyTodo',
    info: 'Full Stack Developer',
    info2: 'A todo board for task management.',
    url: 'https://fancy-todo-akbarhabiby.web.app',
    repo: 'https://github.com/akbarhabiby/FancyTodo',
  },
  {
    id: nanoid(),
    img: 'skypedia.png',
    title: 'Skypedia',
    info: 'Full Stack Developer',
    info2: 'A simple website to book a flights.',
    url: 'https://secure-garden-16431.herokuapp.com',
    repo: 'https://github.com/akbarhabiby/skypedia',
  },
  {
    id: nanoid(),
    img: 'asurat.png',
    title: 'ASurat',
    info: 'Full Stack Developer',
    info2: 'Application for archiving incoming and outgoing mail.',
    url: '',
    repo: 'https://github.com/akbarhabiby/ASurat2020',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Email me',
  email: 'akbarhabiby@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/akbarhabiby',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/akbarhabiby',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
