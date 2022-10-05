export default {
    millisToMinutesAndSeconds(millis:number) :string {
        const minutes:number = Math.floor(millis / 60000)
        const seconds:any = ((millis % 60000) / 1000).toFixed(0)
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
    }
}