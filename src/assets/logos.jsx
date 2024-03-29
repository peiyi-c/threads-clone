import { Box, Button } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import useColors from "../hooks/useColors";
import PropTypes from "prop-types";
// Header
export const Threads = ({ h = 32, w = 32 }) => {
  const { logo } = useColors();
  return (
    <Box
      cursor={"pointer"}
      _hover={{
        transform: "scale(1.105)",
        transition: "transform .15s ease-in",
      }}
    >
      <svg
        aria-label="Threads"
        fill={logo}
        height={h}
        role="img"
        viewBox="0 0 192 192"
        width={w}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
      </svg>
    </Box>
  );
};

Threads.propTypes = {
  h: PropTypes.string,
  w: PropTypes.string,
};

// Navigation
export const Back = ({ h = 26, w = 26 }) => {
  const { logo } = useColors();

  return (
    <svg
      aria-label="Back"
      role="img"
      viewBox="0 0 24 24"
      fill={logo}
      height={h}
      width={w}
    >
      <title>Back</title>
      <line
        style={{
          fill: "transparent",
          stroke: `${logo}`,
          strokeWidth: 1.7,
          strokeLinecap: "round",
        }}
        x1={2.909}
        x2={22.001}
        y1={12.004}
        y2={12.004}
      />
      <polyline
        style={{
          fill: "transparent",
          stroke: `${logo}`,
          strokeWidth: 1.7,
          strokeLinecap: "round",
        }}
        points="9.276 4.726 2.001 12.004 9.276 19.274"
      />
    </svg>
  );
};
Back.propTypes = {
  h: PropTypes.number,
  w: PropTypes.number,
};

export const Home = () => {
  const { logo, logoSub } = useColors();
  const { pathname } = useLocation();

  return (
    <Box color={pathname !== "/" ? logoSub : logo}>
      <svg
        aria-label="home"
        role="img"
        viewBox="0 0 26 26"
        fill="transparent"
        height={26}
        width={26}
      >
        <title>home</title>
        <path
          d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H9.25C9.52614 22.7497 9.75 22.5258 9.75 22.2497V17.6822V16.4997C9.75 14.7048 11.2051 13.2497 13 13.2497C14.7949 13.2497 16.25 14.7048 16.25 16.4997V17.6822V22.2497C16.25 22.5258 16.4739 22.7497 16.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94814 21.8954 8.99882L16.1454 4.34539C14.3112 2.86094 11.6888 2.86094 9.85455 4.34539L4.10455 8.99882C2.93153 9.94814 2.25 11.3765 2.25 12.8855Z"
          fill={pathname !== "/" ? "transparent" : "currentColor"}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2.5}
        />
      </svg>
    </Box>
  );
};
export const Search = () => {
  const { logo, logoSub } = useColors();
  const { pathname } = useLocation();

  return (
    <Box color={pathname !== "/search" ? logoSub : logo}>
      <svg
        aria-label="search"
        role="img"
        viewBox="0 0 26 26"
        style={{
          fill: "transparent",
          height: 26,
          width: 26,
        }}
      >
        <title>search</title>
        <path
          clipRule="evenodd"
          d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </Box>
  );
};
export const Create = () => {
  const { logo, logoSub } = useColors();

  return (
    <Box color={logoSub} _active={{ color: logo }} _focus={{ color: logo }}>
      <svg
        aria-label="create"
        role="img"
        viewBox="0 0 26 26"
        style={{
          fill: "transparent",
          height: 26,
          width: 26,
        }}
      >
        <title>create</title>
        <path
          d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2.5}
        />
        <path
          d="M21.75 4.25L13.75 12.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2.5}
        />
      </svg>
    </Box>
  );
};
export const Activity = () => {
  const { logo, logoSub } = useColors();
  const { pathname } = useLocation();

  return (
    <Box color={logoSub}>
      <svg
        aria-label="activity"
        role="img"
        viewBox="0 0 26 26"
        style={{
          height: 26,
          width: 26,
        }}
        fill={pathname !== "/activity" ? "transparent" : `${logo}`}
      >
        <title>activity</title>
        <path
          d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z"
          stroke={pathname !== "/activity" ? "currentColor" : `${logo}`}
          strokeWidth={2.5}
        />
      </svg>
    </Box>
  );
};
export const Profile = () => {
  const { logo, logoSub } = useColors();
  const { ausername } = useParams();

  return (
    <Box color={logoSub}>
      <svg
        aria-label="profile"
        role="img"
        viewBox="0 0 26 26"
        style={{
          height: 26,
          width: 26,
        }}
        fill={ausername ? `${logo}` : "transparent"}
      >
        <title>profile</title>
        <circle
          cx={13}
          cy={7.25}
          r={4}
          stroke={ausername ? `${logo}` : "currentColor"}
          strokeWidth={2.5}
        />
        <path
          d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z"
          stroke={ausername ? `${logo}` : "currentColor"}
          strokeWidth={2.5}
        />
      </svg>
    </Box>
  );
};
export const Menu = ({ handleClick }) => {
  const { logo, logoSub } = useColors();

  return (
    <Box
      _hover={{
        svg: { color: `${logo}` },
      }}
      _active={{
        transform: "scale(0.9)",
        transition: "transform 0.11s ease-in-out",
      }}
      color={logoSub}
      onClick={handleClick}
    >
      <svg
        aria-label="Menu"
        role="img"
        viewBox="0 0 24 24"
        fill={logo}
        height={24}
        width={24}
      >
        <title>{"Menu"}</title>
        <rect
          width="100%"
          height={1}
          style={{
            fill: "currentcolor",
            strokeWidth: 1.1,
            stroke: "currentcolor",
          }}
          rx={1.25}
          x={3}
          y={7}
        />
        <rect
          width="100%"
          height={1}
          style={{
            fill: "currentcolor",
            strokeWidth: 1.1,
            stroke: "currentcolor",
          }}
          rx={1.25}
          x={10}
          y={15}
        />
      </svg>
    </Box>
  );
};

Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

// Comment
export const AttachMedia = () => {
  const { subText } = useColors();
  return (
    <Box color={subText}>
      <svg
        aria-label="Attach media"
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        height={20}
        width={20}
      >
        <title>Attach media</title>
        <g>
          <path
            clipRule="evenodd"
            d="M2.00207 9.4959C1.65132 7.00019 1.47595 5.75234 1.82768 4.73084C2.13707 3.83231 2.72297 3.05479 3.50142 2.50971C4.38639 1.89005 5.63425 1.71467 8.12996 1.36392L10.7047 1.00207C13.2004 0.651325 14.4482 0.47595 15.4697 0.827679C16.3682 1.13707 17.1458 1.72297 17.6908 2.50142C17.9171 2.82454 18.0841 3.19605 18.2221 3.65901C17.7476 3.64611 17.2197 3.64192 16.6269 3.64055C16.5775 3.5411 16.5231 3.44881 16.4621 3.36178C16.0987 2.84282 15.5804 2.45222 14.9814 2.24596C14.3004 2.01147 13.4685 2.12839 11.8047 2.36222L7.44748 2.97458C5.78367 3.20841 4.95177 3.32533 4.36178 3.73844C3.84282 4.10182 3.45222 4.62017 3.24596 5.21919C3.01147 5.90019 3.12839 6.73209 3.36222 8.3959L3.97458 12.7531C4.15588 14.0431 4.26689 14.833 4.50015 15.3978C4.50083 16.3151 4.50509 17.0849 4.53201 17.7448C4.13891 17.4561 3.79293 17.1036 3.50971 16.6991C2.89005 15.8142 2.71467 14.5663 2.36392 12.0706L2.00207 9.4959Z"
            fill="currentColor"
            fillRule="evenodd"
          />
          <g>
            <g clipPath="url(#clip0_16905_4767)">
              <rect
                fill="none"
                height={15.5}
                rx={3.75}
                stroke="currentColor"
                strokeWidth={1.5}
                width={15.5}
                x={6.75}
                y={5.8894}
              />
              <path
                d="M6.6546 17.8894L8.59043 15.9536C9.1583 15.3857 10.0727 15.3658 10.6647 15.9085L12.5062 17.5966C12.9009 17.9584 13.5105 17.9451 13.8891 17.5665L17.8181 13.6376C18.4038 13.0518 19.3536 13.0518 19.9394 13.6375L22.0663 15.7644"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={1.5}
              />
              <circle cx={10.75} cy={9.8894} fill="currentColor" r={1.25} />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_16905_4767">
            <rect
              fill="white"
              height={17}
              rx={4.5}
              width={17}
              x={6}
              y={5.1394}
            />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};
export const Tag = () => {
  const { subText } = useColors();
  return (
    <Box color={subText}>
      <svg
        aria-label="Add a tag"
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        height={20}
        width={20}
      >
        <title>Add a tag</title>
        <path color="currentColor" stroke="currentColor" d="M5 8.50012H20" />
        <path color="currentColor" stroke="currentColor" d="M4 15.0001H20" />
        <path
          color="currentColor"
          stroke="currentColor"
          d="M7.59985 19.9399L10.3999 4.06036"
        />
        <path
          color="currentColor"
          stroke="currentColor"
          d="M13.5999 19.9399L16.3999 4.06036"
        />
      </svg>
    </Box>
  );
};
export const Poll = () => {
  const { subText } = useColors();
  return (
    <Box color={subText}>
      <svg
        aria-label="Add a poll"
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        height={20}
        width={20}
      >
        <title>Add a poll</title>
        <rect
          fill="currentColor"
          height={1.5}
          rx={0.75}
          width={8}
          x={4}
          y={5.5}
        />
        <rect
          fill="currentColor"
          height={1.5}
          rx={0.75}
          width={16}
          x={4}
          y={11.25}
        />
        <rect
          fill="currentColor"
          height={1.5}
          rx={0.75}
          width={11}
          x={4}
          y={17}
        />
      </svg>
    </Box>
  );
};
export const UnLike = () => {
  const { logo } = useColors();
  return (
    <svg
      aria-label="Unlike"
      role="img"
      viewBox="0 0 20 20"
      fill="transparent"
      height={20}
      width={20}
    >
      <title>{"Unlike"}</title>
      <path
        stroke={logo}
        strokeWidth={1.7}
        d="M1.2 7.328c0 3.66 3.118 7.269 7.99 10.347.27.163.592.325.81.325.226 0 .548-.162.81-.325 4.87-3.078 7.99-6.687 7.99-10.347C18.8 4.189 16.595 2 13.737 2c-1.655 0-2.953.753-3.738 1.881C9.233 2.761 7.926 2 6.262 2c-2.85 0-5.063 2.19-5.063 5.328Z"
      />
    </svg>
  );
};
export const Like = () => {
  return (
    <svg
      aria-label="Like"
      role="img"
      viewBox="0 0 20 20"
      fill="#FF3040"
      height={20}
      width={20}
    >
      <title>{"Like"}</title>
      <path
        stroke="#FF3040"
        strokeWidth={1.7}
        d="M1.2 7.328c0 3.66 3.118 7.269 7.99 10.347.27.163.592.325.81.325.226 0 .548-.162.81-.325 4.87-3.078 7.99-6.687 7.99-10.347C18.8 4.189 16.595 2 13.737 2c-1.655 0-2.953.753-3.738 1.881C9.233 2.761 7.926 2 6.262 2c-2.85 0-5.063 2.19-5.063 5.328Z"
      />
    </svg>
  );
};

export const Reply = () => {
  const { logo } = useColors();
  return (
    <svg
      aria-label="Reply"
      role="img"
      viewBox="0 0 24 24"
      fill="transparent"
      height={20}
      width={20}
    >
      <title>{"Reply"}</title>
      <path
        stroke={logo}
        strokeWidth={1.7}
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
      />
    </svg>
  );
};
export const Repost = ({ handleClick }) => {
  const { logo } = useColors();
  return (
    <Button variant={"ghost"} size={"sm"} onClick={handleClick}>
      <svg
        aria-label="Repost"
        role="img"
        viewBox="0 0 24 24"
        fill={logo}
        height={20}
        width={20}
      >
        <title>{"Repost"}</title>
        <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z" />
      </svg>
    </Button>
  );
};
Repost.propTypes = {
  handleClick: PropTypes.func,
};
export const Reposted = ({ handleClick }) => {
  const { logo } = useColors();
  return (
    <Button variant={"ghost"} size={"sm"} onClick={handleClick}>
      <svg
        aria-label="Reposten"
        role="img"
        viewBox="0 0 24 24"
        fill={logo}
        height={20}
        width={20}
      >
        <title>{"Reposted"}</title>
        <path d="M16.00092,6.00098c.13013,0,.2597-.02649,.3819-.07703,.24493-.10132,.43982-.29626,.54114-.54114,.10095-.24426,.10095-.51929,0-.76367-.0509-.12305-.12451-.23401-.21729-.32642L13.20697,.79297c-.39062-.39062-1.02344-.39062-1.41406,0s-.39062,1.02344,0,1.41406l1.79395,1.79395h-5.31543c-2.90625,0-5.27148,2.36426-5.27148,5.27051v4.22852c0,.55273,.44727,1,1,1s1-.44727,1-1v-4.22852c0-1.80371,1.46777-3.27051,3.27148-3.27051h7.72949Zm3.99707,3.49609c-.55273,0-1,.44727-1,1v4.22754c0,1.80371-1.4668,3.27051-3.27051,3.27051H7.99701c-.13007,0-.2597,.02649-.38184,.0769-.24487,.10132-.43982,.29626-.54114,.54126-.10107,.24426-.10107,.51953,0,.76379,.05084,.12292,.12439,.23389,.21716,.32629l3.50171,3.50366c.19531,.19531,.45117,.29297,.70703,.29297s.51172-.09766,.70703-.29297c.39062-.39062,.39062-1.02344,0-1.41406l-1.79688-1.79785h5.31738c2.90625,0,5.27051-2.36426,5.27051-5.27051v-4.22754c0-.55273-.44727-1-1-1Zm-5.20508-.51074l-3.90527,3.90625-1.68066-1.68066c-.39062-.39062-1.02344-.39062-1.41406,0s-.39062,1.02344,0,1.41406l2.3877,2.3877c.1875,.1875,.44141,.29297,.70703,.29297s.51953-.10547,.70703-.29297l4.6123-4.61328c.39062-.39062,.39062-1.02344,0-1.41406s-1.02344-.39062-1.41406,0Z" />
      </svg>
    </Button>
  );
};
Reposted.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export const Share = ({ handleClick }) => {
  const { logo } = useColors();
  return (
    <Button variant={"ghost"} size={"sm"} onClick={handleClick}>
      <svg
        aria-label="Share"
        role="img"
        viewBox="0 0 24 24"
        style={{
          marginTop: "4px",
        }}
        fill="currentColor"
        height={20}
        width={20}
      >
        <title>{"Share"}</title>
        <line
          style={{
            fill: "transparent",
            stroke: `${logo}`,
            strokeWidth: 1.7,
          }}
          x1={22}
          x2={9.218}
          y1={3}
          y2={10.083}
        />
        <polygon
          style={{
            fill: "transparent",
            stroke: `${logo}`,
            strokeWidth: 1.7,
          }}
          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        />
      </svg>
    </Button>
  );
};

Share.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export const Follow = () => {
  const { logo } = useColors();
  return (
    <svg
      aria-label="Follow"
      role="img"
      viewBox="0 0 10 9"
      fill={logo}
      height={10}
      width={10}
    >
      <title>{"Follow"}</title>
      <path d="M4.99512 8.66895C4.64355 8.66895 4.35059 8.36621 4.35059 8.03418V5.12891H1.50391C1.17188 5.12891 0.864258 4.83594 0.864258 4.47949C0.864258 4.12793 1.17188 3.83008 1.50391 3.83008H4.35059V0.924805C4.35059 0.583008 4.64355 0.290039 4.99512 0.290039C5.35156 0.290039 5.64453 0.583008 5.64453 0.924805V3.83008H8.49121C8.83301 3.83008 9.13086 4.12793 9.13086 4.47949C9.13086 4.83594 8.83301 5.12891 8.49121 5.12891H5.64453V8.03418C5.64453 8.36621 5.35156 8.66895 4.99512 8.66895Z" />
    </svg>
  );
};
export const More = ({ handleClick }) => {
  const { logo } = useColors();
  return (
    <Button variant={"ghost"} size={"sm"} onClick={handleClick}>
      <svg
        aria-label="More"
        role="img"
        viewBox="0 0 24 24"
        fill={logo}
        height={20}
        width={20}
      >
        <title>{"More"}</title>
        <circle cx={12} cy={12} r={1.5} />
        <circle cx={6} cy={12} r={1.5} />
        <circle cx={18} cy={12} r={1.5} />
      </svg>
    </Button>
  );
};
More.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export const Quote = () => {
  const { logo } = useColors();
  return (
    <svg
      aria-label="Quote"
      role="img"
      viewBox="0 0 20 20"
      fill={logo}
      height={20}
      width={20}
    >
      <title>{"Quote"}</title>
      <path d="M6.362 18.772c.515 0 .913-.232 1.544-.789l2.83-2.49h4.74c2.516 0 3.985-1.494 3.985-3.976V4.984C19.46 2.502 17.99 1 15.477 1H4.984C2.47 1 1 2.494 1 4.984v6.533c0 2.49 1.536 3.976 3.876 3.976h.291v1.943c0 .821.448 1.336 1.195 1.336Zm.457-2.117v-2.332c0-.532-.233-.722-.722-.722H5.076c-1.47 0-2.175-.748-2.175-2.184v-6.34C2.9 3.64 3.606 2.9 5.076 2.9h10.31c1.46 0 2.174.739 2.174 2.175v6.342c0 1.436-.714 2.183-2.175 2.183h-4.773c-.54 0-.788.09-1.178.481l-2.615 2.573Zm-.523-8.89c0 .963.606 1.677 1.519 1.677.382 0 .73-.091.955-.357h.116c-.241.614-.83 1.08-1.494 1.237-.266.066-.374.199-.374.398 0 .233.183.382.432.382.904 0 2.473-1.08 2.473-2.972 0-1.17-.73-2.083-1.867-2.083-1.013 0-1.76.714-1.76 1.718Zm4.408 0c0 .963.606 1.677 1.519 1.677.381 0 .73-.091.954-.357h.117c-.241.614-.839 1.08-1.495 1.237-.265.066-.373.199-.373.398 0 .233.182.382.431.382.905 0 2.474-1.08 2.474-2.972 0-1.17-.73-2.083-1.868-2.083-1.012 0-1.76.714-1.76 1.718Z" />
    </svg>
  );
};

export const Next = () => {
  const { logo } = useColors();
  return (
    <svg
      aria-label="Next"
      role="img"
      viewBox="0 0 24 24"
      fill={logo}
      height={16}
      width={16}
    >
      <title>{"Next"}</title>
      <polyline
        style={{
          fill: "transparent",
          stroke: `${logo}`,
          strokeWidth: 1.7,
          strokeLinecap: "round",
        }}
        points="16.502 3 7.498 12 16.502 21"
      />
    </svg>
  );
};

// Carousel
export const Continue = () => {
  const { subText } = useColors();
  return (
    <svg
      aria-label="Continue"
      role="img"
      viewBox="0 0 24 24"
      fill={subText}
      height={16}
      width={16}
    >
      <title>{"Continue"}</title>
      <line
        style={{
          fill: `${subText}`,
          stroke: `${subText}`,
        }}
        x1={2.909}
        x2={22.001}
        y1={12.004}
        y2={12.004}
      />
      <polyline
        style={{
          fill: "transparent",
          stroke: `${subText}`,
        }}
        points="9.276 4.726 2.001 12.004 9.276 19.274"
      />
    </svg>
  );
};

// Switch
const Switch = () => {
  const { subText } = useColors();
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 12 16"
      xmlns="http://www.w3.org/2000/svg"
      color={subText}
      height={16}
      width={12}
    >
      <path
        d="M0.640625 11.0645C0.640625 10.8594 0.722656 10.6484 0.86914 10.5078L4.16211 7.25586C4.31445 7.10937 4.51367 7.02148 4.70703 7.02148C5.14062 7.02148 5.43359 7.33203 5.43359 7.74805C5.43359 7.97656 5.3457 8.14062 5.20508 8.27539L3.86914 9.57617L2.91406 10.373L4.25 10.3145L11.041 10.3145C11.498 10.3145 11.8145 10.6191 11.8145 11.0645C11.8145 11.5098 11.498 11.8145 11.041 11.8145L4.25 11.8145L2.91406 11.7559L3.86914 12.5527L5.20508 13.8535C5.3457 13.9883 5.43359 14.1523 5.43359 14.3809C5.43359 14.7969 5.14062 15.1074 4.70703 15.1074C4.51367 15.1074 4.31445 15.0195 4.16211 14.873L0.86914 11.6211C0.722656 11.4746 0.640625 11.2695 0.640625 11.0645ZM0.640625 4.92969C0.640625 4.48437 0.957031 4.17969 1.41406 4.17969L8.20508 4.17969L9.54102 4.23828L8.58594 3.44141L7.25 2.14648C7.10937 2.00586 7.02148 1.8418 7.02148 1.61328C7.02148 1.19727 7.31445 0.892578 7.74805 0.892578C7.94141 0.892578 8.14062 0.980469 8.29297 1.12695L11.5859 4.37305C11.7324 4.51953 11.8145 4.72461 11.8145 4.92969C11.8145 5.13477 11.7324 5.3457 11.5859 5.48633L8.29297 8.73828C8.14062 8.88477 7.94141 8.97266 7.74805 8.97266C7.31445 8.97266 7.02148 8.66797 7.02148 8.25195C7.02148 8.02344 7.10937 7.85937 7.25 7.72461L8.58594 6.41797L9.54102 5.62109L8.20508 5.68555L1.41406 5.68555C0.957031 5.68555 0.640625 5.375 0.640625 4.92969Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default Switch;

// Activity
export const LikeAct = () => {
  return (
    <svg
      aria-label="LikeAct"
      role="img"
      viewBox="0 0 20 20"
      fill={"#FFFFFF"}
      height={10}
      width={10}
    >
      <title>{"LikeAct"}</title>
      <path
        stroke="#FFFFFF"
        strokeWidth={1.7}
        d="M1.2 7.328c0 3.66 3.118 7.269 7.99 10.347.27.163.592.325.81.325.226 0 .548-.162.81-.325 4.87-3.078 7.99-6.687 7.99-10.347C18.8 4.189 16.595 2 13.737 2c-1.655 0-2.953.753-3.738 1.881C9.233 2.761 7.926 2 6.262 2c-2.85 0-5.063 2.19-5.063 5.328Z"
      />
    </svg>
  );
};
export const RepostAct = () => {
  return (
    <svg
      aria-label="RepostAct"
      role="img"
      viewBox="0 0 24 24"
      fill={"#FFFFFF"}
      height={10}
      width={10}
    >
      <title>{"RepostAct"}</title>
      <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z" />
    </svg>
  );
};
export const QuoteAct = () => {
  return (
    <svg
      aria-label=""
      role="img"
      viewBox="0 0 18 18"
      fill={"#FFFFFF"}
      height={18}
      width={18}
    >
      <title>{"QuoteAct"}</title>
      <path d="M5 8.6658C5 8.3518 5.07633 8.07013 5.22899 7.82078C5.38407 7.56912 5.59367 7.36941 5.85779 7.22165C6.12191 7.07388 6.42117 7 6.75557 7C7.09481 7 7.40618 7.08081 7.68969 7.24242C7.97562 7.40404 8.2046 7.63838 8.37665 7.94545C8.54869 8.25022 8.63471 8.61847 8.63471 9.05022C8.63471 9.43348 8.56323 9.78557 8.42026 10.1065C8.27972 10.4274 8.08829 10.7091 7.84598 10.9515C7.67151 11.127 7.47282 11.2817 7.24989 11.4156C7.02938 11.5472 6.79434 11.6522 6.54475 11.7307C6.46479 11.7538 6.39936 11.7711 6.34848 11.7827C6.29759 11.7942 6.24186 11.8 6.18128 11.8C6.09647 11.8 6.02862 11.7769 5.97774 11.7307C5.92685 11.6846 5.90141 11.6257 5.90141 11.5541C5.90141 11.5149 5.90868 11.4802 5.92322 11.4502C5.93776 11.4202 5.95956 11.3948 5.98864 11.374C6.01287 11.3532 6.04559 11.3348 6.08678 11.3186C6.1304 11.3025 6.18128 11.2851 6.23944 11.2667C6.43813 11.2113 6.62472 11.1362 6.79918 11.0416C6.97607 10.9469 7.136 10.8384 7.27896 10.716C7.42193 10.5913 7.5443 10.4551 7.64607 10.3074C7.75027 10.1596 7.82902 10.0038 7.88233 9.83983H7.78419C7.63395 9.99913 7.45949 10.1192 7.26079 10.2C7.06209 10.2808 6.85491 10.3212 6.63925 10.3212C6.33152 10.3212 6.05407 10.2473 5.80691 10.0996C5.55975 9.9518 5.36347 9.75325 5.21808 9.5039C5.07269 9.25224 5 8.97287 5 8.6658ZM9.36529 8.6658C9.36529 8.3518 9.44162 8.07013 9.59428 7.82078C9.74936 7.56912 9.95896 7.36941 10.2231 7.22165C10.4872 7.07388 10.7865 7 11.1209 7C11.4601 7 11.7715 7.08081 12.055 7.24242C12.3409 7.40404 12.5699 7.63838 12.7419 7.94545C12.914 8.25022 13 8.61847 13 9.05022C13 9.43348 12.9285 9.78557 12.7856 10.1065C12.645 10.4274 12.4512 10.7091 12.204 10.9515C12.032 11.127 11.8345 11.2817 11.6115 11.4156C11.391 11.5472 11.156 11.6522 10.9064 11.7307C10.8289 11.7538 10.7634 11.7711 10.7101 11.7827C10.6592 11.7942 10.6059 11.8 10.5502 11.8C10.4654 11.8 10.3963 11.7769 10.343 11.7307C10.2897 11.6846 10.2631 11.6257 10.2631 11.5541C10.2631 11.5149 10.2703 11.4802 10.2849 11.4502C10.3018 11.4202 10.3249 11.3948 10.3539 11.374C10.3782 11.3532 10.4109 11.3348 10.4521 11.3186C10.4933 11.3025 10.5429 11.2851 10.6011 11.2667C10.7998 11.2113 10.9876 11.1362 11.1645 11.0416C11.3414 10.9469 11.5013 10.8384 11.6443 10.716C11.7872 10.5913 11.9096 10.4551 12.0114 10.3074C12.1156 10.1596 12.1931 10.0038 12.244 9.83983H12.1495C11.9968 9.99913 11.8211 10.1192 11.6224 10.2C11.4262 10.2808 11.2202 10.3212 11.0045 10.3212C10.6968 10.3212 10.4194 10.2473 10.1722 10.0996C9.92503 9.9518 9.72876 9.75325 9.58337 9.5039C9.43798 9.25224 9.36529 8.97287 9.36529 8.6658Z" />
    </svg>
  );
};
