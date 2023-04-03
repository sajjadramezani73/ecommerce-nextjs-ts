import { FC } from "react"

interface IIcon {
    name: string
    size?: number
    color?: string
    weight?: number
    fill?: string
}

const LoadSvgIcon: FC<IIcon> = ({ name, size = 24, color = '#6C6C6C', weight = 1, fill = "none" }) => {

    const returnIconWithName = ({ name, size, color, weight, fill }: IIcon) => {
        switch (name) {
            case 'user':
                return (
                    <svg width={size} height={size} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.0917 18.3333C3.68077 18.3436 3.28234 18.1911 2.9833 17.9091C2.83482 17.7697 2.71564 17.6021 2.63265 17.4161C2.54966 17.2301 2.50458 17.0294 2.5 16.8258V16.8258C2.53578 15.558 3.07231 14.3561 3.99221 13.4831C4.91211 12.61 6.14047 12.137 7.40835 12.1674H12.5917C13.8597 12.1365 15.0882 12.6094 16.0082 13.4826C16.9282 14.3557 17.4647 15.5579 17.5 16.8258V16.8258C17.4956 17.0294 17.4505 17.2301 17.3676 17.4162C17.2846 17.6022 17.1653 17.7698 17.0167 17.9091C16.7176 18.1912 16.3194 18.3442 15.9083 18.3349L4.0917 18.3333Z"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 9.16685C9.02312 9.17424 8.07842 8.81777 7.34996 8.16685C7.00828 7.86409 6.73307 7.4938 6.54165 7.07935C6.35761 6.66284 6.25847 6.21381 6.25 5.75852V5.07518C6.25856 4.62017 6.35769 4.17144 6.54165 3.75518C6.73297 3.34043 7.00818 2.96986 7.34996 2.66685C8.08234 2.02245 9.02448 1.66699 10 1.66699C10.9755 1.66699 11.9177 2.02245 12.65 2.66685C12.9918 2.96986 13.267 3.34043 13.4584 3.75518C13.6423 4.17144 13.7414 4.62017 13.75 5.07518V5.75852C13.7415 6.21381 13.6424 6.66284 13.4584 7.07935C13.2669 7.4938 12.9917 7.86409 12.65 8.16685C11.9216 8.81777 10.9769 9.17424 10 9.16685Z"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="square"
                            strokeLinejoin="round"
                        />
                    </svg>
                )
            case 'cart':
                return (
                    <svg width={size} height={size} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.0001 1H19.7561C19.363 0.999852 18.9815 1.13342 18.6744 1.37875C18.3673 1.62409 18.1528 1.9666 18.0661 2.35001L16.0181 10.35C15.9155 10.7398 15.6858 11.0842 15.3654 11.3288C15.0449 11.5733 14.6521 11.7039 14.2491 11.7H3.52308C3.09609 11.7016 2.68207 11.5534 2.35315 11.2811C2.02423 11.0088 1.80124 10.6298 1.72306 10.21L1.03006 6.36C0.980955 6.07022 0.996333 5.77318 1.07508 5.49001C1.15446 5.20594 1.29467 4.94253 1.486 4.71805C1.67732 4.49357 1.91518 4.3134 2.18308 4.19C2.45231 4.07072 2.74359 4.00939 3.03806 4.00999H13.6001"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.38574 13.9404H15.3338"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.8004 19.0002C14.1327 18.9996 14.4528 18.8754 14.6985 18.6518C14.9443 18.4281 15.098 18.1211 15.1298 17.7903C15.1616 17.4596 15.0692 17.1289 14.8707 16.8625C14.6721 16.5961 14.3815 16.4132 14.0554 16.3492C13.7294 16.2853 13.3912 16.345 13.1067 16.5166C12.8222 16.6883 12.6118 16.9596 12.5163 17.2779C12.4209 17.5961 12.4473 17.9385 12.5904 18.2384C12.7335 18.5383 12.983 18.7742 13.2904 18.9002C13.4523 18.9665 13.6255 19.0004 13.8004 19.0002V19.0002Z"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.71447 19.0002C5.04672 18.9996 5.36687 18.8754 5.6126 18.6518C5.85833 18.4281 6.01206 18.1211 6.04387 17.7903C6.07569 17.4596 5.98331 17.1289 5.78472 16.8625C5.58612 16.5961 5.29552 16.4132 4.96947 16.3492C4.64342 16.2853 4.30525 16.345 4.02077 16.5166C3.73629 16.6883 3.52585 16.9596 3.43041 17.2779C3.33497 17.5961 3.36137 17.9385 3.50444 18.2384C3.64752 18.5383 3.89706 18.7742 4.20449 18.9002C4.36635 18.9665 4.53957 19.0004 4.71447 19.0002V19.0002Z"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )
            case "plus":
                return (
                    <svg
                        width={size}
                        height={size}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5 6.5C12.6748 6.5 12.7812 6.63097 12.7812 6.75V17.25C12.7812 17.369 12.6748 17.5 12.5 17.5C12.3252 17.5 12.2188 17.369 12.2188 17.25V6.75C12.2188 6.63097 12.3252 6.5 12.5 6.5Z"
                            stroke={color}
                        />
                        <path
                            d="M12.8906 6.75C12.8906 6.54289 12.7157 6.375 12.5 6.375C12.2843 6.375 12.1094 6.54289 12.1094 6.75V17.25C12.1094 17.4571 12.2843 17.625 12.5 17.625C12.7157 17.625 12.8906 17.4571 12.8906 17.25V6.75Z"
                            stroke={color}
                        />
                        <path
                            d="M18.25 12C18.25 12.119 18.1435 12.25 17.9688 12.25H7.03125C6.85649 12.25 6.75 12.119 6.75 12C6.75 11.881 6.85649 11.75 7.03125 11.75H17.9688C18.1435 11.75 18.25 11.881 18.25 12Z"
                            stroke={color}
                        />
                        <path
                            d="M17.9688 12.375C18.1845 12.375 18.3594 12.2071 18.3594 12C18.3594 11.7929 18.1845 11.625 17.9688 11.625H7.03125C6.81551 11.625 6.64062 11.7929 6.64062 12C6.64062 12.2071 6.81551 12.375 7.03125 12.375H17.9688Z"
                            stroke={color}
                        />
                    </svg>
                );

            case "trash":
                return (
                    <svg
                        width={size}
                        height={size}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.83337 5.5H20.1667"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18.1867 5.69238L17.2792 18.4616C17.2501 18.9265 17.0437 19.3625 16.7026 19.6797C16.3615 19.997 15.9117 20.1712 15.4459 20.1666H6.55423C6.08955 20.1676 5.64141 19.9942 5.29841 19.6807C4.95749 19.3628 4.75091 18.9267 4.7209 18.4616L3.81335 5.69238"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11 8.8916V17.1416"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.75 9.78027V16.1969"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.25 9.78027V16.1969"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.16671 1.83301H12.8334C13.3185 1.83661 13.7827 2.03091 14.1257 2.37395C14.4688 2.71699 14.6631 3.18122 14.6667 3.66634V5.49967H7.33337V3.66634C7.33697 3.18122 7.5313 2.71699 7.87434 2.37395C8.21738 2.03091 8.68159 1.83661 9.16671 1.83301V1.83301Z"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                );

            case "minus":
                return (
                    <svg
                        width={size}
                        height={size}
                        viewBox="0 0 13 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.2061 1.75C12.2061 1.87451 12.098 2 11.934 2L1.12517 2C0.961157 2 0.853113 1.87451 0.853113 1.75C0.853113 1.62549 0.961157 1.5 1.12517 1.5L11.934 1.5C12.098 1.5 12.2061 1.62549 12.2061 1.75Z"
                            stroke={color}
                        />
                        <path
                            d="M11.9343 2.125C12.1475 2.125 12.3203 1.95711 12.3203 1.75C12.3203 1.54289 12.1475 1.375 11.9343 1.375L1.12546 1.375C0.912262 1.375 0.73943 1.54289 0.73943 1.75C0.73943 1.95711 0.912262 2.125 1.12546 2.125L11.9343 2.125Z"
                            stroke={color}
                        />
                    </svg>
                );
            case 'close':
                return (
                    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18" strokeWidth={weight} stroke={color} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 18L18 6" strokeWidth={weight} stroke={color} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )

            default:
                break;
        }
    }

    return (
        <>
            {returnIconWithName({ name, size, color, weight, fill })}
        </>
    )
}

export default LoadSvgIcon
