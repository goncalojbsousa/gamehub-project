import Link from "next/link"
import { LinkedinIcon } from "./svg/social/linkedin-icon"
import { GithubIcon } from "./svg/social/github-icon"
import Image from "next/image";
import { WebsiteIcon } from "./svg/social/website-icon";

export const Footer = () => {
    return (
        <footer className="bg-color_main p-6 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl w-full">

                <div className="">
                    <h3 className="text-lg text-color_text font-semibold mb-2">GAME HUB</h3>
                    <ul className="text-color_text_sec flex flex-col">
                        <Link className="hover:underline" href="/">Home</Link>
                        <Link className="hover:underline" href="/dashboard">Dashboard</Link>
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-lg text-color_text font-semibold mb-2">ABOUT US</h3>
                    <ul className="text-color_text_sec flex flex-col">
                        <Link className="hover:underline" href="/about">About Us</Link>

                    </ul>
                </div>

                <div className="">
                    <h3 className="text-lg text-color_text font-semibold mb-2">LEGAL</h3>
                    <ul className="text-color_text_sec flex flex-col">
                        <Link className="hover:underline" href="/terms">Terms of Service</Link>
                        <Link className="hover:underline" href="/privacy">Privacy Policy</Link>
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-lg text-color_text font-semibold mb-2">DEVELOPED BY</h3>
                    <div className="flex itens-center">
                        <Image
                            src="/gjbs.jpeg"
                            alt="User profile image"
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full mr-3"
                            draggable={false}
                        />
                        <div>
                            <div className="text-color_text_sec flex flex-col">
                                Gonçalo Sousa
                            </div>
                            <div className="flex">
                                <Link href="https://goncalosousa.netlify.app" target="_blank">
                                    <WebsiteIcon className="fill-color_icons"/>
                                </Link>
                                <Link href="https://github.com/goncalojbsousa" target="_blank">
                                    <GithubIcon className="fill-color_icons"/>
                                </Link>
                                <Link href="https://www.linkedin.com/in/goncalojbsousa/" target="_blank">
                                    <LinkedinIcon className="fill-color_icons"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <Link href="https://www.igdb.com" target="_blank" className="flex hover:underline items-center">
                    <p className="text-color_text mr-2">Games data is powered by</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-color_icons" width="2.2em" height="2.2em" viewBox="249.44 647.1 1461.24 702.85">
                        <g id="text_logo">
                            <path d=" M 249.44 647.14 C 736.51 647.13 1223.59 647.21 1710.67 647.10 C 1710.68 881.38 1710.69 1115.67 1710.66 1349.95 C 1615.86 1334.68 1520.63 1321.89 1425.05 1312.53 C 1080.16 1278.28 731.31 1284.02 387.73 1329.60 C 341.52 1335.59 295.47 1342.74 249.44 1349.92 C 249.43 1115.66 249.45 881.40 249.44 647.14 M 292.45 690.16 C 292.47 893.35 292.45 1096.55 292.45 1299.74 C 747.32 1230.12 1212.80 1230.06 1667.66 1299.76 C 1667.69 1096.55 1667.67 893.34 1667.67 690.13 C 1209.26 690.20 750.85 690.15 292.45 690.16 Z" />
                            <path d=" M 606.98 849.96 C 636.79 820.94 678.61 805.48 720.03 806.13 C 748.31 806.03 777.18 810.46 802.61 823.37 C 815.72 829.91 827.70 838.49 838.88 847.92 C 824.81 864.91 810.62 881.79 796.71 898.90 C 788.34 892.63 780.20 885.94 770.94 880.98 C 752.35 870.49 730.45 866.86 709.32 868.40 C 683.46 870.61 659.80 886.20 645.79 907.79 C 627.73 934.91 624.92 970.60 635.86 1000.97 C 642.48 1019.42 655.12 1035.79 671.77 1046.24 C 688.33 1056.88 708.44 1061.15 727.96 1059.98 C 747.98 1059.21 768.36 1053.75 784.66 1041.78 C 784.50 1027.38 784.66 1012.97 784.58 998.57 C 762.15 998.63 739.71 998.55 717.28 998.61 C 717.23 979.29 717.40 959.97 717.20 940.66 C 761.32 940.38 805.45 940.76 849.57 940.47 C 849.84 984.58 849.54 1028.70 849.72 1072.81 C 819.35 1099.03 781.02 1116.23 740.99 1120.14 C 701.91 1124.43 660.71 1117.24 627.40 1095.69 C 600.71 1078.68 580.09 1052.59 569.30 1022.87 C 558.65 993.63 556.55 961.41 562.53 930.93 C 568.76 900.29 584.34 871.56 606.98 849.96 Z" />
                            <path d=" M 412.22 811.37 C 434.59 811.42 456.96 811.33 479.33 811.42 C 479.28 912.90 479.33 1014.39 479.31 1115.88 C 456.95 1115.87 434.59 1115.84 412.23 1115.89 C 412.22 1014.39 412.24 912.88 412.22 811.37 Z" />
                            <path d=" M 931.25 811.38 C 972.17 811.39 1013.09 811.38 1054.01 811.39 C 1091.21 811.80 1128.88 823.34 1157.99 846.93 C 1183.44 867.28 1201.49 896.55 1208.37 928.40 C 1216.70 966.86 1211.27 1008.80 1190.62 1042.63 C 1174.23 1069.90 1148.49 1091.13 1119.07 1103.04 C 1098.46 1111.41 1076.23 1115.81 1053.98 1115.87 C 1013.08 1115.87 972.17 1115.85 931.26 1115.88 C 931.26 1014.38 931.28 912.88 931.25 811.38 M 998.55 871.86 C 998.45 933.04 998.56 994.22 998.49 1055.41 C 1011.33 1055.39 1024.18 1055.40 1037.02 1055.40 C 1047.36 1055.32 1057.79 1055.89 1068.03 1053.99 C 1088.10 1050.87 1107.44 1041.22 1120.71 1025.65 C 1132.31 1012.31 1139.05 995.20 1141.08 977.75 C 1142.97 960.03 1141.47 941.67 1134.60 925.11 C 1127.53 907.51 1114.31 892.45 1097.61 883.42 C 1082.53 875.02 1065.11 871.85 1047.99 871.84 C 1031.51 871.88 1015.03 871.84 998.55 871.86 Z" />
                            <path d=" M 1288.80 811.57 C 1330.15 811.13 1371.54 811.51 1412.90 811.38 C 1424.26 811.54 1435.65 810.91 1446.97 812.08 C 1467.08 813.95 1487.46 819.82 1503.55 832.45 C 1517.54 843.24 1527.36 859.35 1530.07 876.86 C 1532.03 893.42 1531.12 911.06 1522.97 925.99 C 1516.04 939.38 1504.10 949.32 1491.26 956.78 C 1508.37 963.22 1525.29 972.72 1535.94 988.04 C 1545.87 1002.19 1548.77 1020.07 1547.80 1037.03 C 1547.40 1054.27 1541.09 1071.56 1529.28 1084.27 C 1517.35 1097.30 1500.95 1105.31 1484.12 1109.96 C 1470.05 1113.75 1455.50 1115.70 1440.94 1115.84 C 1390.26 1115.88 1339.58 1115.89 1288.90 1115.84 C 1288.82 1014.41 1289.01 912.99 1288.80 811.57 M 1354.30 870.27 C 1354.37 891.67 1354.24 913.08 1354.36 934.49 C 1376.56 934.35 1398.76 934.52 1420.96 934.40 C 1431.03 933.86 1441.46 932.43 1450.36 927.35 C 1457.39 923.37 1462.73 916.24 1463.78 908.14 C 1465.26 899.01 1463.69 888.76 1457.02 881.93 C 1449.00 873.67 1437.04 871.03 1425.95 870.37 C 1402.07 870.17 1378.18 870.37 1354.30 870.27 M 1354.29 990.41 C 1354.32 1012.64 1354.35 1034.89 1354.27 1057.13 C 1375.50 1057.33 1396.74 1057.15 1417.98 1057.21 C 1428.58 1057.08 1439.29 1057.80 1449.79 1055.91 C 1458.99 1054.43 1468.48 1050.97 1474.69 1043.71 C 1480.95 1036.44 1482.26 1026.10 1480.69 1016.93 C 1479.44 1009.15 1474.55 1002.16 1467.79 998.15 C 1458.62 992.57 1447.64 990.81 1437.06 990.45 C 1409.47 990.37 1381.88 990.45 1354.29 990.41 Z" />
                        </g>
                    </svg>
                </Link>

            </div>
        </footer>
    )
}
