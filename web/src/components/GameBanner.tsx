interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <div className="keen-slider__slide">
            <div className="relative rounded-lg overflow-hidden hover:cursor-pointer">
                {props.adsCount > 0 ? <span className="animate-ping absolute right-1 top-1 rounded-full h-2 w-2 bg-sky-500" title="Contém anúncios(s)"></span> : ""}
                <img src={props.bannerUrl} alt='' className="w-full h-full"></img>
                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                    <strong className="font-bold text-white">{props.title}</strong>
                    <p className="text-zinc-300 text-sm mt-1">{props.adsCount} anúncios(s)</p>
                </div>
            </div>
        </div>
    )
}
