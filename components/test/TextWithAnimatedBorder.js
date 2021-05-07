/**
 * TextWithAnimatedBorder
 */

const TextWithAnimatedBorder = () => (
  <div>
    <span className="text-container">
      <span className="text">This is a text with a small animated border that grows from the middle of the box.</span>
    </span>
    <style jsx>
      {`
        .text-container {
          display: flex;
        }

        .text {
          color: #fafafa;
        }

        .text::after {
          content: '';
          width: 0;
          margin: 0 auto; // This is centered. This margin can be removed and it will start from the left.
          display: block;
          background-color: #fafafa;
          transition: width 0.6s;
          padding-top: 1px;
        }

        .text:hover:after {
          width: 100%;
        }
      `}
    </style>
  </div>
)

/**
 * Exports
 */

export default TextWithAnimatedBorder
