import { SocialProps } from "../types/socialTypes"
import { IconBehance, IconInstagram, IconLinkedIn } from "./../components/Icons/index"

const socialData: { socialLink: SocialProps[] } = {
    socialLink: [
        {
            label: "@bilgecodel follow on Behance",
            icon: IconBehance,
            IconProps: { width: "22px", height: "22px" },
            link: "https://www.behance.net/bilgecodel",
        },
        {
            label: "@bilgecodel connect on LinkedIn",
            icon: IconLinkedIn,
            IconProps: { width: "22px", height: "22px" },
            link: "https://www.linkedin.com/in/bilgecodel/",
        },
        {
            label: "@bilge.ux on Instagram",
            icon: IconInstagram,
            IconProps: { width: "23px", height: "23px" },
            link: "https://www.instagram.com/bilge.ux/",
        },
    ],
}

export default socialData