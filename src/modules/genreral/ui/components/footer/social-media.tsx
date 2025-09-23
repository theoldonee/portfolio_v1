import Link from "next/link";

var items = [
    {
        "title":"Git",
        "element": <i className="fa-brands fa-github"></i>,
        "url": "https://github.com/theoldonee"
    },
    {
        "title":"LinkedIn",
        "element": <i className="fa-brands fa-linkedin"></i>,
        "url": "https://www.linkedin.com/in/favour-esset-620601314/"
    },
    {
        "title":"Instagram",
        "element": <i className="fa-brands fa-instagram"></i>,
        "url": "https://www.instagram.com/_.esset_?igsh=MWNhMGxoc2psdjBpcg=="
    },
    {
        "title":"Spotify",
        "element": <i className="fa-brands fa-spotify"></i>,
        "url": "https://open.spotify.com/user/31h5xyiywvzxtovdy2n24tr7yqoa?si=d6_Y8ez9QjegbIQaKRez8g"
    },

]

export function SocialMedia(){
    return(
        <div className="flex gap-2.5">
            {
                items.map((item) =>
                    <Link
                    key={item.title}
                    href={item.url}
                    >
                        <div 
                        className=" text-2xl text-gray-100 w-12 h-12 bg-gray-500 flex items-center justify-center"
                        >
                            {item.element}
                        </div>
                    </Link>
                    
                )
            }
        </div>
    );
}