import { readFile, access } from 'node:fs/promises';
const pages = ['index.html','about.html','services.html','contact.html'];
let count = 0;
for (const page of pages) {
 const html = await readFile(page,'utf8');
 for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  const url = match[1];
  if (/^(https?:|mailto:|tel:|#)/.test(url)) continue;
  const [file,hash] = url.split('#');
  const target = file.split('?')[0];
  await access(target);
  if(hash && !(await readFile(target,'utf8')).includes(`id="${hash}"`)) throw Error(`Broken anchor: ${url}`);
  count++;
 }
 if ((html.match(/<h1>/g)||[]).length !== 1) throw Error(`${page}: expected one h1`);
 if (!html.includes('name="viewport"')) throw Error(`${page}: missing viewport`);
 if (!html.includes('noindex,nofollow')) throw Error(`${page}: preview indexing guard missing`);
}
console.log(`Checked four pages, ${count} local links/assets, headings, viewport and preview indexing guards.`);
