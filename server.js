const express = require('express');
const app = express();

app.get('/api/table', (req, res) => {
    const table = [];
    for (let i = 0; i <= 12; i++) {
        const row = [];
        for (let j = 0; j <= 12; j++) {
            row.push(i === 0 ? (j !== 0 ? j : 'X') : (j === 0 ? i : i * j));
        }
        table.push(row);
    }
    res.json(table);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});