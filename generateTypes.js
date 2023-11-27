require('dotenv').config();
const { exec } = require('child_process');

const command = `npx supabase gen types typescript --project-id ${process.env.SUPABASE_PROJECT_REFERENCE} > src/lib/supabase/database.types.ts`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
