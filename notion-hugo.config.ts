import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    mount: {
        manual: false,
        page_url: 'https://repeated-bougon-c77.notion.site/beurc-b8a81996eb2f47dba01dafd9ef21cfdf?pvs=4',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: 'f5630360bbaf4c569c9fabe254a32516',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: '421ba753b77c4025969cf4c8a2c29905',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
