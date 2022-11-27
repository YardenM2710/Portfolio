function getEndpoints() {
  let rootPath = '';

  if (window.location.href.includes('yarden')) {
    rootPath = '/Portfolio/';
  } else {
    console.log('Im nmot in huthub');
  }

  return {
    navbar: rootPath + 'profile/navbar.json',
    routes: rootPath + 'profile/routes.json',
    home: rootPath + 'profile/home.json',
    social: rootPath + 'profile/social.json',
    about: rootPath + 'profile/about.json',
    skills: rootPath + 'profile/skills.json',
    education: rootPath + 'profile/education.json',
    experiences: rootPath + 'profile/experiences.json',
    projects: rootPath + 'profile/projects.json',
  };
}
let endpoints = getEndpoints();
export default endpoints;
