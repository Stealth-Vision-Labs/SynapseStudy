import express from 'express';
import path from 'path';

export function main(): void {
  const app = express();
  const port = process.env.PORT || 3000;
  
  // Serve static assets from the assets directory
  app.use(express.static(path.join(__dirname, '../assets')));
  
  // Serve the main page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/index.html'));
  });
  
  // Serve subject pages
  app.get('/subjects/:subject', (req, res) => {
    const subject = req.params.subject;
    res.sendFile(path.join(__dirname, `../assets/subjects/${subject}.html`));
  });
  
  app.listen(port, () => {
    console.log(`SynapseStudy server running at http://localhost:${port}`);
  });
}

if (require.main === module) {
  main();
}

