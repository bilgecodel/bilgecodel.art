import { IconProps } from "./iconTypes"

export interface SocialProps {
    label: string,
    icon: React.FC<IconProps>,
    IconProps: IconProps,
    link: string
}