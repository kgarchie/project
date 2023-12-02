import { spawn } from 'node:child_process'

export function transcribe(audioLocation: string, callback: (chunk: string | null, error: string | null) => void): Promise<void> {
    // TODO: is this really necessary?
    audioLocation = audioLocation.replace(/\//g, "\\")
    audioLocation = audioLocation.replace(/\\/g, "\\\\")
    return new Promise((resolve, reject) => {
        // TODO: Add support for Linux
        const result = spawn(`${process.cwd()}\\speech\\venv\\Scripts\\python.exe`, [`${process.cwd()}\\speech\\main.py`, audioLocation])
        let lineCount = 0
        result.stdout.on('data', (data) => {
            if (lineCount < 2 && (data.toString().includes("Detecting language using up to the first 30 seconds") || data.toString().includes("Detected language"))) {
                lineCount++
                return
            }
            callback(data.toString(), null)
        })

        result.stderr.on('data', (data) => {
            callback(null, data.toString())
        })

        result.on('exit', (code) => {
            resolve()
        })

        result.on('error', (error) => {
            console.error(error)
            reject(error)
        })
    })
}