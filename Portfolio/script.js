// Sample projects data
const projects = [
    {
      title: "Pharmacy Management System",
      category: "web",
      description: "Developed using Python and SQL for managing pharmacy records efficiently.",
    },
    {
      title: "Bus Tracking System",
      category: "web",
      description: "Backend using MongoDB for real-time bus tracking information.",
    },
    {
      title: "Pregnancy Care App",
      category: "design",
      description: "UI/UX design prototype built in Figma for a pregnancy care app.",
    },
    {
      title: "Concert Invitation",
      category: "web",
      description: "Developed with HTML, CSS, and JavaScript for inviting to a concert.",
    },
    {
      title: "Vehicle Tracking System",
      category: "web",
      description: "Java project in Eclipse to track vehicles using GPS.",
    }
  ];
  
  // Load projects dynamically
  const projectGrid = document.querySelector('.project-grid');
  const modal = document.getElementById('project-modal');
  const modalBody = document.querySelector('.modal-body');
  const closeModal = document.querySelector('.close-btn');
  
  function loadProjects(category = 'all') {
    projectGrid.innerHTML = '';
    const filteredProjects = projects.filter(project => category === 'all' || project.category === category);
    filteredProjects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <button class="view-more-btn">View More</button>
      `;
      projectCard.querySelector('.view-more-btn').addEventListener('click', () => openModal(project));
      projectGrid.appendChild(projectCard);
    });
  }
  
  function openModal(project) {
    modal.style.display = 'flex';
    modalBody.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
  }
  
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Filter projects
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      loadProjects(this.getAttribute('data-category'));
    });
  });
  
  // Load all projects initially
  window.onload = function() {
    loadProjects();
  };
  