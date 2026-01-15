type IconType = {
  iconName: string;
  width: number;
  height: number;
  fill?: string;
  classList?: string;
};
const Icon = ({
  iconName,
  width,
  height,
  fill = "none",
  classList,
}: IconType) => {
  const IconReturn = (name: string) => {
    switch (name) {
      case "icon-reset":
        return (
          <svg
            className={classList}
            width={width}
            height={height}
            viewBox="0 0 80 80"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="white"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.12))"
            />
            <path
              d="M34 26L26 34L34 42"
              stroke="#9CA3AF"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26 34H46C52 34 56 38 56 44C56 50 52 54 46 54H38"
              stroke="#9CA3AF"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        );
        break;
      case "icon-star":
        return (
          <svg
            className={classList}
            width={width}
            height={height}
            viewBox="0 0 80 80"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="white"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.12))"
            />

            <path
              d="M40 22L45.5 34.5L59 35.5L49 44.5L52 58L40 51L28 58L31 44.5L21 35.5L34.5 34.5L40 22Z"
              fill="#1E90FF"
            />
          </svg>
        );
        break;
      case "icon-hear":
        return (
          <svg
            className={classList}
            width={width}
            height={height}
            viewBox="0 0 80 80"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heartGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#00E676" />
                <stop offset="100%" stop-color="#FFD54F" />
              </linearGradient>
            </defs>

            <circle
              cx="40"
              cy="40"
              r="36"
              fill="white"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.12))"
            />

            <path
              d="M40 56C40 56 24 46 24 34C24 28 28 24 34 24C37 24 39 26 40 28C41 26 43 24 46 24C52 24 56 28 56 34C56 46 40 56 40 56Z"
              fill="url(#heartGradient)"
            />
          </svg>
        );
        break;
      case "icon-send":
        return (
          <svg
            className={classList}
            width={width}
            height={height}
            viewBox="0 0 80 80"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="white"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.12))"
            />

            <path d="M22 38L58 22L42 58L38 42L22 38Z" fill="#1E90FF" />
          </svg>
        );
        break;
      case "icon-close":
        return (
          <svg
            className={classList}
            width={width}
            height={height}
            viewBox="0 0 80 80"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="white"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.12))"
            />

            <path
              d="M28 28L52 52"
              stroke="#FF2D87"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M52 28L28 52"
              stroke="#FF2D87"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        );
        break;
      default:
        return (
          <svg
            className={classList}
            width={width}
            height={height}
            viewBox="0 0 80 80"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="white"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.12))"
            />

            <path d="M22 38L58 22L42 58L38 42L22 38Z" fill="#1E90FF" />
          </svg>
        );
        break;
    }
  };

  return IconReturn(iconName);
};

export default Icon;
