const fs = require('fs/promises')

async function updateEnv() {
  let fileContent

  try {
    fileContent = await fs.readFile('./.env.template', { encoding: 'utf8' })
    fileContent = fileContent.split(/\r?\n/)
  } catch (err) {
    throw new Error('Env template not found')
  }

  let envFile
  try {
    envFile = await fs.readFile('./.env', { encoding: 'utf8' })
    envFile = envFile.split(/\r?\n/)
  } catch {}

  if (fileContent) {
    const linesToAdd = fileContent.filter((line) => {
      const key = line.split('=')
      return !envFile || !envFile.some((item) => item.includes(key[0]))
    })
    fs.writeFile('./.env', linesToAdd.join('\r\n'), { flag: 'a' }, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log('File .env updated.')
      }
    })
  }
}

updateEnv()
