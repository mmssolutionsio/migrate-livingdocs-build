const configurationDefaults = {
  "configurationSelector": "[type=\"ld-conf\"]",
  "build": {
    "design": "./src/config.json",
    "components": "./src/components/**/*.html",
    "requiredFolders": [
      "./src/css",
      "./src/fonts"
    ],
    "dist": "./dist",
    "dest": "./",
    "archiveName": "design.zip"
  },
  "migration": {
    "design": "./src/config.json",
    "components": "./src/components/**/*.html",
    "dest": "./design-v2",
  }
}

export default configurationDefaults;