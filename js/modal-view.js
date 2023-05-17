let collectionOfProjects = [
    {
        name: `Multi-Post Stories`,
        description: `A daily selection of privately personalized reads; no accounts
        or sign-ups required. has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a standard dummy
        text.`,
        featured_Image: `images/pro-img.png`,
        technologies: ["CSS", "HTML", "Bootstrap", "Ruby"],
        link_to_live_version: `lily4178993.github.io/Portfolio/`,
        link_to_source_code: `https://github.com/lily4178993/Portfolio`
    },
    {
        name: `Profesional Art Printing Data`,
        description: `A daily selection of privately personalized reads; no accounts
        or sign-ups required. has been the industry's standard.`,
        featured_Image: ``,
        technologies: ["HTML", "Bootstrap", "Ruby"],
        link_to_live_version: `lily4178993.github.io/Portfolio/`,
        link_to_source_code: `https://github.com/lily4178993/Portfolio`
    },
    {
        name: `Data Dashboard Healthcare`,
        description: `A daily selection of privately personalized reads; no accounts
        or sign-ups required. has been the industry's standard.`,
        featured_Image: ``,
        technologies: ["HTML", "Bootstrap", "Ruby"],
        link_to_live_version: `lily4178993.github.io/Portfolio/`,
        link_to_source_code: `https://github.com/lily4178993/Portfolio`
    },
    {
        name: `Website Portfolio`,
        description: `A daily selection of privately personalized reads; no accounts
        or sign-ups required. has been the industry's standard.`,
        featured_Image: ``,
        technologies: ["HTML", "Bootstrap", "Ruby"],
        link_to_live_version: `lily4178993.github.io/Portfolio/`,
        link_to_source_code: `https://github.com/lily4178993/Portfolio`
    },
    {
        name: `Profesional Art Printing Data`,
        description: `A daily selection of privately personalized reads; no accounts
        or sign-ups required. has been the industry's standard.`,
        featured_Image: ``,
        technologies: ["HTML", "Bootstrap", "Ruby"],
        link_to_live_version: `lily4178993.github.io/Portfolio/`,
        link_to_source_code: `https://github.com/lily4178993/Portfolio`
    },
    {
        name: `Data Dashboard Healthcare`,
        description: `A daily selection of privately personalized reads; no accounts
        or sign-ups required. has been the industry's standard.`,
        featured_Image: ``,
        technologies: ["HTML", "Bootstrap", "Ruby"],
        link_to_live_version: `lily4178993.github.io/Portfolio/`,
        link_to_source_code: `https://github.com/lily4178993/Portfolio`
    },
    {
        name: `Website Portfolio`,
        description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.`,
        featured_Image: ``,
        technologies: ["HTML", "Bootstrap", "Ruby"],
        link_to_live_version: `lily4178993.github.io/Portfolio/`,
        link_to_source_code: `https://github.com/lily4178993/Portfolio`
    }
];
let worksContainer = document.querySelector('works-container');
collectionOfProjects.map((card) => {
    worksContainer.innerHTML += `
    <div class="work-box w-disable">
    <div class="work-content">
    <h3 class="work-title">${card.name}</h3>
    <p class="work-description">${card.description}</p>
    <ul class="work-languages-list">
    <li class="work-language">${card.technologies[0]}</li>
    <li class="work-language">${card.technologies[1]}</li>
    <li class="work-language">${card.technologies[2]}</li>
    </ul>
    <a href="#" class="btn see-work">See project</a>
    </div>
    </div>
    `
})