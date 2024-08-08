import { defineConfig } from "cypress";
import fs from 'fs-extra';
import path from 'path';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        deleteFolder(folderName) {
          const folderPath = path.join(config.projectRoot, folderName);
          return fs.remove(folderPath).then(() => null);
        },
        isFileDownloaded(filename) {
          const downloadsFolder = config.downloadsFolder;
          return fs.existsSync(path.join(downloadsFolder, filename));
        }
      });
    },
    baseUrl: "http://localhost:5173",
    downloadsFolder: 'cypress/downloads',
  },
});
