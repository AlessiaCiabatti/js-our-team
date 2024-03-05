// 2
// richiamare output
const output = document.querySelector('.output');

// 1
// Creare l’array di oggetti con le informazioni fornite
const teamMembers = [
  {
    fullName: 'Wayne Barnett',
    role: 'Founder & CEO',
  },

  {
    fullName: 'Angela Caroll',
    role: 'Chief Editor',
  },

  {
    fullName: 'Walter Gordon',
    role: 'Office Manager',
  },

  {
    fullName: 'Angela Lopez',
    role: 'Social Media Manager',
  },

  {
    fullName: 'Scott Estrada',
    role: 'Developer',
  },
  
  {
    fullName: 'Barbara Ramos',
    role: 'Graphic Designer',
  },
]

for (let member of teamMembers){
  console.log(member);
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