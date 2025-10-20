import clear from '../assets/clear.png';
import clouds from "../assets/clouds.png"
import drizzle from "../assets/drizzle.png"
import mist from '../assets/mist.png'
import snow from '../assets/snow.png'
import rain from '../assets/rain.png'

export const weatherImageMap :Record<string,string> = {
    Rain:rain,
    Clouds:clouds,
    Clear:clear,
    Drizzle:drizzle,
    Mist:mist,
    Snow:snow
}