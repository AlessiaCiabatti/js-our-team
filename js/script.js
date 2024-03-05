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
    image: 'our-team/img/wayne-barnett-founder-ceo.jpg',
  },

  {
    fullName: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'our-team/img/angela-caroll-chief-editor.jpg',
  },

  {
    fullName: 'Walter Gordon',
    role: 'Office Manager',
    image: 'our-team/img/walter-gordon-office-manager.jpg',
  },

  {
    fullName: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'our-team/img/angela-lopez-social-media-manager.jpg',
  },

  {
    fullName: 'Scott Estrada',
    role: 'Developer',
    image: 'our-team/img/scott-estrada-developer.jpg',
  },
  
  {
    fullName: 'Barbara Ramos',
    image: 'our-team/img/barbara-ramos-graphic-designer.jpg',
  },
]

// 2
// ciclo for/of
for (let member of teamMembers){
  console.log(member);
  // 2
  // all'interno del ciclo dobbiamo richiamare la col
  output.innerHTML += `
  <div class="col mt-5">
    <div class="card" style="width: 18rem;">
      
      <div class="card-body">
        <img src="${member.image}" class="card-img-top" alt="...">
        <h5 class="card-title text-center mb-0 mt-3">${member.fullName}</h5>
        <p class="card-text text-center mb-3">${member.role}</p>
      </div>
    </div>
  </div>
  `
}