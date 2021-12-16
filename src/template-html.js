const createManagerCard = data => {
    return `
    <div class="card m-3" style="width: 18rem;">
        <div class="card-header">
            <h4>${data.name}</h4>
            <h5><i class="fas fa-mug-hot"></i>Manager</h5>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Office Number: ${data.officeNumber}</li>
            </ul>
        </div>
    </div>`
}

const createInternCard = data => {
    return `
    <div class="card m-3" style="width: 18rem;">
        <div class="card-header">
            <h4>${data.name}</h4>
            <h5><i class="fas fa-user-graduate"></i>Intern</h5>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">School: ${data.school}</li>
            </ul>
        </div>
    </div>`
}

const createEngineerCard = data => {
    return `
    <div class="card m-3" style="width: 18rem;">
        <div class="card-header">
            <h4>${data.name}</h4>
            <h5><i class="fas fa-glasses">Engineer</h5>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></li>
            </ul>
        </div>
    </div>`
}

module.exports = { createManagerCard, createInternCard, createEngineerCard };