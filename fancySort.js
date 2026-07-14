const fs = require("fs");
const filename = process.argv[2];

if (!filename) {
    console.log("Error: Please provide a file name.");
} else if (fs.existsSync(filename)) {

    const data = fs.readFileSync(filename, "utf-8");

    const lines = data.split("\n");

    const filteredLines = lines.filter(line => line !== "");

    // Sort Command
    filteredLines.sort();

    // Results for Sort command
    console.log("Sorted Results:\n");

    // Line command
    filteredLines.forEach(line => {
        console.log(line);
    });

    // Results for Line command
    console.log("\nTotal Lines:", filteredLines.length);

} else {
    console.log("Error: File not found.");
}