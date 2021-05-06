/**
 * BoxWithScalingAnimatedBorders
 */

const BoxWithScalingAnimatedBorders = () => (
  <div>
    <h2 className="font-bold text-lg text-white">This is a box with animated borders.</h2>
    <div className="item">
      <div className="overlay" />
      <img className="item-img" alt="Kitten" src="https://placekitten.com/200/200" />
    </div>
    <style jsx>
      {`
        .overlay {
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          transition: all;
        }

        .overlay::before {
          content: '';
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          border-top: 2px solid #fafafa;
          border-bottom: 2px solid #fafafa;
          transform: scale(0, 1);
          transition: all 0.3s;
          box-sizing: border-box;
        }

        .overlay::after {
          content: '';
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          border-left: 2px solid #fafafa;
          border-right: 2px solid #fafafa;
          transform: scale(1, 0);
          transition: all 0.3s;
          box-sizing: border-box;
        }

        .item {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 400px;
          height: 400px;
        }

        .item::before {
          border: 2px solid #fafafa;
        }

        .item img {
          width: 300px;
          transition: width 0.3s;
        }

        .item:hover > .overlay::before {
          opacity: 1;
          transform: scale(1);
        }

        .item:hover > .overlay::after {
          opacity: 1;
          transform: scale(1);
        }

        .item:hover > .item-img {
          width: 250px;
        }
      `}
    </style>
  </div>
)

/**
 * Exports
 */

export default BoxWithScalingAnimatedBorders
