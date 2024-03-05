// 2
// richiamare output
const output = document.querySelector('.output');

// 1
// Creare l’array di oggetti con le informazioni fornite
const teamMembers = [
  {
    fullName: 'Wayne Barnett',
    role: 'Founder & CEO',
    // 3
    // img
    image: 'wayne-barnett-founder-ceo.jpg',
  },

  {
    fullName: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },

  {
    fullName: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },

  {
    fullName: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },

  {
    fullName: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  
  {
    fullName: 'Barbara Ramos',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
]

// 2
// ciclo for/of
for (let member of teamMembers){
  console.log(member);
  // 2
  // all'interno del ciclo dobbiamo richiamare la col
  output.innerHTML += `
  <div class="col">
    <div class="card" style="width: 18rem;">
      
      <div class="card-body">
        <h5 class="card-title">${member.fullName}</h5>
        <p class="card-text">${member.role}</p>
      </div>
    </div>
  </div>
  `
}