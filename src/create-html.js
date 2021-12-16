const generateHTML = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://kit.fontawesome.com/46b6222fba.js" crossorigin="anonymous"></script>
        <title>Team Profile</title>
    </head>
    <body>
        <header class="container-fluid bg-danger m-0 p-2">
            <h1 class="display-4 bg-danger text-white text-center">
                My Team
            </h1>
        </header>
        <main class="container">
            <div class="row d-flex justify-content-center">
            ${data}
            </div>
        </main>
    </body>
    </html>
    `
}

module.exports = generateHTML;
