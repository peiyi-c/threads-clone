/* eslint-disable react/prop-types */
import { useColorModeValue } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { ContentContext } from "../contexts/contentContext";
import { useNavigate } from "react-router-dom";
// Header
export const Threads = () => {
  const color = useColorModeValue("#000000", "#F3F5F7");
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
        fill={color}
        height="32"
        role="img"
        viewBox="0 0 192 192"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
      </svg>
    </Box>
  );
};
// Navigation
export const Back = () => {
  const color = useColorModeValue("#000000", "#F3F5F7");
  const navigate = useNavigate();

  return (
    <Button>
      <svg
        aria-label="Back"
        role="img"
        viewBox="0 0 24 24"
        style={{
          fill: `${color}`,
          height: 26,
          width: 26,
        }}
        onClick={() => navigate(-1)}
      >
        <title>Back</title>
        <line
          style={{
            fill: "transparent",
            stroke: `${color}`,
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
            stroke: `${color}`,
            strokeWidth: 1.7,
            strokeLinecap: "round",
          }}
          points="9.276 4.726 2.001 12.004 9.276 19.274"
        />
      </svg>
    </Button>
  );
};
export const Home = () => {
  const color = useColorModeValue("#B8B8B8", "#4D4D4D");
  const colorFill = useColorModeValue("#000000", "#F3F5F7");
  const { content } = useContext(ContentContext);

  return (
    <Box
      style={{
        color: content !== "Home" ? color : colorFill,
      }}
    >
      <svg
        aria-label="Home"
        role="img"
        viewBox="0 0 26 26"
        style={{
          fill: "transparent",
          height: 26,
          width: 26,
        }}
      >
        <title>Home</title>
        <path
          d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H9.25C9.52614 22.7497 9.75 22.5258 9.75 22.2497V17.6822V16.4997C9.75 14.7048 11.2051 13.2497 13 13.2497C14.7949 13.2497 16.25 14.7048 16.25 16.4997V17.6822V22.2497C16.25 22.5258 16.4739 22.7497 16.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94814 21.8954 8.99882L16.1454 4.34539C14.3112 2.86094 11.6888 2.86094 9.85455 4.34539L4.10455 8.99882C2.93153 9.94814 2.25 11.3765 2.25 12.8855Z"
          fill={content !== "Home" ? "transparent" : "currentColor"}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2.5}
        />
      </svg>
    </Box>
  );
};
export const Search = () => {
  const color = useColorModeValue("#B8B8B8", "#4D4D4D");
  const colorFill = useColorModeValue("#000000", "#F3F5F7");
  const { content } = useContext(ContentContext);
  return (
    <Box
      style={{
        color: content !== "Search" ? color : colorFill,
      }}
    >
      <svg
        aria-label="Search"
        role="img"
        viewBox="0 0 26 26"
        style={{
          fill: "transparent",
          height: 26,
          width: 26,
        }}
      >
        <title>Search</title>
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
  const color = useColorModeValue("#B8B8B8", "#4D4D4D");
  const colorFill = useColorModeValue("#000000", "#F3F5F7");
  const { content } = useContext(ContentContext);

  return (
    <Box
      style={{
        color: content !== "Create" ? color : colorFill,
      }}
    >
      <svg
        aria-label="Create"
        role="img"
        viewBox="0 0 26 26"
        style={{
          fill: "transparent",
          height: 26,
          width: 26,
        }}
      >
        <title>Create</title>
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
  const color = useColorModeValue("#B8B8B8", "#4D4D4D");
  const colorFill = useColorModeValue("#000000", "#F3F5F7");
  const { content } = useContext(ContentContext);
  return (
    <Box
      style={{
        color: `${color}`,
      }}
    >
      <svg
        aria-label="Activity"
        role="img"
        viewBox="0 0 26 26"
        style={{
          height: 26,
          width: 26,
        }}
        fill={content !== "Activity" ? "transparent" : `${colorFill}`}
      >
        <title>Activity</title>
        <path
          d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z"
          stroke={content !== "Activity" ? "currentColor" : `${colorFill}`}
          strokeWidth={2.5}
        />
      </svg>
    </Box>
  );
};
export const Profile = () => {
  const color = useColorModeValue("#B8B8B8", "#4D4D4D");
  const colorFill = useColorModeValue("#000000", "#F3F5F7");
  const { content } = useContext(ContentContext);
  return (
    <Box
      style={{
        color: `${color}`,
      }}
    >
      <svg
        aria-label="Profile"
        role="img"
        viewBox="0 0 26 26"
        className="x1lliihq xffa9am x1jwls1v x1n2onr6 x17fnjtu x3egl4o"
        style={{
          height: 26,
          width: 26,
        }}
        fill={content !== "Profile" ? "transparent" : `${colorFill}`}
      >
        <title>Profile</title>
        <circle
          cx={13}
          cy={7.25}
          r={4}
          stroke={content !== "Profile" ? "currentColor" : `${colorFill}`}
          strokeWidth={2.5}
        />
        <path
          d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z"
          stroke={content !== "Profile" ? "currentColor" : `${colorFill}`}
          strokeWidth={2.5}
        />
      </svg>
    </Box>
  );
};
export const Menu = ({ handleClick }) => {
  const color = useColorModeValue("#B8B8B8", "#4D4D4D");
  const hoverColor = useColorModeValue("#000000", "#F3F5F7");
  return (
    <Box
      _hover={{
        svg: { color: `${hoverColor}` },
      }}
      _active={{
        transform: "scale(0.9)",
        transition: "transform 0.11s ease-in-out",
      }}
      style={{
        color: `${color}`,
      }}
      onClick={handleClick}
    >
      <svg
        aria-label="More"
        role="img"
        viewBox="0 0 24 24"
        style={{
          fill: `${hoverColor}`,
          height: 24,
          width: 24,
        }}
      >
        <title>{"More"}</title>
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

// Comment
export const VerticalLine = ({ h }) => {
  const color = useColorModeValue("#e5e5e5", "#333638");
  return (
    <Box color={color} m={"12px 0 0 6px"}>
      <svg
        className="xv787a8"
        aria-hidden="true"
        fill="none"
        height={h}
        viewBox={`0 0 21 ${h}`}
        width={21}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`M18 1L18 ${h}`}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </Box>
  );
};
export const AttachMedia = () => {
  const color = useColorModeValue("#999999", "#777777");
  return (
    <Box color={color}>
      <svg
        aria-label="Attach media"
        role="img"
        viewBox="0 0 24 24"
        style={{
          fill: "currentColor",
          height: 20,
          width: 20,
        }}
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
  const color = useColorModeValue("#999999", "#777777");
  return (
    <Box color={color}>
      <svg
        aria-label="Add a tag"
        role="img"
        viewBox="0 0 24 24"
        style={{
          fill: "currentColor",
          height: 20,
          width: 20,
        }}
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
  const color = useColorModeValue("#999999", "#777777");
  return (
    <Box color={color}>
      <svg
        aria-label="Add a poll"
        role="img"
        viewBox="0 0 24 24"
        style={{
          fill: "currentColor",
          height: 20,
          width: 20,
        }}
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
  const color = useColorModeValue("#000000", "#F3F5F7");
  return (
    <svg
      aria-label="Unlike"
      role="img"
      viewBox="0 0 20 20"
      style={{
        fill: "transparent",
        eight: 20,
        width: 20,
      }}
    >
      <title>{"Unlike"}</title>
      <path
        stroke={color}
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
      style={{
        fill: "#FF3040",
        height: 20,
        width: 20,
      }}
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
  const color = useColorModeValue("#000000", "#F3F5F7");
  return (
    <svg
      aria-label="Reply"
      role="img"
      viewBox="0 0 24 24"
      style={{
        fill: "transparent",
        height: 20,
        width: 20,
      }}
    >
      <title>{"Reply"}</title>
      <path
        stroke={color}
        strokeWidth={1.7}
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
      />
    </svg>
  );
};
export const Repost = () => {
  const color = useColorModeValue("#000000", "#F3F5F7");
  return (
    <svg
      aria-label="Repost"
      role="img"
      viewBox="0 0 24 24"
      style={{
        fill: `${color}`,
        height: 20,
        width: 20,
      }}
    >
      <title>{"Repost"}</title>
      <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z" />
    </svg>
  );
};
export const Reposted = () => {
  const color = useColorModeValue("#000000", "#F3F5F7");
  return (
    <svg
      aria-label="Reposten"
      role="img"
      viewBox="0 0 24 24"
      className="x1lliihq xffa9am x1jwls1v x1n2onr6 x17fnjtu x1yxark7"
      style={{
        fill: `${color}`,
        height: 20,
        width: 20,
      }}
    >
      <title>{"Reposten"}</title>
      <path d="M16.00092,6.00098c.13013,0,.2597-.02649,.3819-.07703,.24493-.10132,.43982-.29626,.54114-.54114,.10095-.24426,.10095-.51929,0-.76367-.0509-.12305-.12451-.23401-.21729-.32642L13.20697,.79297c-.39062-.39062-1.02344-.39062-1.41406,0s-.39062,1.02344,0,1.41406l1.79395,1.79395h-5.31543c-2.90625,0-5.27148,2.36426-5.27148,5.27051v4.22852c0,.55273,.44727,1,1,1s1-.44727,1-1v-4.22852c0-1.80371,1.46777-3.27051,3.27148-3.27051h7.72949Zm3.99707,3.49609c-.55273,0-1,.44727-1,1v4.22754c0,1.80371-1.4668,3.27051-3.27051,3.27051H7.99701c-.13007,0-.2597,.02649-.38184,.0769-.24487,.10132-.43982,.29626-.54114,.54126-.10107,.24426-.10107,.51953,0,.76379,.05084,.12292,.12439,.23389,.21716,.32629l3.50171,3.50366c.19531,.19531,.45117,.29297,.70703,.29297s.51172-.09766,.70703-.29297c.39062-.39062,.39062-1.02344,0-1.41406l-1.79688-1.79785h5.31738c2.90625,0,5.27051-2.36426,5.27051-5.27051v-4.22754c0-.55273-.44727-1-1-1Zm-5.20508-.51074l-3.90527,3.90625-1.68066-1.68066c-.39062-.39062-1.02344-.39062-1.41406,0s-.39062,1.02344,0,1.41406l2.3877,2.3877c.1875,.1875,.44141,.29297,.70703,.29297s.51953-.10547,.70703-.29297l4.6123-4.61328c.39062-.39062,.39062-1.02344,0-1.41406s-1.02344-.39062-1.41406,0Z" />
    </svg>
  );
};
export const Share = () => {
  const color = useColorModeValue("#000000", "#F3F5F7");
  return (
    <svg
      aria-label="Share"
      role="img"
      viewBox="0 0 24 24"
      style={{
        fill: "currentColor",
        height: 20,
        width: 20,
      }}
    >
      <title>{"Share"}</title>
      <line
        style={{
          fill: "transparent",
          stroke: `${color}`,
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
          stroke: `${color}`,
          strokeWidth: 1.7,
        }}
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
      />
    </svg>
  );
};
export const Follow = () => {
  const color = useColorModeValue("#000000", "#F3F5F7");
  return (
    <svg
      aria-label="Follow"
      role="img"
      viewBox="0 0 10 9"
      style={{
        fill: `${color}`,
        height: 10,
        width: 10,
      }}
    >
      <title>{"Follow"}</title>
      <path d="M4.99512 8.66895C4.64355 8.66895 4.35059 8.36621 4.35059 8.03418V5.12891H1.50391C1.17188 5.12891 0.864258 4.83594 0.864258 4.47949C0.864258 4.12793 1.17188 3.83008 1.50391 3.83008H4.35059V0.924805C4.35059 0.583008 4.64355 0.290039 4.99512 0.290039C5.35156 0.290039 5.64453 0.583008 5.64453 0.924805V3.83008H8.49121C8.83301 3.83008 9.13086 4.12793 9.13086 4.47949C9.13086 4.83594 8.83301 5.12891 8.49121 5.12891H5.64453V8.03418C5.64453 8.36621 5.35156 8.66895 4.99512 8.66895Z" />
    </svg>
  );
};
export const More = () => {
  const color = useColorModeValue("#000000", "#F3F5F7");
  return (
    <svg
      aria-label="More"
      role="img"
      viewBox="0 0 24 24"
      style={{
        fill: `${color}`,
        height: 20,
        width: 20,
      }}
    >
      <title>{"More"}</title>
      <circle cx={12} cy={12} r={1.5} />
      <circle cx={6} cy={12} r={1.5} />
      <circle cx={18} cy={12} r={1.5} />
    </svg>
  );
};

// Carousel
export const Continue = () => {
  const color = useColorModeValue("#999999", "#777777");
  return (
    <svg
      aria-label="Continue"
      role="img"
      viewBox="0 0 24 24"
      style={{
        fill: `${color}`,
        height: 16,
        width: 16,
      }}
    >
      <title>{"Continue"}</title>
      <line
        style={{
          fill: `${color}`,
          stroke: `${color}`,
        }}
        x1={2.909}
        x2={22.001}
        y1={12.004}
        y2={12.004}
      />
      <polyline
        style={{
          fill: "transparent",
          stroke: `${color}`,
        }}
        points="9.276 4.726 2.001 12.004 9.276 19.274"
      />
    </svg>
  );
};
