declare module "@iconscout/react-unicons" {
    import { FC, SVGProps } from "react";
    interface IconProps extends SVGProps<SVGSVGElement> {
        size?: number | string;
        color?: string;
    }
    type IconComponent = FC<IconProps>;

    export const UilAngle: IconComponent;
    export const UilAnalytics: IconComponent;
    export const UilApps: IconComponent;
    export const UilArrowDown: IconComponent;
    export const UilArrowLeft: IconComponent;
    export const UilArrowRight: IconComponent;
    export const UilArrowUp: IconComponent;
    export const UilBars: IconComponent;
    export const UilBolt: IconComponent;
    export const UilBracketsCurly: IconComponent;
    export const UilChartBar: IconComponent;
    export const UilChartGrowth: IconComponent;
    export const UilChartLine: IconComponent;
    export const UilChartPie: IconComponent;
    export const UilCheckCircle: IconComponent;
    export const UilCloud: IconComponent;
    export const UilCode: IconComponent;
    export const UilCodeBranch: IconComponent;
    export const UilCommentAlt: IconComponent;
    export const UilDatabase: IconComponent;
    export const UilDollarSign: IconComponent;
    export const UilEnvelope: IconComponent;
    export const UilExternalLinkAlt: IconComponent;
    export const UilGithub: IconComponent;
    export const UilHdd: IconComponent;
    export const UilLayerGroup: IconComponent;
    export const UilLinkedinAlt: IconComponent;
    export const UilMapPin: IconComponent;
    export const UilRocket: IconComponent;
    export const UilRobot: IconComponent;
    export const UilServer: IconComponent;
    export const UilSync: IconComponent;
    export const UilTimes: IconComponent;
    export const UilTrendingUp: IconComponent;
    export const UilUser: IconComponent;
    export const UilUsersAlt: IconComponent;
}
