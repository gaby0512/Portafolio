// scripts.js

function showDetails(projectId) {
    const projectDetails = {
        project1: `<h2>Detalles del Proyecto 1</h2>
                   <p><strong>Tecnologías:</strong> HTML, CSS, JavaScript</p>
                   <p><strong>Desafíos:</strong> Implementar una interfaz responsiva</p>
                   <p><strong>Soluciones:</strong> Uso de media queries y Flexbox</p>`,
        project2: `<h2>Detalles del Proyecto 2</h2>
                   <p><strong>Tecnologías:</strong> Python, Django</p>
                   <p><strong>Desafíos:</strong> Integración con API externa</p>
                   <p><strong>Soluciones:</strong> Uso de bibliotecas de autenticación</p>`
        // Agrega más proyectos según sea necesario
    };

    document.getElementById('project-content').innerHTML = projectDetails[projectId] || 'Detalles no disponibles';
    document.getElementById('project-details').style.display = 'flex';
}

function closeDetails() {
    document.getElementById('project-details').style.display = 'none';
}
