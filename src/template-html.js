const createManagerCard = data => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${data.name}
    Manager
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email: ${data.email}</li>
    <li class="list-group-item">Office Number: ${data.officeNumber}</li>
    </ul>
    </div>
    `
    
}

const createInternCard = data => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${data.name}
    Intern
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email: ${data.email}</li>
    <li class="list-group-item">School: ${data.school}</li>
    </ul>
    </div>
    `
}

const createEngineerCard = data => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${data.name}
    Engineer
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email: ${data.email}</li>
    <li class="list-group-item">Github: ${data.github}</li>
    </ul>
    </div>
    `
}

module.exports = { createManagerCard, createInternCard, createEngineerCard };