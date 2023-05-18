let collectionOfProjects = [
    {
        name: `Profesional Art Printing Data`,
        description: `A daily selection of privately personalized reads; no accounts
        or sign-ups required. has been the industry's standard.`,
        featured_Image: `./images/pro-img.png`,
        technologies: ["HTML", "Bootstrap", "Ruby", "Test"],
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
let worksContainer = document.querySelector('.works-container');

collectionOfProjects.map((project) => {
    worksContainer.innerHTML += `
    <!-- WORK BOX (begin) -->
    <div class="work-box w-disable">
        <div class="work-content">
            <h3 class="work-title">${project.name}</h3>
            <p class="work-description">${project.description}</p>
            <ul class="work-languages-list">
                <li class="work-language">${project.technologies[0]}</li>
                <li class="work-language">${project.technologies[1]}</li>
                <li class="work-language">${project.technologies[2]}</li>
            </ul>
            <!-- Trigger/Open The Modal -->
            <a href="#portfolio" class="btn see-work openModal">See project</a>
        </div>
    </div>
    <!-- WORK BOX (end) -->
    <!-- The Modal (begin)-->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <h4>${project.name}</h4>
                <ul class="work-languages-list">
                    <li class="work-language">${project.technologies[0]}</li>
                    <li class="work-language">${project.technologies[1]}</li>
                    <li class="work-language">${project.technologies[2]}</li>
                </ul>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="./images/Snapshoot Portfolio.png" alt="Project Snapshoot">
                </div>
                <div class="modal-description">
                    <div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it 1960s.
                        </p><br>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it 1960s with the 
                            releax map lapora verita.
                        </p>
                    </div>
                    <div class="modal-buttons">
                        <a href="${project.link_to_live_version}" class="btn">See live</a>
                        <a href="${project.link_to_source_code}" class="btn">See Source</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- The Modal (end)-->
    `
});

/**
 * The following lines of code were taken from the W3School website. 
 * You can see the source by following this link:
 * https://www.w3schools.com/howto/howto_css_modals.asp
*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}