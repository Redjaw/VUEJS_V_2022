export default {
    millisToMinutesAndSeconds(millis: string | number): string {
        if (typeof millis === 'string') {
            return millis
        }
        millis = Math.floor(parseInt(millis.toString()))
        const minutes: number = Math.floor(millis / 60000)
        const seconds: any = ((millis % 60000) / 1000).toFixed(0)
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
    }
}