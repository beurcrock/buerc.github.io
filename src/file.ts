import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import fs from "fs";
import path from "path";
import fm from "front-matter";

type ContentFile = {
  filename: string;
  // relative path to the project folder
  filepath: string;
  // metadata
  metadata: PageObjectResponse;
};

function isMarkdownFile(filename: string): boolean {
  return filename.endsWith(".md");
}

// return all content 
export function getAllContentFiles(
  dirPath: string,
): ContentFile[] {
  const fileArray: ContentFile[] = []
  const queue: string[] = [dirPath]
  while (queue.length !== 0) {
    const filepath = queue.shift()
    if (filepath === undefined) continue
    if (fs.statSync(filepath).isDirectory()) {
      const files = fs.readdirSync(filepath)
      for (const file of files) {
        queue.push(path.join(filepath, file))
      }
      continue
    }
    if (!isMarkdownFile(filepath)) continue
    const filedata = fm(fs.readFileSync(filepath, 'utf-8'))
    const metadata = (filedata.attributes as any).NOTION_METADATA
    if (metadata) {
      fileArray.push({
        filename: path.basename(filepath),
        filepath,
        metadata
      })
    } else {
      console.warn(`${filepath} does not have NOTION_METADATA in its frontmatter`)
    }
  }
  return fileArray
}
