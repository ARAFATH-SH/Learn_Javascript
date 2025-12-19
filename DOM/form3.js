const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");

section.innerHTML = `
    <h2 class="section-title">Section title-4</h2>
    <p>This is a new section added to the main container.</p>
`;
mainContainer.appendChild(section);