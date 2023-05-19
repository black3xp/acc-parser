import { writeFile, readFile } from 'fs/promises'
import path from 'path';

export async function POST(request, response)
{
    const form = await request.formData()
    const file = form.get('file')

    //convert arrayBuffer to json
    const buffer = await file.arrayBuffer()
    const json = JSON.parse(Buffer.from(buffer).toString())

    
    return new Response(JSON.stringify(json), {
        headers: { 'content-type': 'application/json' },
    })
}
